define({
  "name": "OneXAPI",
  "version": "0.0.0",
  "description": "Documentation for the OneXAPI",
  "title": "OneXAPI Docs",
  "url": null,
  "sampleUrl": null,
  "order": [
    "OneXAPI",
    "getInfo",
    "getLoggerConfig",
    "setLoggerConfig",
    "Client",
    "Spot",
    "Futures",
    "General",
    "getConfig",
    "setConfig",
    "getEndpointCandidates",
    "has",
    "Account",
    "Wallet",
    "getWithdrawRoundingRule",
    "setWithdrawRoundingRule",
    "withdraw",
    "fetchAllCurrencies",
    "fetchBalance",
    "fetchWalletStatus",
    "fetchWithdrawHistory",
    "fetchDepositHistory",
    "fetchDepositAddress",
    "isDepositCompleted",
    "fetchPositions",
    "fetchFundingFeeIncomeHistory",
    "subscribeBalance",
    "unsubscribeBalance",
    "isSubscribingBalance",
    "Trade",
    "getOrderRoundingRule",
    "setOrderRoundingRule",
    "orderLimitBuy",
    "orderLimitSell",
    "orderMarketBuy",
    "orderMarketSell",
    "orderCancel",
    "fetchOrderInfo",
    "fetchOpenOrders",
    "fetchTradingFee",
    "fetchLeverage",
    "changeLeverage",
    "fetchMarginType",
    "changeMarginType",
    "Market",
    "getCandleIntervalCandidates",
    "fetchMarkets",
    "fetchMarketInfo",
    "fetchTicker",
    "fetchOrderbook",
    "fetchCandleHistory",
    "getSubscribingMarketInfo",
    "getSubscribingTickers",
    "getSubscribingOrderbooks",
    "subscribeMarketInfo",
    "unsubscribeMarketInfo",
    "subscribeTicker",
    "unsubscribeTicker",
    "subscribeOrderbook",
    "unsubscribeOrderbook"
  ],
  "forceLanguage": "en",
  "withGenerator": false,
  "header": {
    "title": "Introduction",
    "content": "<br>\n<hr>\n<h1>Introduction</h1>\n<p>Welcome to the documentation of OneXAPI!<br>\nOneXAPI helps Quant Traders focus on algorithmic research without wasting time on SDK development.</p>\n<p>OneXAPI has the following advantages.</p>\n<ol>\n<li>Standardization</li>\n</ol>\n<ul>\n<li>OneXAPI has standardized API input and output. Users can develop programs by referring only to OneXAPI documents without having to refer to each exchange API documents.</li>\n<li>Since OneXAPI uses the same API input/output for all exchanges, it is easy to transfer to the exchange without changing the code.</li>\n</ul>\n<ol start=\"2\">\n<li>Simplification</li>\n</ol>\n<ul>\n<li>You don't have to worry about the decimal places supported by the exchange when using orders/withdrawals, etc. The value is automatically converted to the decimal point supported by the exchange.</li>\n<li>It's easy to decide whether to include fees deducted from your withdrawal or pay separately.</li>\n<li>Simplify WebSocket usage. If you pass only the information that you want to receive through WebSocket, the connection and maintenance are automatically performed on the background.</li>\n<li>You can receive as many past Candle Data as you want regardless of the limit of the exchange.</li>\n<li>It is easy to use by newly developing and integrating functions that were not provided by the exchange API or were complicated.</li>\n</ul>\n<ol start=\"3\">\n<li>Quickness</li>\n</ol>\n<ul>\n<li>OneXAPI has been developed as C++ and boasts fast performance.</li>\n<li>There is no delay because it communicates directly with the exchange without going through the intermediate server.</li>\n</ul>\n<ol start=\"4\">\n<li>Maintenance</li>\n</ol>\n<ul>\n<li>If the exchange API changes, an immediate update is performed. Users can use the same algorithm only with OneXAPI updates without changing the code.</li>\n</ul>\n<ol start=\"5\">\n<li>Safety</li>\n</ol>\n<ul>\n<li>OneXAPI does not collect the user's API key, so there is no risk of stealing the API key.\n<br></li>\n</ul>\n<hr>\n<h2><span id=\"api-example-for-a-submenu-entry\">Install</span></h2>\n<h3>Python</h3>\n<h4>Windows &amp; Linux</h4>\n<pre class=\"prettyprint lang-python\">pip install OneXAPI\n</pre>\n<h3>C++</h3>\n<h4>Windows</h4>\n<pre class=\"prettyprint lang-cpp\">The C++ Windows installation guide is coming soon  \n\nPlease contact OneX Team (ceo@libera.or.kr & cto@libera.or.kr)\n</pre>\n<h4>Linux</h4>\n<pre class=\"prettyprint lang-cpp\">The C++ Linux installation guide is coming soon  \n\nPlease contact OneX Team (ceo@libera.or.kr & cto@libera.or.kr)\n</pre>\n<br>\n<hr>\n<h2><span id=\"api-example-for-a-submenu-entry\">Tested Environment</span></h2>\n<p>This is a tested and stable environment.<br>\nWe recommend you to use it in the following environment.</p>\n<h3>Python</h3>\n<ul>\n<li>Windows10 64bit (Python 3.6)</li>\n<li>Ubuntu 18.04 64bit (Python 3.6)</li>\n</ul>\n<h3>C++</h3>\n<ul>\n<li>Ubuntu 18.04 64bit\n<br></li>\n</ul>\n<hr>\n<h2><span id=\"api-example-for-a-submenu-entry\">Response format</span></h2>\n<p>Response always includes <code>success</code>, <code>data</code> and <code>requestedApiCount</code> fields</p>\n<table>\n<thead>\n<tr>\n<th style=\"text-align:center\">Field</th>\n<th style=\"text-align:center\">Type</th>\n<th style=\"text-align:center\">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"text-align:center\"><code>success</code></td>\n<td style=\"text-align:center\">Bool</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\"><code>requestedApiCount</code></td>\n<td style=\"text-align:center\">Uint</td>\n<td style=\"text-align:center\">Number of APIs requested for Exchange Server</td>\n</tr>\n<tr>\n<td style=\"text-align:center\"><code>data</code></td>\n<td style=\"text-align:center\">Object</td>\n<td style=\"text-align:center\">Information included in this field depends on each APIs. Please refer To the document below.</td>\n</tr>\n</tbody>\n</table>\n<pre class=\"prettyprint lang-json\">{\n\t\"success\":true,\n\t\"requestedApiCount\":1,\n\t\"data\":{\n\t\t...\n\t}\n}\n</pre>\n<br>\n<hr>\n<h2><span id=\"api-example-for-a-submenu-entry\">Error</span></h2>\n<p>If an error occurs, the response <code>success</code> field is <strong>false</strong>, and the data field is filled as below.</p>\n<table>\n<thead>\n<tr>\n<th style=\"text-align:center\">Field</th>\n<th style=\"text-align:center\">Type</th>\n<th style=\"text-align:center\">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"text-align:center\"><code>errorType</code></td>\n<td style=\"text-align:center\">String</td>\n<td style=\"text-align:center\">Refer to the error type below</td>\n</tr>\n<tr>\n<td style=\"text-align:center\"><code>errorMsg</code></td>\n<td style=\"text-align:center\">String</td>\n<td style=\"text-align:center\">More information on errors</td>\n</tr>\n</tbody>\n</table>\n<pre class=\"prettyprint lang-json\">{\n\t\"success\":false,\n\t\"requestedApiCount\":0,\n\t\"data\":{\n\t\t\"errorType\":\"WRONG_PARAM_TYPE\",\n\t\t\"errorMsg\":\"Type of 'currency' is not string\"\n\t}\n}\n</pre>\n<h3>Error Type</h3>\n<ul>\n<li>JSON_ANSWER_ERROR</li>\n<li>JSON_PARSING_ERROR</li>\n<li>NOT_ENOUGH_PARA</li>\n<li>WRONG_VALUE_TYPE</li>\n<li>WRONG_VALUE</li>\n<li>REST_REQ_TIMEOUT</li>\n<li>WEBSOCKET_CONNECT_TIMEOUT</li>\n<li>EXCHANGE_REJECT</li>\n<li>NOT_SUPPORTED_API</li>\n<li>UNEXPECTED_ERROR</li>\n<li>CRITICAL_ERROR</li>\n<li>RECONNECT_FAILED</li>\n<li>UNSUBSCRIBE_FAILED</li>\n<li>EXCHANGE_RESPONSE_ERROR\n<br></li>\n</ul>\n<hr>\n<h2><span id=\"api-example-for-a-submenu-entry\">Tips</span></h2>\n<h4>Request Parameter</h4>\n<p>Request parameters not in the request field list are ignored</p>\n<h4>Upper and lower case letters</h4>\n<p>All string parameters are not case sensitive (ex. Btc, bTc, bTC are all considered the same input)<br>\nHowever, fields with 'Allowed values' are case sensitive.</p>\n<h4>Rounding</h4>\n<p>The price and amount of order and draw are automatically rounded.<br>\nThe user has the option of raising, lowering, or rounding.</p>\n<h4>Exception</h4>\n<p>OneXAPI does not raise any exception.<br>\nExceptions from OneXAPI always return an error message.<br>\n<br></p>\n<hr>\n<h2><span id=\"api-example-for-a-submenu-entry\">Terms</span></h2>\n<h4>get~</h4>\n<p>OneXAPI does not request an API to the exchange; it obtains data from local memory.</p>\n<h4>fetch~</h4>\n<p>OneXAPI requests an API to the exchange to obtain data.\n<br></p>\n<hr>\n<h2><span id=\"api-example-for-a-submenu-entry\">Example Application</span></h2>\n<p>Find out what applications you can create with OneXAPI!<br>\nMore examples will be available soon at the link below.\n<a href=\"https://github.com/OneXAPI/OneXAPI_Python/tree/master/OneXAPI/example/\">Github</a><br>\n<br></p>\n"
  },
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2022-10-21T03:13:43.751Z",
    "url": "https://apidocjs.com",
    "version": "0.29.0"
  }
});
