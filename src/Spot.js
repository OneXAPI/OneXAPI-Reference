/**
 * @api {onex} /Spot Wallet
 * @apiName Wallet
 * @apiGroup Spot
 * @onexCategory
 */

/**
 * @api {onex} /Spot getWithdrawRoundingRule
 * @apiName getWithdrawRoundingRule
 * @apiGroup Spot
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
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Spot()
 *  
 *  print(client.getWithdrawRoundingRule())
 *  # or
 *  print(client.getWithdrawRoundingRule(""))
 *  # or
 *  print(client.getWithdrawRoundingRule({}))
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
 * @onexParamExchanges {All o}
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
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Spot()
 *  
 *  print(client.setWithdrawRoundingRule({"roundingRule":"ceil"}))
 *  # or
 *  print(client.setWithdrawRoundingRule('{"roundingRule":"floor"}'))
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
 * @onexDanger Binance : If the fast draw setting for the account is enabled, internal draw will be executed.
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
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  request = {
 *      "currency":"MATIC",
 *      "chain":"ETH",
 *      "address":"0xAFWE13FAES1387",
 *      "amount":1365.135468
 *  }
 *  
 *  print(client.withdraw(request))
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
 * @onexParamExchanges {All o}
 * @onexParamOption {i}
 * 
 * @apiParamExample Request Example : 
 *  {
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {Object} currencies
 * @apiSuccess {Object} [currencies.currency__name]
 * @apiSuccess {ObjectArray} currencies.currency.chains <b>If this field is empty, exchange supports only single chain or nothing. Please check exchange before withdraw or deposit crypto currency.</b>
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
 *                      },
 *                      {
 *                          "chain":"ETH",
 *                          "isDefault":false
 *                      },
 *                      {
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
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  print(client.fetchAllCurrencies())
 *  # or
 *  print(client.fetchAllCurrencies(""))
 *  # or
 *  print(client.fetchAllCurrencies({}))
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
 * @onexWarn During websocket is running, updateAccountBalance does not send rest API request. <br>If you want to force to send rest API, set forceRestApi parameter as true.
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {Bool} forceRestApi=false force to update using REST API
 * @apiParam {StringArray} currencies If not exist, return all currencies
 * @apiParam {Bool} zeroBalance=false Whether to include assets with zero balance
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {o} {i}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "forceRestApi":false,
 *      "currencies":["BTC", "ETH", "XRP", "ADA"],
 *      "zeroBalance":true
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String=rest,websocket} fetchType
 * @apiSuccess {Object} balance
 * @apiSuccess {Object} [balance.currency__name]
 * @apiSuccess {DoubleString} balance.currency.free
 * @apiSuccess {DoubleString} balance.currency.locked
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
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  request = {
 *      "forceRestApi":False,
 *      "currencies":["BTC", "ETH", "XRP", "ADA"],
 *      "zeroBalance":True
 *  }
 *  
 *  print(client.fetchBalance(request))
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
 * @apiSuccess {Object} [currencies.currency__name]
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
 *              "BTC":{
 *                  "chains":[
 *                      {
 *                          "chain":"BTC",
 *                          "withdrawEnable":true,
 *                          "depositEnable":false
 *                      },
 *                      {
 *                          "chain":"BSC",
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
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  print(client.fetchWalletStatus({}))
 *  # or
 *  print(client.fetchWalletStatus({"currency":"BTC"}))
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
 *      std::cout << client.fetchWalletStatus("{}") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot fetchWithdrawHistory
 * @apiName fetchWithdrawHistory
 * @onexDanger Upbit : supports up to 100 withdrawals<br>Binance : supports up to 1000 withdrawals and 90 days from now
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} currency
 * @apiParam {String} orderId
 * @apiParam {String} txid
 * @apiParam {Uint} startTime [ms]
 * @apiParam {Uint} endTime=now [ms]
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
 * @apiSuccess {ObjectArray} withdrawals
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
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  print(client.fetchWithdrawHistory({}))
 *  # or
 *  print(client.fetchWithdrawHistory({"currency":"xrP"}))
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
 * @onexDanger Upbit : supports up to 100 deposits<br>Binance : supports up to 1000 deposits and 90 days from now
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} currency
 * @apiParam {String} orderId
 * @apiParam {String} txid
 * @apiParam {Uint} startTime [ms]
 * @apiParam {Uint} endTime=now [ms]
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
 * @apiSuccess {ObjectArray} deposits
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
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  print(client.fetchDepositHistory({}))
 *  # or
 *  print(client.fetchDepositHistory({"currency":"xrP"}))
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
 * @apiSuccess {ObjectArray} [addresses.currency__name]
 * @apiSuccess {String} addresses.currency.chain If this field is empty string, it is a default chain
 * @apiSuccess {String} addresses.currency.address
 * @apiSuccess {String} addresses.currency.tag If not exist, return empty string
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
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  print(client.fetchDepositAddress({"currency":"BTC"}))
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
 *          "currency":"BTC"
 *      )";
 *      std::cout << client.fetchDepositAddress(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot isDepositCompleted
 * @apiName isDepositCompleted
 * @onexWarn 'Deposit Completed' means that the deposited asset is tradable. This does not mean that client can withdraw asset depending on the exchange.<br>This API is used in two ways.<br>1. inquire by txid<br>2. inquire by ‘currency’ and ‘amount’ and ‘since’
 * @onexDanger Binance : supports up to 1000 deposits and 90 days from now
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
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  print(client.isDepositCompleted({"txid":"0xfad1~~~"}))
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
 * @api {onex} /Spot subscribeBalance
 * @apiName subscribeBalance
 * @onexInfo Start updating balance via websocket
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {Bool} reconnect=false
 * @onexParamExchanges {Binance o} {Upbit x}
 * @onexParamOption {o} {f}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "reconnect":false
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  print(client.subscribeBalance())
 *  # or
 *  print(client.subscribeBalance(""))
 *  # or
 *  print(client.subscribeBalance({}))
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Spot client;
 *  
 *      std::cout << client.subscribeBalance() << std::endl;
 *      // or
 *      std::cout << client.subscribeBalance("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot unsubscribeBalance
 * @apiName unsubscribeBalance
 * @onexInfo Stop updating balance via websocket
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {NoParam} __EMPTY__ 
 * @onexParamExchanges {Binance o} {Upbit x}
 * @onexParamOption {i} {f}
 * 
 * @apiParamExample Request Example : 
 *  {
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  print(client.unsubscribeBalance())
 *  # or
 *  print(client.unsubscribeBalance(""))
 *  # or
 *  print(client.unsubscribeBalance({}))
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Spot client;
 *  
 *      std::cout << client.unsubscribeBalance() << std::endl;
 *      // or
 *      std::cout << client.unsubscribeBalance("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot isSubscribingBalance
 * @apiName isSubscribingBalance
 * @onexInfo Returns whether balance is being updated via websocket
 * @apiGroup Spot
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
 * @apiSuccess {Bool} isSubscribing 
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "isSubscribing": true
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  print(client.isSubscribingBalance())
 *  # or
 *  print(client.isSubscribingBalance(""))
 *  # or
 *  print(client.isSubscribingBalance({}))
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Spot client;
 *  
 *      std::cout << client.isSubscribingBalance() << std::endl;
 *      // or
 *      std::cout << client.isSubscribingBalance("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot Trade
 * @apiName Trade
 * @apiGroup Spot
 * @onexCategory
 */

