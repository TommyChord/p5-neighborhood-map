

function testYelp(){
	// In a real world application I would never exposed the information below. I would
	// rather implemented the call to the Yelp API from the server where the site is hosted
	// instead of the client.
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
	
	var terms = 'food';
	var near = 'Trondheim';
	var category_filter = 'musicvenues';
	
	parameters = [];
	parameters.push(['category_filter', category_filter]);
	parameters.push(['location', near]);
	parameters.push(['cc', 'NO']);
	parameters.push(['callback', 'cb']);
	parameters.push(['oauth_consumer_key', auth.consumerKey]);
	parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
	parameters.push(['oauth_token', auth.accessToken]);
	parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
	var message = {
		'action' : 'http://api.yelp.com/v2/search',
		'method' : 'GET',
		'parameters' : parameters
	};
	
	OAuth.setTimestampAndNonce(message);
	OAuth.SignatureMethod.sign(message, accessor);
	var parameterMap = OAuth.getParameterMap(message.parameters);
	parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature);
	
	// execute the call against the API using Ajax
	$.ajax({
		'url' : message.action,
		'data' : parameterMap,
		'cache' : true,
		'dataType' : 'jsonp',
		'jsonpCallback' : 'cb',
		'success' : function(data, textStats, XMLHttpRequest) {
			console.log(data);
			var bn = data.businesses;
			for(var i = 0; i < data.total; i ++){
				$("#test").append(bn[i].name + '<br>');
			}
		}
	});
	var json = (function() {
        var json = null;
        $.ajax({
            //'async': false,
            'global': false,
            'url': "model/categories.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
                console.log(json);
            }
        });
        return json;
    })();
	
	var catLen = json.length;
    for(var i = 0; i < catLen; i ++){
		if(json[i].hasOwnProperty('country_whitelist')){
			for(var j= 0; j < json[i].country_whitelist.length; j ++){
				if(json[i].country_whitelist[j] == 'NO'){
					$("#test").append(json[i].title + '<br>');
				}
			}
		} else {
			$("#test").append(json[i].title + '<br>');
		}
	}
    
}