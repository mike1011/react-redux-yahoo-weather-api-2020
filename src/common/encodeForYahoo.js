// export default function encodeForYahoo(text) {
module.exports = function encodeForYahoo(text) {

  // const pre = 'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca"';
  // const post = '")&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
  // // return `${pre}${encodeURIComponent(text)}${post}`;
  // return `${pre}`;

    var response = "";
	var OAuth = require('oauth');
	var header = {
	    "X-Yahoo-App-Id": "aU60wA5g"
	};
	var request = new OAuth.OAuth(
	    null,
	    null,
	    'dj0yJmk9SnNGWmVnNFFIc08yJmQ9WVdrOVlWVTJNSGRCTldjbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTA3',
	    '7978316fae704335417031e12dbd33832407448e',
	    '1.0',
	    null,
	    'HMAC-SHA1',
	    null,
	    header
	);
	request.get(
	    "https://weather-ydn-yql.media.yahoo.com/forecastrss?location="+text+"&format=json",
	    null,
	    null,
	    function (err, data, result) {
	        if (err) {
	            console.log(err);
	            return err
	        } else {
	            console.log(data)
	            return data
	        }
		
	    }

	);  
	
}
