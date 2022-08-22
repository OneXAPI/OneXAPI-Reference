import sys, json

group_list = ["OneXAPI","Spot","Futures"]

apiExchangeInfo = dict()

def error(msg) :
    print("[Error] " + msg)
    sys.exit()

for group in group_list :
    with open("src/" + group + ".js", "r") as f:
        apiExchangeInfo[group] = dict()
        apiName = ""
        paramCnt = 0
        for line in f.readlines():
            line = line.strip()
            if "@apiName " in line:
                apiName = line.split(" ")[-1]
                paramCnt = 0
                apiExchangeInfo[group][apiName] = dict()
                apiExchangeInfo[group][apiName]["exchanges"] = []
                apiExchangeInfo[group][apiName]["options"] = []
            elif "@apiParam " in line:
                paramCnt += 1
            elif "@onexParamExchanges " in line:
                if not apiName or paramCnt < 1:
                    error("Cannot find apiName or params!")
                exchanges = line.split("@onexParamExchanges")[-1].split(" ")
                for exchange in exchanges:
                    if exchange:
                        apiExchangeInfo[group][apiName]["exchanges"].append(exchange.lower())

                if len(apiExchangeInfo[group][apiName]["exchanges"]) == 0 :
                    error("Exchanges Length is 0, apiName : " + apiName)
            elif "@onexParamRequired " in line:
                apiExchangeInfo[group][apiName]["options"].append([])
                for option in line.split("@onexParamRequired")[-1].split(" "):
                    if option:
                        option = option.lower()
                        if option not in ['m','o','i','f']:
                            error("Not allowed option : " + option + "    api : " + apiName)
                        apiExchangeInfo[group][apiName]["options"][-1].append(option)
                if len(apiExchangeInfo[group][apiName]["options"][-1]) != len(apiExchangeInfo[group][apiName]["exchanges"]):
                    error("Option size is wrong : " + apiName)
            elif "@apiExample {python}" in line:
                if len(apiExchangeInfo[group][apiName]["options"]) != paramCnt:
                    error("Param count of option is wrong : " + apiName)
                        
# print(apiExchangeInfo)

with open("out/api_data.js", "r+") as file:
    data = file.read()
    data = data.replace("__EMPTY__","")

    jsondata = json.loads(data.replace("define(","").replace(");",""))

    for api in jsondata["api"] :
        ### Key Update ###
        api["parameter"]["fields"]["Parameter : "] = api["parameter"]["fields"]["Parameter"]
        del api["parameter"]["fields"]["Parameter"]
        api["success"]["fields"]["Response : "] = api["success"]["fields"]["Success 200"]
        del api["success"]["fields"]["Success 200"]

        api["exchanges"] = []
        for exchange in apiExchangeInfo[api["group"]][api["name"]]["exchanges"]:
            api["exchanges"].append(exchange)
        
        for it in range(len(apiExchangeInfo[api["group"]][api["name"]]["options"])):
            api["parameter"]["fields"]["Parameter : "][it]["options"] = apiExchangeInfo[api["group"]][api["name"]]["options"][it]

    file.seek(0)
    file.write("define(" + json.dumps(jsondata, indent=2) + ");")
    file.truncate()