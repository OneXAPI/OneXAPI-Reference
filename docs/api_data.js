define({
  "api": [
    {
      "type": "onex",
      "url": "/Futures",
      "title": "General",
      "name": "General",
      "group": "Futures",
      "version": "0.0.0",
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "isCategory": true,
      "exchanges": {}
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "Market",
      "name": "Market",
      "group": "Futures",
      "version": "0.0.0",
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "isCategory": true,
      "exchanges": {}
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "Trade",
      "name": "Trade",
      "group": "Futures",
      "version": "0.0.0",
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "isCategory": true,
      "exchanges": {}
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "Wallet",
      "name": "Wallet",
      "group": "Futures",
      "version": "0.0.0",
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "isCategory": true,
      "exchanges": {}
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "changeLeverage",
      "name": "changeLeverage",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "defaultValue": "PERP",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "leverage",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"leverage\":10\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "<p>If this field is empty, all symbols have the same leverage</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "<p>If this field is empty, all symbols have the same leverage</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": "<p>If this field is empty, all symbols have the same leverage</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": "<p>If this field is empty, all symbols have the same leverage</p>"
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "leverage",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTCUSDT\",\n        \"leverage\":10\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"leverage\":10\n        }\n    )\";\n\n    std::cout << client.changeLeverage(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "changeMarginType",
      "name": "changeMarginType",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "defaultValue": "PERP",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "cross",
                "isolated"
              ],
              "optional": false,
              "field": "marginType",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"marginType\":\"isolated\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "cross",
                "isolated"
              ],
              "optional": false,
              "field": "marginType",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTCUSDT\",\n        \"marginType\":\"isolated\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"marginType\":\"isolated\"\n        }\n    )\";\n\n    std::cout << client.changeMarginType(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "fetchBalance",
      "name": "fetchBalance",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "forceRestApi",
              "defaultValue": "false",
              "description": "<p>force to update using REST API</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "StringArray",
              "optional": false,
              "field": "currencies",
              "description": "<p>If not exist, return all currencies</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "zeroBalance",
              "defaultValue": "false",
              "description": "<p>Whether to include assets with zero balance</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"forceRestApi\":false,\n    \"currencies\":[\"BTC\", \"ETH\", \"XRP\", \"ADA\"]\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "rest",
                "websocket"
              ],
              "optional": false,
              "field": "fetchType",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "balance",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "balance.<i>currency name</i>",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "balance.currency.balance",
              "description": "<p>wallet balance including isolated balance</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "balance.currency.crossWalletBalance",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "balance.currency.availableBalance",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fetchType\":\"rest\",\n        \"balance\":{\n            \"BTC\":{\n                \"balance\":\"3.15437\",\n                \"crossWalletBalance\":\"1.1357\"\n            },\n            \"ETH\":{\n                \"balance\":\"124.8435\",\n                \"crossWalletBalance\":\"83.5831\"\n            }\n        }\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"forceRestApi\":false,\n            \"currencies\":[\"BTC\", \"ETH\"]\n        }\n    )\";\n\n    std::cout << client.fetchBalance(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "warn": "During websocket is running, fetchBalance does not send rest API request. <br>If you want to force to send rest API, set forceRestApi parameter as true.",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "fetchCandleHistory",
      "name": "fetchCandleHistory",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "defaultValue": "PERP",
              "description": "<p>&quot;PERP&quot; or date([YYMMDD] format such as &quot;220930&quot;, &quot;221015&quot;) are allowed</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "interval",
              "description": "<p>This param depends on the exchange. Please check available intervals using getCandleIntervalCandidates</p>",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "startTime",
              "description": "<p>[s]</p>",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "endTime",
              "defaultValue": "now",
              "description": "<p>[s]</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "fetchInterval",
              "defaultValue": "200",
              "description": "<p>[ms]<br>frequent api request may exceeds rate limit, therefore apiReqInterval decides how long time to sleep between each api request</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"PERP\",\n    \"interval\":\"1min\",\n    \"startTime\":1656042045,\n    \"endTime\":1656063182,\n    \"fetchInterval\":200\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "candles",
              "description": "<p>Ascending order according to timestamp</p>"
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "candles.timestamp",
              "description": "<p>[s]</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "candles.openPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "candles.closePrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "candles.highPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "candles.lowPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "candles.baseVolume",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "candles.quoteVolume",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":31,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"candles\":[\n            {\n                \"timestamp\":1656042060,\n                \"openPrice\":\"21035.12\",\n                \"closePrice\":\"21086.83\",\n                \"highPrice\":\"21132.28\",\n                \"lowPrice\":\"21028.83\",\n                \"baseVolume\":\"0.83648\",\n                \"quoteVolume\":\"1087.424\"\n            },\n            {\n                \"timestamp\":1656042120,\n                \"openPrice\":\"21086.83\",\n                \"closePrice\":\"21098.19\",\n                \"highPrice\":\"21099.89\",\n                \"lowPrice\":\"21073.14\",\n                \"baseVolume\":\"0.58492\",\n                \"quoteVolume\":\"760.396\"\n            },\n            ...\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"PERP\",\n    \"interval\":\"3min\",\n    \"startTime\":1659189600,\n    \"fetchInterval\":100\n}\n\nprint(client.fetchCandleHistory(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"PERP\",\n            \"interval\":\"3min\",\n            \"startTime\":1659189600,\n            \"fetchInterval\":100\n        }\n    )\";\n\n    std::cout << client.fetchCandleHistory(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "warn": "When enormous amount of data is requested, fetchCandleHistory takes a long time to execute.",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "fetchFundingFeeIncomeHistory",
      "name": "fetchFundingFeeIncomeHistory",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "startTime",
              "description": "<p>[ms]</p>",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "endTime",
              "defaultValue": "now",
              "description": "<p>[ms]</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"startTime\":1656042045125,\n    \"endTime\":1656063182432\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "incomes",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "incomes.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "incomes.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "incomes.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "incomes.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "incomes.income",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "incomes.incomeCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "incomes.timestamp",
              "description": "<p>[ms]</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"incomes\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\",\n                \"income\":\"-31.13586\",\n                \"incomeCurrency\":\"USDT\",\n                \"timestamp\":1656044000000\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"startTime\":1656042045125,\n            \"endTime\":1656063182432\n        }\n    )\";\n\n    std::cout << client.fetchFundingFeeIncomeHistory(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "fetchLeverage",
      "name": "fetchLeverage",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "forceRestApi",
              "defaultValue": "false",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "rest",
                "websocket"
              ],
              "optional": false,
              "field": "fetchType",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "leverages",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "leverages.baseCurrency",
              "description": "<p>If this field is empty, all symbols have the same leverage</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "leverages.quoteCurrency",
              "description": "<p>If this field is empty, all symbols have the same leverage</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "leverages.expiration",
              "description": "<p>If this field is empty, all symbols have the same leverage</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "leverages.symbol",
              "description": "<p>If this field is empty, all symbols have the same leverage</p>"
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "leverages.leverage",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fetchType\":\"rest\",\n        \"leverages\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\",\n                \"leverage\":10\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Bybit::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchLeverage(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "fetchMarginType",
      "name": "fetchMarginType",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "forceRestApi",
              "defaultValue": "false",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "rest",
                "websocket"
              ],
              "optional": false,
              "field": "fetchType",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "marginTypes",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "marginTypes.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "marginTypes.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "marginTypes.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "marginTypes.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "cross",
                "isolated"
              ],
              "optional": false,
              "field": "marginTypes.marginType",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fetchType\":\"websocket\",\n        \"marginTypes\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\",\n                \"marginType\":\"cross\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Bybit::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchMarginType(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "fetchMarketInfo",
      "name": "fetchMarketInfo",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "defaultValue": "PERP",
              "description": "<p>&quot;PERP&quot; or date([YYMMDD] format such as &quot;220930&quot;, &quot;221015&quot;) are allowed</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "forceRestApi",
              "defaultValue": "false",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "rest",
                "websocket"
              ],
              "optional": false,
              "field": "fetchType",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "markPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "fundingRate",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "nextFundingTime",
              "description": "<p>[s]</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fetchType\":\"rest\",\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTCUSDT\",\n        \"markPrice\":\"19358.15\",\n        \"fundingRate\":\"0.0025\",\n        \"nextFundingTime\":1661406463\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchMarketInfo(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "fetchMarkets",
      "name": "fetchMarkets",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": "<p>&quot;PERP&quot; or date([YYMMDD] format such as &quot;220930&quot;, &quot;221015&quot;) are allowed</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"quoteCurrency\":\"USDT\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "markets",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "markets.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "markets.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "markets.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "markets.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"markets\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\"\n            },\n            {\n                \"baseCurrency\":\"ETH\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"ETHUSDT\"\n            },\n            {\n                \"baseCurrency\":\"XRP\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"XRPUSDT\"\n            },\n            {\n                \"baseCurrency\":\"ADA\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"ADAUSDT\"\n            },\n            ...\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchMarkets(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchMarkets(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "fetchOpenOrders",
      "name": "fetchOpenOrders",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "buy",
                "sell"
              ],
              "optional": false,
              "field": "side",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"side\":\"buy\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "openOrders",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "openOrders.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "openOrders.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "openOrders.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "openOrders.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "openOrders.orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "buy",
                "sell"
              ],
              "optional": false,
              "field": "openOrders.side",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "long",
                "short"
              ],
              "optional": false,
              "field": "openOrders.positionSide",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Bool",
              "optional": false,
              "field": "openOrders.reduceOnly",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "openOrders.originalAmount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "openOrders.filledAmount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "openOrders.remainingAmount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "openOrders.originalPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "openOrders.created",
              "description": "<p>[ms]</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":2,\n        \"openOrders\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\",\n                \"orderId\":\"38463215\",\n                \"side\":\"buy\",\n                \"positionSide\":\"long\",\n                \"reduceOnly\":false,\n                \"originalAmount\":\"1.5984\",\n                \"filledAmount\":\"0.3686\",\n                \"remainingAmount\":\"1.2298\",\n                \"originalPrice\":\"22135.35\",\n                \"created\":1656044045\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchOpenOrders(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "fetchOrderInfo",
      "name": "fetchOrderInfo",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "defaultValue": "PERP",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": "<p>Client Order ID as assigned by the client</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"orderId\":\"38463215\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "buy",
                "sell"
              ],
              "optional": false,
              "field": "side",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "long",
                "short"
              ],
              "optional": false,
              "field": "positionSide",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Bool",
              "optional": false,
              "field": "reduceOnly",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "originalAmount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "filledAmount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "remainingAmount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "originalPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "avgFillPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "created",
              "description": "<p>[ms]</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "feeCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "feeAmount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "open",
                "filled",
                "cancelled"
              ],
              "optional": false,
              "field": "status",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "fills",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "fills.orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "fills.price",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "fills.amount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "fills.timestamp",
              "description": "<p>[ms]</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":2,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"side\":\"buy\",\n        \"positionSide\":\"long\",\n        \"reduceOnly\":false,\n        \"originalAmount\":\"1.5984\",\n        \"filledAmount\":\"0.3686\",\n        \"remainingAmount\":\"1.2298\",\n        \"originalPrice\":\"22135.35\",\n        \"avgFillPrice\":\"22135.28\",\n        \"created\":1656044045\n        \"feeCurrency\":\"BTC\",\n        \"feeAmount\":\"0.00027645\",\n        \"status\":\"open\",\n        \"fills\":[\n            {\n                \"orderId\":\"38435724\",\n                \"price\":\"22135.28\",\n                \"amount\":\"0.3686\",\n                \"timestamp\":1661327586135\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"orderId\":\"13868943153\"\n        }\n    )\";\n\n    std::cout << client.fetchOrderInfo(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "warn": "If both <b><i>orderId</b></i> and <b><i>clientOrderId</b></i> are options, either of them must be sent.<br>If both are sent, <b><i>orderId</b></i> is used preferentially.",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "fetchOrderbook",
      "name": "fetchOrderbook",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "defaultValue": "PERP",
              "description": "<p>&quot;PERP&quot; or date([YYMMDD] format such as &quot;220930&quot;, &quot;221015&quot;) are allowed</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "forceRestApi",
              "defaultValue": "false",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"220930\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "rest",
                "websocket"
              ],
              "optional": false,
              "field": "fetchType",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "timestamp",
              "description": "<p>[ms]</p>"
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "bids",
              "description": "<p>Descending order according to timestamp</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "bids.price",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "bids.size",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "asks",
              "description": "<p>Ascending order according to price</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "asks.price",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "asks.size",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"220930\",\n        \"symbol\":\"BTCUSDT_220930\",\n        \"fetchType\":\"websocket\",\n        \"timestamp\":1656044045154,\n        \"bids\":[\n            {\n                \"price\":\"21458.15\",\n                \"size\":\"0.1548\"\n            },\n            {\n                \"price\":\"21458.08\",\n                \"size\":\"0.1578\"\n            },\n            {\n                \"price\":\"21458.03\",\n                \"size\":\"0.3518\"\n            },\n            ...\n        ],\n        \"asks\":[\n            {\n                \"price\":\"21458.16\", \n                \"size\":\"0.0232\"\n            },\n            {\n                \"price\":\"21458.32\",\n                \"size\":\"0.2158\"\n            },\n            {\n                \"price\":\"21458.36\",\n                \"size\":\"0.3183\"\n            },\n            ...\n        ]    \n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"220930\"\n}\n\nprint(client.fetchOrderbook(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    )\";\n\n    std::cout << client.fetchOrderbook(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "warn": "During orderbook websocket is running, fetchOrderbook does not send rest API request.<br>If you want to force to send rest API, set forceRestApi parameter as true.",
      "danger": "Binance : Timestamp does not mean the server time; it means the time when the response arrived.",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "fetchPositions",
      "name": "fetchPositions",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "forceRestApi",
              "defaultValue": "false",
              "description": "<p>force to update using REST API</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "zeroAmount",
              "defaultValue": "false",
              "description": "<p>Whether to include positions with zero amount</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "rest",
                "websocket"
              ],
              "optional": false,
              "field": "fetchType",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "positions",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "positions.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "positions.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "positions.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "positions.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "positions.unrealizedProfit",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "positions.entryPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "positions.positionAmt",
              "description": "<p>positive means long position, negative means short position</p>"
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "positions.leverage",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "cross",
                "isolated"
              ],
              "optional": false,
              "field": "positions.marginType",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fetchType\":\"rest\",\n        \"positions\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\",\n                \"unrealizedProfit\":\"10.23854\",\n                \"entryPrice\":\"21752.12\",\n                \"positionAmt\":\"1.235\",\n                \"leverage\":10,\n                \"marginType\":\"isolated\",\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchPositions(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "fetchTicker",
      "name": "fetchTicker",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "defaultValue": "PERP",
              "description": "<p>&quot;PERP&quot; or date([YYMMDD] format such as &quot;220930&quot;, &quot;221015&quot;) are allowed</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "forceRestApi",
              "defaultValue": "false",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"PERP\",\n    \"forceRestApi\":true\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "rest",
                "websocket"
              ],
              "optional": false,
              "field": "fetchType",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "openTime",
              "description": "<p>[s] open Time(UTC)</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "openPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "closePrice",
              "description": "<p>close Price(last Price)</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "lowPrice",
              "description": "<p>low Price(24h)</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "highPrice",
              "description": "<p>high Price(24h)</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "baseVolume",
              "description": "<p>baseCurrency Volume(24h)</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "quoteVolume",
              "description": "<p>quoteCurrency Volume(24h)</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"fetchType\":\"rest\",\n        \"openTime\":\"1656044045,\n        \"openPrice\":\"21004.0\",\n        \"closePrice\":\"21432.14\",\n        \"lowPrice\":\"20844.64\",\n        \"highPrice\":\"21662.5\",\n        \"baseVolume\":\"591235.5124\",\n        \"quoteVolume\":\"1529512525.23145\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"expiration\":\"PERP\"\n}\n\nprint(client.fetchTicker(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\"\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    )\";\n\n    std::cout << client.fetchTicker(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "warn": "During ticker websocket is running, fetchTicker does not send rest API request.<br>If you want to force to send rest API, set forceRestApi parameter as true.",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "fetchTradingFee",
      "name": "fetchTradingFee",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "defaultValue": "PERP",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "fees",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "fees.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "fees.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "fees.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "fees.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "fees.makerFee",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "fees.takerFee",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fees\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\",\n                \"makerFee\":\"0.0004\",\n                \"takerFee\":\"0.00075\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchTradingFee(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "danger": "Binance : Trading fee is a value before bnb discount",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "getCandleIntervalCandidates",
      "name": "getCandleIntervalCandidates",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "StringArray",
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
              "optional": false,
              "field": "intervals",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"intervals\":[\n            \"15min\",\"1day\",\"1hour\",\"1min\",\"1month\",\"1week\",\"30min\",\"3min\",\"4hour\",\"5min\"\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.getCandleIntervalCandidates())\n# or\nprint(client.getCandleIntervalCandidates(\"\"))\n# or\nprint(client.getCandleIntervalCandidates({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.getCandleIntervalCandidates() << std::endl;\n    // or\n    std::cout << client.getCandleIntervalCandidates(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "getConfig",
      "name": "getConfig",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "exchange",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "Spot",
                "Futures"
              ],
              "optional": false,
              "field": "instrument",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "accessKey",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "secretKey",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "restEndpoint",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "publicWebsocketEndpoint",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "privateWebsocketEndpoint",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "restRequestTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]</p>"
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "websocketConnectTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]</p>"
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "websocketIdleTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"exchange\":\"Binance\",\n        \"instrument\":\"Futures\",\n        \"accessKey\":\"\",\n        \"secretKey\":\"\",\n        \"restEndpoint\":\"https://api.binance.com\",\n        \"publicWebsocketEndpoint\":\"wss://stream.binance.com:9443\",\n        \"privateWebsocketEndpoint\":\"wss://stream.binance.com:9443\",\n        \"restRequestTimeout\":5000,\n        \"websocketConnectTimeout\":5000,\n        \"websocketIdleTimeout\":5000\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.getConfig())\n# or\nprint(client.getConfig(\"\"))\n# or\nprint(client.getConfig({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.getConfig() << std::endl;\n    // or\n    std::cout << client.getConfig(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "getEndpointCandidates",
      "name": "getEndpointCandidates",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "StringArray",
              "optional": false,
              "field": "restEndpoints",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "StringArray",
              "optional": false,
              "field": "publicWebsocketEndpoints",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "StringArray",
              "optional": false,
              "field": "privateWebsocketEndpoints",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"restEndpoints\":[\n            \"https://api.binance.com\",\n            \"https://api1.binance.com\",\n            \"https://api2.binance.com\",\n            \"https://api3.binance.com\",\n        ],\n        \"publicWebsocketEndpoints\":[\n            \"wss://stream.binance.com:9443\"\n        ],\n        \"privateWebsocketEndpoints\":[\n            \"wss://stream.binance.com:9443\"\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.getEndpointCandidates())\n# or\nprint(client.getEndpointCandidates(\"\"))\n# or\nprint(client.getEndpointCandidates({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.getEndpointCandidates() << std::endl;\n    // or\n    std::cout << client.getEndpointCandidates(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "getOrderRoundingRule",
      "name": "getOrderRoundingRule",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitBuyPrice",
              "defaultValue": "round",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitBuyBaseAmount",
              "defaultValue": "round",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitSellPrice",
              "defaultValue": "round",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitSellBaseAmount",
              "defaultValue": "round",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "marketBuyBaseAmount",
              "defaultValue": "round",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "marketSellBaseAmount",
              "defaultValue": "round",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"limitBuyPrice\":\"ceil\",             \n        \"limitBuyBaseAmount\":\"floor\",\n        \"limitSellPrice\":\"ceil\",\n        \"limitSellBaseAmount\":\"floor\",\n        \"marketBuyBaseAmount\":\"round\",\n        \"marketSellBaseAmount\":\"round\",\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.getOrderRoundingRule())\n# or\nprint(client.getOrderRoundingRule(\"\"))\n# or\nprint(client.getOrderRoundingRule({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.getOrderRoundingRule() << std::endl;\n    // or\n    std::cout << client.getOrderRoundingRule(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "getSubscribingMarketInfo",
      "name": "getSubscribingMarketInfo",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "marketInfo",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "marketInfo.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "marketInfo.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "marketInfo.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "marketInfo.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"marketInfo\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"PERP\",\n                \"symbol\": \"BTCUSDT\"\n            },\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"220930\",\n                \"symbol\": \"ETHUSDT_220930\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.getSubscribingMarketInfo())\n# or\nprint(client.getSubscribingMarketInfo(\"\"))\n# or\nprint(client.getSubscribingMarketInfo({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.getSubscribingMarketInfo() << std::endl;\n    // or\n    std::cout << client.getSubscribingMarketInfo(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "info": "Returns marketInfo symbols being received on websocket",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "getSubscribingOrderbooks",
      "name": "getSubscribingOrderbooks",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "orderbooks",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderbooks.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderbooks.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderbooks.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderbooks.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"orderbooks\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"PERP\",\n                \"symbol\": \"BTCUSDT\"\n            },\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"220930\",\n                \"symbol\": \"ETHUSDT_220930\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.getSubscribingOrderbooks())\n# or\nprint(client.getSubscribingOrderbooks(\"\"))\n# or\nprint(client.getSubscribingOrderbooks({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.getSubscribingOrderbooks() << std::endl;\n    // or\n    std::cout << client.getSubscribingOrderbooks(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "info": "Returns orderbook symbols being received on websocket",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "getSubscribingTickers",
      "name": "getSubscribingTickers",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "tickers",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "tickers.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "tickers.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "tickers.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "tickers.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"tickers\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"PERP\",\n                \"symbol\": \"BTCUSDT\"\n            },\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"220930\",\n                \"symbol\": \"ETHUSDT_220930\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.getSubscribingTickers())\n# or\nprint(client.getSubscribingTickers(\"\"))\n# or\nprint(client.getSubscribingTickers({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.getSubscribingTickers() << std::endl;\n    // or\n    std::cout << client.getSubscribingTickers(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "info": "Returns ticker symbols being received on websocket",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "has",
      "name": "has",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "api",
              "description": "<p>if not exist, return all APIs</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"api\":\"orderLimitBuy\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Bool",
              "optional": false,
              "field": "<i>api name</i>",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"orderLimitBuy\":true\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nprint(client.has({}))\n# or\nprint(client.has(\"{}\"))\n# or\nprint(client.has({\"api\":\"orderLimitBuy\"}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.has(\"{}\") << std::endl;\n    // or\n    std::cout << client.has(R\"({\"api\":\"withdraw\"})\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "info": "Check if API exists or not",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "isSubscribingBalance",
      "name": "isSubscribingBalance",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Bool",
              "optional": false,
              "field": "isSubscribing",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"isSubscribing\": true\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nprint(client.isSubscribingBalance())\n# or\nprint(client.isSubscribingBalance(\"\"))\n# or\nprint(client.isSubscribingBalance({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.isSubscribingBalance() << std::endl;\n    // or\n    std::cout << client.isSubscribingBalance(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "info": "Returns whether balance is being updated via websocket",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "orderCancel",
      "name": "orderCancel",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "defaultValue": "PERP",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": "<p>Client Order ID as assigned by the client</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"orderId\":\"38463215\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"orderId\":\"39713467831\"\n        }\n    )\";\n\n    std::cout << client.orderCancel(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "warn": "If both <b><i>orderId</b></i> and <b><i>clientOrderId</b></i> are options, either of them must be sent.<br>If both are sent, <b><i>orderId</b></i> is used preferentially.",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "orderLimitBuy",
      "name": "orderLimitBuy",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "defaultValue": "PERP",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Double",
              "optional": false,
              "field": "price",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Double",
              "optional": false,
              "field": "baseAmount",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "bool",
              "optional": false,
              "field": "reduceOnly",
              "defaultValue": "false",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": "<p>Client Order ID as assigned by the client</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Double",
              "optional": false,
              "field": "amplifier",
              "defaultValue": "1.0",
              "description": "<p>If this field exists, the requested price will be <b>price*amplifier</b></p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "gtc",
                "ioc",
                "fok"
              ],
              "optional": false,
              "field": "type",
              "defaultValue": "gtc",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"price\":21351.1384,\n    \"baseAmount\":1.5843,\n    \"amplifier\":1.03       //requested price will be 21351.1384*1.03 = 21991.672552\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "price",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "baseAmount",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"price\":\"21991.67\",\n        \"baseAmount\":\"1.584\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\t\n    std::string userInfo = R\"({\n        \"accessKey\":\"user access key\",\n        \"secretKey\":\"user secrey key\"\n    })\";\n    OneXAPI::Binance::Futures client(userInfo\n    std::string request = R\"({\n        \"baseCurrency\":\"XRP\",\n        \"quoteCurrency\":\"USDT\",\n        \"price\":0.4348,\n        \"baseAmount\":23.834219\n    })\";\n\n    std::cout << client.orderLimitBuy(request) << std::endl;\n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Futures-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Futures-setOrderRoundingRule>setOrderRoundingRule</a>.",
      "danger": "Currently, OneXAPI supports only One-way mode trading.",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "orderLimitSell",
      "name": "orderLimitSell",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "defaultValue": "PERP",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Double",
              "optional": false,
              "field": "price",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Double",
              "optional": false,
              "field": "baseAmount",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "bool",
              "optional": false,
              "field": "reduceOnly",
              "defaultValue": "false",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": "<p>Client Order ID as assigned by the client</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Double",
              "optional": false,
              "field": "amplifier",
              "defaultValue": "1.0",
              "description": "<p>If this field exists, the requested price will be <b>price*amplifier</b></p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "gtc",
                "ioc",
                "fok"
              ],
              "optional": false,
              "field": "type",
              "defaultValue": "gtc",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"price\":21351.1384,\n    \"baseAmount\":1.5843,\n    \"amplifier\":0.97       //requested price will be 21351.1384*0.97 = 20710.604248\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "price",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "baseAmount",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"price\":\"20710.6\",\n        \"baseAmount\":\"1.584\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"XRP\",\n            \"quoteCurrency\":\"USDT\",\n            \"price\":486.2348,\n            \"baseAmount\":23.834219\n        }\n    )\";\n\n    std::cout << client.orderLimitSell(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Futures-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Futures-setOrderRoundingRule>setOrderRoundingRule</a>.",
      "danger": "Currently, OneXAPI supports only One-way mode trading.",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "orderMarketBuy",
      "name": "orderMarketBuy",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "defaultValue": "PERP",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Double",
              "optional": false,
              "field": "baseAmount",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "bool",
              "optional": false,
              "field": "reduceOnly",
              "defaultValue": "false",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": "<p>Client Order ID as assigned by the client</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"baseAmount\":1.5843\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "baseAmount",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"baseAmount\":\"1.584\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"baseAmount\":1.5843\n        }\n    )\";\n\n    std::cout << client.orderMarketBuy(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Futures-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Futures-setOrderRoundingRule>setOrderRoundingRule</a>.",
      "danger": "Currently, OneXAPI supports only One-way mode trading.",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "orderMarketSell",
      "name": "orderMarketSell",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "defaultValue": "PERP",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Double",
              "optional": false,
              "field": "baseAmount",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "bool",
              "optional": false,
              "field": "reduceOnly",
              "defaultValue": "false",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": "<p>Client Order ID as assigned by the client</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"baseAmount\":1.5843\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "baseAmount",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"expiration\":\"PERP\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"price\":\"20710.6\",\n        \"baseAmount\":\"1.584\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Futures client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"baseAmount\":1.5843\n        }\n    )\";\n\n    std::cout << client.orderMarketSell(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Futures-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Futures-setOrderRoundingRule>setOrderRoundingRule</a>.",
      "danger": "Currently, OneXAPI supports only One-way mode trading.",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "setConfig",
      "name": "setConfig",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "accessKey",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "secretKey",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "restEndpoint",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "publicWebsocketEndpoint",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "privateWebsocketEndpoint",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "restRequestTimeout",
              "description": "<p>[ms]</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "websocketConnectTimeout",
              "description": "<p>[ms]</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "websocketIdleTimeout",
              "description": "<p>[ms]</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"restEndpoint\":\"https://api2.binance.com\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "<i>requested config</i>",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"restEndpoint\":\"https://api2.binance.com\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\"accessKey\":\"new access key\",\"secretKey\":\"new secret key\",\"websocketIdleTimeout\":2000}\n\nprint(client.setConfig(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.setConfig(R\"({\"accessKey\":\"new access key\",\"secretKey\":\"new secret key\",\"websocketIdleTimeout\":2000})\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "info": "Sets the settings for the object. Only the requested parameters are included in the response",
      "warn": "The requested endpoint must be included in the endpoint candidates, otherwise it returns an error. See <a href=#api-Spot-getEndpointCandidates>getEndpointCandidates</a>.",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "setOrderRoundingRule",
      "name": "setOrderRoundingRule",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitBuyPrice",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitBuyBaseAmount",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitSellPrice",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitSellBaseAmount",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "marketBuyBaseAmount",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "marketSellBaseAmount",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"marketSellBaseAmount\":\"floor\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "<i>requested field</i>",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"marketSellBaseAmount\":\"floor\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"limitBuyPrice\":\"ceil\",\n    \"limitSellBaseAmount\":\"floor\"\n}\n\nprint(client.setOrderRoundingRule(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n    std::string request = R\"(\n        {\n            \"limitBuyPrice\":\"ceil\"\n        }\n    )\";\n\n    std::cout << client.setOrderRoundingRule(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "subscribeBalance",
      "name": "subscribeBalance",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nprint(client.subscribeBalance())\n# or\nprint(client.subscribeBalance(\"\"))\n# or\nprint(client.subscribeBalance({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.subscribeBalance() << std::endl;\n    // or\n    std::cout << client.subscribeBalance(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "info": "Start updating balance via websocket",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "subscribeMarketInfo",
      "name": "subscribeMarketInfo",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "ObjectArray",
              "optional": false,
              "field": "market",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.expiration",
              "defaultValue": "PERP",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "reconnect",
              "defaultValue": "false",
              "description": "<p>If this field is true, reconnect the websocket including the requested markets to the the markets being subscribed</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "requestTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]<br>If the subscription success message does not come in the requestTimeout after the subscription request, the subscription is treated as failed</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        },\n        {\n            \"baseCurrency\":\"ETH\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "subscribed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "subscribeFailed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"subscribed\": [\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\"\n            }\n        ],\n        \"subscribeFailed\": [\n            {\n                \"baseCurrency\":\"ETH\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"220930\",\n                \"symbol\":\"ETHUSDT_220930\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.subscribeMarketInfo(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.subscribeMarketInfo(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "info": "Start updating MarketInfo via websocket",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "subscribeOrderbook",
      "name": "subscribeOrderbook",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "ObjectArray",
              "optional": false,
              "field": "market",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.expiration",
              "defaultValue": "PERP",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "reconnect",
              "defaultValue": "false",
              "description": "<p>If this field is true, reconnect the websocket including the requested markets to the the markets being subscribed</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "requestTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]<br>If the subscription success message does not come in the requestTimeout after the subscription request, the subscription is treated as failed</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\":\"ETH\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "subscribed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "subscribeFailed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"subscribed\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"PERP\",\n                \"symbol\": \"BTCUSDT\"\n            }\n        ],\n        \"subscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"220930\",\n                \"symbol\": \"ETHUSDT_220930\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.subscribeOrderbook(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.subscribeOrderbook(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "info": "Start updating orderbooks via websocket",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "subscribeTicker",
      "name": "subscribeTicker",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "ObjectArray",
              "optional": false,
              "field": "market",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.expiration",
              "defaultValue": "PERP",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "reconnect",
              "defaultValue": "false",
              "description": "<p>If this field is true, reconnect the websocket including the requested markets to the the markets being subscribed</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "requestTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]<br>If the subscription success message does not come in the requestTimeout after the subscription request, the subscription is treated as failed</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        },\n        {\n            \"baseCurrency\":\"ETH\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "subscribed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "subscribeFailed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"subscribed\": [\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\"\n            }\n        ],\n        \"subscribeFailed\": [\n            {\n                \"baseCurrency\":\"ETH\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"220930\",\n                \"symbol\":\"ETHUSDT_220930\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.subscribeTicker(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.subscribeTicker(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "info": "Start updating tickers via websocket",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "unsubscribeBalance",
      "name": "unsubscribeBalance",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Futures(user_info)\n\nprint(client.unsubscribeBalance())\n# or\nprint(client.unsubscribeBalance(\"\"))\n# or\nprint(client.unsubscribeBalance({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::cout << client.unsubscribeBalance() << std::endl;\n    // or\n    std::cout << client.unsubscribeBalance(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "info": "Stop updating balance via websocket",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "unsubscribeMarketInfo",
      "name": "unsubscribeMarketInfo",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "ObjectArray",
              "optional": false,
              "field": "market",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.expiration",
              "defaultValue": "PERP",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "reconnect",
              "defaultValue": "false",
              "description": "<p>If this field is true, reconnect the websocket excluding the requested markets for the the markets being subscribed</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "requestTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]<br>If the subscription success message does not come in the requestTimeout after the subscription request, the subscription is treated as failed</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        },\n        {\n            \"baseCurrency\":\"ETH\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "unsubscribed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "unsubscribeFailed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"unsubscribed\": [\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\"\n            }\n        ],\n        \"unsubscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\":\"229030\",\n                \"symbol\": \"ETHUSDT_220930\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.unsubscribeMarketInfo(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.unsubscribeMarketInfo(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "info": "Stop updating MarketInfo via websocket",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "unsubscribeOrderbook",
      "name": "unsubscribeOrderbook",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "ObjectArray",
              "optional": false,
              "field": "market",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.expiration",
              "defaultValue": "PERP",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "reconnect",
              "defaultValue": "false",
              "description": "<p>If this field is true, reconnect the websocket excluding the requested markets for the the markets being subscribed</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "requestTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]<br>If the subscription success message does not come in the requestTimeout after the subscription request, the subscription is treated as failed</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        },\n        {\n            \"baseCurrency\":\"ETH\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "unsubscribed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "unsubscribeFailed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"unsubscribed\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"PERP\",\n                \"symbol\": \"BTCUSDT\"\n            }\n        ],\n        \"unsubscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\": \"220930\",\n                \"symbol\": \"ETHUSDT_220930\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.unsubscribeOrderbook(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.unsubscribeOrderbook(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "info": "Stop updating orderbooks via websocket",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Futures",
      "title": "unsubscribeTicker",
      "name": "unsubscribeTicker",
      "group": "Futures",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "ObjectArray",
              "optional": false,
              "field": "market",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.baseCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.quoteCurrency",
              "description": "",
              "options": [
                [
                  "Mandatory"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "market.expiration",
              "defaultValue": "PERP",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "reconnect",
              "defaultValue": "false",
              "description": "<p>If this field is true, reconnect the websocket excluding the requested markets for the the markets being subscribed</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "requestTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]<br>If the subscription success message does not come in the requestTimeout after the subscription request, the subscription is treated as failed</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        },\n        {\n            \"baseCurrency\":\"ETH\",\n            \"quoteCurrency\":\"USDT\",\n            \"expiration\":\"220930\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "unsubscribed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "unsubscribeFailed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.expiration",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"unsubscribed\": [\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"expiration\":\"PERP\",\n                \"symbol\":\"BTCUSDT\"\n            }\n        ],\n        \"unsubscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"expiration\":\"229030\",\n                \"symbol\": \"ETHUSDT_220930\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Futures()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.unsubscribeTicker(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Futures client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.unsubscribeTicker(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Futures.js",
      "groupTitle": "Futures",
      "info": "Stop updating tickers via websocket",
      "exchanges": {
        "Binance": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/OneXAPI",
      "title": "getInfo",
      "name": "getInfo",
      "group": "OneXAPI",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "supportedExchanges",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "supportedExchanges.exchange",
              "description": "<p>exchange name</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "Spot",
                "Futures"
              ],
              "optional": false,
              "field": "supportedExchanges.instrument",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "onexapiVersion",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"supportedExchanges\":[\n        {\n            \"exchange\":\"Binance\",\n            \"instrument\":\"Spot\"\n        },\n        {\n            \"exchange\":\"Upbit\",\n            \"instrument\":\"Spot\"\n        },\n        {\n            \"exchange\":\"Binance\",\n            \"instrument\":\"Futures\"\n        },\n        {\n            \"exchange\":\"Ftx\",\n            \"instrument\":\"Futures\"\n        }\n    ]\n    \"onexapiVersion\":\"1.16.0\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nprint(OneXAPI.getInfo())\n# or\nprint(OneXAPI.getInfo(\"\"))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::cout << OneXAPI::getInfo() << std::endl;\n    // or \n    std::cout << OneXAPI::getInfo(\"\") << std::endl;\n\n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/OneXAPI.js",
      "groupTitle": "OneXAPI",
      "info": "get information of the OneXAPI Library",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/OneXAPI",
      "title": "getLoggerConfig",
      "name": "getLoggerConfig",
      "group": "OneXAPI",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "main",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "terminal",
                "file",
                "both"
              ],
              "optional": false,
              "field": "main.outputMethod",
              "defaultValue": "terminal",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "off",
                "info",
                "warn",
                "error",
                "critical"
              ],
              "optional": false,
              "field": "main.logLevel",
              "defaultValue": "off",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "websocket",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "terminal",
                "file",
                "both"
              ],
              "optional": false,
              "field": "websocket.outputMethod",
              "defaultValue": "terminal",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "off",
                "info",
                "warn",
                "error",
                "critical"
              ],
              "optional": false,
              "field": "websocket.logLevel",
              "defaultValue": "off",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"main\":{\n            \"outputMethod\":\"terminal\",\n            \"logLevel\":\"off\"\n        },\n        \"websocket\":{\n            \"outputMethod\":\"terminal\",\n            \"logLevel\":\"off\"\n        }\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nprint(OneXAPI.getLoggerConfig())\n# or\nprint(OneXAPI.getLoggerConfig(\"\"))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::cout << OneXAPI::getLoggerConfig() << std::endl;\n    // or\n    std::cout << OneXAPI::getLoggerConfig(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/OneXAPI.js",
      "groupTitle": "OneXAPI",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/OneXAPI",
      "title": "setLoggerConfig",
      "name": "setLoggerConfig",
      "group": "OneXAPI",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "Object",
              "optional": false,
              "field": "main",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "off",
                "info",
                "warn",
                "error",
                "critical"
              ],
              "optional": false,
              "field": "main.logLevel",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "terminal",
                "file",
                "both"
              ],
              "optional": false,
              "field": "main.outputMethod",
              "description": "<p>terminal : log on console<br>file : write log into OneXAPI_Log/<b><i>DATE</i></b>.log<br>both : terminal + file</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Object",
              "optional": false,
              "field": "websocket",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "off",
                "info",
                "warn",
                "error",
                "critical"
              ],
              "optional": false,
              "field": "websocket.logLevel",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "terminal",
                "file",
                "both"
              ],
              "optional": false,
              "field": "websocket.outputMethod",
              "description": "<p>terminal : log on console<br>file : write log into OneXAPI_Log/<b><i>DATE</i></b>.log<br>both : terminal + file</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"main\":{\n        \"logLevel\":\"info\",\n        \"outputMethod\":\"both\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "<i>requested config</i>",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"main\":{\n            \"logLevel\":\"info\",\n            \"outputMethod\":\"both\"\n        }\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nprint(OneXAPI.setLoggerConfig('{\"main\":{\"logLevel\":\"info\"}}'))  #str\n# or\nprint(OneXAPI.setLoggerConfig({\"websocket\":{\"outputMethod\":\"both\"}}))   #dict",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n\n    std::cout << OneXAPI::setLoggerConfig(R\"({\"main\":{\"logLevel\":\"info\"}})\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/OneXAPI.js",
      "groupTitle": "OneXAPI",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "General",
      "name": "General",
      "group": "Spot",
      "version": "0.0.0",
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "isCategory": true,
      "exchanges": {}
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "Market",
      "name": "Market",
      "group": "Spot",
      "version": "0.0.0",
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "isCategory": true,
      "exchanges": {}
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "Trade",
      "name": "Trade",
      "group": "Spot",
      "version": "0.0.0",
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "isCategory": true,
      "exchanges": {}
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "Wallet",
      "name": "Wallet",
      "group": "Spot",
      "version": "0.0.0",
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "isCategory": true,
      "exchanges": {}
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "fetchAllCurrencies",
      "name": "fetchAllCurrencies",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "currencies",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "currencies.<i>currency name</i>",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "currencies.currency.chains",
              "description": "<p><b>If this field is empty, exchange supports only single chain or nothing. Please check exchange before withdraw or deposit crypto currency.</b></p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "currencies.currency.chains.chain",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Bool",
              "optional": false,
              "field": "currencies.currency.chains.isDefault",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"currencies\":{\n            \"BTC\":{\n                \"chains\":[]\n            },\n            \"USDT\":{\n                \"chains\":[\n                    {\n                        \"chain\":\"TRX\",\n                        \"isDefault\":true\n                    },\n                    {\n                        \"chain\":\"ETH\",\n                        \"isDefault\":false\n                    },\n                    {\n                        \"chain\":\"SOL\",\n                        \"isDefault\":false\n                    }\n                ]\n            },\n            ...\n        }\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.fetchAllCurrencies())\n# or\nprint(client.fetchAllCurrencies(\"\"))\n# or\nprint(client.fetchAllCurrencies({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::cout << client.fetchAllCurrencies() << std::endl;\n    // or\n    std::cout << client.fetchAllCurrencies(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "fetchBalance",
      "name": "fetchBalance",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "forceRestApi",
              "defaultValue": "false",
              "description": "<p>force to update using REST API</p>",
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
              "type": "StringArray",
              "optional": false,
              "field": "currencies",
              "description": "<p>If not exist, return all currencies</p>",
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
              "type": "Bool",
              "optional": false,
              "field": "zeroBalance",
              "defaultValue": "false",
              "description": "<p>Whether to include assets with zero balance</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"forceRestApi\":false,\n    \"currencies\":[\"BTC\", \"ETH\", \"XRP\", \"ADA\"],\n    \"zeroBalance\":true\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "rest",
                "websocket"
              ],
              "optional": false,
              "field": "fetchType",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "balance",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "balance.<i>currency name</i>",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "balance.currency.free",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "balance.currency.locked",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fetchType\":\"rest\",\n        \"balance\":{\n            \"BTC\":{\n                \"free\":\"3.15437\",\n                \"locked\":\"0.0\"\n            },\n            \"ETH\":{\n                \"free\":\"123.684\",\n                \"locked\":\"86.252\"\n            },\n            \"XRP\":{\n                \"free\":\"138123.15425\",\n                \"locked\":\"0.0\"\n            },\n            \"ADA\":{\n                \"free\":\"9354.8132\",\n                \"locked\":\"0.0\"\n            }\n        }\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"forceRestApi\":False,\n    \"currencies\":[\"BTC\", \"ETH\", \"XRP\", \"ADA\"],\n    \"zeroBalance\":True\n}\n\nprint(client.fetchBalance(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"forceRestApi\":false,\n            \"currencies\":[\"BTC\", \"ETH\", \"XRP\", \"ADA\"]\n            \"zeroBalance\":true\n        }\n    )\";\n\n    std::cout << client.fetchBalance(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "warn": "During websocket is running, updateAccountBalance does not send rest API request. <br>If you want to force to send rest API, set forceRestApi parameter as true.",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "fetchCandleHistory",
      "name": "fetchCandleHistory",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "interval",
              "description": "<p>This param depends on the exchange. Please check available intervals using getCandleIntervalCandidates</p>",
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
              "type": "Uint",
              "optional": false,
              "field": "startTime",
              "description": "<p>[s]</p>",
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
              "type": "Uint",
              "optional": false,
              "field": "endTime",
              "defaultValue": "now",
              "description": "<p>[s]</p>",
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
              "type": "Uint",
              "optional": false,
              "field": "fetchInterval",
              "defaultValue": "200",
              "description": "<p>[ms]<br>frequent api request may exceeds rate limit, therefore apiReqInterval decides how long time to sleep between each api request</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"interval\":\"1min\",\n    \"startTime\":1656042045,\n    \"endTime\":1656063182,\n    \"fetchInterval\":200\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "candles",
              "description": "<p>Ascending order according to timestamp</p>"
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "candles.timestamp",
              "description": "<p>[s]</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "candles.openPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "candles.closePrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "candles.highPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "candles.lowPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "candles.baseVolume",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "candles.quoteVolume",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":31,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"candles\":[\n            {\n                \"timestamp\":1656042060,\n                \"openPrice\":\"21035.12\",\n                \"closePrice\":\"21086.83\",\n                \"highPrice\":\"21132.28\",\n                \"lowPrice\":\"21028.83\",\n                \"baseVolume\":\"0.83648\",\n                \"quoteVolume\":\"1087.424\"\n            },\n            {\n                \"timestamp\":1656042120,\n                \"openPrice\":\"21086.83\",\n                \"closePrice\":\"21098.19\",\n                \"highPrice\":\"21099.89\",\n                \"lowPrice\":\"21073.14\",\n                \"baseVolume\":\"0.58492\",\n                \"quoteVolume\":\"760.396\"\n            },\n            ...\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"interval\":\"3min\",\n    \"startTime\":1659189600,\n    \"fetchInterval\":100\n}\n\nprint(client.fetchCandleHistory(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"interval\":\"3min\",\n            \"startTime\":1659189600,\n            \"fetchInterval\":100\n        }\n    )\";\n\n    std::cout << client.fetchCandleHistory(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "warn": "When enormous amount of data is requested, fetchCandleHistory takes a long time to execute.",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "fetchDepositAddress",
      "name": "fetchDepositAddress",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "currency",
              "description": "<p>If not exist, return all currencies</p>",
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
              "type": "String",
              "optional": false,
              "field": "chain",
              "description": "<p>If not exist, fetch a default chain of the currency</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"currency\":\"BTC\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "addresses",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "addresses.<i>currency name</i>",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "addresses.currency.chain",
              "description": "<p>If this field is empty string, it is a default chain</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "addresses.currency.address",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "addresses.currency.tag",
              "description": "<p>If not exist, return empty string</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"addresses\":{\n            \"BTC\":[\n                {\n                    \"chain\":\"BTC\"\n                    \"address\":\"0x~~~\",\n                    \"tag\":\"\"\n                }\n            ]\n        }\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.fetchDepositAddress({\"currency\":\"BTC\"}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        \"currency\":\"BTC\"\n    )\";\n    std::cout << client.fetchDepositAddress(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "fetchDepositHistory",
      "name": "fetchDepositHistory",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "currency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "txid",
              "description": "",
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
              "type": "Uint",
              "optional": false,
              "field": "startTime",
              "description": "<p>[ms]</p>",
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
              "type": "Uint",
              "optional": false,
              "field": "endTime",
              "defaultValue": "now",
              "description": "<p>[ms]</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"currency\":\"MATIC\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "deposits",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "deposits.currency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "deposits.amount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "deposits.fee",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "deposits.orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "deposits.txid",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "processing",
                "cancelled",
                "confirmed",
                "done"
              ],
              "optional": false,
              "field": "deposits.status",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "deposits.created",
              "description": "<p>[ms]</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"deposits\":[\n            {\n                \"currency\":\"MATIC\",\n                \"amount\":\"435.2397\",\n                \"fee\":\"0.0\",\n                \"orderId\":\"688139946\",\n                \"txid\": \"60fd9007ebfddc753455f95fafa808c4302c836e4d1eebc5a132c36c1d8ac354\",\n                \"status\":\"done\",\n                \"created\":1656044045154\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.fetchDepositHistory({}))\n# or\nprint(client.fetchDepositHistory({\"currency\":\"xrP\"}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"currency\":\"XRP\"\n        }\n    )\";\n\n    std::cout << client.fetchDepositHistory(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "danger": "Upbit : supports up to 100 deposits<br>Binance : supports up to 1000 deposits and 90 days from now",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "fetchMarkets",
      "name": "fetchMarkets",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"quoteCurrency\":\"USDT\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "markets",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "markets.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "markets.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "markets.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"markets\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"symbol\":\"BTC-USDT\"\n            },\n            {\n                \"baseCurrency\":\"ETH\",\n                \"quoteCurrency\":\"USDT\",\n                \"symbol\":\"ETH-USDT\"\n            },\n            {\n                \"baseCurrency\":\"XRP\",\n                \"quoteCurrency\":\"USDT\",\n                \"symbol\":\"XRP-USDT\"\n            },\n            {\n                \"baseCurrency\":\"ADA\",\n                \"quoteCurrency\":\"USDT\",\n                \"symbol\":\"ADA-USDT\"\n            },\n            ...\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchMarkets(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchMarkets(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "fetchOpenOrders",
      "name": "fetchOpenOrders",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
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
              "type": "String",
              "allowedValues": [
                "buy",
                "sell"
              ],
              "optional": false,
              "field": "side",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"side\":\"buy\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "openOrders",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "openOrders.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "openOrders.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "openOrders.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "openOrders.orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "buy",
                "sell"
              ],
              "optional": false,
              "field": "openOrders.side",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "openOrders.originalAmount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "openOrders.filledAmount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "openOrders.remainingAmount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "openOrders.originalPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "openOrders.created",
              "description": "<p>[ms]</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "openOrders.lockedCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "openOrders.lockedAmount",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":2,\n        \"openOrders\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"symbol\":\"BTC-USDT\",\n                \"orderId\":\"38463215\",\n                \"side\":\"buy\",\n                \"originalAmount\":\"1.5984\",\n                \"filledAmount\":\"0.3686\",\n                \"remainingAmount\":\"1.2298\",\n                \"originalPrice\":\"22135.35\",\n                \"created\":1656044045,\n                \"lockedCurrency\":\"USDT\",\n                \"lockedAmount\":\"27222.05343\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchOpenOrders(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchOpenOrders(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "fetchOrderInfo",
      "name": "fetchOrderInfo",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"orderId\":\"38463215\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "buy",
                "sell"
              ],
              "optional": false,
              "field": "side",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "originalAmount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "filledAmount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "remainingAmount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "originalPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "avgFillPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "created",
              "description": "<p>[ms]</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "feeCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "feeAmount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "open",
                "filled",
                "cancelled"
              ],
              "optional": false,
              "field": "status",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "fills",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "fills.orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "fills.price",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "fills.amount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "fills.timestamp",
              "description": "<p>[ms]</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":2,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"side\":\"buy\",\n        \"originalAmount\":\"1.5984\",\n        \"filledAmount\":\"0.3686\",\n        \"remainingAmount\":\"1.2298\",\n        \"originalPrice\":\"22135.35\",\n        \"avgFillPrice\":\"22135.28\",\n        \"created\":1656044045\n        \"feeCurrency\":\"BTC\",\n        \"feeAmount\":\"0.00027645\",\n        \"status\":\"open\",\n        \"fills\":[\n            {\n                \"orderId\":\"38435724\",\n                \"price\":\"22135.28\",\n                \"amount\":\"0.3686\",\n                \"timestamp\":1661327586135\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"orderId\":\"39713467831\"\n}\n\nprint(client.fetchOrderInfo(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"orderId\":\"13868943153\"\n        }\n    )\";\n\n    std::cout << client.fetchOrderInfo(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "warn": "If both <b><i>orderId</b></i> and <b><i>clientOrderId</b></i> are options, either of them must be sent.<br>If both are sent, <b><i>orderId</b></i> is used preferentially.",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "fetchOrderbook",
      "name": "fetchOrderbook",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
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
              "type": "Bool",
              "optional": false,
              "field": "forceRestApi",
              "defaultValue": "false",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "rest",
                "websocket"
              ],
              "optional": false,
              "field": "fetchType",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "timestamp",
              "description": "<p>[ms]</p>"
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "bids",
              "description": "<p>Descending order according to timestamp</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "bids.price",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "bids.size",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "asks",
              "description": "<p>Ascending order according to price</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "asks.price",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "asks.size",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"fetchType\":\"websocket\",\n        \"timestamp\":1656044045154,\n        \"bids\":[\n            {\n                \"price\":\"21458.15\",\n                \"size\":\"0.1548\"\n            },\n            {\n                \"price\":\"21458.08\",\n                \"size\":\"0.1578\"\n            },\n            {\n                \"price\":\"21458.03\",\n                \"size\":\"0.3518\"\n            },\n            ...\n        ],\n        \"asks\":[\n            {\n                \"price\":\"21458.16\", \n                \"size\":\"0.0232\"\n            },\n            {\n                \"price\":\"21458.32\",\n                \"size\":\"0.2158\"\n            },\n            {\n                \"price\":\"21458.36\",\n                \"size\":\"0.3183\"\n            },\n            ...\n        ]    \n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchOrderbook(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchOrderbook(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "warn": "During orderbook websocket is running, fetchOrderbook does not send rest API request. <br>If you want to force to send rest API, set forceRestApi parameter as true.",
      "danger": "Binance : Timestamp does not mean the server time; it means the time when the response arrived.",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "fetchTicker",
      "name": "fetchTicker",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
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
              "type": "Bool",
              "optional": false,
              "field": "forceRestApi",
              "defaultValue": "false",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"forceRestApi\":true\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "rest",
                "websocket"
              ],
              "optional": false,
              "field": "fetchType",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "openTime",
              "description": "<p>[s]<br>open Time(UTC)</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "openPrice",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "closePrice",
              "description": "<p>close Price(last Price)</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "lowPrice",
              "description": "<p>low Price(24h)</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "highPrice",
              "description": "<p>high Price(24h)</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "baseVolume",
              "description": "<p>baseCurrency Volume(24h)</p>"
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "quoteVolume",
              "description": "<p>quoteCurrency Volume(24h)</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"fetchType\":\"rest\",\n        \"openTime\":\"1656044045,\n        \"openPrice\":\"21004.0\",\n        \"closePrice\":\"21432.14\",\n        \"lowPrice\":\"20844.64\",\n        \"highPrice\":\"21662.5\",\n        \"baseVolume\":\"591235.5124\",\n        \"quoteVolume\":\"1529512525.23145\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchTicker(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchTicker(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "warn": "During ticker websocket is running, fetchTicker does not send rest API request. <br>If you want to force to send rest API, set forceRestApi parameter as true.",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "fetchTradingFee",
      "name": "fetchTradingFee",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "fees",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "fees.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "fees.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "fees.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "fees.makerFee",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "fees.takerFee",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"fees\":[\n            {\n                \"baseCurrency\":\"BTC\",\n                \"quoteCurrency\":\"USDT\",\n                \"symbol\":\"BTCUSDT\",\n                \"makerFee\":\"0.0004\",\n                \"takerFee\":\"0.00075\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\"\n}\n\nprint(client.fetchTradingFee(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\"\n        }\n    )\";\n\n    std::cout << client.fetchTradingFee(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "danger": "Binance : Trading fee is a value before bnb discount",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "fetchWalletStatus",
      "name": "fetchWalletStatus",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "currency",
              "description": "<p>If not exist, return all currencies.</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"currency\":\"BTC\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "currencies",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "currencies.<i>currency name</i>",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Array",
              "optional": false,
              "field": "currencies.currency.chains",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "currencies.currency.chains.chain",
              "description": "<p>If chain is empty string, it means exchange supports single chain.</p>"
            },
            {
              "group": "Success 200",
              "type": "Bool",
              "optional": false,
              "field": "currencies.currency.chains.withdrawEnable",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Bool",
              "optional": false,
              "field": "currencies.currency.chains.depositEnable",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"currencies\":{\n            \"BTC\":{\n                \"chains\":[\n                    {\n                        \"chain\":\"BTC\",\n                        \"withdrawEnable\":true,\n                        \"depositEnable\":false\n                    },\n                    {\n                        \"chain\":\"BSC\",\n                        \"withdrawEnable\":true,\n                        \"depositEnable\":true\n                    }\n                ]\n            }\n        }\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.fetchWalletStatus({}))\n# or\nprint(client.fetchWalletStatus({\"currency\":\"BTC\"}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::cout << client.fetchWalletStatus(\"{}\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "fetchWithdrawHistory",
      "name": "fetchWithdrawHistory",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "currency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "txid",
              "description": "",
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
              "type": "Uint",
              "optional": false,
              "field": "startTime",
              "description": "<p>[ms]</p>",
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
              "type": "Uint",
              "optional": false,
              "field": "endTime",
              "defaultValue": "now",
              "description": "<p>[ms]</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"currency\":\"MATIC\",\n    \"orderId\":\"451399413\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "withdrawals",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "withdrawals.currency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "withdrawals.amount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "withdrawals.fee",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "withdrawals.orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "withdrawals.txid",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "processing",
                "cancelled",
                "done"
              ],
              "optional": false,
              "field": "withdrawals.status",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "withdrawals.created",
              "description": "<p>[ms]</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"withdrawals\":[\n            {\n                \"currency\":\"MATIC\",\n                \"amount\":\"435.2397\",\n                \"fee\":\"1.0\",\n                \"orderId\":\"451399413\",\n                \"txid\": \"60fd9007ebfddc753455f95fafa808c4302c836e4d1eebc5a132c36c1d8ac354\",\n                \"status\":\"done\",\n                \"created\":1656044045154\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.fetchWithdrawHistory({}))\n# or\nprint(client.fetchWithdrawHistory({\"currency\":\"xrP\"}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        {\n            \"currency\":\"XRP\"\n        }\n    )\";\n\n    std::cout << client.fetchWithdrawHistory(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "danger": "Upbit : supports up to 100 withdrawals<br>Binance : supports up to 1000 withdrawals and 90 days from now",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "getCandleIntervalCandidates",
      "name": "getCandleIntervalCandidates",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "StringArray",
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
              "optional": false,
              "field": "intervals",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"intervals\":[\n            \"10min\",\"15min\",\"1day\",\"1hour\",\"1min\",\"1month\",\"1week\",\"30min\",\"3min\",\"4hour\",\"5min\"\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.getCandleIntervalCandidates())\n# or\nprint(client.getCandleIntervalCandidates(\"\"))\n# or\nprint(client.getCandleIntervalCandidates({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getCandleIntervalCandidates() << std::endl;\n    // or\n    std::cout << client.getCandleIntervalCandidates(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "getConfig",
      "name": "getConfig",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "exchange",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "Spot",
                "Futures"
              ],
              "optional": false,
              "field": "instrument",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "accessKey",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "secretKey",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "restEndpoint",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "publicWebsocketEndpoint",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "privateWebsocketEndpoint",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "restRequestTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]</p>"
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "websocketConnectTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]</p>"
            },
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "websocketIdleTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"exchange\":\"Binance\",\n        \"instrument\":\"Spot\",\n        \"accessKey\":\"\",\n        \"secretKey\":\"\",\n        \"restEndpoint\":\"https://api.binance.com\",\n        \"publicWebsocketEndpoint\":\"wss://stream.binance.com:9443\",\n        \"privateWebsocketEndpoint\":\"wss://stream.binance.com:9443\",\n        \"restRequestTimeout\":5000,\n        \"websocketConnectTimeout\":5000,\n        \"websocketIdleTimeout\":5000\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.getConfig())\n# or\nprint(client.getConfig(\"\"))\n# or\nprint(client.getConfig({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getConfig() << std::endl;\n    // or\n    std::cout << client.getConfig(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "getEndpointCandidates",
      "name": "getEndpointCandidates",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "StringArray",
              "optional": false,
              "field": "restEndpoints",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "StringArray",
              "optional": false,
              "field": "publicWebsocketEndpoints",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "StringArray",
              "optional": false,
              "field": "privateWebsocketEndpoints",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"restEndpoints\":[\n            \"https://api.binance.com\",\n            \"https://api1.binance.com\",\n            \"https://api2.binance.com\",\n            \"https://api3.binance.com\",\n        ],\n        \"publicWebsocketEndpoints\":[\n            \"wss://stream.binance.com:9443\"\n        ],\n        \"privateWebsocketEndpoints\":[\n            \"wss://stream.binance.com:9443\"\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.getEndpointCandidates())\n# or\nprint(client.getEndpointCandidates(\"\"))\n# or\nprint(client.getEndpointCandidates({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getEndpointCandidates() << std::endl;\n    // or\n    std::cout << client.getEndpointCandidates(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "getOrderRoundingRule",
      "name": "getOrderRoundingRule",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitBuyPrice",
              "defaultValue": "round",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitBuyBaseAmount",
              "defaultValue": "round",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitSellPrice",
              "defaultValue": "round",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitSellBaseAmount",
              "defaultValue": "round",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "marketBuyQuoteAmount",
              "defaultValue": "round",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "marketSellBaseAmount",
              "defaultValue": "round",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"limitBuyPrice\":\"ceil\",             \n        \"limitBuyBaseAmount\":\"floor\",\n        \"limitSellPrice\":\"ceil\",\n        \"limitSellBaseAmount\":\"floor\",\n        \"marketBuyQuoteAmount\":\"round\",\n        \"marketSellBaseAmount\":\"round\",\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.getOrderRoundingRule())\n# or\nprint(client.getOrderRoundingRule(\"\"))\n# or\nprint(client.getOrderRoundingRule({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getOrderRoundingRule() << std::endl;\n    // or\n    std::cout << client.getOrderRoundingRule(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "getSubscribingOrderbooks",
      "name": "getSubscribingOrderbooks",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "orderbooks",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderbooks.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderbooks.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderbooks.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"orderbooks\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"BTC-USDT\"\n            },\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"ETH-USDT\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.getSubscribingOrderbooks())\n# or\nprint(client.getSubscribingOrderbooks(\"\"))\n# or\nprint(client.getSubscribingOrderbooks({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getSubscribingOrderbooks() << std::endl;\n    // or\n    std::cout << client.getSubscribingOrderbooks(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "info": "Returns orderbook symbols being received on websocket",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "getSubscribingTickers",
      "name": "getSubscribingTickers",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "tickers",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "tickers.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "tickers.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "tickers.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"tickers\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"BTC-USDT\"\n            },\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"ETH-USDT\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.getSubscribingTickers())\n# or\nprint(client.getSubscribingTickers(\"\"))\n# or\nprint(client.getSubscribingTickers({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getSubscribingTickers() << std::endl;\n    // or\n    std::cout << client.getSubscribingTickers(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "info": "Returns ticker symbols being received on websocket",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "getWithdrawRoundingRule",
      "name": "getWithdrawRoundingRule",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "roundingRule",
              "defaultValue": "round",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"roundingRule\":\"floor\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.getWithdrawRoundingRule())\n# or\nprint(client.getWithdrawRoundingRule(\"\"))\n# or\nprint(client.getWithdrawRoundingRule({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getWithdrawRoundingRule() << std::endl;\n    // or\n    std::cout << client.getWithdrawRoundingRule(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "has",
      "name": "has",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "api",
              "description": "<p>if not exist, return all APIs</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"api\":\"orderLimitBuy\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Bool",
              "optional": false,
              "field": "<i>api name</i>",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"orderLimitBuy\":true\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.has({}))\n# or\nprint(client.has(\"{}\"))\n# or\nprint(client.has({\"api\":\"orderLimitBuy\"}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.has(\"{}\") << std::endl;\n    // or\n    std::cout << client.has(R\"({\"api\":\"withdraw\"})\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "info": "Check if API exists or not",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "isDepositCompleted",
      "name": "isDepositCompleted",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "txid",
              "description": "<p>If this field exists, \u2018currency\u2019, \u2018amount\u2019 and \u2018since\u2019 are ignored</p>",
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
              "type": "String",
              "optional": false,
              "field": "currency",
              "description": "<p>If this field exists, \u2018amount\u2019 and \u2018since\u2019 must be sent</p>",
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
              "type": "Double",
              "optional": false,
              "field": "amount",
              "description": "",
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
              "type": "Uint",
              "optional": false,
              "field": "since",
              "description": "<p>[ms]</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"currency\":\"MATIC\",\n    \"amount\":435.2397,\n    \"since\":1656044045154\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Bool",
              "optional": false,
              "field": "isDepositCompleted",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"isDepositCompleted\":false\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.isDepositCompleted({\"txid\":\"0xfad1~~~\"}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        \"txid\":\"0xfad1~~~\"\n    )\";\n    std::cout << client.isDepositCompleted(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "warn": "'Deposit Completed' means that the deposited asset is tradable. This does not mean that client can withdraw asset depending on the exchange.<br>This API is used in two ways.<br>1. inquire by txid<br>2. inquire by \u2018currency\u2019 and \u2018amount\u2019 and \u2018since\u2019",
      "danger": "Binance : supports up to 1000 deposits and 90 days from now",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "isSubscribingBalance",
      "name": "isSubscribingBalance",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Bool",
              "optional": false,
              "field": "isSubscribing",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"isSubscribing\": true\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.isSubscribingBalance())\n# or\nprint(client.isSubscribingBalance(\"\"))\n# or\nprint(client.isSubscribingBalance({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.isSubscribingBalance() << std::endl;\n    // or\n    std::cout << client.isSubscribingBalance(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "info": "Returns whether balance is being updated via websocket",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "orderCancel",
      "name": "orderCancel",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": "<p>Client Order ID as assigned by the client</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"orderId\":\"38463215\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"orderId\":\"39713467831\"\n}\n\nprint(client.orderCancel(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"orderId\":\"39713467831\"\n        }\n    )\";\n\n    std::cout << client.orderCancel(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "warn": "If both <b><i>orderId</b></i> and <b><i>clientOrderId</b></i> are options, either of them must be sent.<br>If both are sent, <b><i>orderId</b></i> is used preferentially.",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "orderLimitBuy",
      "name": "orderLimitBuy",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
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
              "type": "Double",
              "optional": false,
              "field": "price",
              "description": "",
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
              "type": "Double",
              "optional": false,
              "field": "baseAmount",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": "<p>Client Order ID as assigned by the client</p>",
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
              "type": "Double",
              "optional": false,
              "field": "amplifier",
              "defaultValue": "1.0",
              "description": "<p>If this field exists, the requested price will be <b>price*amplifier</b></p>",
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
              "type": "String",
              "allowedValues": [
                "gtc",
                "ioc",
                "fok"
              ],
              "optional": false,
              "field": "type",
              "defaultValue": "gtc",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"price\":21351.1384,\n    \"baseAmount\":1.5843,\n    \"amplifier\":1.03       //requested price will be 21351.1384*1.03 = 21991.672552\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "price",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "baseAmount",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"price\":\"21991.67\",\n        \"baseAmount\":\"1.584\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"XRP\",\n    \"quoteCurrency\":\"USDT\",\n    \"price\":0.4348,\n    \"baseAmount\":23.834219\n}\n\nprint(client.orderLimitBuy(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\t\n    std::string userInfo = R\"({\n        \"accessKey\":\"user access key\",\n        \"secretKey\":\"user secrey key\"\n    })\";\n    OneXAPI::Binance::Spot client(userInfo\n    std::string request = R\"({\n        \"baseCurrency\":\"XRP\",\n        \"quoteCurrency\":\"USDT\",\n        \"price\":0.4348,\n        \"baseAmount\":23.834219\n    })\";\n\n    std::cout << client.orderLimitBuy(request) << std::endl;\n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Spot-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Spot-setOrderRoundingRule>setOrderRoundingRule</a>.",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "orderLimitSell",
      "name": "orderLimitSell",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
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
              "type": "Double",
              "optional": false,
              "field": "price",
              "description": "",
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
              "type": "Double",
              "optional": false,
              "field": "baseAmount",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": "<p>Client Order ID as assigned by the client</p>",
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
              "type": "Double",
              "optional": false,
              "field": "amplifier",
              "defaultValue": "1.0",
              "description": "<p>If this field exists, the requested price will be <b>price*amplifier</b></p>",
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
              "type": "String",
              "allowedValues": [
                "gtc",
                "ioc",
                "fok"
              ],
              "optional": false,
              "field": "type",
              "defaultValue": "gtc",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"price\":21351.1384,\n    \"baseAmount\":1.5843,\n    \"amplifier\":0.97       //requested price will be 21351.1384*0.97 = 20710.604248\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "price",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "baseAmount",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"price\":\"20710.6\",\n        \"baseAmount\":\"1.584\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"XRP\",\n    \"quoteCurrency\":\"USDT\",\n    \"price\":0.4348,\n    \"baseAmount\":23.834219\n}\n\nprint(client.orderLimitSell(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"XRP\",\n            \"quoteCurrency\":\"USDT\",\n            \"price\":486.2348,\n            \"baseAmount\":23.834219\n        }\n    )\";\n\n    std::cout << client.orderLimitSell(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Spot-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Spot-setOrderRoundingRule>setOrderRoundingRule</a>.",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "orderMarketBuy",
      "name": "orderMarketBuy",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
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
              "type": "Double",
              "optional": false,
              "field": "quoteAmount",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": "<p>Client Order ID as assigned by the client</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"quoteAmount\":1.5843\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "quoteAmount",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"clientOrderId\":\"\",\n        \"quoteAmount\":\"1.584\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"quoteAmount\":1.5843\n}\n\nprint(client.orderMarketBuy(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"quoteAmount\":1.5843\n        }\n    )\";\n\n    std::cout << client.orderMarketBuy(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Spot-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Spot-setOrderRoundingRule>setOrderRoundingRule</a>.",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "orderMarketSell",
      "name": "orderMarketSell",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
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
              "type": "Double",
              "optional": false,
              "field": "baseAmount",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": "<p>Client Order ID as assigned by the client</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"baseAmount\":1.5843\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "baseAmount",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"baseCurrency\":\"BTC\",\n        \"quoteCurrency\":\"USDT\",\n        \"symbol\":\"BTC-USDT\",\n        \"orderId\":\"38463215\",\n        \"price\":\"20710.6\",\n        \"baseAmount\":\"1.584\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"baseCurrency\":\"BTC\",\n    \"quoteCurrency\":\"USDT\",\n    \"baseAmount\":1.5843\n}\n\nprint(client.orderMarketSell(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"baseCurrency\":\"BTC\",\n            \"quoteCurrency\":\"USDT\",\n            \"baseAmount\":1.5843\n        }\n    )\";\n\n    std::cout << client.orderMarketSell(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "warn": "Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Spot-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Spot-setOrderRoundingRule>setOrderRoundingRule</a>.",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "setConfig",
      "name": "setConfig",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "accessKey",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "secretKey",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "restEndpoint",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "publicWebsocketEndpoint",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "privateWebsocketEndpoint",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "restRequestTimeout",
              "description": "<p>[ms]</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "websocketConnectTimeout",
              "description": "<p>[ms]</p>",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "websocketIdleTimeout",
              "description": "<p>[ms]</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"restEndpoint\":\"https://api2.binance.com\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "<i>requested config</i>",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"restEndpoint\":\"https://api2.binance.com\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\"accessKey\":\"new access key\",\"secretKey\":\"new secret key\",\"websocketIdleTimeout\":2000}\n\nprint(client.setConfig(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.setConfig(R\"({\"accessKey\":\"new access key\",\"secretKey\":\"new secret key\",\"websocketIdleTimeout\":2000})\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "info": "Sets the settings for the object. Only the requested parameters are included in the response",
      "warn": "The requested endpoint must be included in the endpoint candidates, otherwise it returns an error. See <a href=#api-Spot-getEndpointCandidates>getEndpointCandidates</a>.",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "setOrderRoundingRule",
      "name": "setOrderRoundingRule",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitBuyPrice",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitBuyBaseAmount",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitSellPrice",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "limitSellBaseAmount",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "marketBuyQuoteAmount",
              "description": "",
              "options": [
                [
                  "Optional"
                ]
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "marketSellBaseAmount",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"marketSellBaseAmount\":\"floor\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "<i>requested field</i>",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"marketSellBaseAmount\":\"floor\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"limitBuyPrice\":\"ceil\",\n    \"limitSellBaseAmount\":\"floor\"\n}\n\nprint(client.setOrderRoundingRule(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n    std::string request = R\"(\n        {\n            \"limitBuyPrice\":\"ceil\"\n        }\n    )\";\n\n    std::cout << client.setOrderRoundingRule(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "setWithdrawRoundingRule",
      "name": "setWithdrawRoundingRule",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "roundingRule",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"roundingRule\":\"ceil\"\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "allowedValues": [
                "ceil",
                "floor",
                "round"
              ],
              "optional": false,
              "field": "roundingRule",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":0,\n        \"roundingRule\":\"ceil\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nprint(client.setWithdrawRoundingRule({\"roundingRule\":\"ceil\"}))\n# or\nprint(client.setWithdrawRoundingRule('{\"roundingRule\":\"floor\"}'))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n    \n    std::string request = R\"(\n        {\n            \"roundingRule\":\"ceil\"\n        }\n    )\";\n\n    std::cout << client.setWithdrawRoundingRule(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "subscribeBalance",
      "name": "subscribeBalance",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.subscribeBalance())\n# or\nprint(client.subscribeBalance(\"\"))\n# or\nprint(client.subscribeBalance({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.subscribeBalance() << std::endl;\n    // or\n    std::cout << client.subscribeBalance(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "info": "Start updating balance via websocket",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "unsupported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "subscribeOrderbook",
      "name": "subscribeOrderbook",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "ObjectArray",
              "optional": false,
              "field": "market",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "market.baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "market.quoteCurrency",
              "description": "",
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
              "type": "Bool",
              "optional": false,
              "field": "reconnect",
              "defaultValue": "false",
              "description": "<p>If this field is true, reconnect the websocket including the requested markets to the the markets being subscribed</p>",
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
              "type": "Uint",
              "optional": false,
              "field": "requestTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]<br>If the subscription success message does not come in the requestTimeout after the subscription request, the subscription is treated as failed</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "subscribed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "subscribeFailed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"subscribed\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"BTC-USDT\"\n            }\n        ],\n        \"subscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"ETH-USDT\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.subscribeOrderbook(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.subscribeOrderbook(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "info": "Start updating orderbooks via websocket",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "subscribeTicker",
      "name": "subscribeTicker",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "ObjectArray",
              "optional": false,
              "field": "market",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "market.baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "market.quoteCurrency",
              "description": "",
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
              "type": "Bool",
              "optional": false,
              "field": "reconnect",
              "defaultValue": "false",
              "description": "<p>If this field is true, reconnect the websocket including the requested markets to the the markets being subscribed</p>",
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
              "type": "Uint",
              "optional": false,
              "field": "requestTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]<br>If the subscription success message does not come in the requestTimeout after the subscription request, the subscription is treated as failed</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "subscribed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribed.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "subscribeFailed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "subscribeFailed.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"subscribed\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"BTC-USDT\"\n            }\n        ],\n        \"subscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"ETH-USDT\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.subscribeTicker(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.subscribeTicker(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "info": "Start updating tickers via websocket",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "unsubscribeBalance",
      "name": "unsubscribeBalance",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "NoParam",
              "optional": false,
              "field": "",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nprint(client.unsubscribeBalance())\n# or\nprint(client.unsubscribeBalance(\"\"))\n# or\nprint(client.unsubscribeBalance({}))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.unsubscribeBalance() << std::endl;\n    // or\n    std::cout << client.unsubscribeBalance(\"\") << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "info": "Stop updating balance via websocket",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "unsupported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "unsubscribeOrderbook",
      "name": "unsubscribeOrderbook",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "ObjectArray",
              "optional": false,
              "field": "market",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "market.baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "market.quoteCurrency",
              "description": "",
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
              "type": "Bool",
              "optional": false,
              "field": "reconnect",
              "defaultValue": "false",
              "description": "<p>If this field is true, reconnect the websocket excluding the requested markets for the the markets being subscribed</p>",
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
              "type": "Uint",
              "optional": false,
              "field": "requestTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]<br>If the subscription success message does not come in the requestTimeout after the subscription request, the subscription is treated as failed</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "unsubscribed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "unsubscribeFailed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"unsubscribed\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"BTC-USDT\"\n            }\n        ],\n        \"unsubscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"ETH-USDT\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.unsubscribeOrderbook(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.unsubscribeOrderbook(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "info": "Stop updating orderbooks via websocket",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "unsubscribeTicker",
      "name": "unsubscribeTicker",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "ObjectArray",
              "optional": false,
              "field": "market",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "market.baseCurrency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "market.quoteCurrency",
              "description": "",
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
              "type": "Bool",
              "optional": false,
              "field": "reconnect",
              "defaultValue": "false",
              "description": "<p>If this field is true, reconnect the websocket excluding the requested markets for the the markets being subscribed</p>",
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
              "type": "Uint",
              "optional": false,
              "field": "requestTimeout",
              "defaultValue": "5000",
              "description": "<p>[ms]<br>If the subscription success message does not come in the requestTimeout after the subscription request, the subscription is treated as failed</p>",
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
            "title": "Request Example : ",
            "content": "{\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ],\n    \"reconnect\":false,\n    \"requestTimeout\":2500\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "unsubscribed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribed.symbol",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "ObjectArray",
              "optional": false,
              "field": "unsubscribeFailed",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.baseCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.quoteCurrency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "unsubscribeFailed.symbol",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"unsubscribed\": [\n            {\n                \"baseCurrency\": \"BTC\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"BTC-USDT\"\n            }\n        ],\n        \"unsubscribeFailed\": [\n            {\n                \"baseCurrency\": \"ETH\",\n                \"quoteCurrency\": \"USDT\",\n                \"symbol\": \"ETH-USDT\"\n            }\n        ]\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nclient = OneXAPI.Binance.Spot()\n\nrequest = {\n    \"market\":[\n        {\n            \"baseCurrency\": \"BTC\",\n            \"quoteCurrency\": \"USDT\"\n        },\n        {\n            \"baseCurrency\": \"ETH\",\n            \"quoteCurrency\": \"USDT\"\n        }\n    ]\n}\n\nprint(client.unsubscribeTicker(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::string request = R\"(\n        {\n            \"market\":[\n                {\n                    \"baseCurrency\": \"BTC\",\n                    \"quoteCurrency\": \"USDT\"\n                },\n                {\n                    \"baseCurrency\": \"ETH\",\n                    \"quoteCurrency\": \"USDT\"\n                }\n            ]\n        }\n    )\";\n    std::cout << client.unsubscribeTicker(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "info": "Stop updating tickers via websocket",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "withdraw",
      "name": "withdraw",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "currency",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "chain",
              "description": "<p>if this field is empty, default chain is used</p>",
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
              "type": "String",
              "optional": false,
              "field": "address",
              "description": "",
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
              "type": "String",
              "optional": false,
              "field": "tag",
              "description": "",
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
              "type": "Double",
              "optional": false,
              "field": "amount",
              "description": "",
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
              "type": "Bool",
              "optional": false,
              "field": "feeInAmount",
              "description": "",
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
              "type": "Bool",
              "optional": false,
              "field": "internal",
              "description": "",
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
            "title": "Request Example : ",
            "content": "{\n    \"currency\":\"MATIC\",\n    \"chain\":\"ETH\",\n    \"address\":\"0xAFWE13FAES1387\",\n    \"amount\":1365.135468\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "fields": {
          "Response : ": [
            {
              "group": "Success 200",
              "type": "Uint",
              "optional": false,
              "field": "requestedApiCount",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "currency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "chain",
              "description": "<p>If not exist, return empty string</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "address",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "tag",
              "description": "<p>If not exist, return empty string</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": ""
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response :",
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":2,\n        \"currency\":\"MATIC\",\n        \"chain\":\"ETH\",\n        \"address\":\"0xAFWE13FAES1387\",\n        \"tag\":\"\",\n        \"orderId\":\"451399413\"\n    }\n}",
            "type": "json"
          }
        ]
      },
      "examples": [
        {
          "title": "python",
          "content": "import OneXAPI\n\nuser_info = {\n    \"accessKey\":\"user access key\",\n    \"secretKey\":\"user secrey key\"\n}\n\nclient = OneXAPI.Binance.Spot(user_info)\n\nrequest = {\n    \"currency\":\"MATIC\",\n    \"chain\":\"ETH\",\n    \"address\":\"0xAFWE13FAES1387\",\n    \"amount\":1365.135468\n}\n\nprint(client.withdraw(request))",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){    \n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n    \n    std::string request = R\"(\n        {\n            \"currency\":\"MATIC\",\n            \"chain\":\"ETH\",\n            \"address\":\"0xAFWE13FAES1387\",\n            \"amount\":1365.135468\n        }\n    )\";\n\n    std::cout << client.withdraw(request) << std::endl;\n    \n    return 0;\n}",
          "type": "cpp"
        }
      ],
      "filename": "tmp/Spot.js",
      "groupTitle": "Spot",
      "danger": "Binance : If the fast draw setting for the account is enabled, internal draw will be executed.",
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    }
  ]
});