/**
 * @api {onex} /Spot getOrderRoundingRule
 * @apiName getOrderRoundingRule
 * @apiGroup Spot
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
 * @apiSuccess {String=ceil,floor,round} marketBuyQuoteAmount=round
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
 *          "marketBuyQuoteAmount":"round",
 *          "marketSellBaseAmount":"round",
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Spot()
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
 *      OneXAPI::Binance::Spot client;
 *  
 *      std::cout << client.getOrderRoundingRule() << std::endl;
 *      // or
 *      std::cout << client.getOrderRoundingRule("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot setOrderRoundingRule
 * @apiName setOrderRoundingRule
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String=ceil,floor,round} limitBuyPrice
 * @apiParam {String=ceil,floor,round} limitBuyBaseAmount
 * @apiParam {String=ceil,floor,round} limitSellPrice
 * @apiParam {String=ceil,floor,round} limitSellBaseAmount
 * @apiParam {String=ceil,floor,round} marketBuyQuoteAmount
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
 *  client = OneXAPI.Binance.Spot()
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
 *      OneXAPI::Binance::Spot client;
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
 * @api {onex} /Spot orderLimitBuy
 * @apiName orderLimitBuy
 * @onexWarn Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Spot-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Spot-setOrderRoundingRule>setOrderRoundingRule</a>.
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
 *          "symbol":"BTC-USDT",
 *          "orderId":"38463215",
 *          "clientOrderId":"",
 *          "price":"21991.67",
 *          "baseAmount":"1.584"
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  request = {
 *      "baseCurrency":"XRP",
 *      "quoteCurrency":"USDT",
 *      "price":0.4348,
 *      "baseAmount":23.834219
 *  }
 *  
 *  print(client.orderLimitBuy(request))
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

/**
 * @api {onex} /Spot orderLimitSell
 * @apiName orderLimitSell
 * @onexWarn Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Spot-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Spot-setOrderRoundingRule>setOrderRoundingRule</a>.
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
 *          "symbol":"BTC-USDT",
 *          "orderId":"38463215",
 *          "clientOrderId":"",
 *          "price":"20710.6",
 *          "baseAmount":"1.584"
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  request = {
 *      "baseCurrency":"XRP",
 *      "quoteCurrency":"USDT",
 *      "price":0.4348,
 *      "baseAmount":23.834219
 *  }
 *  
 *  print(client.orderLimitSell(request))
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
 * @api {onex} /Spot orderMarketBuy
 * @apiName orderMarketBuy
 * @onexWarn Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Spot-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Spot-setOrderRoundingRule>setOrderRoundingRule</a>.
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {Double} quoteAmount
 * @apiParam {String} clientOrderId Client Order ID as assigned by the client
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "quoteAmount":1.5843
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
 * @apiSuccess {String} symbol
 * @apiSuccess {String} orderId
 * @apiSuccess {String} clientOrderId
 * @apiSuccess {DoubleString} quoteAmount
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":1,
 *          "baseCurrency":"BTC",
 *          "quoteCurrency":"USDT",
 *          "symbol":"BTC-USDT",
 *          "orderId":"38463215",
 *          "clientOrderId":"",
 *          "quoteAmount":"1.584"
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  request = {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "quoteAmount":1.5843
 *  }
 *  
 *  print(client.orderMarketBuy(request))
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
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT",
 *              "quoteAmount":1.5843
 *          }
 *      )";
 *  
 *      std::cout << client.orderMarketBuy(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot orderMarketSell
 * @apiName orderMarketSell
 * @onexWarn Price and amount are automatically rounded to market. If you want to check or change the rounding rule, see <a href=#api-Spot-getOrderRoundingRule>getOrderRoundingRule</a> and <a href=#api-Spot-setOrderRoundingRule>setOrderRoundingRule</a>.
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {Double} baseAmount
 * @apiParam {String} clientOrderId Client Order ID as assigned by the client
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {o} {o}
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
 *          "symbol":"BTC-USDT",
 *          "orderId":"38463215",
 *          "price":"20710.6",
 *          "baseAmount":"1.584"
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  request = {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "baseAmount":1.5843
 *  }
 *  
 *  print(client.orderMarketSell(request))
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
 * @api {onex} /Spot orderCancel
 * @apiName orderCancel
 * @onexWarn If both <b><i>orderId</b></i> and <b><i>clientOrderId</b></i> are options, either of them must be sent.<br>If both are sent, <b><i>orderId</b></i> is used preferentially.
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} orderId
 * @apiParam {String} clientOrderId Client Order ID as assigned by the client
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {m} {i}
 * @onexParamOption {m} {i}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
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
 *          "symbol":"BTC-USDT",
 *          "orderId":"38463215",
 *          "clientOrderId":""
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  request = {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "orderId":"39713467831"
 *  }
 *  
 *  print(client.orderCancel(request))
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
 * @api {onex} /Spot fetchOrderInfo
 * @apiName fetchOrderInfo
 * @onexWarn If both <b><i>orderId</b></i> and <b><i>clientOrderId</b></i> are options, either of them must be sent.<br>If both are sent, <b><i>orderId</b></i> is used preferentially.
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} orderId
 * @apiParam {String} clientOrderId
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {m} {i}
 * @onexParamOption {m} {i}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
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
 * @apiSuccess {String} symbol
 * @apiSuccess {String} orderId
 * @apiSuccess {String} clientOrderId
 * @apiSuccess {String=buy,sell} side
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
 *          "symbol":"BTC-USDT",
 *          "orderId":"38463215",
 *          "clientOrderId":"",
 *          "side":"buy",
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
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  request = {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "orderId":"39713467831"
 *  }
 *  
 *  print(client.fetchOrderInfo(request))
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
 * @api {onex} /Spot fetchOpenOrders
 * @apiName fetchOpenOrders
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String=buy,sell} side
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
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
 * @apiSuccess {String} openOrders.symbol
 * @apiSuccess {String} openOrders.orderId
 * @apiSuccess {String=buy,sell} openOrders.side
 * @apiSuccess {DoubleString} openOrders.originalAmount
 * @apiSuccess {DoubleString} openOrders.filledAmount
 * @apiSuccess {DoubleString} openOrders.remainingAmount
 * @apiSuccess {DoubleString} openOrders.originalPrice
 * @apiSuccess {Uint} openOrders.created [ms]
 * @apiSuccess {String} openOrders.lockedCurrency
 * @apiSuccess {DoubleString} openOrders.lockedAmount
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
 *                  "symbol":"BTC-USDT",
 *                  "orderId":"38463215",
 *                  "side":"buy",
 *                  "originalAmount":"1.5984",
 *                  "filledAmount":"0.3686",
 *                  "remainingAmount":"1.2298",
 *                  "originalPrice":"22135.35",
 *                  "created":1656044045,
 *                  "lockedCurrency":"USDT",
 *                  "lockedAmount":"27222.05343"
 *              }
 *          ]
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  request = {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT"
 *  }
 *  
 *  print(client.fetchOpenOrders(request))
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
 * @api {onex} /Spot fetchTradingFee
 * @apiName fetchTradingFee
 * @onexDanger Binance : Trading fee is a value before bnb discount
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {o} {m}
 * @onexParamOption {o} {m}
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
 *                  "symbol":"BTCUSDT",
 *                  "makerFee":"0.0004",
 *                  "takerFee":"0.00075"
 *              }
 *          ]
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  user_info = {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
 *  }
 *  
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  request = {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT"
 *  }
 *  
 *  print(client.fetchTradingFee(request))
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
 * @api {onex} /Spot Market
 * @apiName Market
 * @apiGroup Spot
 * @onexCategory
 */

