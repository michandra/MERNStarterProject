var request = require('request');
//var key = "key=AAAALR7o9VI:APA91bGLjwDcs9CAKSYbAShd_hGn2BBGfViBSaqJPK5T3kZJNmrda-Y6dm-QdrpU7us9dpYgJVs7fFtcBCBK1o41XaplbyRLy8EzkY1qkkDZ4cpklnn0SZjdjpXYMc2p_CWpPBLsC945"
//var to = "eSNqEPIT6Ug:APA91bGR5ckCw8rMi2KKlPyompAWEqH1S3byjAiaqlwofLitGzrx_L9Yl5kKqiSSeHWcSC73uWP33PsBTzadBpeNFiu5_XIQNNliJvKmKmlN7dU2gH_mqsnID_wG8juCYjqghNPz5dcK"
module.exports = 
{
sendMessageToUser: function (key, deviceId, message) {
	request({
	url: 'https://fcm.googleapis.com/fcm/send',
	method: 'POST',
	headers: {
		'Content-Type' :' application/json',
		'Authorization': key
	},
	body: JSON.stringify(
      { "data": message,
        "to" : deviceId
      }
    )
	}, function(error, response, body) {
	if (error) { 
		console.error(error, response, body); 
	}
	else if (response.statusCode >= 400) { 
		console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body); 
	}
	else {
		console.log('Done notifying!')
	}
	})}
	
}