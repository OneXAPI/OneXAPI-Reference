import sys, json

group_list = ["OneXAPI","Client","Spot","Futures"]

apiExchangeInfo = dict()

def error(msg) :
    print("[Error] " + msg)
    sys.exit()

for group in group_list :
    with open("tmp/" + group + ".js", "r") as f:
        apiExchangeInfo[group] = dict()
        apiName = ""
        paramCnt = 0
        for line in f.readlines():
            line = line.strip()
            if "@apiName " in line:
                apiName = line.split(" ")[-1]
                paramCnt = 0
                apiExchangeInfo[group][apiName] = dict()
                apiExchangeInfo[group][apiName]["exchanges"] = dict()
                apiExchangeInfo[group][apiName]["options"] = []
            elif "@onexCategory" in line:
                if not apiName:
                    error("Cannot find apiName!")
                apiExchangeInfo[group][apiName]["isCategory"] = True
            elif "@onexInfo " in line:
                if not apiName:
                    error("Cannot find apiName!")
                apiExchangeInfo[group][apiName]["info"] = line.split("@onexInfo ")[-1]
            elif "@onexWarn " in line:
                if not apiName:
                    error("Cannot find apiName!")
                apiExchangeInfo[group][apiName]["warn"] = line.split("@onexWarn ")[-1]
            elif "@onexDanger " in line:
                if not apiName:
                    error("Cannot find apiName!")
                apiExchangeInfo[group][apiName]["danger"] = line.split("@onexDanger ")[-1]
            elif "@apiParam " in line:
                paramCnt += 1
            elif "@onexParamExchanges " in line:
                if not apiName or paramCnt < 1:
                    error("Cannot find apiName or params!")
                exchanges = line.split("@onexParamExchanges")[-1].split("{")
                for exchangeOption in exchanges:
                    if "}" in exchangeOption:
                        exchangeOption = exchangeOption.replace("}","")
                        exchange = exchangeOption.split(" ")[0]
                        option = exchangeOption.split(" ")[1].lower()
                        if option == "o":
                            apiExchangeInfo[group][apiName]["exchanges"][exchange.capitalize()] = "supported"
                        elif option == "x":
                            apiExchangeInfo[group][apiName]["exchanges"][exchange.capitalize()] = "unsupported"
                        else:
                            error("Not defined option : " + option + "    in api : " + apiName)

                if len(apiExchangeInfo[group][apiName]["exchanges"].keys()) == 0 :
                    error("Exchanges Length is 0, apiName : " + apiName)
            elif "@onexParamOption " in line:
                apiExchangeInfo[group][apiName]["options"].append([])
                for option in line.split("@onexParamOption")[-1].split("{"):
                    not_empty_check = option.replace(" ","")
                    if not_empty_check:
                        option = option.split("}")[0]
                        description = option[2:]
                        option = option[0:1].upper()
                        if option == "M":
                            apiExchangeInfo[group][apiName]["options"][-1].append(["Mandatory"])
                        elif option == "O":
                            apiExchangeInfo[group][apiName]["options"][-1].append(["Optional"])
                        elif option == "I":
                            apiExchangeInfo[group][apiName]["options"][-1].append(["Ignored"])
                        elif option == "F":
                            apiExchangeInfo[group][apiName]["options"][-1].append(["Forbidden"])
                        else:
                            error("Not allowed option : " + option + "    api : " + apiName)
                        if description:
                            apiExchangeInfo[group][apiName]["options"][-1][-1].append(description)
                        
                if len(apiExchangeInfo[group][apiName]["options"][-1]) != len(apiExchangeInfo[group][apiName]["exchanges"].keys()):
                    error("Option size is wrong : " + apiName)
            elif "@apiExample {python}" in line:
                if len(apiExchangeInfo[group][apiName]["options"]) != paramCnt:
                    error("Param count of option is wrong : " + apiName)
            elif "@onexRest" in line:
                apiExchangeInfo[group][apiName]["isRest"] = True
            elif "@onexWebsocket" in line:
                apiExchangeInfo[group][apiName]["isWebsocket"] = True

# print(apiExchangeInfo)

with open("docs/api_data.js", "r+") as file:
    data = file.read()
    data = data.replace("__EMPTY__","")

    jsondata = json.loads(data.replace("define(","").replace(");",""))

    for api in jsondata["api"] :
        ### Key Update ###
        if "parameter" in api and "Parameter" in api["parameter"]["fields"]:
            api["parameter"]["fields"]["Parameter : "] = api["parameter"]["fields"]["Parameter"]
            del api["parameter"]["fields"]["Parameter"]
        if "success" in api and "Success 200" in api["success"]["fields"]:
            api["success"]["fields"]["Response : "] = api["success"]["fields"]["Success 200"]
            del api["success"]["fields"]["Success 200"]

        ### Category Marking ###
        if "isCategory" in apiExchangeInfo[api["group"]][api["name"]].keys():
            api["isCategory"] = apiExchangeInfo[api["group"]][api["name"]]["isCategory"]

        ### Rest&Websocket Marking ###
        if "isRest" in apiExchangeInfo[api["group"]][api["name"]].keys():
            api["isRest"] = apiExchangeInfo[api["group"]][api["name"]]["isRest"]
        else:
            api["isRest"] = False
        if "isWebsocket" in apiExchangeInfo[api["group"]][api["name"]].keys():
            api["isWebsocket"] = apiExchangeInfo[api["group"]][api["name"]]["isWebsocket"]
        else:
            api["isWebsocket"] = False

        ### Info&Warn&Danger Update ###
        if "info" in apiExchangeInfo[api["group"]][api["name"]].keys():
            api["info"] = apiExchangeInfo[api["group"]][api["name"]]["info"]
        if "warn" in apiExchangeInfo[api["group"]][api["name"]].keys():
            api["warn"] = apiExchangeInfo[api["group"]][api["name"]]["warn"]
        if "danger" in apiExchangeInfo[api["group"]][api["name"]].keys():
            api["danger"] = apiExchangeInfo[api["group"]][api["name"]]["danger"]

        ### Exchange Append ###
        api["exchanges"] = dict()
        for exchange in apiExchangeInfo[api["group"]][api["name"]]["exchanges"].keys():
            api["exchanges"][exchange] = apiExchangeInfo[api["group"]][api["name"]]["exchanges"][exchange]
        
        ### Exchange Options Append ###
        for it in range(len(apiExchangeInfo[api["group"]][api["name"]]["options"])):
            api["parameter"]["fields"]["Parameter : "][it]["options"] = apiExchangeInfo[api["group"]][api["name"]]["options"][it]

        ### Params Fields Italic&Space ###
        if "parameter" in api:
            items = api["parameter"]["fields"]["Parameter : "]
            if "success" in api:
                items = items + api["success"]["fields"]["Response : "]
            for item in items:
                if item["optional"] is True:
                    item["optional"] = False
                    fieldSplitted = item["field"].split(".")
                    item["field"] = ""
                    for i in range(len(fieldSplitted) - 1):
                        item["field"] += fieldSplitted[i] + "."
                    item["field"] += "<i>" + fieldSplitted[-1] + "</i>"
                item["field"] = item["field"].replace("__", " ")

        ### apidoc parsing error correction ###
        if "examples" in api:
            for item in api["examples"]:
                item["content"] = item["content"].replace(")__;",");")


    file.seek(0)
    file.write("define(" + json.dumps(jsondata, indent=2) + ");")
    file.truncate()