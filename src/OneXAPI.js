/**
 * @api {onex} /OneXAPI getInfo
 * @apiName getInfo
 * @apiDescription get information of the OneXAPI Library
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
 * @apiSuccess {Object[]} supportedExchanges 
 * @apiSuccess {String} supportedExchanges.exchange     exchange name
 * @apiSuccess {String=Spot,Futures} supportedExchanges.instrument
 * @apiSuccess {String} onexapiVersion
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
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
 *  currently empty
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
 * @apiSuccess {String} main.outputMethod
 * @apiSuccess {String} main.logLevel
 * @apiSuccess {Object} websocket
 * @apiSuccess {String} websocket.outputMethod
 * @apiSuccess {String} websocket.logLevel
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "main":{
 *              "outputMethod":"terminal",
 *              "logLevel":"off"
 *          },
 *          "websocket":{
 *              "outputMethod":"terminal",
 *              "logLevel":"off"
 *          }
 *      }
 *  }
 *
 * @apiExample {python} python
 *  currently empty
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
 * @apiParam {String=off,info,warn,error,critical} main.logLevel=off
 * @apiParam {String=terminal,file,both} main.outputMethod=terminal terminal : 콘솔에 로그가 출력된다.<br>file : OneXAPI_Log 폴더에 해당 날짜의 파일.log 에 로그가 기록된다.<br>both : 콘솔과 파일에 로그가 기록된다.
 * @apiParam {Object} websocket 
 * @apiParam {String} websocket.logLevel 
 * @apiParam {String} websocket.outputMethod 
 * @onexParamExchanges {all o}
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
 *      }
 *  }
 * 
 * @apiSuccess {String} [requested__config]
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "main":{
 *              "logLevel":"info",
 *              "outputMethod":"both"
 *          }
 *      }
 *  }
 *
 * @apiExample {python} python
 *  currently empty
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