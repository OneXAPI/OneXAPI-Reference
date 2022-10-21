/**
 * @api {onex} /Client create a new client
 * @apiName Client
 * @apiGroup Client
 * @apiVersion 0.0.0
 *
 * @apiParam {String} accessKey
 * @apiParam {String} secretKey
 * @onexParamExchanges {Binance o} {Upbit o}
 * @onexParamOption {o} {o}
 * @onexParamOption {o} {o}
 * 
 * @apiParamExample Request Example : 
 *  {
 *      "accessKey":"user access key",
 *      "secretKey":"user secrey key"
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
 *  # Binance Spot
 *  client = OneXAPI.Binance.Spot(user_info)
 *  
 *  # Binance Futures
 *  client = OneXAPI.Binance.Futures(user_info)
 *  
 *  # Upbit Spot
 *  client = OneXAPI.Upbit.Spot(user_info)                  # Korea
 *  client = OneXAPI.Upbit.Singapore.Spot(user_info)        # Singapore
 *  client = OneXAPI.Upbit.Thailand.Spot(user_info)         # Thailand
 *  client = OneXAPI.Upbit.Indonesia.Spot(user_info)        # Indonesia
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
 *      // Binance Spot
 *      OneXAPI::Binance::Spot client(userInfo)__;
 *  
 *      // Binance Futures
 *      OneXAPI::Binance::Futures client(userInfo)__;
 *  
 *      // Upbit Spot
 *      OneXAPI::Upbit::Spot client(userInfo)__;              // Korea
 *      OneXAPI::Upbit::Singapore::Spot client(userInfo)__;   // Singapore
 *      OneXAPI::Upbit::Thailand::Spot client(userInfo)__;    // Thailand
 *      OneXAPI::Upbit::Indonesia::Spot client(userInfo)__;   // Indonesia
 *  
 *      return 0;
 *  }
 */