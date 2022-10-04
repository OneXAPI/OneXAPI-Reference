define({
  "api": [
    {
      "group": "Futures", 
      "name": "General", 
      "title": "General", 
      "url": "/Futures", 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "exchanges": {}, 
      "isCategory": true, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "Market", 
      "title": "Market", 
      "url": "/Futures", 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "exchanges": {}, 
      "isCategory": true, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "Trade", 
      "title": "Trade", 
      "url": "/Futures", 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "exchanges": {}, 
      "isCategory": true, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "Wallet", 
      "title": "Wallet", 
      "url": "/Futures", 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "exchanges": {}, 
      "isCategory": true, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "changeLeverage", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "<p>If this field is empty, all symbols have the same leverage</p>", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "<p>If this field is empty, all symbols have the same leverage</p>", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "<p>If this field is empty, all symbols have the same leverage</p>", 
              "optional": false, 
              "field": "expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "<p>If this field is empty, all symbols have the same leverage</p>", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "leverage"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTCUSDT\",\n        \"leverage\":10\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "changeLeverage", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "leverage", 
              "type": "Uint", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"leverage\":10\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"PERP\",\n    \"leverage\":10\n}\n\nprint(client.changeLeverage(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"leverage\":10\n        }\n    )\";\n\n    std::cout << client.changeLeverage(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "changeMarginType", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "cross", 
                "isolated"
              ], 
              "field": "marginType", 
              "type": "String"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTCUSDT\",\n        \"marginType\":\"isolated\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "changeMarginType", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "cross", 
                "isolated"
              ], 
              "field": "marginType", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"marginType\":\"isolated\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "danger": "Binance : Returns an error if the requested marginType is the same as the existing marginType.", 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"PERP\",\n    \"marginType\":\"isolated\"\n}\n\nprint(client.changeMarginType(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"marginType\":\"isolated\"\n        }\n    )\";\n\n    std::cout << client.changeMarginType(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "fetchBalance", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "rest", 
                "websocket"
              ], 
              "field": "fetchType", 
              "type": "String"
            }, 
            {
              "type": "Object", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "balance"
            }, 
            {
              "type": "Object", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "balance.<i>currency name</i>"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "<p>wallet balance including isolated balance</p>", 
              "optional": false, 
              "field": "balance.currency.balance"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "balance.currency.crossWalletBalance"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "balance.currency.availableBalance"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fetchType\":\"rest\",\n        \"balance\":{\n            \"BTC\":{\n                \"balance\":\"3.15437\",\n                \"crossWalletBalance\":\"1.1357\"\n            },\n            \"ETH\":{\n                \"balance\":\"124.8435\",\n                \"crossWalletBalance\":\"83.5831\"\n            }\n        }\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchBalance", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "<p>force to update using REST API</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "forceRestApi", 
              "type": "Bool", 
              "options": [
                [
                  "Ignored", 
                  "always true"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If not exist, return all currencies</p>", 
              "optional": false, 
              "field": "currencies", 
              "type": "StringArray", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>Whether to include assets with zero balance</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "zeroBalance", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"forceRestApi\":false,\n    \"currencies\":[\"BTC\", \"ETH\", \"XRP\", \"ADA\"]\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "warn": "During websocket is running, fetchBalance does not send rest API request. <br>If you want to force to send rest API, set forceRestApi parameter as true.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"currencies\":[\"BTC\", \"ETH\"]\n}\n\nprint(client.fetchBalance(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"forceRestApi\":false,\n            \"currencies\":[\"BTC\", \"ETH\"]\n        }\n    )\";\n\n    std::cout << client.fetchBalance(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "fetchCandleHistory", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "<p>Ascending order according to timestamp</p>", 
              "optional": false, 
              "field": "candles"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[s]</p>", 
              "optional": false, 
              "field": "candles.timestamp"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "candles.openPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "candles.closePrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "candles.highPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "candles.lowPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "candles.baseVolume"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "candles.quoteVolume"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":31,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"candles\":[\n            {\n                \"timestamp\":1656042060,\n                \"openPrice\":\"21035.12\",\n                \"closePrice\":\"21086.83\",\n                \"highPrice\":\"21132.28\",\n                \"lowPrice\":\"21028.83\",\n                \"baseVolume\":\"0.83648\",\n                \"quoteVolume\":\"1087.424\"\n            },\n            {\n                \"timestamp\":1656042120,\n                \"openPrice\":\"21086.83\",\n                \"closePrice\":\"21098.19\",\n                \"highPrice\":\"21099.89\",\n                \"lowPrice\":\"21073.14\",\n                \"baseVolume\":\"0.58492\",\n                \"quoteVolume\":\"760.396\"\n            },\n            ...\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchCandleHistory", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>&quot;PERP&quot; or date([YYMMDD] format such as &quot;220930&quot;, &quot;221015&quot;) are allowed</p>", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>This param depends on the exchange. Please check available intervals using getCandleIntervalCandidates</p>", 
              "optional": false, 
              "field": "interval", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[s]</p>", 
              "optional": false, 
              "field": "startTime", 
              "type": "Uint", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[s]</p>", 
              "optional": false, 
              "defaultValue": "now", 
              "field": "endTime", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]<br>frequent api request may exceeds rate limit, therefore apiReqInterval decides how long time to sleep between each api request</p>", 
              "optional": false, 
              "defaultValue": "200", 
              "field": "fetchInterval", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"PERP\",\n    \"interval\":\"1min\",\n    \"startTime\":1656042045,\n    \"endTime\":1656063182,\n    \"fetchInterval\":200\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "warn": "When enormous amount of data is requested, fetchCandleHistory takes a long time to execute.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"PERP\",\n    \"interval\":\"3min\",\n    \"startTime\":1659189600,\n    \"fetchInterval\":100\n}\n\nprint(client.fetchCandleHistory(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"PERP\",\n            \"interval\":\"3min\",\n            \"startTime\":1659189600,\n            \"fetchInterval\":100\n        }\n    )\";\n\n    std::cout << client.fetchCandleHistory(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "fetchFundingFeeIncomeHistory", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "incomes"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "incomes.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "incomes.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "incomes.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "incomes.symbol"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "incomes.income"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "incomes.incomeCurrency"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "incomes.timestamp"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"incomes\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\",\n                \"income\":\"-31.13586\",\n                \"incomeCurrency\":\"USDT\",\n                \"timestamp\":1656044000000\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchFundingFeeIncomeHistory", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "startTime", 
              "type": "Uint", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "defaultValue": "now", 
              "field": "endTime", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"startTime\":1656042045125,\n    \"endTime\":1656063182432\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"startTime\":1656042045125,\n    \"endTime\":1656063182432\n}\n\nprint(client.fetchFundingFeeIncomeHistory(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"startTime\":1656042045125,\n            \"endTime\":1656063182432\n        }\n    )\";\n\n    std::cout << client.fetchFundingFeeIncomeHistory(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "fetchLeverage", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "rest", 
                "websocket"
              ], 
              "field": "fetchType", 
              "type": "String"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "leverages"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "<p>If this field is empty, all symbols have the same leverage</p>", 
              "optional": false, 
              "field": "leverages.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "<p>If this field is empty, all symbols have the same leverage</p>", 
              "optional": false, 
              "field": "leverages.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "<p>If this field is empty, all symbols have the same leverage</p>", 
              "optional": false, 
              "field": "leverages.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "<p>If this field is empty, all symbols have the same leverage</p>", 
              "optional": false, 
              "field": "leverages.symbol"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "leverages.leverage"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fetchType\":\"rest\",\n        \"leverages\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\",\n                \"leverage\":10\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchLeverage", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "forceRestApi", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchLeverage(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Bybit::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchLeverage(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "fetchMarginType", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "rest", 
                "websocket"
              ], 
              "field": "fetchType", 
              "type": "String"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "marginTypes"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "marginTypes.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "marginTypes.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "marginTypes.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "marginTypes.symbol"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "cross", 
                "isolated"
              ], 
              "field": "marginTypes.marginType", 
              "type": "String"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fetchType\":\"websocket\",\n        \"marginTypes\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\",\n                \"marginType\":\"cross\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchMarginType", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "forceRestApi", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"PERP\"\n}\n\nprint(client.fetchMarginType(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Bybit::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchMarginType(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "fetchMarketInfo", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "rest", 
                "websocket"
              ], 
              "field": "fetchType", 
              "type": "String"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "markPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fundingRate"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[s]</p>", 
              "optional": false, 
              "field": "nextFundingTime"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fetchType\":\"rest\",\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTCUSDT\",\n        \"markPrice\":\"19358.15\",\n        \"fundingRate\":\"0.0025\",\n        \"nextFundingTime\":1661406463\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchMarketInfo", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>&quot;PERP&quot; or date([YYMMDD] format such as &quot;220930&quot;, &quot;221015&quot;) are allowed</p>", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "forceRestApi", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "warn": "During marketInfo websocket is running, fetchMarketInfo does not send rest API request.<br>If you want to force to send rest API, set forceRestApi parameter as true.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchMarketInfo(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchMarketInfo(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "fetchMarkets", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "markets"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "markets.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "markets.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "markets.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "markets.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"markets\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\"\n            },\n            {\n                \"baseCurrency\":\"ETH\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"ETHUSDT\"\n            },\n            {\n                \"baseCurrency\":\"XRP\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"XRPUSDT\"\n            },\n            {\n                \"baseCurrency\":\"ADA\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"ADAUSDT\"\n            },\n            ...\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchMarkets", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>&quot;PERP&quot; or date([YYMMDD] format such as &quot;220930&quot;, &quot;221015&quot;) are allowed</p>", 
              "optional": false, 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"quoteCurrency\":\"USDT\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchMarkets(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchMarkets(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "fetchOpenOrders", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.symbol"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.orderId"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "buy", 
                "sell"
              ], 
              "field": "openOrders.side", 
              "type": "String"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "long", 
                "short"
              ], 
              "field": "openOrders.positionSide", 
              "type": "String"
            }, 
            {
              "type": "Bool", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.reduceOnly"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.originalAmount"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.filledAmount"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.remainingAmount"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.originalPrice"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "openOrders.created"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":2,\n        \"openOrders\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\",\n                \"orderId\":\"38463215\",\n                \"side\":\"buy\",\n                \"positionSide\":\"long\",\n                \"reduceOnly\":false,\n                \"originalAmount\":\"1.5984\",\n                \"filledAmount\":\"0.3686\",\n                \"remainingAmount\":\"1.2298\",\n                \"originalPrice\":\"22135.35\",\n                \"created\":1656044045\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchOpenOrders", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "buy", 
                "sell"
              ], 
              "field": "side", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"side\":\"buy\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchOpenOrders(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchOpenOrders(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "fetchOrderInfo", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderId"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "clientOrderId"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "buy", 
                "sell"
              ], 
              "field": "side", 
              "type": "String"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "long", 
                "short"
              ], 
              "field": "positionSide", 
              "type": "String"
            }, 
            {
              "type": "Bool", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "reduceOnly"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "originalAmount"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "filledAmount"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "remainingAmount"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "originalPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "avgFillPrice"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "created"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "feeCurrency"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "feeAmount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "open", 
                "filled", 
                "cancelled"
              ], 
              "field": "status", 
              "type": "String"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fills"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fills.orderId"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fills.price"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fills.amount"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "fills.timestamp"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":2,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"side\":\"buy\",\n        \"positionSide\":\"long\",\n        \"reduceOnly\":false,\n        \"originalAmount\":\"1.5984\",\n        \"filledAmount\":\"0.3686\",\n        \"remainingAmount\":\"1.2298\",\n        \"originalPrice\":\"22135.35\",\n        \"avgFillPrice\":\"22135.28\",\n        \"created\":1656044045\n        \"feeCurrency\":\"BTC\",\n        \"feeAmount\":\"0.00027645\",\n        \"status\":\"open\",\n        \"fills\":[\n            {\n                \"orderId\":\"38435724\",\n                \"price\":\"22135.28\",\n                \"amount\":\"0.3686\",\n                \"timestamp\":1661327586135\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchOrderInfo", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "orderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>Client Order ID as assigned by the client</p>", 
              "optional": false, 
              "field": "clientOrderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"orderId\":\"38463215\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "warn": "If both <b><i>orderId</b></i> and <b><i>clientOrderId</b></i> are options, either of them must be sent.<br>If both are sent, <b><i>orderId</b></i> is used preferentially.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"221230\",\n    \"clientOrderId\":\"generatedId\"\n}\n\nprint(client.fetchOrderInfo(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"orderId\":\"13868943153\"\n        }\n    )\";\n\n    std::cout << client.fetchOrderInfo(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "fetchOrderbook", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "rest", 
                "websocket"
              ], 
              "field": "fetchType", 
              "type": "String"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "timestamp"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "<p>Descending order according to timestamp</p>", 
              "optional": false, 
              "field": "bids"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "bids.price"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "bids.size"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "<p>Ascending order according to price</p>", 
              "optional": false, 
              "field": "asks"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "asks.price"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "asks.size"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"220930\",\n        \"symbol\":\"BTCUSDT_220930\",\n        \"fetchType\":\"websocket\",\n        \"timestamp\":1656044045154,\n        \"bids\":[\n            {\n                \"price\":\"21458.15\",\n                \"size\":\"0.1548\"\n            },\n            {\n                \"price\":\"21458.08\",\n                \"size\":\"0.1578\"\n            },\n            {\n                \"price\":\"21458.03\",\n                \"size\":\"0.3518\"\n            },\n            ...\n        ],\n        \"asks\":[\n            {\n                \"price\":\"21458.16\", \n                \"size\":\"0.0232\"\n            },\n            {\n                \"price\":\"21458.32\",\n                \"size\":\"0.2158\"\n            },\n            {\n                \"price\":\"21458.36\",\n                \"size\":\"0.3183\"\n            },\n            ...\n        ]    \n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchOrderbook", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>&quot;PERP&quot; or date([YYMMDD] format such as &quot;220930&quot;, &quot;221015&quot;) are allowed</p>", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "forceRestApi", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"220930\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "danger": "Binance : Timestamp does not mean the server time; it means the time when the response arrived.", 
      "filename": "tmp/Futures.js", 
      "warn": "During orderbook websocket is running, fetchOrderbook does not send rest API request.<br>If you want to force to send rest API, set forceRestApi parameter as true.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"220930\"\n}\n\nprint(client.fetchOrderbook(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    )\";\n\n    std::cout << client.fetchOrderbook(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "fetchPositions", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "rest", 
                "websocket"
              ], 
              "field": "fetchType", 
              "type": "String"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "positions"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "positions.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "positions.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "positions.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "positions.symbol"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "positions.unrealizedProfit"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "positions.entryPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "<p>positive means long position, negative means short position</p>", 
              "optional": false, 
              "field": "positions.positionAmt"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "positions.leverage"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "cross", 
                "isolated"
              ], 
              "field": "positions.marginType", 
              "type": "String"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fetchType\":\"rest\",\n        \"positions\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\",\n                \"unrealizedProfit\":\"10.23854\",\n                \"entryPrice\":\"21752.12\",\n                \"positionAmt\":\"1.235\",\n                \"leverage\":10,\n                \"marginType\":\"isolated\",\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchPositions", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>force to update using REST API</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "forceRestApi", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>Whether to include positions with zero amount</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "zeroAmount", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchPositions(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchPositions(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "fetchTicker", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "rest", 
                "websocket"
              ], 
              "field": "fetchType", 
              "type": "String"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[s] open Time(UTC)</p>", 
              "optional": false, 
              "field": "openTime"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "<p>close Price(last Price)</p>", 
              "optional": false, 
              "field": "closePrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "<p>low Price(24h)</p>", 
              "optional": false, 
              "field": "lowPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "<p>high Price(24h)</p>", 
              "optional": false, 
              "field": "highPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "<p>baseCurrency Volume(24h)</p>", 
              "optional": false, 
              "field": "baseVolume"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "<p>quoteCurrency Volume(24h)</p>", 
              "optional": false, 
              "field": "quoteVolume"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"fetchType\":\"rest\",\n        \"openTime\":\"1656044045,\n        \"openPrice\":\"21004.0\",\n        \"closePrice\":\"21432.14\",\n        \"lowPrice\":\"20844.64\",\n        \"highPrice\":\"21662.5\",\n        \"baseVolume\":\"591235.5124\",\n        \"quoteVolume\":\"1529512525.23145\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchTicker", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>&quot;PERP&quot; or date([YYMMDD] format such as &quot;220930&quot;, &quot;221015&quot;) are allowed</p>", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "forceRestApi", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"PERP\",\n    \"forceRestApi\":true\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "warn": "During ticker websocket is running, fetchTicker does not send rest API request.<br>If you want to force to send rest API, set forceRestApi parameter as true.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"PERP\"\n}\n\nprint(client.fetchTicker(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\"\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    )\";\n\n    std::cout << client.fetchTicker(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "fetchTradingFee", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fees"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fees.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fees.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fees.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fees.symbol"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fees.makerFee"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fees.takerFee"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fees\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\",\n                \"makerFee\":\"0.0004\",\n                \"takerFee\":\"0.00075\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchTradingFee", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "danger": "Binance : Trading fee is a value before bnb discount", 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchTradingFee(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchTradingFee(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "getCandleIntervalCandidates", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "1min", 
                "3min", 
                "5min", 
                "15min", 
                "30min", 
                "1hour", 
                "2hour", 
                "4hour", 
                "6hour", 
                "8hour", 
                "12hour", 
                "1day", 
                "3day", 
                "1week", 
                "1month"
              ], 
              "field": "intervals", 
              "type": "StringArray"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"intervals\":[\n            \"15min\",\"1day\",\"1hour\",\"1min\",\"1month\",\"1week\",\"30min\",\"3min\",\"4hour\",\"5min\"\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getCandleIntervalCandidates", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.getCandleIntervalCandidates())\n# or\nprint(client.getCandleIntervalCandidates(\"\"))\n# or\nprint(client.getCandleIntervalCandidates({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.getCandleIntervalCandidates() << std::endl;\n    // or\n    std::cout << client.getCandleIntervalCandidates(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "getConfig", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "exchange"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "Spot", 
                "Futures"
              ], 
              "field": "instrument", 
              "type": "String"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "accessKey"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "secretKey"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "restEndpoint"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "publicWebsocketEndpoint"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "privateWebsocketEndpoint"
            }, 
            {
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "restRequestTimeout", 
              "type": "Uint"
            }, 
            {
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "websocketConnectTimeout", 
              "type": "Uint"
            }, 
            {
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "websocketIdleTimeout", 
              "type": "Uint"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"exchange\":\"Binance\",\n        \"instrument\":\"Futures\",\n        \"accessKey\":\"\",\n        \"secretKey\":\"\",\n        \"restEndpoint\":\"https://api.binance.com\",\n        \"publicWebsocketEndpoint\":\"wss://stream.binance.com:9443\",\n        \"privateWebsocketEndpoint\":\"wss://stream.binance.com:9443\",\n        \"restRequestTimeout\":5000,\n        \"websocketConnectTimeout\":5000,\n        \"websocketIdleTimeout\":5000\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getConfig", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.getConfig())\n# or\nprint(client.getConfig(\"\"))\n# or\nprint(client.getConfig({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.getConfig() << std::endl;\n    // or\n    std::cout << client.getConfig(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "getEndpointCandidates", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "StringArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "restEndpoints"
            }, 
            {
              "type": "StringArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "publicWebsocketEndpoints"
            }, 
            {
              "type": "StringArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "privateWebsocketEndpoints"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"restEndpoints\":[\n            \"https://api.binance.com\",\n            \"https://api1.binance.com\",\n            \"https://api2.binance.com\",\n            \"https://api3.binance.com\",\n        ],\n        \"publicWebsocketEndpoints\":[\n            \"wss://stream.binance.com:9443\"\n        ],\n        \"privateWebsocketEndpoints\":[\n            \"wss://stream.binance.com:9443\"\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getEndpointCandidates", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.getEndpointCandidates())\n# or\nprint(client.getEndpointCandidates(\"\"))\n# or\nprint(client.getEndpointCandidates({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.getEndpointCandidates() << std::endl;\n    // or\n    std::cout << client.getEndpointCandidates(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "getOrderRoundingRule", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "round", 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitBuyPrice", 
              "type": "String"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "round", 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitBuyBaseAmount", 
              "type": "String"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "round", 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitSellPrice", 
              "type": "String"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "round", 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitSellBaseAmount", 
              "type": "String"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "round", 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "marketBuyBaseAmount", 
              "type": "String"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "round", 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "marketSellBaseAmount", 
              "type": "String"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"limitBuyPrice\":\"ceil\",             \n        \"limitBuyBaseAmount\":\"floor\",\n        \"limitSellPrice\":\"ceil\",\n        \"limitSellBaseAmount\":\"floor\",\n        \"marketBuyBaseAmount\":\"round\",\n        \"marketSellBaseAmount\":\"round\",\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getOrderRoundingRule", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.getOrderRoundingRule())\n# or\nprint(client.getOrderRoundingRule(\"\"))\n# or\nprint(client.getOrderRoundingRule({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.getOrderRoundingRule() << std::endl;\n    // or\n    std::cout << client.getOrderRoundingRule(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "Returns marketInfo symbols being received on websocket", 
      "group": "Futures", 
      "name": "getSubscribingMarketInfo", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "marketInfo"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "marketInfo.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "marketInfo.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "marketInfo.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "marketInfo.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"marketInfo\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"PERP\",\n                \"symbol\": \"BTCUSDT\"\n            },\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"220930\",\n                \"symbol\": \"ETHUSDT_220930\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getSubscribingMarketInfo", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.getSubscribingMarketInfo())\n# or\nprint(client.getSubscribingMarketInfo(\"\"))\n# or\nprint(client.getSubscribingMarketInfo({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.getSubscribingMarketInfo() << std::endl;\n    // or\n    std::cout << client.getSubscribingMarketInfo(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "Returns orderbook symbols being received on websocket", 
      "group": "Futures", 
      "name": "getSubscribingOrderbooks", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderbooks"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderbooks.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderbooks.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderbooks.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderbooks.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"orderbooks\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"PERP\",\n                \"symbol\": \"BTCUSDT\"\n            },\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"220930\",\n                \"symbol\": \"ETHUSDT_220930\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getSubscribingOrderbooks", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.getSubscribingOrderbooks())\n# or\nprint(client.getSubscribingOrderbooks(\"\"))\n# or\nprint(client.getSubscribingOrderbooks({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.getSubscribingOrderbooks() << std::endl;\n    // or\n    std::cout << client.getSubscribingOrderbooks(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "Returns ticker symbols being received on websocket", 
      "group": "Futures", 
      "name": "getSubscribingTickers", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "tickers"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "tickers.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "tickers.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "tickers.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "tickers.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"tickers\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"PERP\",\n                \"symbol\": \"BTCUSDT\"\n            },\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"220930\",\n                \"symbol\": \"ETHUSDT_220930\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getSubscribingTickers", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.getSubscribingTickers())\n# or\nprint(client.getSubscribingTickers(\"\"))\n# or\nprint(client.getSubscribingTickers({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.getSubscribingTickers() << std::endl;\n    // or\n    std::cout << client.getSubscribingTickers(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "Check if API exists or not", 
      "group": "Futures", 
      "name": "has", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "Bool", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "<i>api name</i>"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"orderLimitBuy\":true\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "has", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "<p>if not exist, return all APIs</p>", 
              "optional": false, 
              "field": "api", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"api\":\"orderLimitBuy\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.has({}))\n# or\nprint(client.has(\"{}\"))\n# or\nprint(client.has({\"api\":\"orderLimitBuy\"}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.has(\"{}\") << std::endl;\n    // or\n    std::cout << client.has(R\"({\"api\":\"withdraw\"})\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "Returns whether balance is being updated via websocket", 
      "group": "Futures", 
      "name": "isSubscribingBalance", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "Bool", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "isSubscribing"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"isSubscribing\": true\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "isSubscribingBalance", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nprint(client.isSubscribingBalance())\n# or\nprint(client.isSubscribingBalance(\"\"))\n# or\nprint(client.isSubscribingBalance({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.isSubscribingBalance() << std::endl;\n    // or\n    std::cout << client.isSubscribingBalance(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "orderCancel", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderId"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "clientOrderId"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "orderCancel", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "orderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>Client Order ID as assigned by the client</p>", 
              "optional": false, 
              "field": "clientOrderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"orderId\":\"38463215\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "warn": "If both <b><i>orderId</b></i> and <b><i>clientOrderId</b></i> are options, either of them must be sent.<br>If both are sent, <b><i>orderId</b></i> is used preferentially.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"orderId\":\"39713467831\"\n}\n\nprint(client.orderCancel(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"orderId\":\"39713467831\"\n        }\n    )\";\n\n    std::cout << client.orderCancel(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "orderLimitBuy", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderId"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "clientOrderId"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "price"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseAmount"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"price\":\"21991.67\",\n        \"baseAmount\":\"1.584\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "orderLimitBuy", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "price", 
              "type": "Double", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseAmount", 
              "type": "Double", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reduceOnly", 
              "type": "bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>Client Order ID as assigned by the client</p>", 
              "optional": false, 
              "field": "clientOrderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field exists, the requested price will be <b>price*amplifier</b></p>", 
              "optional": false, 
              "defaultValue": "1.0", 
              "field": "amplifier", 
              "type": "Double", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "gtc", 
              "allowedValues": [
                "gtc", 
                "ioc", 
                "fok"
              ], 
              "field": "type", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"price\":21351.1384,\n    \"baseAmount\":1.5843,\n    \"amplifier\":1.03       //requested price will be 21351.1384*1.03 = 21991.672552\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "danger": "Currently, OneXAPI supports only One-way mode trading.", 
      "filename": "tmp/Futures.js", 
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Futures-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Futures-setOrderRoundingRule>setOrderRoundingRule</a>.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"XRP\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"220930\",\n    \"price\":0.4348,\n    \"baseAmount\":23.834219\n}", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\t\n    std::string userInfo = R\"({\n        \"accessKey\":\"user access key\",\n        \"secretKey\":\"user secrey key\"\n    })\";\n    OneXAPI::Binance::Futures client(userInfo\n    std::string request = R\"({\n        \"baseCurrency\":\"XRP\",\n        \"quoteCurrency\":\"USDT\",\n        \"price\":0.4348,\n        \"baseAmount\":23.834219\n    })\";\n\n    std::cout << client.orderLimitBuy(request) << std::endl;\n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "orderLimitSell", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderId"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "clientOrderId"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "price"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseAmount"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"price\":\"20710.6\",\n        \"baseAmount\":\"1.584\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "orderLimitSell", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "price", 
              "type": "Double", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseAmount", 
              "type": "Double", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reduceOnly", 
              "type": "bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>Client Order ID as assigned by the client</p>", 
              "optional": false, 
              "field": "clientOrderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field exists, the requested price will be <b>price*amplifier</b></p>", 
              "optional": false, 
              "defaultValue": "1.0", 
              "field": "amplifier", 
              "type": "Double", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "gtc", 
              "allowedValues": [
                "gtc", 
                "ioc", 
                "fok"
              ], 
              "field": "type", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"price\":21351.1384,\n    \"baseAmount\":1.5843,\n    \"amplifier\":0.97       //requested price will be 21351.1384*0.97 = 20710.604248\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "danger": "Currently, OneXAPI supports only One-way mode trading.", 
      "filename": "tmp/Futures.js", 
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Futures-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Futures-setOrderRoundingRule>setOrderRoundingRule</a>.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"XRP\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"PERP\",\n    \"price\":0.4348,\n    \"baseAmount\":23.834219\n}\n\nprint(client.orderLimitSell(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"XRP\",\n            \"quoteCurrency\":\"USDT\",\n            \"price\":0.4348,\n            \"baseAmount\":23.834219\n        }\n    )\";\n\n    std::cout << client.orderLimitSell(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "orderMarketBuy", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderId"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "clientOrderId"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseAmount"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"baseAmount\":\"1.584\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "orderMarketBuy", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseAmount", 
              "type": "Double", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reduceOnly", 
              "type": "bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>Client Order ID as assigned by the client</p>", 
              "optional": false, 
              "field": "clientOrderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"baseAmount\":1.5843\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "danger": "Currently, OneXAPI supports only One-way mode trading.", 
      "filename": "tmp/Futures.js", 
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Futures-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Futures-setOrderRoundingRule>setOrderRoundingRule</a>.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"baseAmount\":1.5843\n}\n\nprint(client.orderMarketBuy(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"baseAmount\":1.5843\n        }\n    )\";\n\n    std::cout << client.orderMarketBuy(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "orderMarketSell", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderId"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "clientOrderId"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseAmount"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"price\":\"20710.6\",\n        \"baseAmount\":\"1.584\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "orderMarketSell", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseAmount", 
              "type": "Double", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reduceOnly", 
              "type": "bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>Client Order ID as assigned by the client</p>", 
              "optional": false, 
              "field": "clientOrderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"baseAmount\":1.5843\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "danger": "Currently, OneXAPI supports only One-way mode trading.", 
      "filename": "tmp/Futures.js", 
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Futures-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Futures-setOrderRoundingRule>setOrderRoundingRule</a>.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"baseAmount\":1.5843\n}\n\nprint(client.orderMarketSell(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"baseAmount\":1.5843\n        }\n    )\";\n\n    std::cout << client.orderMarketSell(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "Sets the settings for the object. Only the requested parameters are included in the response", 
      "group": "Futures", 
      "name": "setConfig", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "<i>requested config</i>"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"restEndpoint\":\"https://api2.binance.com\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "setConfig", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "accessKey", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "secretKey", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "restEndpoint", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "publicWebsocketEndpoint", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "privateWebsocketEndpoint", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "restRequestTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "websocketConnectTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "websocketIdleTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"restEndpoint\":\"https://api2.binance.com\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "warn": "The requested endpoint must be included in the endpoint candidates, otherwise it returns an error. See <a href=#api-Spot-getEndpointCandidates>getEndpointCandidates</a>.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\"accessKey\":\"new access key\",\"secretKey\":\"new secret key\",\"websocketIdleTimeout\":2000}\n\nprint(client.setConfig(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.setConfig(R\"({\"accessKey\":\"new access key\",\"secretKey\":\"new secret key\",\"websocketIdleTimeout\":2000})\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "group": "Futures", 
      "name": "setOrderRoundingRule", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "<i>requested field</i>", 
              "type": "String"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"marketSellBaseAmount\":\"floor\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "setOrderRoundingRule", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitBuyPrice", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitBuyBaseAmount", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitSellPrice", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitSellBaseAmount", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "marketBuyBaseAmount", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "marketSellBaseAmount", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"marketSellBaseAmount\":\"floor\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"limitBuyPrice\":\"ceil\",\n    \"limitSellBaseAmount\":\"floor\"\n}\n\nprint(client.setOrderRoundingRule(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n    std::string request = R\"(\n        {\n            \"limitBuyPrice\":\"ceil\"\n        }\n    )\";\n\n    std::cout << client.setOrderRoundingRule(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "Start updating balance via websocket", 
      "group": "Futures", 
      "name": "subscribeBalance", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "subscribeBalance", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reconnect", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"reconnect\":false\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nprint(client.subscribeBalance())\n# or\nprint(client.subscribeBalance(\"\"))\n# or\nprint(client.subscribeBalance({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.subscribeBalance() << std::endl;\n    // or\n    std::cout << client.subscribeBalance(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "Start updating MarketInfo via websocket", 
      "group": "Futures", 
      "name": "subscribeMarketInfo", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.symbol"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"subscribed\": [\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\"\n            }\n        ],\n        \"subscribeFailed\": [\n            {\n                \"baseCurrency\":\"ETH\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"220930\",\n                \"symbol\":\"ETHUSDT_220930\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "subscribeMarketInfo", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market", 
              "type": "ObjectArray", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "market.expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field is true, reconnect the websocket including the requested markets to the the markets being subscribed</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reconnect", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]<br>If this function does not complete within requestTimeout, it returns error</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "requestTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        },\n        {\n            \"baseCurrency\":\"ETH\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.subscribeMarketInfo(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.subscribeMarketInfo(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "Start updating orderbooks via websocket", 
      "group": "Futures", 
      "name": "subscribeOrderbook", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.symbol"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":2,\n        \"subscribed\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"PERP\",\n                \"symbol\": \"BTCUSDT\"\n            }\n        ],\n        \"subscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"220930\",\n                \"symbol\": \"ETHUSDT_220930\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "subscribeOrderbook", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market", 
              "type": "ObjectArray", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "market.expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field is true, reconnect the websocket including the requested markets to the the markets being subscribed</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reconnect", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]<br>If this function does not complete within requestTimeout, it returns error</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "requestTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\":\"ETH\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "warn": "Binance : The requestTimeout increases by the requested market size.<br>requestTimeout = requestTimeout + 0.5 * market size", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.subscribeOrderbook(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.subscribeOrderbook(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "Start updating tickers via websocket", 
      "group": "Futures", 
      "name": "subscribeTicker", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.symbol"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"subscribed\": [\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\"\n            }\n        ],\n        \"subscribeFailed\": [\n            {\n                \"baseCurrency\":\"ETH\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"220930\",\n                \"symbol\":\"ETHUSDT_220930\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "subscribeTicker", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market", 
              "type": "ObjectArray", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "market.expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field is true, reconnect the websocket including the requested markets to the the markets being subscribed</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reconnect", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]<br>If this function does not complete within requestTimeout, it returns error</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "requestTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        },\n        {\n            \"baseCurrency\":\"ETH\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.subscribeTicker(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.subscribeTicker(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "Stop updating balance via websocket", 
      "group": "Futures", 
      "name": "unsubscribeBalance", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "unsubscribeBalance", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nprint(client.unsubscribeBalance())\n# or\nprint(client.unsubscribeBalance(\"\"))\n# or\nprint(client.unsubscribeBalance({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.unsubscribeBalance() << std::endl;\n    // or\n    std::cout << client.unsubscribeBalance(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "Stop updating MarketInfo via websocket", 
      "group": "Futures", 
      "name": "unsubscribeMarketInfo", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.symbol"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"unsubscribed\": [\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\"\n            }\n        ],\n        \"unsubscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\":\"229030\",\n                \"symbol\": \"ETHUSDT_220930\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "unsubscribeMarketInfo", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market", 
              "type": "ObjectArray", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "market.expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field is true, reconnect the websocket excluding the requested markets for the the markets being subscribed</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reconnect", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]<br>If this function does not complete within requestTimeout, it returns error</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "requestTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        },\n        {\n            \"baseCurrency\":\"ETH\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.unsubscribeMarketInfo(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.unsubscribeMarketInfo(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "Stop updating orderbooks via websocket", 
      "group": "Futures", 
      "name": "unsubscribeOrderbook", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.symbol"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"unsubscribed\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"PERP\",\n                \"symbol\": \"BTCUSDT\"\n            }\n        ],\n        \"unsubscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"220930\",\n                \"symbol\": \"ETHUSDT_220930\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "unsubscribeOrderbook", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market", 
              "type": "ObjectArray", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "market.expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field is true, reconnect the websocket excluding the requested markets for the the markets being subscribed</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reconnect", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]<br>If this function does not complete within requestTimeout, it returns error</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "requestTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        },\n        {\n            \"baseCurrency\":\"ETH\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.unsubscribeOrderbook(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.unsubscribeOrderbook(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "Stop updating tickers via websocket", 
      "group": "Futures", 
      "name": "unsubscribeTicker", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.symbol"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.expiration"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"unsubscribed\": [\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\"\n            }\n        ],\n        \"unsubscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\":\"229030\",\n                \"symbol\": \"ETHUSDT_220930\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "unsubscribeTicker", 
      "url": "/Futures", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market", 
              "type": "ObjectArray", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "PERP", 
              "field": "market.expiration", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field is true, reconnect the websocket excluding the requested markets for the the markets being subscribed</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reconnect", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]<br>If this function does not complete within requestTimeout, it returns error</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "requestTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        },\n        {\n            \"baseCurrency\":\"ETH\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Futures.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.unsubscribeTicker(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.unsubscribeTicker(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported"
      }, 
      "groupTitle": "Futures", 
      "type": "onex"
    }, 
    {
      "info": "get information of the OneXAPI Library", 
      "group": "OneXAPI", 
      "name": "getInfo", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "supportedExchanges"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "<p>exchange name</p>", 
              "optional": false, 
              "field": "supportedExchanges.exchange"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "Spot", 
                "Futures"
              ], 
              "field": "supportedExchanges.instrument", 
              "type": "String"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "onexapiVersion"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"supportedExchanges\":[\n        {\n            \"exchange\":\"Binance\",\n            \"instrument\":\"Spot\"\n        },\n        {\n            \"exchange\":\"Upbit\",\n            \"instrument\":\"Spot\"\n        },\n        {\n            \"exchange\":\"Binance\",\n            \"instrument\":\"Futures\"\n        },\n        {\n            \"exchange\":\"Ftx\",\n            \"instrument\":\"Futures\"\n        }\n    ]\n    \"onexapiVersion\":\"1.16.0\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getInfo", 
      "url": "/OneXAPI", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/OneXAPI.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nprint(OneXAPI.getInfo())\n# or\nprint(OneXAPI.getInfo(\"\"))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::cout << OneXAPI::getInfo() << std::endl;\n    // or \n    std::cout << OneXAPI::getInfo(\"\") << std::endl;\n\n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "OneXAPI", 
      "type": "onex"
    }, 
    {
      "group": "OneXAPI", 
      "name": "getLoggerConfig", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Object", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "main"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "terminal", 
              "allowedValues": [
                "terminal", 
                "file", 
                "both"
              ], 
              "field": "main.outputMethod", 
              "type": "String"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "off", 
              "allowedValues": [
                "off", 
                "info", 
                "warn", 
                "error", 
                "critical"
              ], 
              "field": "main.logLevel", 
              "type": "String"
            }, 
            {
              "type": "Object", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "websocket"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "terminal", 
              "allowedValues": [
                "terminal", 
                "file", 
                "both"
              ], 
              "field": "websocket.outputMethod", 
              "type": "String"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "off", 
              "allowedValues": [
                "off", 
                "info", 
                "warn", 
                "error", 
                "critical"
              ], 
              "field": "websocket.logLevel", 
              "type": "String"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"main\":{\n            \"outputMethod\":\"terminal\",\n            \"logLevel\":\"off\"\n        },\n        \"websocket\":{\n            \"outputMethod\":\"terminal\",\n            \"logLevel\":\"off\"\n        }\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getLoggerConfig", 
      "url": "/OneXAPI", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/OneXAPI.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nprint(OneXAPI.getLoggerConfig())\n# or\nprint(OneXAPI.getLoggerConfig(\"\"))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::cout << OneXAPI::getLoggerConfig() << std::endl;\n    // or\n    std::cout << OneXAPI::getLoggerConfig(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "OneXAPI", 
      "type": "onex"
    }, 
    {
      "group": "OneXAPI", 
      "name": "setLoggerConfig", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "<i>requested config</i>"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"main\":{\n            \"logLevel\":\"info\",\n            \"outputMethod\":\"both\"\n        }\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "setLoggerConfig", 
      "url": "/OneXAPI", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "main", 
              "type": "Object", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "off", 
                "info", 
                "warn", 
                "error", 
                "critical"
              ], 
              "field": "main.logLevel", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>terminal : log on console<br>file : write log into OneXAPI_Log/<b><i>DATE</i></b>.log<br>both : terminal + file</p>", 
              "optional": false, 
              "allowedValues": [
                "terminal", 
                "file", 
                "both"
              ], 
              "field": "main.outputMethod", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "websocket", 
              "type": "Object", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "off", 
                "info", 
                "warn", 
                "error", 
                "critical"
              ], 
              "field": "websocket.logLevel", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>terminal : log on console<br>file : write log into OneXAPI_Log/<b><i>DATE</i></b>.log<br>both : terminal + file</p>", 
              "optional": false, 
              "allowedValues": [
                "terminal", 
                "file", 
                "both"
              ], 
              "field": "websocket.outputMethod", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"main\":{\n        \"logLevel\":\"info\",\n        \"outputMethod\":\"both\"\n    }\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/OneXAPI.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nprint(OneXAPI.setLoggerConfig('{\"main\":{\"logLevel\":\"info\"}}'))  #str\n# or\nprint(OneXAPI.setLoggerConfig({\"websocket\":{\"outputMethod\":\"both\"}}))   #dict", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n\n    std::cout << OneXAPI::setLoggerConfig(R\"({\"main\":{\"logLevel\":\"info\"}})\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "OneXAPI", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "General", 
      "title": "General", 
      "url": "/Spot", 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "exchanges": {}, 
      "isCategory": true, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "Market", 
      "title": "Market", 
      "url": "/Spot", 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "exchanges": {}, 
      "isCategory": true, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "Trade", 
      "title": "Trade", 
      "url": "/Spot", 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "exchanges": {}, 
      "isCategory": true, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "Wallet", 
      "title": "Wallet", 
      "url": "/Spot", 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "exchanges": {}, 
      "isCategory": true, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "fetchAllCurrencies", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "Object", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "currencies"
            }, 
            {
              "type": "Object", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "currencies.<i>currency name</i>"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "<p><b>If this field is empty, exchange supports only single chain or nothing. Please check exchange before withdraw or deposit crypto currency.</b></p>", 
              "optional": false, 
              "field": "currencies.currency.chains"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "currencies.currency.chains.chain"
            }, 
            {
              "type": "Bool", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "currencies.currency.chains.isDefault"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"currencies\":{\n            \"BTC\":{\n                \"chains\":[]\n            },\n            \"USDT\":{\n                \"chains\":[\n                    {\n                        \"chain\":\"TRX\",\n                        \"isDefault\":true\n                    },\n                    {\n                        \"chain\":\"ETH\",\n                        \"isDefault\":false\n                    },\n                    {\n                        \"chain\":\"SOL\",\n                        \"isDefault\":false\n                    }\n                ]\n            },\n            ...\n        }\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchAllCurrencies", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.fetchAllCurrencies())\n# or\nprint(client.fetchAllCurrencies(\"\"))\n# or\nprint(client.fetchAllCurrencies({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::cout << client.fetchAllCurrencies() << std::endl;\n    // or\n    std::cout << client.fetchAllCurrencies(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "fetchBalance", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "rest", 
                "websocket"
              ], 
              "field": "fetchType", 
              "type": "String"
            }, 
            {
              "type": "Object", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "balance"
            }, 
            {
              "type": "Object", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "balance.<i>currency name</i>"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "balance.currency.free"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "balance.currency.locked"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fetchType\":\"rest\",\n        \"balance\":{\n            \"BTC\":{\n                \"free\":\"3.15437\",\n                \"locked\":\"0.0\"\n            },\n            \"ETH\":{\n                \"free\":\"123.684\",\n                \"locked\":\"86.252\"\n            },\n            \"XRP\":{\n                \"free\":\"138123.15425\",\n                \"locked\":\"0.0\"\n            },\n            \"ADA\":{\n                \"free\":\"9354.8132\",\n                \"locked\":\"0.0\"\n            }\n        }\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchBalance", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "<p>force to update using REST API</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "forceRestApi", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Ignored"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If not exist, return all currencies</p>", 
              "optional": false, 
              "field": "currencies", 
              "type": "StringArray", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>Whether to include assets with zero balance</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "zeroBalance", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"forceRestApi\":false,\n    \"currencies\":[\"BTC\", \"ETH\", \"XRP\", \"ADA\"],\n    \"zeroBalance\":true\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "warn": "During websocket is running, updateAccountBalance does not send rest API request. <br>If you want to force to send rest API, set forceRestApi parameter as true.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"forceRestApi\":False,\n    \"currencies\":[\"BTC\", \"ETH\", \"XRP\", \"ADA\"],\n    \"zeroBalance\":True\n}\n\nprint(client.fetchBalance(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"forceRestApi\":false,\n            \"currencies\":[\"BTC\", \"ETH\", \"XRP\", \"ADA\"]\n            \"zeroBalance\":true\n        }\n    )\";\n\n    std::cout << client.fetchBalance(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "fetchCandleHistory", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "<p>Ascending order according to timestamp</p>", 
              "optional": false, 
              "field": "candles"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[s]</p>", 
              "optional": false, 
              "field": "candles.timestamp"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "candles.openPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "candles.closePrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "candles.highPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "candles.lowPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "candles.baseVolume"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "candles.quoteVolume"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":31,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"candles\":[\n            {\n                \"timestamp\":1656042060,\n                \"openPrice\":\"21035.12\",\n                \"closePrice\":\"21086.83\",\n                \"highPrice\":\"21132.28\",\n                \"lowPrice\":\"21028.83\",\n                \"baseVolume\":\"0.83648\",\n                \"quoteVolume\":\"1087.424\"\n            },\n            {\n                \"timestamp\":1656042120,\n                \"openPrice\":\"21086.83\",\n                \"closePrice\":\"21098.19\",\n                \"highPrice\":\"21099.89\",\n                \"lowPrice\":\"21073.14\",\n                \"baseVolume\":\"0.58492\",\n                \"quoteVolume\":\"760.396\"\n            },\n            ...\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchCandleHistory", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>This param depends on the exchange. Please check available intervals using getCandleIntervalCandidates</p>", 
              "optional": false, 
              "field": "interval", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[s]</p>", 
              "optional": false, 
              "field": "startTime", 
              "type": "Uint", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[s]</p>", 
              "optional": false, 
              "defaultValue": "now", 
              "field": "endTime", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]<br>frequent api request may exceeds rate limit, therefore apiReqInterval decides how long time to sleep between each api request</p>", 
              "optional": false, 
              "defaultValue": "200", 
              "field": "fetchInterval", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"interval\":\"1min\",\n    \"startTime\":1656042045,\n    \"endTime\":1656063182,\n    \"fetchInterval\":200\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "warn": "When enormous amount of data is requested, fetchCandleHistory takes a long time to execute.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"interval\":\"3min\",\n    \"startTime\":1659189600,\n    \"fetchInterval\":100\n}\n\nprint(client.fetchCandleHistory(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"interval\":\"3min\",\n            \"startTime\":1659189600,\n            \"fetchInterval\":100\n        }\n    )\";\n\n    std::cout << client.fetchCandleHistory(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "fetchDepositAddress", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "Object", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "addresses"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "addresses.<i>currency name</i>"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "<p>If this field is empty string, it is a default chain</p>", 
              "optional": false, 
              "field": "addresses.currency.chain"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "addresses.currency.address"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "<p>If not exist, return empty string</p>", 
              "optional": false, 
              "field": "addresses.currency.tag"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"addresses\":{\n            \"BTC\":[\n                {\n                    \"chain\":\"BTC\"\n                    \"address\":\"0x~~~\",\n                    \"tag\":\"\"\n                }\n            ]\n        }\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchDepositAddress", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "<p>If not exist, return all currencies</p>", 
              "optional": false, 
              "field": "currency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If not exist, fetch a default chain of the currency</p>", 
              "optional": false, 
              "field": "chain", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"currency\":\"BTC\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.fetchDepositAddress({\"currency\":\"BTC\"}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        \"currency\":\"BTC\"\n    )\";\n    std::cout << client.fetchDepositAddress(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "fetchDepositHistory", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "deposits"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "deposits.currency"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "deposits.amount"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "deposits.fee"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "deposits.orderId"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "deposits.txid"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "processing", 
                "cancelled", 
                "confirmed", 
                "done"
              ], 
              "field": "deposits.status", 
              "type": "String"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "deposits.created"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"deposits\":[\n            {\n                \"currency\":\"MATIC\",\n                \"amount\":\"435.2397\",\n                \"fee\":\"0.0\",\n                \"orderId\":\"688139946\",\n                \"txid\": \"60fd9007ebfddc753455f95fafa808c4302c836e4d1eebc5a132c36c1d8ac354\",\n                \"status\":\"done\",\n                \"created\":1656044045154\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchDepositHistory", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "currency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "orderId", 
              "type": "String", 
              "options": [
                [
                  "Ignored"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "txid", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "startTime", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "defaultValue": "now", 
              "field": "endTime", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"currency\":\"MATIC\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "danger": "Upbit : supports up to 100 deposits<br>Binance : supports up to 1000 deposits and 90 days from now", 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.fetchDepositHistory({}))\n# or\nprint(client.fetchDepositHistory({\"currency\":\"xrP\"}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"currency\":\"XRP\"\n        }\n    )\";\n\n    std::cout << client.fetchDepositHistory(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "fetchMarkets", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "markets"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "markets.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "markets.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "markets.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"markets\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"symbol\":\"BTC-USDT\"\n            },\n            {\n                \"baseCurrency\":\"ETH\",\n                \"quoteCurrency\":\"USDT\",\n                \"symbol\":\"ETH-USDT\"\n            },\n            {\n                \"baseCurrency\":\"XRP\",\n                \"quoteCurrency\":\"USDT\",\n                \"symbol\":\"XRP-USDT\"\n            },\n            {\n                \"baseCurrency\":\"ADA\",\n                \"quoteCurrency\":\"USDT\",\n                \"symbol\":\"ADA-USDT\"\n            },\n            ...\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchMarkets", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"quoteCurrency\":\"USDT\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchMarkets(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchMarkets(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "fetchOpenOrders", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.symbol"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.orderId"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "buy", 
                "sell"
              ], 
              "field": "openOrders.side", 
              "type": "String"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.originalAmount"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.filledAmount"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.remainingAmount"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.originalPrice"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "openOrders.created"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.lockedCurrency"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openOrders.lockedAmount"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":2,\n        \"openOrders\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"symbol\":\"BTC-USDT\",\n                \"orderId\":\"38463215\",\n                \"side\":\"buy\",\n                \"originalAmount\":\"1.5984\",\n                \"filledAmount\":\"0.3686\",\n                \"remainingAmount\":\"1.2298\",\n                \"originalPrice\":\"22135.35\",\n                \"created\":1656044045,\n                \"lockedCurrency\":\"USDT\",\n                \"lockedAmount\":\"27222.05343\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchOpenOrders", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "buy", 
                "sell"
              ], 
              "field": "side", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"side\":\"buy\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchOpenOrders(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchOpenOrders(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "fetchOrderInfo", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderId"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "clientOrderId"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "buy", 
                "sell"
              ], 
              "field": "side", 
              "type": "String"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "originalAmount"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "filledAmount"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "remainingAmount"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "originalPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "avgFillPrice"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "created"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "feeCurrency"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "feeAmount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "open", 
                "filled", 
                "cancelled"
              ], 
              "field": "status", 
              "type": "String"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fills"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fills.orderId"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fills.price"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fills.amount"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "fills.timestamp"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":2,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"side\":\"buy\",\n        \"originalAmount\":\"1.5984\",\n        \"filledAmount\":\"0.3686\",\n        \"remainingAmount\":\"1.2298\",\n        \"originalPrice\":\"22135.35\",\n        \"avgFillPrice\":\"22135.28\",\n        \"created\":1656044045\n        \"feeCurrency\":\"BTC\",\n        \"feeAmount\":\"0.00027645\",\n        \"status\":\"open\",\n        \"fills\":[\n            {\n                \"orderId\":\"38435724\",\n                \"price\":\"22135.28\",\n                \"amount\":\"0.3686\",\n                \"timestamp\":1661327586135\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchOrderInfo", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Ignored"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Ignored"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "orderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "clientOrderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"orderId\":\"38463215\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "warn": "If both <b><i>orderId</b></i> and <b><i>clientOrderId</b></i> are options, either of them must be sent.<br>If both are sent, <b><i>orderId</b></i> is used preferentially.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"orderId\":\"39713467831\"\n}\n\nprint(client.fetchOrderInfo(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"orderId\":\"13868943153\"\n        }\n    )\";\n\n    std::cout << client.fetchOrderInfo(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "fetchOrderbook", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "rest", 
                "websocket"
              ], 
              "field": "fetchType", 
              "type": "String"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "timestamp"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "<p>Descending order according to timestamp</p>", 
              "optional": false, 
              "field": "bids"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "bids.price"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "bids.size"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "<p>Ascending order according to price</p>", 
              "optional": false, 
              "field": "asks"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "asks.price"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "asks.size"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"fetchType\":\"websocket\",\n        \"timestamp\":1656044045154,\n        \"bids\":[\n            {\n                \"price\":\"21458.15\",\n                \"size\":\"0.1548\"\n            },\n            {\n                \"price\":\"21458.08\",\n                \"size\":\"0.1578\"\n            },\n            {\n                \"price\":\"21458.03\",\n                \"size\":\"0.3518\"\n            },\n            ...\n        ],\n        \"asks\":[\n            {\n                \"price\":\"21458.16\", \n                \"size\":\"0.0232\"\n            },\n            {\n                \"price\":\"21458.32\",\n                \"size\":\"0.2158\"\n            },\n            {\n                \"price\":\"21458.36\",\n                \"size\":\"0.3183\"\n            },\n            ...\n        ]    \n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchOrderbook", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "forceRestApi", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "danger": "Binance : Timestamp does not mean the server time; it means the time when the response arrived.", 
      "filename": "tmp/Spot.js", 
      "warn": "During orderbook websocket is running, fetchOrderbook does not send rest API request. <br>If you want to force to send rest API, set forceRestApi parameter as true.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchOrderbook(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchOrderbook(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "fetchTicker", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "rest", 
                "websocket"
              ], 
              "field": "fetchType", 
              "type": "String"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[s]<br>open Time(UTC)</p>", 
              "optional": false, 
              "field": "openTime"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "openPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "<p>close Price(last Price)</p>", 
              "optional": false, 
              "field": "closePrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "<p>low Price(24h)</p>", 
              "optional": false, 
              "field": "lowPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "<p>high Price(24h)</p>", 
              "optional": false, 
              "field": "highPrice"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "<p>baseCurrency Volume(24h)</p>", 
              "optional": false, 
              "field": "baseVolume"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "<p>quoteCurrency Volume(24h)</p>", 
              "optional": false, 
              "field": "quoteVolume"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"fetchType\":\"rest\",\n        \"openTime\":\"1656044045,\n        \"openPrice\":\"21004.0\",\n        \"closePrice\":\"21432.14\",\n        \"lowPrice\":\"20844.64\",\n        \"highPrice\":\"21662.5\",\n        \"baseVolume\":\"591235.5124\",\n        \"quoteVolume\":\"1529512525.23145\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchTicker", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "forceRestApi", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"forceRestApi\":true\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "warn": "During ticker websocket is running, fetchTicker does not send rest API request. <br>If you want to force to send rest API, set forceRestApi parameter as true.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchTicker(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchTicker(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "fetchTradingFee", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fees"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fees.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fees.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fees.symbol"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fees.makerFee"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "fees.takerFee"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fees\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"symbol\":\"BTCUSDT\",\n                \"makerFee\":\"0.0004\",\n                \"takerFee\":\"0.00075\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchTradingFee", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "danger": "Binance : Trading fee is a value before bnb discount", 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchTradingFee(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchTradingFee(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "fetchWalletStatus", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "Object", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "currencies"
            }, 
            {
              "type": "Object", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "currencies.<i>currency name</i>"
            }, 
            {
              "type": "Array", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "currencies.currency.chains"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "<p>If chain is empty string, it means exchange supports single chain.</p>", 
              "optional": false, 
              "field": "currencies.currency.chains.chain"
            }, 
            {
              "type": "Bool", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "currencies.currency.chains.withdrawEnable"
            }, 
            {
              "type": "Bool", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "currencies.currency.chains.depositEnable"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"currencies\":{\n            \"BTC\":{\n                \"chains\":[\n                    {\n                        \"chain\":\"BTC\",\n                        \"withdrawEnable\":true,\n                        \"depositEnable\":false\n                    },\n                    {\n                        \"chain\":\"BSC\",\n                        \"withdrawEnable\":true,\n                        \"depositEnable\":true\n                    }\n                ]\n            }\n        }\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchWalletStatus", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "<p>If not exist, return all currencies.</p>", 
              "optional": false, 
              "field": "currency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"currency\":\"BTC\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.fetchWalletStatus({}))\n# or\nprint(client.fetchWalletStatus({\"currency\":\"BTC\"}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::cout << client.fetchWalletStatus(\"{}\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "fetchWithdrawHistory", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "withdrawals"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "withdrawals.currency"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "withdrawals.amount"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "withdrawals.fee"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "withdrawals.orderId"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "withdrawals.txid"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "processing", 
                "cancelled", 
                "done"
              ], 
              "field": "withdrawals.status", 
              "type": "String"
            }, 
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "withdrawals.created"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"withdrawals\":[\n            {\n                \"currency\":\"MATIC\",\n                \"amount\":\"435.2397\",\n                \"fee\":\"1.0\",\n                \"orderId\":\"451399413\",\n                \"txid\": \"60fd9007ebfddc753455f95fafa808c4302c836e4d1eebc5a132c36c1d8ac354\",\n                \"status\":\"done\",\n                \"created\":1656044045154\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "fetchWithdrawHistory", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "currency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "orderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "txid", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "startTime", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "defaultValue": "now", 
              "field": "endTime", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"currency\":\"MATIC\",\n    \"orderId\":\"451399413\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "danger": "Upbit : supports up to 100 withdrawals<br>Binance : supports up to 1000 withdrawals and 90 days from now", 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.fetchWithdrawHistory({}))\n# or\nprint(client.fetchWithdrawHistory({\"currency\":\"xrP\"}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"currency\":\"XRP\"\n        }\n    )\";\n\n    std::cout << client.fetchWithdrawHistory(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "getCandleIntervalCandidates", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "1min", 
                "3min", 
                "5min", 
                "10min", 
                "15min", 
                "30min", 
                "1hour", 
                "2hour", 
                "4hour", 
                "6hour", 
                "8hour", 
                "12hour", 
                "1day", 
                "3day", 
                "1week", 
                "1month"
              ], 
              "field": "intervals", 
              "type": "StringArray"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"intervals\":[\n            \"10min\",\"15min\",\"1day\",\"1hour\",\"1min\",\"1month\",\"1week\",\"30min\",\"3min\",\"4hour\",\"5min\"\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getCandleIntervalCandidates", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.getCandleIntervalCandidates())\n# or\nprint(client.getCandleIntervalCandidates(\"\"))\n# or\nprint(client.getCandleIntervalCandidates({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getCandleIntervalCandidates() << std::endl;\n    // or\n    std::cout << client.getCandleIntervalCandidates(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "getConfig", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "exchange"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "Spot", 
                "Futures"
              ], 
              "field": "instrument", 
              "type": "String"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "accessKey"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "secretKey"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "restEndpoint"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "publicWebsocketEndpoint"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "privateWebsocketEndpoint"
            }, 
            {
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "restRequestTimeout", 
              "type": "Uint"
            }, 
            {
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "websocketConnectTimeout", 
              "type": "Uint"
            }, 
            {
              "group": "Success 200", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "websocketIdleTimeout", 
              "type": "Uint"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"exchange\":\"Binance\",\n        \"instrument\":\"Spot\",\n        \"accessKey\":\"\",\n        \"secretKey\":\"\",\n        \"restEndpoint\":\"https://api.binance.com\",\n        \"publicWebsocketEndpoint\":\"wss://stream.binance.com:9443\",\n        \"privateWebsocketEndpoint\":\"wss://stream.binance.com:9443\",\n        \"restRequestTimeout\":5000,\n        \"websocketConnectTimeout\":5000,\n        \"websocketIdleTimeout\":5000\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getConfig", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.getConfig())\n# or\nprint(client.getConfig(\"\"))\n# or\nprint(client.getConfig({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getConfig() << std::endl;\n    // or\n    std::cout << client.getConfig(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "getEndpointCandidates", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "StringArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "restEndpoints"
            }, 
            {
              "type": "StringArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "publicWebsocketEndpoints"
            }, 
            {
              "type": "StringArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "privateWebsocketEndpoints"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"restEndpoints\":[\n            \"https://api.binance.com\",\n            \"https://api1.binance.com\",\n            \"https://api2.binance.com\",\n            \"https://api3.binance.com\",\n        ],\n        \"publicWebsocketEndpoints\":[\n            \"wss://stream.binance.com:9443\"\n        ],\n        \"privateWebsocketEndpoints\":[\n            \"wss://stream.binance.com:9443\"\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getEndpointCandidates", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.getEndpointCandidates())\n# or\nprint(client.getEndpointCandidates(\"\"))\n# or\nprint(client.getEndpointCandidates({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getEndpointCandidates() << std::endl;\n    // or\n    std::cout << client.getEndpointCandidates(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "getOrderRoundingRule", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "round", 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitBuyPrice", 
              "type": "String"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "round", 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitBuyBaseAmount", 
              "type": "String"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "round", 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitSellPrice", 
              "type": "String"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "round", 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitSellBaseAmount", 
              "type": "String"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "round", 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "marketBuyQuoteAmount", 
              "type": "String"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "round", 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "marketSellBaseAmount", 
              "type": "String"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"limitBuyPrice\":\"ceil\",             \n        \"limitBuyBaseAmount\":\"floor\",\n        \"limitSellPrice\":\"ceil\",\n        \"limitSellBaseAmount\":\"floor\",\n        \"marketBuyQuoteAmount\":\"round\",\n        \"marketSellBaseAmount\":\"round\",\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getOrderRoundingRule", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.getOrderRoundingRule())\n# or\nprint(client.getOrderRoundingRule(\"\"))\n# or\nprint(client.getOrderRoundingRule({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getOrderRoundingRule() << std::endl;\n    // or\n    std::cout << client.getOrderRoundingRule(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "info": "Returns orderbook symbols being received on websocket", 
      "group": "Spot", 
      "name": "getSubscribingOrderbooks", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderbooks"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderbooks.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderbooks.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderbooks.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"orderbooks\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"BTC-USDT\"\n            },\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"ETH-USDT\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getSubscribingOrderbooks", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ], 
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.getSubscribingOrderbooks())\n# or\nprint(client.getSubscribingOrderbooks(\"\"))\n# or\nprint(client.getSubscribingOrderbooks({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getSubscribingOrderbooks() << std::endl;\n    // or\n    std::cout << client.getSubscribingOrderbooks(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "info": "Returns ticker symbols being received on websocket", 
      "group": "Spot", 
      "name": "getSubscribingTickers", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "tickers"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "tickers.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "tickers.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "tickers.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"tickers\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"BTC-USDT\"\n            },\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"ETH-USDT\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getSubscribingTickers", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ], 
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.getSubscribingTickers())\n# or\nprint(client.getSubscribingTickers(\"\"))\n# or\nprint(client.getSubscribingTickers({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getSubscribingTickers() << std::endl;\n    // or\n    std::cout << client.getSubscribingTickers(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "getWithdrawRoundingRule", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "defaultValue": "round", 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "roundingRule", 
              "type": "String"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"roundingRule\":\"floor\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "getWithdrawRoundingRule", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.getWithdrawRoundingRule())\n# or\nprint(client.getWithdrawRoundingRule(\"\"))\n# or\nprint(client.getWithdrawRoundingRule({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getWithdrawRoundingRule() << std::endl;\n    // or\n    std::cout << client.getWithdrawRoundingRule(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "info": "Check if API exists or not", 
      "group": "Spot", 
      "name": "has", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "Bool", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "<i>api name</i>"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"orderLimitBuy\":true\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "has", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "<p>if not exist, return all APIs</p>", 
              "optional": false, 
              "field": "api", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"api\":\"orderLimitBuy\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.has({}))\n# or\nprint(client.has(\"{}\"))\n# or\nprint(client.has({\"api\":\"orderLimitBuy\"}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.has(\"{}\") << std::endl;\n    // or\n    std::cout << client.has(R\"({\"api\":\"withdraw\"})\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "isDepositCompleted", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "Bool", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "isDepositCompleted"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"isDepositCompleted\":false\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "isDepositCompleted", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "<p>If this field exists, \u2018currency\u2019, \u2018amount\u2019 and \u2018since\u2019 are ignored</p>", 
              "optional": false, 
              "field": "txid", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field exists, \u2018amount\u2019 and \u2018since\u2019 must be sent</p>", 
              "optional": false, 
              "field": "currency", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "amount", 
              "type": "Double", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "since", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"currency\":\"MATIC\",\n    \"amount\":435.2397,\n    \"since\":1656044045154\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "danger": "Binance : supports up to 1000 deposits and 90 days from now", 
      "filename": "tmp/Spot.js", 
      "warn": "'Deposit Completed' means that the deposited asset is tradable. This does not mean that client can withdraw asset depending on the exchange.<br>This API is used in two ways.<br>1. inquire by txid<br>2. inquire by \u2018currency\u2019 and \u2018amount\u2019 and \u2018since\u2019", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.isDepositCompleted({\"txid\":\"0xfad1~~~\"}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        \"txid\":\"0xfad1~~~\"\n    )\";\n    std::cout << client.isDepositCompleted(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "info": "Returns whether balance is being updated via websocket", 
      "group": "Spot", 
      "name": "isSubscribingBalance", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "Bool", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "isSubscribing"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"isSubscribing\": true\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "isSubscribingBalance", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.isSubscribingBalance())\n# or\nprint(client.isSubscribingBalance(\"\"))\n# or\nprint(client.isSubscribingBalance({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.isSubscribingBalance() << std::endl;\n    // or\n    std::cout << client.isSubscribingBalance(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "orderCancel", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderId"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "clientOrderId"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "orderCancel", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Ignored"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Ignored"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "orderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>Client Order ID as assigned by the client</p>", 
              "optional": false, 
              "field": "clientOrderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"orderId\":\"38463215\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "warn": "If both <b><i>orderId</b></i> and <b><i>clientOrderId</b></i> are options, either of them must be sent.<br>If both are sent, <b><i>orderId</b></i> is used preferentially.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"orderId\":\"39713467831\"\n}\n\nprint(client.orderCancel(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"orderId\":\"39713467831\"\n        }\n    )\";\n\n    std::cout << client.orderCancel(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "orderLimitBuy", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderId"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "clientOrderId"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "price"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseAmount"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"price\":\"21991.67\",\n        \"baseAmount\":\"1.584\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "orderLimitBuy", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "price", 
              "type": "Double", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseAmount", 
              "type": "Double", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>Client Order ID as assigned by the client</p>", 
              "optional": false, 
              "field": "clientOrderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field exists, the requested price will be <b>price*amplifier</b></p>", 
              "optional": false, 
              "defaultValue": "1.0", 
              "field": "amplifier", 
              "type": "Double", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "gtc", 
              "allowedValues": [
                "gtc", 
                "ioc", 
                "fok"
              ], 
              "field": "type", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"price\":21351.1384,\n    \"baseAmount\":1.5843,\n    \"amplifier\":1.03       //requested price will be 21351.1384*1.03 = 21991.672552\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Spot-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Spot-setOrderRoundingRule>setOrderRoundingRule</a>.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"XRP\",\n    \"quoteCurrency\":\"USDT\",\n    \"price\":0.4348,\n    \"baseAmount\":23.834219\n}\n\nprint(client.orderLimitBuy(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\t\n    std::string userInfo = R\"({\n        \"accessKey\":\"user access key\",\n        \"secretKey\":\"user secrey key\"\n    })\";\n    OneXAPI::Binance::Spot client(userInfo\n    std::string request = R\"({\n        \"baseCurrency\":\"XRP\",\n        \"quoteCurrency\":\"USDT\",\n        \"price\":0.4348,\n        \"baseAmount\":23.834219\n    })\";\n\n    std::cout << client.orderLimitBuy(request) << std::endl;\n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "orderLimitSell", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderId"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "clientOrderId"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "price"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseAmount"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"price\":\"20710.6\",\n        \"baseAmount\":\"1.584\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "orderLimitSell", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "price", 
              "type": "Double", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseAmount", 
              "type": "Double", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>Client Order ID as assigned by the client</p>", 
              "optional": false, 
              "field": "clientOrderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field exists, the requested price will be <b>price*amplifier</b></p>", 
              "optional": false, 
              "defaultValue": "1.0", 
              "field": "amplifier", 
              "type": "Double", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "gtc", 
              "allowedValues": [
                "gtc", 
                "ioc", 
                "fok"
              ], 
              "field": "type", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Ignored"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"price\":21351.1384,\n    \"baseAmount\":1.5843,\n    \"amplifier\":0.97       //requested price will be 21351.1384*0.97 = 20710.604248\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Spot-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Spot-setOrderRoundingRule>setOrderRoundingRule</a>.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"XRP\",\n    \"quoteCurrency\":\"USDT\",\n    \"price\":0.4348,\n    \"baseAmount\":23.834219\n}\n\nprint(client.orderLimitSell(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"XRP\",\n            \"quoteCurrency\":\"USDT\",\n            \"price\":486.2348,\n            \"baseAmount\":23.834219\n        }\n    )\";\n\n    std::cout << client.orderLimitSell(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "orderMarketBuy", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderId"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "clientOrderId"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteAmount"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"quoteAmount\":\"1.584\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "orderMarketBuy", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteAmount", 
              "type": "Double", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>Client Order ID as assigned by the client</p>", 
              "optional": false, 
              "field": "clientOrderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"quoteAmount\":1.5843\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Spot-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Spot-setOrderRoundingRule>setOrderRoundingRule</a>.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"quoteAmount\":1.5843\n}\n\nprint(client.orderMarketBuy(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"quoteAmount\":1.5843\n        }\n    )\";\n\n    std::cout << client.orderMarketBuy(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "orderMarketSell", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "symbol"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderId"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "clientOrderId"
            }, 
            {
              "type": "DoubleString", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "baseAmount"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"price\":\"20710.6\",\n        \"baseAmount\":\"1.584\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "orderMarketSell", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "baseAmount", 
              "type": "Double", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>Client Order ID as assigned by the client</p>", 
              "optional": false, 
              "field": "clientOrderId", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"baseAmount\":1.5843\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Spot-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Spot-setOrderRoundingRule>setOrderRoundingRule</a>.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"baseAmount\":1.5843\n}\n\nprint(client.orderMarketSell(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"baseAmount\":1.5843\n        }\n    )\";\n\n    std::cout << client.orderMarketSell(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "info": "Sets the settings for the object. Only the requested parameters are included in the response", 
      "group": "Spot", 
      "name": "setConfig", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "<i>requested config</i>"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"restEndpoint\":\"https://api2.binance.com\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "setConfig", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "accessKey", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "secretKey", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "restEndpoint", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "publicWebsocketEndpoint", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "privateWebsocketEndpoint", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "restRequestTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "websocketConnectTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]</p>", 
              "optional": false, 
              "field": "websocketIdleTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"restEndpoint\":\"https://api2.binance.com\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "warn": "The requested endpoint must be included in the endpoint candidates, otherwise it returns an error. See <a href=#api-Spot-getEndpointCandidates>getEndpointCandidates</a>.", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\"accessKey\":\"new access key\",\"secretKey\":\"new secret key\",\"websocketIdleTimeout\":2000}\n\nprint(client.setConfig(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.setConfig(R\"({\"accessKey\":\"new access key\",\"secretKey\":\"new secret key\",\"websocketIdleTimeout\":2000})\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "setOrderRoundingRule", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "<i>requested field</i>", 
              "type": "String"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"marketSellBaseAmount\":\"floor\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "setOrderRoundingRule", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitBuyPrice", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitBuyBaseAmount", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitSellPrice", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "limitSellBaseAmount", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "marketBuyQuoteAmount", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "marketSellBaseAmount", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"marketSellBaseAmount\":\"floor\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"limitBuyPrice\":\"ceil\",\n    \"limitSellBaseAmount\":\"floor\"\n}\n\nprint(client.setOrderRoundingRule(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n    std::string request = R\"(\n        {\n            \"limitBuyPrice\":\"ceil\"\n        }\n    )\";\n\n    std::cout << client.setOrderRoundingRule(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "setWithdrawRoundingRule", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "roundingRule", 
              "type": "String"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"roundingRule\":\"ceil\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "setWithdrawRoundingRule", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "allowedValues": [
                "ceil", 
                "floor", 
                "round"
              ], 
              "field": "roundingRule", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"roundingRule\":\"ceil\"\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.setWithdrawRoundingRule({\"roundingRule\":\"ceil\"}))\n# or\nprint(client.setWithdrawRoundingRule('{\"roundingRule\":\"floor\"}'))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n    \n    std::string request = R\"(\n        {\n            \"roundingRule\":\"ceil\"\n        }\n    )\";\n\n    std::cout << client.setWithdrawRoundingRule(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "All": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "info": "Start updating balance via websocket", 
      "group": "Spot", 
      "name": "subscribeBalance", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "subscribeBalance", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reconnect", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Forbidden"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"reconnect\":false\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.subscribeBalance())\n# or\nprint(client.subscribeBalance(\"\"))\n# or\nprint(client.subscribeBalance({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.subscribeBalance() << std::endl;\n    // or\n    std::cout << client.subscribeBalance(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "unsupported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "info": "Start updating orderbooks via websocket", 
      "group": "Spot", 
      "name": "subscribeOrderbook", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.symbol"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"subscribed\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"BTC-USDT\"\n            }\n        ],\n        \"subscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"ETH-USDT\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "subscribeOrderbook", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market", 
              "type": "ObjectArray", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field is true, reconnect the websocket including the requested markets to the the markets being subscribed</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reconnect", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]<br>If this function does not complete within requestTimeout, it returns error</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "requestTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "warn": "Binance : The requestTimeout increases by the requested market size.<br>requestTimeout = requestTimeout + 0.5 * market size", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.subscribeOrderbook(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.subscribeOrderbook(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "info": "Start updating tickers via websocket", 
      "group": "Spot", 
      "name": "subscribeTicker", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribed.symbol"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "subscribeFailed.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"subscribed\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"BTC-USDT\"\n            }\n        ],\n        \"subscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"ETH-USDT\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "subscribeTicker", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market", 
              "type": "ObjectArray", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field is true, reconnect the websocket including the requested markets to the the markets being subscribed</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reconnect", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]<br>If this function does not complete within requestTimeout, it returns error</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "requestTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.subscribeTicker(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.subscribeTicker(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "info": "Stop updating balance via websocket", 
      "group": "Spot", 
      "name": "unsubscribeBalance", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "unsubscribeBalance", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "", 
              "type": "NoParam", 
              "options": [
                [
                  "Ignored"
                ], 
                [
                  "Forbidden"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.unsubscribeBalance())\n# or\nprint(client.unsubscribeBalance(\"\"))\n# or\nprint(client.unsubscribeBalance({}))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.unsubscribeBalance() << std::endl;\n    // or\n    std::cout << client.unsubscribeBalance(\"\") << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "unsupported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "info": "Stop updating orderbooks via websocket", 
      "group": "Spot", 
      "name": "unsubscribeOrderbook", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.symbol"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"unsubscribed\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"BTC-USDT\"\n            }\n        ],\n        \"unsubscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"ETH-USDT\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "unsubscribeOrderbook", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market", 
              "type": "ObjectArray", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field is true, reconnect the websocket excluding the requested markets for the the markets being subscribed</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reconnect", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Ignored", 
                  "always true"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]<br>If this function does not complete within requestTimeout, it returns error</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "requestTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.unsubscribeOrderbook(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.unsubscribeOrderbook(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "info": "Stop updating tickers via websocket", 
      "group": "Spot", 
      "name": "unsubscribeTicker", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribed.symbol"
            }, 
            {
              "type": "ObjectArray", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.baseCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.quoteCurrency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "unsubscribeFailed.symbol"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"unsubscribed\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"BTC-USDT\"\n            }\n        ],\n        \"unsubscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"ETH-USDT\"\n            }\n        ]\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "unsubscribeTicker", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market", 
              "type": "ObjectArray", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.baseCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "market.quoteCurrency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>If this field is true, reconnect the websocket excluding the requested markets for the the markets being subscribed</p>", 
              "optional": false, 
              "defaultValue": "false", 
              "field": "reconnect", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Ignored", 
                  "always true"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>[ms]<br>If this function does not complete within requestTimeout, it returns error</p>", 
              "optional": false, 
              "defaultValue": "5000", 
              "field": "requestTimeout", 
              "type": "Uint", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.unsubscribeTicker(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.unsubscribeTicker(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }, 
    {
      "group": "Spot", 
      "name": "withdraw", 
      "success": {
        "fields": {
          "Response : ": [
            {
              "type": "Uint", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "requestedApiCount"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "currency"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "<p>If not exist, return empty string</p>", 
              "optional": false, 
              "field": "chain"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "address"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "<p>If not exist, return empty string</p>", 
              "optional": false, 
              "field": "tag"
            }, 
            {
              "type": "String", 
              "group": "Success 200", 
              "description": "", 
              "optional": false, 
              "field": "orderId"
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":2,\n        \"currency\":\"MATIC\",\n        \"chain\":\"ETH\",\n        \"address\":\"0xAFWE13FAES1387\",\n        \"tag\":\"\",\n        \"orderId\":\"451399413\"\n    }\n}", 
            "type": "json", 
            "title": "Success-Response :"
          }
        ]
      }, 
      "title": "withdraw", 
      "url": "/Spot", 
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "currency", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "<p>if this field is empty, default chain is used</p>", 
              "optional": false, 
              "field": "chain", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Ignored"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "address", 
              "type": "String", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "tag", 
              "type": "String", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "amount", 
              "type": "Double", 
              "options": [
                [
                  "Mandatory"
                ], 
                [
                  "Mandatory"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "feeInAmount", 
              "type": "Bool", 
              "options": [
                [
                  "Optional"
                ], 
                [
                  "Optional"
                ]
              ]
            }, 
            {
              "group": "Parameter", 
              "description": "", 
              "optional": false, 
              "field": "internal", 
              "type": "Bool", 
              "options": [
                [
                  "Ignored"
                ], 
                [
                  "Optional"
                ]
              ]
            }
          ]
        }, 
        "examples": [
          {
            "content": "{\n    \"currency\":\"MATIC\",\n    \"chain\":\"ETH\",\n    \"address\":\"0xAFWE13FAES1387\",\n    \"amount\":1365.135468\n}", 
            "type": "json", 
            "title": "Request Example : "
          }
        ]
      }, 
      "danger": "Binance : If the fast draw setting for the account is enabled, internal draw will be executed.", 
      "filename": "tmp/Spot.js", 
      "version": "0.0.0", 
      "examples": [
        {
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"currency\":\"MATIC\",\n    \"chain\":\"ETH\",\n    \"address\":\"0xAFWE13FAES1387\",\n    \"amount\":1365.135468\n}\n\nprint(client.withdraw(request))", 
          "type": "python", 
          "title": "python"
        }, 
        {
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"currency\":\"MATIC\",\n            \"chain\":\"ETH\",\n            \"address\":\"0xAFWE13FAES1387\",\n            \"amount\":1365.135468\n        }\n    )\";\n\n    std::cout << client.withdraw(request) << std::endl;\n    \n    return 0;\n}", 
          "type": "cpp", 
          "title": "c++"
        }
      ], 
      "exchanges": {
        "Binance": "supported", 
        "Upbit": "supported"
      }, 
      "groupTitle": "Spot", 
      "type": "onex"
    }
  ]
});