/**
 * @api {onex} /Spot getCandleIntervalCandidates
 * @apiName getCandleIntervalCandidates
 * @apiGroup Spot
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
 * @apiSuccess {StringArray=1min,3min,5min,10min,15min,30min,1hour,2hour,4hour,6hour,8hour,12hour,1day,3day,1week,1month} intervals
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "intervals":[
 *              "10min","15min","1day","1hour","1min","1month","1week","30min","3min","4hour","5min"
 *          ]
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Spot()
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
 *      OneXAPI::Binance::Spot client;
 *  
 *      std::cout << client.getCandleIntervalCandidates() << std::endl;
 *      // or
 *      std::cout << client.getCandleIntervalCandidates("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot fetchMarkets
 * @apiName fetchMarkets
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
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
 *                  "symbol":"BTC-USDT"
 *              },
 *              {
 *                  "baseCurrency":"ETH",
 *                  "quoteCurrency":"USDT",
 *                  "symbol":"ETH-USDT"
 *              },
 *              {
 *                  "baseCurrency":"XRP",
 *                  "quoteCurrency":"USDT",
 *                  "symbol":"XRP-USDT"
 *              },
 *              {
 *                  "baseCurrency":"ADA",
 *                  "quoteCurrency":"USDT",
 *                  "symbol":"ADA-USDT"
 *              },
 *              ...
 *          ]
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Spot()
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
 *      OneXAPI::Binance::Spot client;
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
 * @api {onex} /Spot fetchTicker
 * @apiName fetchTicker
 * @onexWarn During ticker websocket is running, fetchTicker does not send rest API request. <br>If you want to force to send rest API, set forceRestApi parameter as true. 
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {Bool} forceRestApi=false
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "forceRestApi":true
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
 * @apiSuccess {String} symbol
 * @apiSuccess {String=rest,websocket} fetchType
 * @apiSuccess {Uint} openTime [s]<br>open Time(UTC)
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
 *  client = OneXAPI.Binance.Spot()
 *  
 *  request = {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT"
 *  }
 *  
 *  print(client.fetchTicker(request))
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
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT"
 *          }
 *      )";
 *  
 *      std::cout << client.fetchTicker(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot fetchOrderbook
 * @apiName fetchOrderbook
 * @onexWarn During orderbook websocket is running, fetchOrderbook does not send rest API request. <br>If you want to force to send rest API, set forceRestApi parameter as true.
 * @onexDanger Binance : Timestamp does not mean the server time; it means the time when the response arrived.
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {Bool} forceRestApi=false
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT"
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
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
 *          "symbol":"BTC-USDT",
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
 *  client = OneXAPI.Binance.Spot()
 *  
 *  request = {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT"
 *  }
 *  
 *  print(client.fetchOrderbook(request))
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
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT"
 *          }
 *      )";
 *  
 *      std::cout << client.fetchOrderbook(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot fetchCandleHistory
 * @apiName fetchCandleHistory
 * @onexWarn When enormous amount of data is requested, fetchCandleHistory takes a long time to execute.
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {String} baseCurrency
 * @apiParam {String} quoteCurrency
 * @apiParam {String} interval This param depends on the exchange. Please check available intervals using getCandleIntervalCandidates
 * @apiParam {Uint} startTime [s]
 * @apiParam {Uint} endTime=now [s]
 * @apiParam {Uint} fetchInterval=200 [ms]<br>frequent api request may exceeds rate limit, therefore apiReqInterval decides how long time to sleep between each api request
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
 *      "interval":"1min",
 *      "startTime":1656042045,
 *      "endTime":1656063182,
 *      "fetchInterval":200
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {String} baseCurrency
 * @apiSuccess {String} quoteCurrency
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
 *  client = OneXAPI.Binance.Spot()
 *  
 *  request = {
 *      "baseCurrency":"BTC",
 *      "quoteCurrency":"USDT",
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
 *      OneXAPI::Binance::Spot client;
 *  
 *      std::string request = R"(
 *          {
 *              "baseCurrency":"BTC",
 *              "quoteCurrency":"USDT",
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

/**
 * @api {onex} /Spot getSubscribingTickers
 * @apiName getSubscribingTickers
 * @onexInfo Returns ticker symbols being subscribed on websocket
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {NoParam} __EMPTY__ 
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {i} {i}
 * 
 * @apiParamExample Request Example : 
 *  {
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {ObjectArray} tickers
 * @apiSuccess {String} tickers.baseCurrency
 * @apiSuccess {String} tickers.quoteCurrency
 * @apiSuccess {String} tickers.symbol
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "tickers": [
 *              {
 *                  "baseCurrency": "BTC",
 *                  "quoteCurrency": "USDT",
 *                  "symbol": "BTC-USDT"
 *              },
 *              {
 *                  "baseCurrency": "ETH",
 *                  "quoteCurrency": "USDT",
 *                  "symbol": "ETH-USDT"
 *              }
 *          ]
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Spot()
 *  
 *  print(client.getSubscribingTickers())
 *  # or
 *  print(client.getSubscribingTickers(""))
 *  # or
 *  print(client.getSubscribingTickers({}))
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Spot client;
 *  
 *      std::cout << client.getSubscribingTickers() << std::endl;
 *      // or
 *      std::cout << client.getSubscribingTickers("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot getSubscribingOrderbooks
 * @apiName getSubscribingOrderbooks
 * @onexInfo Returns orderbook symbols being subscribed on websocket
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {NoParam} __EMPTY__ 
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {i} {i}
 * 
 * @apiParamExample Request Example : 
 *  {
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {ObjectArray} orderbooks
 * @apiSuccess {String} orderbooks.baseCurrency
 * @apiSuccess {String} orderbooks.quoteCurrency
 * @apiSuccess {String} orderbooks.symbol
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "orderbooks": [
 *              {
 *                  "baseCurrency": "BTC",
 *                  "quoteCurrency": "USDT",
 *                  "symbol": "BTC-USDT"
 *              },
 *              {
 *                  "baseCurrency": "ETH",
 *                  "quoteCurrency": "USDT",
 *                  "symbol": "ETH-USDT"
 *              }
 *          ]
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Spot()
 *  
 *  print(client.getSubscribingOrderbooks())
 *  # or
 *  print(client.getSubscribingOrderbooks(""))
 *  # or
 *  print(client.getSubscribingOrderbooks({}))
 * 
 * @apiExample {cpp} c++
 *  #include <iostream>
 *  #include "OneXAPI.hpp"
 *  
 *  int main(){
 *      OneXAPI::Binance::Spot client;
 *  
 *      std::cout << client.getSubscribingOrderbooks() << std::endl;
 *      // or
 *      std::cout << client.getSubscribingOrderbooks("") << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot subscribeTicker
 * @apiName subscribeTicker
 * @onexInfo Start updating tickers via websocket
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {ObjectArray} market
 * @apiParam {String} market.baseCurrency
 * @apiParam {String} market.quoteCurrency
 * @apiParam {Bool} reconnect=false If this field is true, reconnect the websocket including the requested markets to the the markets being subscribed
 * @apiParam {Uint} requestTimeout=5000 [ms]<br>If this function does not complete within requestTimeout, it returns error
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "market":[
 *          {
 *              "baseCurrency": "BTC",
 *              "quoteCurrency": "USDT"
 *          },
 *          {
 *              "baseCurrency": "ETH",
 *              "quoteCurrency": "USDT"
 *          }
 *      ],
 *      "reconnect":false,
 *      "requestTimeout":2500
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount
 * @apiSuccess {ObjectArray} subscribed
 * @apiSuccess {String} subscribed.baseCurrency
 * @apiSuccess {String} subscribed.quoteCurrency
 * @apiSuccess {String} subscribed.symbol
 * @apiSuccess {ObjectArray} subscribeFailed
 * @apiSuccess {String} subscribeFailed.baseCurrency
 * @apiSuccess {String} subscribeFailed.quoteCurrency
 * @apiSuccess {String} subscribeFailed.symbol
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "subscribed": [
 *              {
 *                  "baseCurrency": "BTC",
 *                  "quoteCurrency": "USDT",
 *                  "symbol": "BTC-USDT"
 *              }
 *          ],
 *          "subscribeFailed": [
 *              {
 *                  "baseCurrency": "ETH",
 *                  "quoteCurrency": "USDT",
 *                  "symbol": "ETH-USDT"
 *              }
 *          ]
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Spot()
 *  
 *  request = {
 *      "market":[
 *          {
 *              "baseCurrency": "BTC",
 *              "quoteCurrency": "USDT"
 *          },
 *          {
 *              "baseCurrency": "ETH",
 *              "quoteCurrency": "USDT"
 *          }
 *      ]
 *  }
 *  
 *  print(client.subscribeTicker(request))
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
 *              "market":[
 *                  {
 *                      "baseCurrency": "BTC",
 *                      "quoteCurrency": "USDT"
 *                  },
 *                  {
 *                      "baseCurrency": "ETH",
 *                      "quoteCurrency": "USDT"
 *                  }
 *              ]
 *          }
 *      )";
 *      std::cout << client.subscribeTicker(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot unsubscribeTicker
 * @apiName unsubscribeTicker
 * @onexInfo Stop updating tickers via websocket
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {ObjectArray} market
 * @apiParam {String} market.baseCurrency
 * @apiParam {String} market.quoteCurrency
 * @apiParam {Bool} reconnect=false If this field is true, reconnect the websocket excluding the requested markets for the the markets being subscribed
 * @apiParam {Uint} requestTimeout=5000 [ms]<br>If this function does not complete within requestTimeout, it returns error
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {o} {i always true}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "market":[
 *          {
 *              "baseCurrency": "BTC",
 *              "quoteCurrency": "USDT"
 *          },
 *          {
 *              "baseCurrency": "ETH",
 *              "quoteCurrency": "USDT"
 *          }
 *      ],
 *      "reconnect":false,
 *      "requestTimeout":2500
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {ObjectArray} unsubscribed
 * @apiSuccess {String} unsubscribed.baseCurrency
 * @apiSuccess {String} unsubscribed.quoteCurrency
 * @apiSuccess {String} unsubscribed.symbol
 * @apiSuccess {ObjectArray} unsubscribeFailed
 * @apiSuccess {String} unsubscribeFailed.baseCurrency
 * @apiSuccess {String} unsubscribeFailed.quoteCurrency
 * @apiSuccess {String} unsubscribeFailed.symbol
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "unsubscribed": [
 *              {
 *                  "baseCurrency": "BTC",
 *                  "quoteCurrency": "USDT",
 *                  "symbol": "BTC-USDT"
 *              }
 *          ],
 *          "unsubscribeFailed": [
 *              {
 *                  "baseCurrency": "ETH",
 *                  "quoteCurrency": "USDT",
 *                  "symbol": "ETH-USDT"
 *              }
 *          ]
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Spot()
 *  
 *  request = {
 *      "market":[
 *          {
 *              "baseCurrency": "BTC",
 *              "quoteCurrency": "USDT"
 *          },
 *          {
 *              "baseCurrency": "ETH",
 *              "quoteCurrency": "USDT"
 *          }
 *      ]
 *  }
 *  
 *  print(client.unsubscribeTicker(request))
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
 *              "market":[
 *                  {
 *                      "baseCurrency": "BTC",
 *                      "quoteCurrency": "USDT"
 *                  },
 *                  {
 *                      "baseCurrency": "ETH",
 *                      "quoteCurrency": "USDT"
 *                  }
 *              ]
 *          }
 *      )";
 *      std::cout << client.unsubscribeTicker(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot subscribeOrderbook
 * @apiName subscribeOrderbook
 * @onexWarn Binance : The requestTimeout increases by the requested market size. requestTimeout = requestTimeout + 500 * market size
 * @onexInfo Start updating orderbooks via websocket
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {ObjectArray} market
 * @apiParam {String} market.baseCurrency
 * @apiParam {String} market.quoteCurrency
 * @apiParam {Bool} reconnect=false If this field is true, reconnect the websocket including the requested markets to the the markets being subscribed
 * @apiParam {Uint} requestTimeout=5000 [ms]<br>If this function does not complete within requestTimeout, it returns error
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "market":[
 *          {
 *              "baseCurrency": "BTC",
 *              "quoteCurrency": "USDT"
 *          },
 *          {
 *              "baseCurrency": "ETH",
 *              "quoteCurrency": "USDT"
 *          }
 *      ],
 *      "reconnect":false,
 *      "requestTimeout":2500
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {ObjectArray} subscribed
 * @apiSuccess {String} subscribed.baseCurrency
 * @apiSuccess {String} subscribed.quoteCurrency
 * @apiSuccess {String} subscribed.symbol
 * @apiSuccess {ObjectArray} subscribeFailed
 * @apiSuccess {String} subscribeFailed.baseCurrency
 * @apiSuccess {String} subscribeFailed.quoteCurrency
 * @apiSuccess {String} subscribeFailed.symbol
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "subscribed": [
 *              {
 *                  "baseCurrency": "BTC",
 *                  "quoteCurrency": "USDT",
 *                  "symbol": "BTC-USDT"
 *              }
 *          ],
 *          "subscribeFailed": [
 *              {
 *                  "baseCurrency": "ETH",
 *                  "quoteCurrency": "USDT",
 *                  "symbol": "ETH-USDT"
 *              }
 *          ]
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Spot()
 *  
 *  request = {
 *      "market":[
 *          {
 *              "baseCurrency": "BTC",
 *              "quoteCurrency": "USDT"
 *          },
 *          {
 *              "baseCurrency": "ETH",
 *              "quoteCurrency": "USDT"
 *          }
 *      ]
 *  }
 *  
 *  print(client.subscribeOrderbook(request))
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
 *              "market":[
 *                  {
 *                      "baseCurrency": "BTC",
 *                      "quoteCurrency": "USDT"
 *                  },
 *                  {
 *                      "baseCurrency": "ETH",
 *                      "quoteCurrency": "USDT"
 *                  }
 *              ]
 *          }
 *      )";
 *      std::cout << client.subscribeOrderbook(request) << std::endl;
 *      
 *      return 0;
 *  }
 */

