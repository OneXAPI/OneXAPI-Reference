/**
 * @api {onex} /OneXAPI getInfo
 * @apiName getInfo
 * @onexInfo get information of the OneXAPI Library
 * @apiGroup OneXAPI
 * @apiVersion 0.0.0
 *
 * @apiParam {NoParam} __EMPTY__ 
 * @onexParamExchanges {all o}
 * @onexParamOption {i}
 * 
 * @apiParamExample Request Example : 
 *  {
 *  }
 * 
 * @apiSuccess {ObjectArray} supportedExchanges 
 * @apiSuccess {String} supportedExchanges.exchange     exchange name
 * @apiSuccess {String=Spot,Futures} supportedExchanges.instrument
 * @apiSuccess {String} onexapiVersion
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "requestedApiCount":0,
 *      "data":{
 *          "supportedExchanges":[
 *          {
 *              "exchange":"Binance",
 *              "instrument":"Spot"
 *          },
 *          {
 *              "exchange":"Upbit",
 *              "instrument":"Spot"
 *          },
 *          {
 *              "exchange":"Binance",
 *              "instrument":"Futures"
 *          },
 *          {
 *              "exchange":"Ftx",
 *              "instrument":"Futures"
 *          }
 *      ]
 *      "onexapiVersion":"1.16.0"
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  print(OneXAPI.getInfo())
 *  # or
 *  print(OneXAPI.getInfo(""))
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *
 *  int main(){
 *      std::cout << OneXAPI::getInfo() << std::endl;
 *      // or 
 *      std::cout << OneXAPI::getInfo("") << std::endl;
 *
 *      return 0;
 *  }
 */

/**
 * @api {onex} /OneXAPI getLoggerConfig
 * @apiName getLoggerConfig
 * @apiGroup OneXAPI
 * @apiVersion 0.0.0
 *
 * @apiParam {NoParam} __EMPTY__ 
 * @onexParamExchanges {all o}
 * @onexParamOption {i}
 * 
 * @apiParamExample Request Example : 
 *  {
 *  }
 * 
 * @apiSuccess {Object} main 
 * @apiSuccess {String=terminal,file,both} main.outputMethod=terminal
 * @apiSuccess {String=off,info,warn,error,critical} main.logLevel=off
 * @apiSuccess {String} main.customPath executedFilePath + OneXAPI_Log/<b><i>DATE</i></b>.log
 * @apiSuccess {Object} websocket
 * @apiSuccess {String=terminal,file,both} websocket.outputMethod=terminal
 * @apiSuccess {String=off,info,warn,error,critical} websocket.logLevel=off
 * @apiSuccess {String} websocket.customPath executedFilePath + OneXAPI_Websocket_Log/<b><i>DATE</i></b>.log
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "requestedApiCount":0,
 *      "data":{
 *          "main":{
 *              "outputMethod":"terminal",
 *              "logLevel":"off",
 *              "customPath":"/root/OneXAPI_Logs/OneXAPI.log"
 *          },
 *          "websocket":{
 *              "outputMethod":"terminal",
 *              "logLevel":"off",
 *              "customPath":"/root/OneXAPI_Logs/OneXAPI_Websocket.log"
 *          }
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  print(OneXAPI.getLoggerConfig())
 *  # or
 *  print(OneXAPI.getLoggerConfig(""))
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      std::cout << OneXAPI::getLoggerConfig() << std::endl;
 *      // or
 *      std::cout << OneXAPI::getLoggerConfig("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /OneXAPI setLoggerConfig
 * @apiName setLoggerConfig
 * @apiGroup OneXAPI
 * @apiVersion 0.0.0
 *
 * @apiParam {Object} main 
 * @apiParam {String=off,info,warn,error,critical} main.logLevel
 * @apiParam {String=terminal,file,both} main.outputMethod terminal : log on console<br>file : write log into OneXAPI_Log/<b><i>DATE</i></b>.log<br>both : terminal + file
 * @apiParam {String} main.customPath executedFilePath + OneXAPI_Log/<b><i>DATE</i></b>.log
 * @apiParam {Object} websocket 
 * @apiParam {String=off,info,warn,error,critical} websocket.logLevel 
 * @apiParam {String=terminal,file,both} websocket.outputMethod terminal : log on console<br>file : write log into OneXAPI_Websocket_Log/<b><i>DATE</i></b>.log<br>both : terminal + file
 * @apiParam {String} websocket.customPath executedFilePath + OneXAPI_Websocket_Log/<b><i>DATE</i></b>.log
 * @onexParamExchanges {all o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "main":{
 *          "logLevel":"info",
 *          "outputMethod":"both"
 *          "customPath":"/root/logs/filename.log"
 *      }
 *  }
 * 
 * @apiSuccess {String} [requested__config]
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "requestedApiCount":0,
 *      "data":{
 *          "main":{
 *              "logLevel":"info",
 *              "outputMethod":"both"
 *              "customPath":"/root/logs/filename.log"
 *          }
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  print(OneXAPI.setLoggerConfig('{"main":{"logLevel":"info"}}'))  #str
 *  # or
 *  print(OneXAPI.setLoggerConfig({"websocket":{"outputMethod":"both"}}))   #dict
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *  
 *      std::cout << OneXAPI::setLoggerConfig(R"({"main":{"logLevel":"info"}})") << std::endl;
 *      
 *      return 0;
 *  }
 */