import sys, json

group_list = ["OneXAPI","Spot","Futures"]

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
                    option = option.replace(" ","").split("}")[0]
                    if option:
                        option = option.upper()
                        if option not in ['M','O','I','F']:
                            error("Not allowed option : " + option + "    api : " + apiName)
                        apiExchangeInfo[group][apiName]["options"][-1].append(option)
                if len(apiExchangeInfo[group][apiName]["options"][-1]) != len(apiExchangeInfo[group][apiName]["exchanges"].keys()):
                    error("Option size is wrong : " + apiName)
            elif "@apiExample {python}" in line:
                if len(apiExchangeInfo[group][apiName]["options"]) != paramCnt:
                    error("Param count of option is wrong : " + apiName)

# print(apiExchangeInfo)

with open("docs/api_data.js", "r+") as file:
    data = file.read()
    data = data.replace("__EMPTY__","")

    jsondata = json.loads(data.replace("define(","").replace(");",""))

    for api in jsondata["api"] :
        ### Key Update ###
        if "Parameter" in api["parameter"]["fields"]:
            api["parameter"]["fields"]["Parameter : "] = api["parameter"]["fields"]["Parameter"]
            del api["parameter"]["fields"]["Parameter"]
        if "Success 200" in api["success"]["fields"]:
            api["success"]["fields"]["Response : "] = api["success"]["fields"]["Success 200"]
            del api["success"]["fields"]["Success 200"]

        ### Exchange Append ###
        api["exchanges"] = dict()
        for exchange in apiExchangeInfo[api["group"]][api["name"]]["exchanges"].keys():
            api["exchanges"][exchange] = apiExchangeInfo[api["group"]][api["name"]]["exchanges"][exchange]
        
        ### Exchange Options Append ###
        for it in range(len(apiExchangeInfo[api["group"]][api["name"]]["options"])):
            api["parameter"]["fields"]["Parameter : "][it]["options"] = apiExchangeInfo[api["group"]][api["name"]]["options"][it]

        ### Params Fiels Italic&Space ###
        for item in api["parameter"]["fields"]["Parameter : "] + api["success"]["fields"]["Response : "]:
            if item["optional"] is True:
                item["optional"] = False
                item["field"] = "<i>" + item["field"] + "</i>"
            item["field"] = item["field"].replace("__", " ")

        ### apidoc parsing error correction ###
        for item in api["examples"]:
            item["content"] = item["content"].replace(")__;",");")


    file.seek(0)
    file.write("define(" + json.dumps(jsondata, indent=2) + ");")
    file.truncate()