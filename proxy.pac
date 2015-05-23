var PROXY_CN = 'PROXY 121.40.93.7:8080'

var white_list = [
	'baidu.com',
	'xiami.com',
	'xiami.net'
]

function FindProxyForURL(url, host) {
	url = url.toLowerCase()
	host = host.toLowerCase()

	if (url.indexOf('https:\/\/') === 0)
		return 'DIRECT'

	for (var i = 0; i < white_list.length; i++) {
		var h = white_list[i]

		if (host.indexOf(h) !== -1)
			return PROXY_CN
	}

	return 'DIRECT'
}
