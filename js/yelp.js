"use strict";
function getYelpData(id, retData){
	// In a real world application I would never exposed the information below. I would
	// rather implemented the call to the Yelp API from the server where the site is hosted
	// instead of the client.

	// Set up the API key
	var auth = {
		consumerKey : "aUS4s7TLob15R7qfqciZ4Q",
		consumerSecret : "gya5ocdk1gp0310pBsRNeN--_88",
		accessToken : "5X9eeB_BkBoHMKCx6LgMgpjUJyy26Ka9",
		accessTokenSecret : "oDyFWKk4JzXeC2WkRf7-ohI1IMM",
		serviceProvider : {
			signatureMethod : "HMAC-SHA1"
		}
	};

	var accessor = {
		consumerSecret : auth.consumerSecret,
		tokenSecret : auth.accessTokenSecret
	};

	// define the parameters
	var parameters = [];
	parameters.push(['cc', 'NO']);
	parameters.push(['callback', 'cb']);
	parameters.push(['oauth_consumer_key', auth.consumerKey]);
	parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
	parameters.push(['oauth_token', auth.accessToken]);
	parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
	var message = {
		'action' : 'http://api.yelp.com/v2/business/' + id,
		'method' : 'GET',
		'parameters' : parameters
	};

	OAuth.setTimestampAndNonce(message);
	OAuth.SignatureMethod.sign(message, accessor);
	var parameterMap = OAuth.getParameterMap(message.parameters);
	parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature);
	// execute the call against the API using Ajax/JSONP
	$.ajax({
		'url' : message.action,
		'data' : parameterMap,
		'cache' : true,
		'dataType' : 'jsonp',
		'jsonpCallback' : 'cb',
		'success' : function(data) {
			var yelpContent = '<hr><div class="row">';
			if (data.url) {
				yelpContent += '<a href="' + data.url + '" target="yelp"><img src="img/miniMapLogo.png" alt="yelp logo" title="Click to open yelp.com"></a></div>';
			} else {
				yelpContent += '<img src="img/miniMapLogo.png" alt="yelp logo"></div>';
			}
			if (data.rating_img_url_small) {
				yelpContent +='<div class="row"><span class="label">Rating: </span><img src="' + data.rating_img_url_small + '" alt="Rating"></div>';
			}
			if (data.image_url) {
				yelpContent +='<div class="row"><span class="label">Photo: </span><img src="' + data.image_url + '" alt="Photo"></div>';
			}
			retData({status: 'success', content: yelpContent});
		},
		'error' : function(){
			var yelpContent = '<hr><div class="row"><img src="img/miniMapLogo.png" alt="yelp logo"><span class="data">Not able to connect to Yelp.com at the moment.</span></div>';
			retData({status: 'error', content: yelpContent});
		}
	});
}