/**
 * @api {onex} /Spot unsubscribeOrderbook
 * @apiName unsubscribeOrderbook
 * @onexInfo Stop updating orderbooks via websocket
 * @apiGroup Spot
 * @apiVersion 0.0.0
 *
 * @apiParam {ObjectArray} market
 * @apiParam {String} market.baseCurrency
 * @apiParam {String} market.quoteCurrency
 * @apiParam {Bool} reconnect=false If this field is true, reconnect the websocket excluding the requested markets for the the markets being subscribed
 * @apiParam {Uint} requestTimeout=5000 [ms]<br>If this function does not complete within requestTimeout, it returns error
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {m} {m}
 * @onexParamOption {o} {i always true}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "market":[
 *          {
 *              "baseCurrency": "BTC",
 *              "quoteCurrency": "USDT"
 *          },
 *          {
 *              "baseCurrency": "ETH",
 *              "quoteCurrency": "USDT"
 *          }
 *      ],
 *      "reconnect":false,
 *      "requestTimeout":2500
 *  }
 * 
 * @apiSuccess {Uint} requestedApiCount 
 * @apiSuccess {ObjectArray} unsubscribed
 * @apiSuccess {String} unsubscribed.baseCurrency
 * @apiSuccess {String} unsubscribed.quoteCurrency
 * @apiSuccess {String} unsubscribed.symbol
 * @apiSuccess {ObjectArray} unsubscribeFailed
 * @apiSuccess {String} unsubscribeFailed.baseCurrency
 * @apiSuccess {String} unsubscribeFailed.quoteCurrency
 * @apiSuccess {String} unsubscribeFailed.symbol
 * 
 * @apiSuccessExample Success-Response :
 *  {
 *      "success":true,
 *      "data":{
 *          "requestedApiCount":0,
 *          "unsubscribed": [
 *              {
 *                  "baseCurrency": "BTC",
 *                  "quoteCurrency": "USDT",
 *                  "symbol": "BTC-USDT"
 *              }
 *          ],
 *          "unsubscribeFailed": [
 *              {
 *                  "baseCurrency": "ETH",
 *                  "quoteCurrency": "USDT",
 *                  "symbol": "ETH-USDT"
 *              }
 *          ]
 *      }
 *  }
 *
 * @apiExample {python} python
 *  import OneXAPI
 *  
 *  client = OneXAPI.Binance.Spot()
 *  
 *  request = {
 *      "market":[
 *          {
 *              "baseCurrency": "BTC",
 *              "quoteCurrency": "USDT"
 *          },
 *          {
 *              "baseCurrency": "ETH",
 *              "quoteCurrency": "USDT"
 *          }
 *      ]
 *  }
 *  
 *  print(client.unsubscribeOrderbook(request))
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
 *              "market":[
 *                  {
 *                      "baseCurrency": "BTC",
 *                      "quoteCurrency": "USDT"
 *                  },
 *                  {
 *                      "baseCurrency": "ETH",
 *                      "quoteCurrency": "USDT"
 *                  }
 *              ]
 *          }
 *      )";
 *      std::cout << client.unsubscribeOrderbook(request) << std::endl;
 *      
 *      return 0;
 *  }
 */