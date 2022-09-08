/**
 * @api {onex} /Futures Wallet
 * @apiName Wallet
 * @apiGroup Futures
 * @onexCategory
 */

/**
 * @api {onex} /Futures fetchBalance
 * @apiName fetchBalance
 * @onexWarn During websocket is running, fetchBalance does not send rest API request. <br>If you want to force to send rest API, set forceRestApi parameter as true.
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {Bool} forceRestApi=false force to update using REST API
 * @apiParam {StringArray} currencies If not exist, return all currencies
 * @onexParamExchanges {Binance o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "forceRestApi":false,
 *      "currencies":["BTC", "ETH", "XRP", "ADA"]
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String=rest,websocket} fetchType
 * @apiSuccess {Object} balance
 * @apiSuccess {Object} [balance.currency__name]
 * @apiSuccess {DoubleString} balance.currency.balance wallet balance
 * @apiSuccess {DoubleString} balance.currency.crossWalletBalance crossed wallet balance
 * @apiSuccess {DoubleString} balance.currency.crossUnPnl unrealized profit of crossed positions
 * @apiSuccess {DoubleString} balance.currency.availableBalance available balance
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "fetchType":"rest",
 *          "balance":{
 *              "BTC":{
 *                  "balance":"3.15437",
 *                  "crossWalletBalance":"1.1357",
 *                  "crossUnPnl":"0.0",
 *                  "availableBalance":"1.1357"
 *              },
 *              "ETH":{
 *                  "balance":"124.8435",
 *                  "crossWalletBalance":"83.5831",
 *                  "crossUnPnl":"3.8354",
 *                  "availableBalance":"83.5831"
 *              }
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Futures client(userInfo)__;
 *  
 *      std::string request = R"(
 *          {
 *              "forceRestApi":false,
 *              "currencies":["BTC", "ETH"]
 *          }
 *      )";
 *  
 *      std::cout << client.fetchBalance(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures fetchPositions
 * @apiName fetchPositions
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration
 * @apiParam {String=buy,sell} side
 * @onexParamExchanges {Binance o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {ObjectArray} positions 
 * @apiSuccess {String} positions.baseCurrency
 * @apiSuccess {String} positions.quoteCurrency
 * @apiSuccess {String} positions.expiration
 * @apiSuccess {String} positions.symbol
 * @apiSuccess {DoubleString} positions.initialMargin
 * @apiSuccess {DoubleString} positions.unrealizedProfit
 * @apiSuccess {DoubleString} positions.entryPrice
 * @apiSuccess {DoubleString} positions.positionAmt positive means long position, negative means short position
 * @apiSuccess {Uint} positions.leverage
 * @apiSuccess {String=cross,isolated} positions.marginType
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "positions":[
 *              {
 *                  "baseCurrency":"BTC",
 *                  "quoteCurrency":"USDT",
 *                  "expiration":"PERP",
 *                  "symbol":"BTCUSDT",
 *                  "initialMargin":"1235.13586",
 *                  "unrealizedProfit":"10.23854",
 *                  "entryPrice":"21752.12",
 *                  "positionAmt":"1.235",
 *                  "leverage":10,
 *                  "marginType":"isolated",
 *              }
 *          ]
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Futures client(userInfo)__;
 *  
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT"
 *          }
 *      )";
 *  
 *      std::cout << client.fetchPositions(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures fetchFundingFeeIncomeHistory
 * @apiName fetchFundingFeeIncomeHistory
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration
 * @apiParam {Uint} startTime [ms]
 * @apiParam {Uint} endTime=now [ms]
 * @onexParamExchanges {Binance o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "startTime":1656042045125,
 *      "endTime":1656063182432
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {ObjectArray} incomes 
 * @apiSuccess {String} incomes.baseCurrency
 * @apiSuccess {String} incomes.quoteCurrency
 * @apiSuccess {String} incomes.expiration
 * @apiSuccess {String} incomes.symbol
 * @apiSuccess {DoubleString} incomes.income
 * @apiSuccess {String} incomes.incomeCurrency
 * @apiSuccess {Uint} incomes.timestamp [ms]
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "incomes":[
 *              {
 *                  "baseCurrency":"BTC",
 *                  "quoteCurrency":"USDT",
 *                  "expiration":"PERP",
 *                  "symbol":"BTCUSDT",
 *                  "income":"-31.13586",
 *                  "incomeCurrency":"USDT",
 *                  "timestamp":1656044000000
 *              }
 *          ]
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Futures client(userInfo)__;
 *  
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT",
 *              "startTime":1656042045125,
 *              "endTime":1656063182432
 *          }
 *      )";
 *  
 *      std::cout << client.fetchFundingFeeIncomeHistory(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures Trade
 * @apiName Trade
 * @apiGroup Futures
 * @onexCategory
 */

