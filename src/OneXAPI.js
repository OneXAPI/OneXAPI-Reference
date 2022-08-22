/**
 * @api {onex} /OneXAPI getInfo
 * @apiName getInfo
 * @apiDescription get information of the OneXAPI Library
 * @apiGroup OneXAPI
 * @apiVersion 0.0.0
 *
 * @apiParam {NoParam} __EMPTY__ 
 * @onexParamExchanges All
 * @onexParamRequired i
 * 
 * @apiParamExample Request Example : 
 *      {
 *      }
 * 
 * @apiSuccess {Object[]} supportedExchanges 
 * @apiSuccess {String} supportedExchanges.exchange     exchange name
 * @apiSuccess {String} supportedExchanges.instrument   spot futures
 * @apiSuccess {String} onexapiVersion
 * 
 * @apiSuccessExample Success-Response :
 *      {
 *          "success":true,
 *          "data":{
 *              "supportedExchanges":[
 *              {
 *                  "exchange":"Binance",
 *                  "instrument":"Spot"
 *              },
 *              {
 *                  "exchange":"Upbit",
 *                  "instrument":"Spot"
 *              },
 *              {
 *                   "exchange":"Binance",
 *                  "instrument":"Futures"
 *              },
 *              {
 *                 "exchange":"ftx",
 *                 "instrument":"Futures"
 *              },
 *          ]
 *          "onexapiVersion":"1.16.0"
 *          }
 *      }
 *
 * @apiExample {python} python
 *   currently empty
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
