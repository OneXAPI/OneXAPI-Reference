/**
 * @api {onex} /Spot getWithdrawRoundingRule
 * @apiName getWithdrawRoundingRule
 * @apiGroup Spot
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
 * @apiSuccess {String=ceil,floor,round} roundingRule=round 
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "roundingRule":"floor"
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
 *      OneXAPI::Binance::Spot client;
 *  
 *      std::cout << client.getWithdrawRoundingRule() << std::endl;
 *      // or
 *      std::cout << client.getWithdrawRoundingRule("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot setWithdrawRoundingRule
 * @apiName setWithdrawRoundingRule
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String=ceil,floor,round} roundingRule
 * @onexParamExchanges {all o}
 * @onexParamOption {m}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "roundingRule":"ceil"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String=ceil,floor,round} roundingRule 
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "roundingRule":"ceil"
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
 *      OneXAPI::Binance::Spot client;
 *      
 *      std::string request = R"(
 *          {
 *              "roundingRule":"ceil"
 *          }
 *      )";
 *  
 *      std::cout << client.setWithdrawRoundingRule(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot withdraw
 * @apiName withdraw
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} currency
 * @apiParam {String} chain if this field is empty, default chain is used
 * @apiParam {String} address
 * @apiParam {String} tag
 * @apiParam {Double} amount
 * @apiParam {Bool} feeInAmount
 * @apiParam {Bool} internal
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {m} {m}
 * @onexParamOption {o} {i}
 * @onexParamOption {m} {m}
 * @onexParamOption {o} {o}
 * @onexParamOption {m} {m}
 * @onexParamOption {o} {o}
 * @onexParamOption {i} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "currency":"MATIC",
 *      "chain":"ETH",
 *      "address":"0xAFWE13FAES1387",
 *      "amount":1365.135468
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String} currency
 * @apiSuccess {String} chain If not exist, return empty string
 * @apiSuccess {String} address
 * @apiSuccess {String} tag If not exist, return empty string
 * @apiSuccess {String} orderId
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":2,
 *          "currency":"MATIC",
 *          "chain":"ETH",
 *          "address":"0xAFWE13FAES1387",
 *          "tag":"",
 *          "orderId":"451399413"
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Spot client(userInfo)__;
 *      
 *      std::string request = R"(
 *          {
 *              "currency":"MATIC",
 *              "chain":"ETH",
 *              "address":"0xAFWE13FAES1387",
 *              "amount":1365.135468
 *          }
 *      )";
 *  
 *      std::cout << client.withdraw(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot fetchAllCurrencies
 * @apiName fetchAllCurrencies
 * @apiGroup Spot
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
 * @apiSuccess {Object} currencies
 * @apiSuccess {Object} currencies.currency
 * @apiSuccess {Object[]} currencies.currency.chains <b>If this field is empty, exchange supports only single chain or nothing. Please check exchange before withdraw or deposit crypto currency.</b>
 * @apiSuccess {String} currencies.currency.chains.chain
 * @apiSuccess {Bool} currencies.currency.chains.isDefault
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "currencies":{
 *              "BTC":{
 *                  "chains":[]
 *              },
 *              "USDT":{
 *                  "chains":[
 *                      {
 *                          "chain":"TRX",
 *                          "isDefault":true
 *                      },{
 *                          "chain":"ETH",
 *                          "isDefault":false
 *                      },{
 *                          "chain":"SOL",
 *                          "isDefault":false
 *                      }
 *                  ]
 *              },
 *              ...
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
 *      OneXAPI::Binance::Spot client(userInfo)__;
 *  
 *      std::cout << client.fetchAllCurrencies() << std::endl;
 *      // or
 *      std::cout << client.fetchAllCurrencies("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot fetchBalance
 * @apiName fetchBalance
 * @apiDescription During websocket is running, updateAccountBalance does not send rest API request. If you want to force to send rest API, set forceRestApi parameter as true.
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} forceRestApi force to update using REST API
 * @apiParam {String[]} currencies If not exist, return all currencies
 * @apiParam {Bool=false} zeroBalance Whether to include assets with zero balance
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {o} {i}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "forceRestApi":false,
 *      "currencies":["BTC", "ETH", "XRP", "ADA"]
 *      "zeroBalance":true
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String=rest,websocket} fetchType
 * @apiSuccess {Object} balance
 * @apiSuccess {String} balance.currency
 * @apiSuccess {DoubleString} balance.free
 * @apiSuccess {DoubleString} balance.locked
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "fetchType":"rest",
 *          "balance":{
 *              "BTC":{
 *                  "free":"3.15437",
 *                  "locked":"0.0"
 *              },
 *              "ETH":{
 *                  "free":"123.684",
 *                  "locked":"86.252"
 *              },
 *              "XRP":{
 *                  "free":"138123.15425",
 *                  "locked":"0.0"
 *              },
 *              "ADA":{
 *                  "free":"9354.8132",
 *                  "locked":"0.0"
 *              }
 *          }
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Spot client(userInfo)__;
 *  
 *      std::string request = R"(
 *          {
 *              "forceRestApi":false,
 *              "currencies":["BTC", "ETH", "XRP", "ADA"]
 *              "zeroBalance":true
 *          }
 *      )";
 *  
 *      std::cout << client.fetchBalance(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot fetchWalletStatus
 * @apiName fetchWalletStatus
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} currency If not exist, return all currencies.
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "currency":"BTC"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {Object} currencies
 * @apiSuccess {Object} currencies.currency
 * @apiSuccess {Array} currencies.currency.chains
 * @apiSuccess {String} currencies.currency.chains.chain If chain is empty string, it means exchange supports single chain.
 * @apiSuccess {Bool} currencies.currency.chains.withdrawEnable
 * @apiSuccess {Bool} currencies.currency.chains.depositEnable
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "currencies":{
 *              "MATIC":{
 *                  "chains":[
 *                      {
 *                          "chain":"MATIC",
 *                          "withdrawEnable":true,
 *                          "depositEnable":false
 *                      },
 *                      {
 *                          "chain":"ETH",
 *                          "withdrawEnable":true,
 *                          "depositEnable":true
 *                      }
 *                  ]
 *              },
 *              "USDT":{
 *                  "chains":[
 *                      {
 *                          "chain":"TRX",
 *                          "withdrawEnable":true,
 *                          "depositEnable":true
 *                      },
 *                      {
 *                          "chain":"SOL",
 *                          "withdrawEnable":true,
 *                          "depositEnable":true
 *                      },
 *                      {
 *                          "chain":"ETH",
 *                          "withdrawEnable":true,
 *                          "depositEnable":true
 *                      }
 *                  ]
 *              }
 *          }
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Spot client(userInfo)__;
 *  
 *      std::cout << client.fetchWalletStatus("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot fetchWithdrawHistory
 * @apiName fetchWithdrawHistory
 * @apiDescription Binance supports up to 100 withdrawals<br>Binance supports up to 1000 withdrawals and 90 days from now
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} currency
 * @apiParam {String} orderId
 * @apiParam {String} txid
 * @apiParam {Uint} startTime [ms]
 * @apiParam {Uint} endTime [ms]
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "currency":"MATIC",
 *      "orderId":"451399413"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {Object[]} withdrawals
 * @apiSuccess {String} withdrawals.currency
 * @apiSuccess {DoubleString} withdrawals.amount
 * @apiSuccess {DoubleString} withdrawals.fee
 * @apiSuccess {String} withdrawals.orderId
 * @apiSuccess {String} withdrawals.txid
 * @apiSuccess {String=processing,cancelled,done} withdrawals.status
 * @apiSuccess {Uint} withdrawals.created [ms]
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "withdrawals":[
 *              {
 *                  "currency":"MATIC",
 *                  "amount":"435.2397",
 *                  "fee":"1.0",
 *                  "orderId":"451399413",
 *                  "txid": "60fd9007ebfddc753455f95fafa808c4302c836e4d1eebc5a132c36c1d8ac354",
 *                  "status":"done",
 *                  "created":1656044045154
 *              }
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Spot client(userInfo)__;
 *  
 *      std::string request = R"(
 *          {
 *              "currency":"XRP"
 *          }
 *      )";
 *  
 *      std::cout << client.fetchWithdrawHistory(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot fetchDepositHistory
 * @apiName fetchDepositHistory
 * @apiDescription Binance supports up to 100 deposits<br>Binance supports up to 1000 deposits and 90 days from now
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} currency
 * @apiParam {String} orderId
 * @apiParam {String} txid
 * @apiParam {Uint} startTime [ms]
 * @apiParam {Uint} endTime [ms]
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {o} {o}
 * @onexParamOption {i} {o}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "currency":"MATIC"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {Object[]} deposits
 * @apiSuccess {String} deposits.currency
 * @apiSuccess {DoubleString} deposits.amount
 * @apiSuccess {DoubleString} deposits.fee
 * @apiSuccess {String} deposits.orderId
 * @apiSuccess {String} deposits.txid
 * @apiSuccess {String=processing,cancelled,confirmed,done} deposits.status
 * @apiSuccess {Uint} deposits.created [ms]
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "deposits":[
 *              {
 *                  "currency":"MATIC",
 *                  "amount":"435.2397",
 *                  "fee":"0.0",
 *                  "orderId":"688139946",
 *                  "txid": "60fd9007ebfddc753455f95fafa808c4302c836e4d1eebc5a132c36c1d8ac354",
 *                  "status":"done",
 *                  "created":1656044045154
 *              }
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Spot client(userInfo)__;
 *  
 *      std::string request = R"(
 *          {
 *              "currency":"XRP"
 *          }
 *      )";
 *  
 *      std::cout << client.fetchDepositHistory(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot fetchDepositAddress
 * @apiName fetchDepositAddress
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} currency If not exist, return all currencies
 * @apiParam {String} chain If not exist, fetch a default chain of the currency
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {m} {o}
 * @onexParamOption {o} {i}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "currency":"BTC"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {Object} addresses
 * @apiSuccess {Object[]} addresses.currency
 * @apiSuccess {String} addresses.currency.chain
 * @apiSuccess {String} addresses.currency.address
 * @apiSuccess {String} addresses.currency.tag
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "addresses":{
 *              "BTC":[
 *                  {
 *                      "chain":"BTC"
 *                      "address":"0x~~~",
 *                      "tag":""
 *                  }
 *              ]
 *          }
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Spot client(userInfo)__;
 *  
 *      std::string request = R"(
 *          "currencies":["BTC","ETH","XRP"]
 *      )";
 *      std::cout << client.fetchDepositAddress(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot isDepositCompleted
 * @apiName isDepositCompleted
 * @apiDescription 'Deposit Completed' means that the deposited asset is tradable. This does not mean that client can withdraw asset depending on the exchange.<br>This API is used in two ways.<br>1. inquire by txid<br>2. inquire by ‘currency’ and ‘amount’ and ‘since’<br><br>Binance supports up to 1000 deposits and 90 days from now
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} txid If this field exists, ‘currency’, ‘amount’ and ‘since’ are ignored
 * @apiParam {String} currency If this field exists, ‘amount’ and ‘since’ must be sent
 * @apiParam {Double} amount 
 * @apiParam {Uint} since [ms]
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "currency":"MATIC",
 *      "amount":435.2397,
 *      "since":1656044045154
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {Bool} isDepositCompleted
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "isDepositCompleted":false
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
 *      std::string userInfo = R"(
 *          {
 *              "accessKey":"user access key",
 *              "secretKey":"user secrey key"
 *          }
 *      )";
 *  
 *      OneXAPI::Binance::Spot client(userInfo)__;
 *  
 *      std::string request = R"(
 *          "txid":"0xfad1~~~"
 *      )";
 *      std::cout << client.isDepositCompleted(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

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
 * @apiParam {String=gtc,ioc,fok} type=gtc
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {i}
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
 *      OneXAPI::Binance::Spot client(userInfo);
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