/**
 * @api {onex} /Futures getOrderRoundingRule
 * @apiName getOrderRoundingRule
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {NoParam} __EMPTY__ 
 * @onexParamExchanges {All o}
 * @onexParamOption {i}
 * 
 * @apiParamExample Request Example : 
 *  {
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String=ceil,floor,round} limitBuyPrice=round
 * @apiSuccess {String=ceil,floor,round} limitBuyBaseAmount=round
 * @apiSuccess {String=ceil,floor,round} limitSellPrice=round
 * @apiSuccess {String=ceil,floor,round} limitSellBaseAmount=round
 * @apiSuccess {String=ceil,floor,round} marketBuyBaseAmount=round
 * @apiSuccess {String=ceil,floor,round} marketSellBaseAmount=round
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "limitBuyPrice":"ceil",             
 *          "limitBuyBaseAmount":"floor",
 *          "limitSellPrice":"ceil",
 *          "limitSellBaseAmount":"floor",
 *          "marketBuyBaseAmount":"round",
 *          "marketSellBaseAmount":"round",
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Futures()
 *  
 *  print(client.getOrderRoundingRule())
 *  # or
 *  print(client.getOrderRoundingRule(""))
 *  # or
 *  print(client.getOrderRoundingRule({}))
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Futures client;
 *  
 *      std::cout << client.getOrderRoundingRule() << std::endl;
 *      // or
 *      std::cout << client.getOrderRoundingRule("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures setOrderRoundingRule
 * @apiName setOrderRoundingRule
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String=ceil,floor,round} limitBuyPrice
 * @apiParam {String=ceil,floor,round} limitBuyBaseAmount
 * @apiParam {String=ceil,floor,round} limitSellPrice
 * @apiParam {String=ceil,floor,round} limitSellBaseAmount
 * @apiParam {String=ceil,floor,round} marketBuyBaseAmount
 * @apiParam {String=ceil,floor,round} marketSellBaseAmount
 * @onexParamExchanges {All o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "marketSellBaseAmount":"floor"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String=ceil,floor,round} [requested__field]
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "marketSellBaseAmount":"floor"
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Futures()
 *  
 *  request = {
 *      "limitBuyPrice":"ceil",
 *      "limitSellBaseAmount":"floor"
 *  }
 *  
 *  print(client.setOrderRoundingRule(request))
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Futures client;
 *      std::string request = R"(
 *          {
 *              "limitBuyPrice":"ceil"
 *          }
 *      )";
 *  
 *      std::cout << client.setOrderRoundingRule(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures orderLimitBuy
 * @apiName orderLimitBuy
 * @onexWarn Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Futures-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Futures-setOrderRoundingRule>setOrderRoundingRule</a>.
 * @onexDanger Currently, OneXAPI supports only One-way mode trading.
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration=PERP
 * @apiParam {Double} price
 * @apiParam {Double} baseAmount
 * @apiParam {bool} reduceOnly=false
 * @apiParam {String} clientOrderId Client Order ID as assigned by the client
 * @apiParam {Double} amplifier=1.0 If this field exists, the requested price will be <b>price*amplifier</b>
 * @apiParam {String=gtc,ioc,fok} type=gtc
 * @onexParamExchanges {Binance o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "price":21351.1384,
 *      "baseAmount":1.5843,
 *      "amplifier":1.03       //requested price will be 21351.1384*1.03 = 21991.672552
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
 * @apiSuccess {String} expiration
 * @apiSuccess {String} symbol
 * @apiSuccess {String} orderId
 * @apiSuccess {String} clientOrderId
 * @apiSuccess {DoubleString} price
 * @apiSuccess {DoubleString} baseAmount
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "baseCurrency":"BTC",
 *          "quoteCurrency":"USDT",
 *          "expiration":"PERP",
 *          "symbol":"BTC-USDT",
 *          "orderId":"38463215",
 *          "clientOrderId":"",
 *          "price":"21991.67",
 *          "baseAmount":"1.584"
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
 *      std::string userInfo = R"({
 *          "accessKey":"user access key",
 *          "secretKey":"user secrey key"
 *      })";
 *      OneXAPI::Binance::Futures client(userInfo);
 *      std::string request = R"({
 *          "baseCurrency":"XRP",
 *          "quoteCurrency":"USDT",
 *          "price":0.4348,
 *          "baseAmount":23.834219
 *      })";
 * 
 *      std::cout << client.orderLimitBuy(request) << std::endl;
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures orderLimitSell
 * @apiName orderLimitSell
 * @onexWarn Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Futures-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Futures-setOrderRoundingRule>setOrderRoundingRule</a>.
 * @onexDanger Currently, OneXAPI supports only One-way mode trading.
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration=PERP
 * @apiParam {Double} price
 * @apiParam {Double} baseAmount
 * @apiParam {bool} reduceOnly=false
 * @apiParam {String} clientOrderId Client Order ID as assigned by the client
 * @apiParam {Double} amplifier=1.0 If this field exists, the requested price will be <b>price*amplifier</b>
 * @apiParam {String=gtc,ioc,fok} type=gtc
 * @onexParamExchanges {Binance o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "price":21351.1384,
 *      "baseAmount":1.5843,
 *      "amplifier":0.97       //requested price will be 21351.1384*0.97 = 20710.604248
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
 * @apiSuccess {String} expiration
 * @apiSuccess {String} symbol
 * @apiSuccess {String} orderId
 * @apiSuccess {String} clientOrderId
 * @apiSuccess {DoubleString} price
 * @apiSuccess {DoubleString} baseAmount
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "baseCurrency":"BTC",
 *          "quoteCurrency":"USDT",
 *          "expiration":"PERP",
 *          "symbol":"BTC-USDT",
 *          "orderId":"38463215",
 *          "clientOrderId":"",
 *          "price":"20710.6",
 *          "baseAmount":"1.584"
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Futures client(userInfo)__;
 *      
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"XRP",
 *              "quoteCurrency":"USDT",
 *              "price":486.2348,
 *              "baseAmount":23.834219
 *          }
 *      )";
 *  
 *      std::cout << client.orderLimitSell(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures orderMarketBuy
 * @apiName orderMarketBuy
 * @onexWarn Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Futures-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Futures-setOrderRoundingRule>setOrderRoundingRule</a>.
 * @onexDanger Currently, OneXAPI supports only One-way mode trading.
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration=PERP
 * @apiParam {Double} baseAmount
 * @apiParam {bool} reduceOnly=false
 * @apiParam {String} clientOrderId Client Order ID as assigned by the client
 * @onexParamExchanges {Binance o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "baseAmount":1.5843
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
 * @apiSuccess {String} expiration
 * @apiSuccess {String} symbol
 * @apiSuccess {String} orderId
 * @apiSuccess {String} clientOrderId
 * @apiSuccess {DoubleString} baseAmount
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "baseCurrency":"BTC",
 *          "quoteCurrency":"USDT",
 *          "expiration":"PERP",
 *          "symbol":"BTC-USDT",
 *          "orderId":"38463215",
 *          "clientOrderId":"",
 *          "baseAmount":"1.584"
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Futures client(userInfo)__;
 *      
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT",
 *              "baseAmount":1.5843
 *          }
 *      )";
 *  
 *      std::cout << client.orderMarketBuy(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures orderMarketSell
 * @apiName orderMarketSell
 * @onexWarn Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Futures-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Futures-setOrderRoundingRule>setOrderRoundingRule</a>.
 * @onexDanger Currently, OneXAPI supports only One-way mode trading.
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration=PERP
 * @apiParam {Double} baseAmount
 * @apiParam {bool} reduceOnly=false
 * @apiParam {String} clientOrderId Client Order ID as assigned by the client
 * @onexParamExchanges {Binance o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "baseAmount":1.5843
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
 * @apiSuccess {String} expiration
 * @apiSuccess {String} symbol
 * @apiSuccess {String} orderId
 * @apiSuccess {String} clientOrderId
 * @apiSuccess {DoubleString} baseAmount
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "baseCurrency":"BTC",
 *          "quoteCurrency":"USDT",
 *          "expiration":"PERP",
 *          "symbol":"BTC-USDT",
 *          "orderId":"38463215",
 *          "price":"20710.6",
 *          "baseAmount":"1.584"
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Futures client(userInfo)__;
 *      
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT",
 *              "baseAmount":1.5843
 *          }
 *      )";
 *  
 *      std::cout << client.orderMarketSell(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures orderCancel
 * @apiName orderCancel
 * @onexWarn If both <b><i>orderId</b></i> and <b><i>clientOrderId</b></i> are options, either of them must be sent.<br>If both are sent, <b><i>orderId</b></i> is used preferentially.
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration=PERP
 * @apiParam {String} orderId
 * @apiParam {String} clientOrderId Client Order ID as assigned by the client
 * @onexParamExchanges {Binance o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "orderId":"38463215"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
 * @apiSuccess {String} expiration
 * @apiSuccess {String} symbol
 * @apiSuccess {String} orderId
 * @apiSuccess {String} clientOrderId
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "baseCurrency":"BTC",
 *          "quoteCurrency":"USDT",
 *          "expiration":"PERP",
 *          "symbol":"BTC-USDT",
 *          "orderId":"38463215",
 *          "clientOrderId":""
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Futures client(userInfo)__;
 *      
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT",
 *              "orderId":"39713467831"
 *          }
 *      )";
 *  
 *      std::cout << client.orderCancel(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures fetchOrderInfo
 * @apiName fetchOrderInfo
 * @onexWarn If both <b><i>orderId</b></i> and <b><i>clientOrderId</b></i> are options, either of them must be sent.<br>If both are sent, <b><i>orderId</b></i> is used preferentially.
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration=PERP
 * @apiParam {String} orderId
 * @apiParam {String} clientOrderId Client Order ID as assigned by the client
 * @onexParamExchanges {Binance o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "orderId":"38463215"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
 * @apiSuccess {String} expiration
 * @apiSuccess {String} symbol
 * @apiSuccess {String} orderId
 * @apiSuccess {String} clientOrderId
 * @apiSuccess {String=buy,sell} side
 * @apiSuccess {String=long,short} positionSide
 * @apiSuccess {Bool} reduceOnly
 * @apiSuccess {DoubleString} originalAmount
 * @apiSuccess {DoubleString} filledAmount
 * @apiSuccess {DoubleString} remainingAmount
 * @apiSuccess {DoubleString} originalPrice
 * @apiSuccess {DoubleString} avgFillPrice
 * @apiSuccess {Uint} created [ms]
 * @apiSuccess {String} feeCurrency
 * @apiSuccess {DoubleString} feeAmount
 * @apiSuccess {String=open,filled,cancelled} status
 * @apiSuccess {ObjectArray} fills
 * @apiSuccess {String} fills.orderId
 * @apiSuccess {DoubleString} fills.price
 * @apiSuccess {DoubleString} fills.amount
 * @apiSuccess {Uint} fills.timestamp [ms]
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":2,
 *          "baseCurrency":"BTC",
 *          "quoteCurrency":"USDT",
 *          "expiration":"PERP",
 *          "symbol":"BTC-USDT",
 *          "orderId":"38463215",
 *          "clientOrderId":"",
 *          "side":"buy",
 *          "positionSide":"long",
 *          "reduceOnly":false,
 *          "originalAmount":"1.5984",
 *          "filledAmount":"0.3686",
 *          "remainingAmount":"1.2298",
 *          "originalPrice":"22135.35",
 *          "avgFillPrice":"22135.28",
 *          "created":1656044045
 *          "feeCurrency":"BTC",
 *          "feeAmount":"0.00027645",
 *          "status":"open",
 *          "fills":[
 *              {
 *                  "orderId":"38435724",
 *                  "price":"22135.28",
 *                  "amount":"0.3686",
 *                  "timestamp":1661327586135
 *              }
 *          ]
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Futures client(userInfo)__;
 *  
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT",
 *              "orderId":"13868943153"
 *          }
 *      )";
 *  
 *      std::cout << client.fetchOrderInfo(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures fetchOpenOrders
 * @apiName fetchOpenOrders
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration
 * @apiParam {String=buy,sell} side
 * @onexParamExchanges {Binance o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "side":"buy"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {ObjectArray} openOrders
 * @apiSuccess {String} openOrders.baseCurrency
 * @apiSuccess {String} openOrders.quoteCurrency
 * @apiSuccess {String} openOrders.expiration
 * @apiSuccess {String} openOrders.symbol
 * @apiSuccess {String} openOrders.orderId
 * @apiSuccess {String=buy,sell} openOrders.side
 * @apiSuccess {String=long,short} openOrders.positionSide
 * @apiSuccess {Bool} openOrders.reduceOnly
 * @apiSuccess {DoubleString} openOrders.originalAmount
 * @apiSuccess {DoubleString} openOrders.filledAmount
 * @apiSuccess {DoubleString} openOrders.remainingAmount
 * @apiSuccess {DoubleString} openOrders.originalPrice
 * @apiSuccess {Uint} openOrders.created [ms]
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":2,
 *          "openOrders":[
 *              {
 *                  "baseCurrency":"BTC",
 *                  "quoteCurrency":"USDT",
 *                  "expiration":"PERP",
 *                  "symbol":"BTCUSDT",
 *                  "orderId":"38463215",
 *                  "side":"buy",
 *                  "positionSide":"long",
 *                  "reduceOnly":false,
 *                  "originalAmount":"1.5984",
 *                  "filledAmount":"0.3686",
 *                  "remainingAmount":"1.2298",
 *                  "originalPrice":"22135.35",
 *                  "created":1656044045
 *              }
 *          ]
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Futures client(userInfo)__;
 *  
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT"
 *          }
 *      )";
 *  
 *      std::cout << client.fetchOpenOrders(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures fetchTradingFee
 * @apiName fetchTradingFee
 * @onexDanger Binance : Trading fee is a value before bnb discount
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration=PERP
 * @onexParamExchanges {Binance o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {ObjectArray} fees
 * @apiSuccess {String} fees.baseCurrency
 * @apiSuccess {String} fees.quoteCurrency
 * @apiSuccess {String} fees.expiration
 * @apiSuccess {String} fees.symbol
 * @apiSuccess {DoubleString} fees.makerFee
 * @apiSuccess {DoubleString} fees.takerFee
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "fees":[
 *              {
 *                  "baseCurrency":"BTC",
 *                  "quoteCurrency":"USDT",
 *                  "expiration":"PERP",
 *                  "symbol":"BTCUSDT",
 *                  "makerFee":"0.0004",
 *                  "takerFee":"0.00075"
 *              }
 *          ]
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Futures client(userInfo)__;
 *  
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT"
 *          }
 *      )";
 *  
 *      std::cout << client.fetchTradingFee(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures fetchFundingRate
 * @apiName fetchFundingRate
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration
 * @onexParamExchanges {Binance x}
 * @onexParamOption {f}
 * @onexParamOption {f}
 * @onexParamOption {f}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {ObjectArray} fundingRates
 * @apiSuccess {String} fundingRates.baseCurrency
 * @apiSuccess {String} fundingRates.quoteCurrency
 * @apiSuccess {String} fundingRates.expiration
 * @apiSuccess {String} fundingRates.symbol
 * @apiSuccess {DoubleString} fundingRates.rate
 * @apiSuccess {Uint} fundingRates.time [s]
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "fundingRates":[
 *              {
 *                  "baseCurrency":"BTC",
 *                  "quoteCurrency":"USDT",
 *                  "expiration":"PERP",
 *                  "symbol":"BTCUSDT",
 *                  "rate":"0.0025",
 *                  "time":1661406463
 *              }
 *          ]
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Futures client(userInfo)__;
 *  
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT"
 *          }
 *      )";
 *  
 *      std::cout << client.fetchFundingRate(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures fetchLeverage
 * @apiName fetchLeverage
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration=PERP
 * @onexParamExchanges {Binance x}
 * @onexParamOption {f}
 * @onexParamOption {f}
 * @onexParamOption {f}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {ObjectArray} leverages
 * @apiSuccess {String} leverages.baseCurrency If this field is empty, all symbols have the same leverage
 * @apiSuccess {String} leverages.quoteCurrency If this field is empty, all symbols have the same leverage
 * @apiSuccess {String} leverages.expiration If this field is empty, all symbols have the same leverage
 * @apiSuccess {String} leverages.symbol If this field is empty, all symbols have the same leverage
 * @apiSuccess {Uint} leverages.leverage
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "leverages":[
 *              {
 *                  "baseCurrency":"BTC",
 *                  "quoteCurrency":"USDT",
 *                  "expiration":"PERP",
 *                  "symbol":"BTCUSDT",
 *                  "leverage":10
 *              }
 *          ]
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Bybit::Futures client(userInfo)__;
 *  
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT"
 *          }
 *      )";
 *  
 *      std::cout << client.fetchLeverage(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures changeLeverage
 * @apiName changeLeverage
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration=PERP
 * @apiParam {Uint} leverage
 * @onexParamExchanges {Binance o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {m}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "leverage":10
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {String} baseCurrency If this field is empty, all symbols have the same leverage
 * @apiSuccess {String} quoteCurrency If this field is empty, all symbols have the same leverage
 * @apiSuccess {String} expiration If this field is empty, all symbols have the same leverage
 * @apiSuccess {String} symbol If this field is empty, all symbols have the same leverage
 * @apiSuccess {Uint} leverage
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "baseCurrency":"BTC",
 *          "quoteCurrency":"USDT",
 *          "expiration":"PERP",
 *          "symbol":"BTCUSDT",
 *          "leverage":10
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Futures client(userInfo)__;
 *  
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT",
 *              "leverage":10
 *          }
 *      )";
 *  
 *      std::cout << client.changeLeverage(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures fetchMarginType
 * @apiName fetchMarginType
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration=PERP
 * @onexParamExchanges {Binance x}
 * @onexParamOption {f}
 * @onexParamOption {f}
 * @onexParamOption {f}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {ObjectArray} marginTypes
 * @apiSuccess {String} marginTypes.baseCurrency
 * @apiSuccess {String} marginTypes.quoteCurrency
 * @apiSuccess {String} marginTypes.expiration
 * @apiSuccess {String} marginTypes.symbol
 * @apiSuccess {String=cross,isolated} marginTypes.marginType
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "marginTypes":[
 *              {
 *                  "baseCurrency":"BTC",
 *                  "quoteCurrency":"USDT",
 *                  "expiration":"PERP",
 *                  "symbol":"BTCUSDT",
 *                  "marginType":"cross"
 *              }
 *          ]
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Bybit::Futures client(userInfo)__;
 *  
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT"
 *          }
 *      )";
 *  
 *      std::cout << client.fetchMarginType(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures changeMarginType
 * @apiName changeMarginType
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration=PERP
 * @apiParam {String=cross,isolated} marginType
 * @onexParamExchanges {Binance o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {m}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "marginType":"isolated"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
 * @apiSuccess {String} expiration
 * @apiSuccess {String} symbol
 * @apiSuccess {String=cross,isolated} marginType
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "baseCurrency":"BTC",
 *          "quoteCurrency":"USDT",
 *          "expiration":"PERP",
 *          "symbol":"BTCUSDT",
 *          "marginType":"isolated"
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Futures client(userInfo)__;
 *  
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT",
 *              "marginType":"isolated"
 *          }
 *      )";
 *  
 *      std::cout << client.changeMarginType(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures Market
 * @apiName Market
 * @apiGroup Futures
 * @onexCategory
 */

