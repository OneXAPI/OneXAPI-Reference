/**
 * @api {onex} /__GENERAL__ General
 * @apiName General
 * @apiGroup __GENERAL__
 * @onexCategory
 */

/**
 * @api {onex} /__GENERAL__ getConfig
 * @apiName getConfig
 * @apiGroup __GENERAL__
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
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String} exchange
 * @apiSuccess {String=Spot,Futures} instrument
 * @apiSuccess {String} accessKey
 * @apiSuccess {String} secretKey
 * @apiSuccess {String} restEndpoint
 * @apiSuccess {String} publicWebsocketEndpoint
 * @apiSuccess {String} privateWebsocketEndpoint
 * @apiSuccess {Uint} restRequestTimeout=5000 [ms]
 * @apiSuccess {Uint} websocketConnectTimeout=5000 [ms]
 * @apiSuccess {Uint} websocketIdleTimeout=5000 [ms]
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "exchange":"Binance",
 *          "instrument":"__GENERAL__",
 *          "accessKey":"",
 *          "secretKey":"",
 *          "restEndpoint":"https://api.binance.com",
 *          "publicWebsocketEndpoint":"wss://stream.binance.com:9443",
 *          "privateWebsocketEndpoint":"wss://stream.binance.com:9443",
 *          "restRequestTimeout":5000,
 *          "websocketConnectTimeout":5000,
 *          "websocketIdleTimeout":5000
 *      }
 *  }
 *
 * @apiExample {python} python
 *   currently empty
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Spot client;
 *  
 *      std::cout << client.getConfig() << std::endl;
 *      // or
 *      std::cout << client.getConfig("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /__GENERAL__ setConfig
 * @apiName setConfig
 * @onexInfo Sets the settings for the object. Only the requested parameters are included in the response
 * @onexWarn The requested endpoint must be included in the endpoint candidates, otherwise it returns an error. See <a href=#api-Spot-getEndpointCandidates>getEndpointCandidates</a>.
 * @apiGroup __GENERAL__
 * @apiVersion 0.0.0
 *
 * @apiParam {String} accessKey
 * @apiParam {String} secretKey
 * @apiParam {String} restEndpoint
 * @apiParam {String} publicWebsocketEndpoint
 * @apiParam {String} privateWebsocketEndpoint
 * @apiParam {Uint} restRequestTimeout [ms]
 * @apiParam {Uint} websocketConnectTimeout [ms]
 * @apiParam {Uint} websocketIdleTimeout [ms]
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
 *      "restEndpoint":"https://api2.binance.com"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String} [requested__config]
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "restEndpoint":"https://api2.binance.com"
 *      }
 *  }
 *
 * @apiExample {python} python
 *   currently empty
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Spot client;
 *  
 *      std::cout << client.setConfig(R"({"accessKey":"new access key","secretKey":"new secret key","websocketIdleTimeout":2000})") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /__GENERAL__ getEndpointCandidates
 * @apiName getEndpointCandidates
 * @apiGroup __GENERAL__
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
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {StringArray} restEndpoints
 * @apiSuccess {StringArray} publicWebsocketEndpoints
 * @apiSuccess {StringArray} privateWebsocketEndpoints
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "restEndpoints":[
 *              "https://api.binance.com",
 *              "https://api1.binance.com",
 *              "https://api2.binance.com",
 *              "https://api3.binance.com",
 *          ],
 *          "publicWebsocketEndpoints":[
 *              "wss://stream.binance.com:9443"
 *          ],
 *          "privateWebsocketEndpoints":[
 *              "wss://stream.binance.com:9443"
 *          ]
 *      }
 *  }
 *
 * @apiExample {python} python
 *   currently empty
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Spot client;
 *  
 *      std::cout << client.getEndpointCandidates() << std::endl;
 *      // or
 *      std::cout << client.getEndpointCandidates("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /__GENERAL__ has
 * @apiName has
 * @onexInfo Check if API exists or not
 * @apiGroup __GENERAL__
 * @apiVersion 0.0.0
 *
 * @apiParam {String} api if not exist, return all APIs
 * @onexParamExchanges {all o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "api":"orderLimitBuy"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {Bool} [api__name]
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "orderLimitBuy":true
 *      }
 *  }
 *
 * @apiExample {python} python
 *   currently empty
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Spot client;
 *  
 *      std::cout << client.has("{}") << std::endl;
 *      // or
 *      std::cout << client.has(R"({"api":"withdraw"})") << std::endl;
 *      
 *      return 0;
 *  }
 */