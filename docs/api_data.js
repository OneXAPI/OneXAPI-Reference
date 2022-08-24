define({
  "api": [
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
                "I"
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
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getConfig() << std::endl;\n    // or\n    std::cout << client.getConfig(\"\") << std::endl;\n    \n    return 0;\n}",
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
                "I"
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
              "type": "String[]",
              "optional": false,
              "field": "restEndpoints",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String[]",
              "optional": false,
              "field": "publicWebsocketEndpoints",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String[]",
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
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.getEndpointCandidates() << std::endl;\n    // or\n    std::cout << client.getEndpointCandidates(\"\") << std::endl;\n    \n    return 0;\n}",
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
      "title": "has",
      "name": "has",
      "description": "<p>check whether API exists or not</p>",
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
                "I"
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
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.has(\"{}\") << std::endl;\n    // or\n    std::cout << client.has(R\"({\"api\":\"withdraw\"})\") << std::endl;\n    \n    return 0;\n}",
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
      "title": "setConfig",
      "name": "setConfig",
      "description": "<p>Requested endpoint must be in the endpoint candidates. Otherwise, error. Refer to getEndpointCandidates</p>",
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
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "secretKey",
              "description": "",
              "options": [
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "restEndpoint",
              "description": "",
              "options": [
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "publicWebsocketEndpoint",
              "description": "",
              "options": [
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "privateWebsocketEndpoint",
              "description": "",
              "options": [
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "restRequestTimeout",
              "description": "<p>[ms]</p>",
              "options": [
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "websocketConnectTimeout",
              "description": "<p>[ms]</p>",
              "options": [
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "websocketIdleTimeout",
              "description": "<p>[ms]</p>",
              "options": [
                "I"
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
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    OneXAPI::Binance::Spot client;\n\n    std::cout << client.setConfig(R\"({\"accessKey\":\"new access key\",\"secretKey\":\"new secret key\",\"websocketIdleTimeout\":2000})\") << std::endl;\n    \n    return 0;\n}",
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
      "url": "/OneXAPI",
      "title": "getInfo",
      "name": "getInfo",
      "description": "<p>get information of the OneXAPI Library</p>",
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
                "I"
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
              "type": "Object[]",
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
          "content": "currently empty",
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
                "I"
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
              "optional": false,
              "field": "main.outputMethod",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "main.logLevel",
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
              "optional": false,
              "field": "websocket.outputMethod",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "websocket.logLevel",
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
          "content": "currently empty",
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
                "O"
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
              "defaultValue": "off",
              "description": "",
              "options": [
                "O"
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
              "defaultValue": "terminal",
              "description": "<p>terminal : \ucf58\uc194\uc5d0 \ub85c\uadf8\uac00 \ucd9c\ub825\ub41c\ub2e4.<br>file : OneXAPI_Log \ud3f4\ub354\uc5d0 \ud574\ub2f9 \ub0a0\uc9dc\uc758 \ud30c\uc77c.log \uc5d0 \ub85c\uadf8\uac00 \uae30\ub85d\ub41c\ub2e4.<br>both : \ucf58\uc194\uacfc \ud30c\uc77c\uc5d0 \ub85c\uadf8\uac00 \uae30\ub85d\ub41c\ub2e4.</p>",
              "options": [
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "Object",
              "optional": false,
              "field": "websocket",
              "description": "",
              "options": [
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "websocket.logLevel",
              "description": "",
              "options": [
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "websocket.outputMethod",
              "description": "",
              "options": [
                "O"
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
          "content": "currently empty",
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
                "I"
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
              "field": "currencies.currency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "Object[]",
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
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"currencies\":{\n            \"BTC\":{\n                \"chains\":[]\n            },\n            \"USDT\":{\n                \"chains\":[\n                    {\n                        \"chain\":\"TRX\",\n                        \"isDefault\":true\n                    },{\n                        \"chain\":\"ETH\",\n                        \"isDefault\":false\n                    },{\n                        \"chain\":\"SOL\",\n                        \"isDefault\":false\n                    }\n                ]\n            },\n            ...\n        }\n    }\n}",
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
      "description": "<p>During websocket is running, updateAccountBalance does not send rest API request. If you want to force to send rest API, set forceRestApi parameter as true.</p>",
      "group": "Spot",
      "version": "0.0.0",
      "parameter": {
        "fields": {
          "Parameter : ": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "forceRestApi",
              "description": "<p>force to update using REST API</p>",
              "options": [
                "O",
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "String[]",
              "optional": false,
              "field": "currencies",
              "description": "<p>If not exist, return all currencies</p>",
              "options": [
                "O",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "allowedValues": [
                "false"
              ],
              "optional": false,
              "field": "zeroBalance",
              "description": "<p>Whether to include assets with zero balance</p>",
              "options": [
                "O",
                "O"
              ]
            }
          ]
        },
        "examples": [
          {
            "title": "Request Example : ",
            "content": "{\n    \"forceRestApi\":false,\n    \"currencies\":[\"BTC\", \"ETH\", \"XRP\", \"ADA\"]\n    \"zeroBalance\":true\n}",
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
              "type": "String",
              "optional": false,
              "field": "balance.currency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "balance.free",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "DoubleString",
              "optional": false,
              "field": "balance.locked",
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
          "content": "currently empty",
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
                "M",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "chain",
              "description": "<p>If not exist, fetch a default chain of the currency</p>",
              "options": [
                "O",
                "I"
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
              "type": "Object[]",
              "optional": false,
              "field": "addresses.currency",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "addresses.currency.chain",
              "description": ""
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
              "description": ""
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
          "content": "currently empty",
          "type": "python"
        },
        {
          "title": "c++",
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::string request = R\"(\n        \"currencies\":[\"BTC\",\"ETH\",\"XRP\"]\n    )\";\n    std::cout << client.fetchDepositAddress(request) << std::endl;\n    \n    return 0;\n}",
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
      "description": "<p>Binance supports up to 100 deposits<br>Binance supports up to 1000 deposits and 90 days from now</p>",
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
                "O",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": "",
              "options": [
                "I",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "txid",
              "description": "",
              "options": [
                "O",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "startTime",
              "description": "<p>[ms]</p>",
              "options": [
                "O",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "endTime",
              "description": "<p>[ms]</p>",
              "options": [
                "O",
                "O"
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
              "type": "Object[]",
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
          "content": "currently empty",
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
                "O",
                "O"
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
              "field": "currencies.currency",
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
            "content": "{\n    \"success\":true,\n    \"data\":{\n        \"requestedApiCount\":1,\n        \"currencies\":{\n            \"MATIC\":{\n                \"chains\":[\n                    {\n                        \"chain\":\"MATIC\",\n                        \"withdrawEnable\":true,\n                        \"depositEnable\":false\n                    },\n                    {\n                        \"chain\":\"ETH\",\n                        \"withdrawEnable\":true,\n                        \"depositEnable\":true\n                    }\n                ]\n            },\n            \"USDT\":{\n                \"chains\":[\n                    {\n                        \"chain\":\"TRX\",\n                        \"withdrawEnable\":true,\n                        \"depositEnable\":true\n                    },\n                    {\n                        \"chain\":\"SOL\",\n                        \"withdrawEnable\":true,\n                        \"depositEnable\":true\n                    },\n                    {\n                        \"chain\":\"ETH\",\n                        \"withdrawEnable\":true,\n                        \"depositEnable\":true\n                    }\n                ]\n            }\n        }\n    }\n}",
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
          "content": "#include <iostream>\n#include \"OneXAPI.hpp\"\n\nint main(){\n    std::string userInfo = R\"(\n        {\n            \"accessKey\":\"user access key\",\n            \"secretKey\":\"user secrey key\"\n        }\n    )\";\n\n    OneXAPI::Binance::Spot client(userInfo);\n\n    std::cout << client.fetchWalletStatus(\"\") << std::endl;\n    \n    return 0;\n}",
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
      "description": "<p>Binance supports up to 100 withdrawals<br>Binance supports up to 1000 withdrawals and 90 days from now</p>",
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
                "O",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "orderId",
              "description": "",
              "options": [
                "O",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "txid",
              "description": "",
              "options": [
                "O",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "startTime",
              "description": "<p>[ms]</p>",
              "options": [
                "O",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "endTime",
              "description": "<p>[ms]</p>",
              "options": [
                "O",
                "O"
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
              "type": "Object[]",
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
          "content": "currently empty",
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
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
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
                "I"
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
          "content": "currently empty",
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
                "I"
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
              "type": "String[]",
              "optional": false,
              "field": "restEndpoints",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String[]",
              "optional": false,
              "field": "publicWebsocketEndpoints",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String[]",
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
          "content": "currently empty",
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
                "I"
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
          "content": "currently empty",
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
      "description": "<p>check whether API exists or not</p>",
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
                "I"
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
          "content": "currently empty",
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
      "exchanges": {
        "All": "supported"
      }
    },
    {
      "type": "onex",
      "url": "/Spot",
      "title": "isDepositCompleted",
      "name": "isDepositCompleted",
      "description": "<p>'Deposit Completed' means that the deposited asset is tradable. This does not mean that client can withdraw asset depending on the exchange.<br>This API is used in two ways.<br>1. inquire by txid<br>2. inquire by \u2018currency\u2019 and \u2018amount\u2019 and \u2018since\u2019<br><br>Binance supports up to 1000 deposits and 90 days from now</p>",
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
                "O",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "currency",
              "description": "<p>If this field exists, \u2018amount\u2019 and \u2018since\u2019 must be sent</p>",
              "options": [
                "O",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "Double",
              "optional": false,
              "field": "amount",
              "description": "",
              "options": [
                "O",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "since",
              "description": "<p>[ms]</p>",
              "options": [
                "O",
                "O"
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
          "content": "currently empty",
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
      "description": "<p>Price and amount are automatically rounded according to the exchange market. If user wants to change rounding rule, refer to getOrderRoundingRule &amp; setOrderRoundingRule</p>",
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
                "M",
                "M"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "quoteCurrency",
              "description": "",
              "options": [
                "M",
                "M"
              ]
            },
            {
              "group": "Parameter",
              "type": "Double",
              "optional": false,
              "field": "price",
              "description": "",
              "options": [
                "M",
                "M"
              ]
            },
            {
              "group": "Parameter",
              "type": "Double",
              "optional": false,
              "field": "baseAmount",
              "description": "",
              "options": [
                "M",
                "M"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "clientOrderId",
              "description": "<p>Client Order ID as assigned by the client</p>",
              "options": [
                "O",
                "O"
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
                "O",
                "O"
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
                "O",
                "I"
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
              "type": "String",
              "optional": false,
              "field": "price",
              "description": ""
            },
            {
              "group": "Success 200",
              "type": "String",
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
          "content": "currently empty",
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
      "description": "<p>Requested endpoint must be in the endpoint candidates. Otherwise, error. Refer to getEndpointCandidates</p>",
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
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "secretKey",
              "description": "",
              "options": [
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "restEndpoint",
              "description": "",
              "options": [
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "publicWebsocketEndpoint",
              "description": "",
              "options": [
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "privateWebsocketEndpoint",
              "description": "",
              "options": [
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "restRequestTimeout",
              "description": "<p>[ms]</p>",
              "options": [
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "websocketConnectTimeout",
              "description": "<p>[ms]</p>",
              "options": [
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "Uint",
              "optional": false,
              "field": "websocketIdleTimeout",
              "description": "<p>[ms]</p>",
              "options": [
                "I"
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
          "content": "currently empty",
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
                "M"
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
          "content": "currently empty",
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
                "M",
                "M"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "chain",
              "description": "<p>if this field is empty, default chain is used</p>",
              "options": [
                "O",
                "I"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "address",
              "description": "",
              "options": [
                "M",
                "M"
              ]
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "tag",
              "description": "",
              "options": [
                "O",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "Double",
              "optional": false,
              "field": "amount",
              "description": "",
              "options": [
                "M",
                "M"
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "feeInAmount",
              "description": "",
              "options": [
                "O",
                "O"
              ]
            },
            {
              "group": "Parameter",
              "type": "Bool",
              "optional": false,
              "field": "internal",
              "description": "",
              "options": [
                "I",
                "O"
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
          "content": "currently empty",
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
      "exchanges": {
        "Binance": "supported",
        "Upbit": "supported"
      }
    }
  ]
});