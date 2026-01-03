console.log('spotify-request-normalizer');

let url = $request.url;

url = url.replace(/\.com:443\b/, '.com');

url = url.replace(/platform=iphone\b/, 'platform=ipad');

$done({ url });