/**
 * @api {onex} /Futures getCandleIntervalCandidates
 * @apiName getCandleIntervalCandidates
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {NoParam} __EMPTY__ 
 * @onexParamExchanges {All o}
 * @onexParamOption {i}
 * 
 * @apiParamExample Request Example : 
 *  {
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {StringArray=1min,3min,5min,15min,30min,1hour,2hour,4hour,6hour,8hour,12hour,1day,3day,1week,1month} intervals
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "intervals":[
 *              "15min","1day","1hour","1min","1month","1week","30min","3min","4hour","5min"
 *          ]
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Futures()
 *  
 *  print(client.getCandleIntervalCandidates())
 *  # or
 *  print(client.getCandleIntervalCandidates(""))
 *  # or
 *  print(client.getCandleIntervalCandidates({}))
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Futures client;
 *  
 *      std::cout << client.getCandleIntervalCandidates() << std::endl;
 *      // or
 *      std::cout << client.getCandleIntervalCandidates("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures fetchMarkets
 * @apiName fetchMarkets
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration "PERP" or date([YYMMDD] format such as "220930", "221015") are allowed
 * @onexParamExchanges {Binance o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "quoteCurrency":"USDT"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {ObjectArray} markets
 * @apiSuccess {String} markets.baseCurrency
 * @apiSuccess {String} markets.quoteCurrency
 * @apiSuccess {String} markets.expiration
 * @apiSuccess {String} markets.symbol
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "markets":[
 *              {
 *                  "baseCurrency":"BTC",
 *                  "quoteCurrency":"USDT",
 *                  "expiration":"PERP",
 *                  "symbol":"BTCUSDT"
 *              },
 *              {
 *                  "baseCurrency":"ETH",
 *                  "quoteCurrency":"USDT",
 *                  "expiration":"PERP",
 *                  "symbol":"ETHUSDT"
 *              },
 *              {
 *                  "baseCurrency":"XRP",
 *                  "quoteCurrency":"USDT",
 *                  "expiration":"PERP",
 *                  "symbol":"XRPUSDT"
 *              },
 *              {
 *                  "baseCurrency":"ADA",
 *                  "quoteCurrency":"USDT",
 *                  "expiration":"PERP",
 *                  "symbol":"ADAUSDT"
 *              },
 *              ...
 *          ]
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Futures()
 *  
 *  request = {
 *      "quoteCurrency":"USDT"
 *  }
 *  
 *  print(client.fetchMarkets(request))
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Futures client;
 *  
 *      std::string request = R"(
 *          {
 *              "quoteCurrency":"USDT"
 *          }
 *      )";
 *  
 *      std::cout << client.fetchMarkets(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures fetchTicker
 * @apiName fetchTicker
 * @onexWarn During ticker websocket is running, fetchTicker does not send rest API request.<br>If you want to force to send rest API, set forceRestApi parameter as true. 
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration=PERP "PERP" or date([YYMMDD] format such as "220930", "221015") are allowed
 * @apiParam {Bool} forceRestApi=false
 * @onexParamExchanges {Binance o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "expiration":"PERP",
 *      "forceRestApi":true
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
 * @apiSuccess {String} expiration
 * @apiSuccess {String} symbol
 * @apiSuccess {String=rest,websocket} fetchType
 * @apiSuccess {Uint} openTime [s] open Time(UTC)
 * @apiSuccess {DoubleString} openPrice
 * @apiSuccess {DoubleString} closePrice close Price(last Price)
 * @apiSuccess {DoubleString} lowPrice low Price(24h)
 * @apiSuccess {DoubleString} highPrice high Price(24h)
 * @apiSuccess {DoubleString} baseVolume baseCurrency Volume(24h)
 * @apiSuccess {DoubleString} quoteVolume quoteCurrency Volume(24h)
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "baseCurrency":"BTC",
 *          "quoteCurrency":"USDT",
 *          "expiration":"PERP",
 *          "symbol":"BTC-USDT",
 *          "fetchType":"rest",
 *          "openTime":"1656044045,
 *          "openPrice":"21004.0",
 *          "closePrice":"21432.14",
 *          "lowPrice":"20844.64",
 *          "highPrice":"21662.5",
 *          "baseVolume":"591235.5124",
 *          "quoteVolume":"1529512525.23145"
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Futures()
 *  
 *  request = {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "expiration":"PERP"
 *  }
 *  
 *  print(client.fetchTicker(request))
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Futures client;
 *  
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC"
 *              "quoteCurrency":"USDT",
 *              "expiration":"220930"
 *          }
 *      )";
 *  
 *      std::cout << client.fetchTicker(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures fetchOrderbook
 * @apiName fetchOrderbook
 * @onexWarn During orderbook websocket is running, fetchOrderbook does not send rest API request.<br>If you want to force to send rest API, set forceRestApi parameter as true. 
 * @onexDanger Binance : Timestamp does not mean the server time; it means the time when the response arrived.
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration=PERP "PERP" or date([YYMMDD] format such as "220930", "221015") are allowed
 * @apiParam {Bool} forceRestApi=false
 * @onexParamExchanges {Binance o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "expiration":"220930"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
 * @apiSuccess {String} expiration
 * @apiSuccess {String} symbol
 * @apiSuccess {String=rest,websocket} fetchType
 * @apiSuccess {Uint} timestamp [ms]
 * @apiSuccess {ObjectArray} bids Descending order according to timestamp
 * @apiSuccess {DoubleString} bids.price
 * @apiSuccess {DoubleString} bids.size
 * @apiSuccess {ObjectArray} asks Ascending order according to price
 * @apiSuccess {DoubleString} asks.price
 * @apiSuccess {DoubleString} asks.size
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "baseCurrency":"BTC",
 *          "quoteCurrency":"USDT",
 *          "expiration":"220930",
 *          "symbol":"BTCUSDT_220930",
 *          "fetchType":"websocket",
 *          "timestamp":1656044045154,
 *          "bids":[
 *              {
 *                  "price":"21458.15",
 *                  "size":"0.1548"
 *              },
 *              {
 *                  "price":"21458.08",
 *                  "size":"0.1578"
 *              },
 *              {
 *                  "price":"21458.03",
 *                  "size":"0.3518"
 *              },
 *              ...
 *          ],
 *          "asks":[
 *              {
 *                  "price":"21458.16", 
 *                  "size":"0.0232"
 *              },
 *              {
 *                  "price":"21458.32",
 *                  "size":"0.2158"
 *              },
 *              {
 *                  "price":"21458.36",
 *                  "size":"0.3183"
 *              },
 *              ...
 *          ]    
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Futures()
 *  
 *  request = {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "expiration":"220930"
 *  }
 *  
 *  print(client.fetchOrderbook(request))
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Futures client;
 *  
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT",
 *              "expiration":"220930"
 *          }
 *      )";
 *  
 *      std::cout << client.fetchOrderbook(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Futures fetchCandleHistory
 * @apiName fetchCandleHistory
 * @onexWarn When enormous amount of data is requested, fetchCandleHistory takes a long time to execute.
 * @apiGroup Futures
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} expiration=PERP "PERP" or date([YYMMDD] format such as "220930", "221015") are allowed
 * @apiParam {String} interval This param depends on the exchange. Please check available intervals using getCandleIntervalCandidates
 * @apiParam {Uint} startTime [s]
 * @apiParam {Uint} endTime=now [s]
 * @apiParam {Uint} fetchInterval=200 [ms]<br>frequent api request may exceeds rate limit, therefore apiReqInterval decides how long time to sleep between each api request
 * @onexParamExchanges {Binance o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {m}
 * @onexParamOption {m}
 * @onexParamOption {o}
 * @onexParamOption {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "expiration":"PERP",
 *      "interval":"1min",
 *      "startTime":1656042045,
 *      "endTime":1656063182,
 *      "fetchInterval":200
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
 * @apiSuccess {String} expiration
 * @apiSuccess {String} symbol
 * @apiSuccess {ObjectArray} candles Ascending order according to timestamp
 * @apiSuccess {Uint} candles.timestamp [s]
 * @apiSuccess {DoubleString} candles.openPrice
 * @apiSuccess {DoubleString} candles.closePrice
 * @apiSuccess {DoubleString} candles.highPrice
 * @apiSuccess {DoubleString} candles.lowPrice
 * @apiSuccess {DoubleString} candles.baseVolume
 * @apiSuccess {DoubleString} candles.quoteVolume
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":31,
 *          "baseCurrency":"BTC",
 *          "quoteCurrency":"USDT",
 *          "expiration":"PERP",
 *          "symbol":"BTC-USDT",
 *          "candles":[
 *              {
 *                  "timestamp":1656042060,
 *                  "openPrice":"21035.12",
 *                  "closePrice":"21086.83",
 *                  "highPrice":"21132.28",
 *                  "lowPrice":"21028.83",
 *                  "baseVolume":"0.83648",
 *                  "quoteVolume":"1087.424"
 *              },
 *              {
 *                  "timestamp":1656042120,
 *                  "openPrice":"21086.83",
 *                  "closePrice":"21098.19",
 *                  "highPrice":"21099.89",
 *                  "lowPrice":"21073.14",
 *                  "baseVolume":"0.58492",
 *                  "quoteVolume":"760.396"
 *              },
 *              ...
 *          ]
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Futures()
 *  
 *  request = {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "expiration":"PERP",
 *      "interval":"3min",
 *      "startTime":1659189600,
 *      "fetchInterval":100
 *  }
 *  
 *  print(client.fetchCandleHistory(request))
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Futures client;
 *  
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT",
 *              "expiration":"PERP",
 *              "interval":"3min",
 *              "startTime":1659189600,
 *              "fetchInterval":100
 *          }
 *      )";
 *  
 *      std::cout << client.fetchCandleHistory(request) << std::endl;
 *      
 *      return 0;
 *  }
 */