/**
 * @api {onex} /Spot orderLimitBuy
 * @apiName orderLimitBuy
 * @apiDescription Price and amount are automatically rounded according to the exchange market. If user wants to change rounding rule, refer to getOrderRoundingRule & setOrderRoundingRule
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {Double} price
 * @apiParam {Double} baseAmount
 * @apiParam {String} clientOrderId Client Order ID as assigned by the client
 * @apiParam {Double} amplifier=1.0 If this field exists, the requested price will be <b>price*amplifier</b>
 * @apiParam {String} type=gtc gtc ioc fok
 * @onexParamExchanges Binance Upbit
 * @onexParamRequired m m
 * @onexParamRequired m m
 * @onexParamRequired m m
 * @onexParamRequired m m
 * @onexParamRequired o o
 * @onexParamRequired o o
 * @onexParamRequired o i
 * 
 * @apiParamExample Request Example : 
 *      {
 *          "baseCurrency":"BTC",
 *          "quoteCurrency":"USDT",
 *          "price":21351.1384,
 *          "baseAmount":1.5843,
 *          "amplifier":1.03       //requested price will be 21351.1384*1.03 = 21991.672552
 *      }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
 * @apiSuccess {String} symbol
 * @apiSuccess {String} orderId
 * @apiSuccess {String} clientOrderId
 * @apiSuccess {String} price
 * @apiSuccess {String} baseAmount
 * 
 * @apiSuccessExample Success-Response :
 *      {
 *          "success":true,
 *          "data":{
 *              "requestedApiCount":1,
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT",
 *              "symbol":"BTC-USDT",
 *              "orderId":"38463215",
 *              "clientOrderId":"",
 *              "price":"21991.67",
 *              "baseAmount":"1.584"
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
 *      std::string userInfo = R"({
 *          "accessKey":"user access key",
 *          "secretKey":"user secrey key"
 *      })";
 *      OneXAPI::Upbit::Spot client(userInfo);
 *      std::string request = R"({
 *          "baseCurrency":"XRP",
 *          "quoteCurrency":"KRW",
 *          "price":426.2348,
 *          "baseAmount":23.834219
 *      })";
 * 
 *      std::cout << client.orderLimitBuy(request) << std::endl;
 *      return 0;
 *  }
 */