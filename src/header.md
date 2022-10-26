<br>

---
# Introduction

Welcome to the documentation of OneXAPI!  
OneXAPI, an abbreviation for One eXchange API, was created with the aim of communicating with exchanges in one unified API.  
OneXAPI helps Quant Traders focus on algorithmic research without wasting time on SDK development.  

OneXAPI has the following advantages.  
1. Standardization
  - OneXAPI has standardized API input and output. Users can develop programs by referring only to OneXAPI documents without having to refer to each exchange API documents. 
  - Since OneXAPI uses the same API input/output for all exchanges, it is easy to transfer to the exchange without changing the code.
2. Simplification
  - You don't have to worry about the decimal places supported by the exchange when using orders/withdrawals, etc. The value is automatically converted to the decimal point supported by the exchange.
  - It's easy to decide whether to include fees deducted from your withdrawal or pay separately.
  - Simplify WebSocket usage. If you pass only the information that you want to receive through WebSocket, the connection and maintenance are automatically performed on the background.
  - You can receive as many past Candle Data as you want regardless of the limit of the exchange.
  - It is easy to use by newly developing and integrating functions that were not provided by the exchange API or were complicated.
3. Quickness
  - OneXAPI has been developed as C++ and boasts fast performance.
  - There is no delay because it communicates directly with the exchange without going through the intermediate server.
4. Maintenance
  - If the exchange API changes, an immediate update is performed. Users can use the same algorithm only with OneXAPI updates without changing the code.
5. Safety
  - OneXAPI does not collect the user's API key, so there is no risk of stealing the API key.
<br>

---
## <span id="api-example-for-a-submenu-entry">Install</span>

### Python
#### Windows & Linux
64-bit python only
```python
pip install OneXAPI
```

### C++
#### Windows
```cpp
The C++ Windows installation guide is coming soon  

Please contact OneX Team (ceo@libera.or.kr & cto@libera.or.kr)
```
#### Linux
```cpp
The C++ Linux installation guide is coming soon  

Please contact OneX Team (ceo@libera.or.kr & cto@libera.or.kr)
```
<br>

---
## <span id="api-example-for-a-submenu-entry">Tested Environment</span>
This is a tested and stable environment.  
We recommend you to use it in the following environment.
### Python
- Windows10 64bit (Python 3.6+)
- Ubuntu 18.04 64bit (Python 3.6+)
### C++
- Ubuntu 18.04 64bit
<br>

---
## <span id="api-example-for-a-submenu-entry">Response format</span>
Response always includes `success`, `data` and `requestedApiCount` fields  
| Field | Type | Description |
|:---:|:---:|:---:|
| `success` | Bool |  |
| `requestedApiCount` | Uint | Number of APIs requested for Exchange Server |
| `data` | Object | Information included in this field depends on each APIs. Please refer To the document below. |

```json
{
	"success":true,
	"requestedApiCount":1,
	"data":{
		...
	}
}
```
<br>

---
## <span id="api-example-for-a-submenu-entry">Error</span>
If an error occurs, the response `success` field is **false**, and the data field is filled as below.

| Field | Type | Description |
|:---:|:---:|:---:|
| `errorType` | String | Refer to the error type below |
| `errorMsg` | String | More information on errors |

```json
{
	"success":false,
	"requestedApiCount":0,
	"data":{
		"errorType":"WRONG_PARAM_TYPE",
		"errorMsg":"Type of 'currency' is not string"
	}
}
```

### Error Type
- JSON_ANSWER_ERROR
- JSON_PARSING_ERROR
- NOT_ENOUGH_PARA
- WRONG_VALUE_TYPE
- WRONG_VALUE
- REST_REQ_TIMEOUT
- WEBSOCKET_CONNECT_TIMEOUT  
- EXCHANGE_REJECT  
- NOT_SUPPORTED_API
- UNEXPECTED_ERROR  
- CRITICAL_ERROR  
- RECONNECT_FAILED
- UNSUBSCRIBE_FAILED
- EXCHANGE_RESPONSE_ERROR
<br>

---
## <span id="api-example-for-a-submenu-entry">Tips</span>
#### Request Parameter
Request parameters not in the request field list are ignored  
#### Upper and lower case letters
All string parameters are not case sensitive (e.g. Btc, bTc, bTC are all considered the same input)  
However, fields with 'Allowed values' are case sensitive.  
#### Rounding
The price and amount of order and draw are automatically rounded.  
The user has the option of raising, lowering, or rounding.  
#### Exception
OneXAPI does not raise any exception.  
Exceptions from OneXAPI always return an error message.  
<br>

---
## <span id="api-example-for-a-submenu-entry">Terms</span>
#### get~  
OneXAPI does not request an API to the exchange; it obtains data from local memory. 
#### fetch~  
OneXAPI requests an API to the exchange to obtain data.
<br>

---
## <span id="api-example-for-a-submenu-entry">Example Application</span>
Find out what applications you can create with OneXAPI!  
More examples will be available soon at the link below.
[Github](https://github.com/OneXAPI/OneXAPI_Python/tree/master/OneXAPI/example/)  
<br>