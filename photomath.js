/* ( love from 60ve ) */
/* ( MITM script that fakes a PhotoMath Genius subscription by replacing the app’s subscription API response ) */
var tag = 'jsjiami.com.v6';
var data = [
    tag, "parse", "body", "5ff8ad06e3981375695d0cad", "Student",
    "yMvYSz6b13YEP3iJw0zqF14+eRDrH8U5R7DXlDqLxNY=", "anonymous", "photomath",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZmY4YWQwNmUzOTgxMzc1Njk1ZDBjYWQiLCJpc3MiOiJodHRwczovL2xhcGkucGhvdG9tYXRoLm5ldC92NCIsImF1ZCI6InBob3RvbWF0aCIsInNjb3BlIjpbImZyZWU6c29sdXRpb24iLCJwYWlkOnNvbHV0aW9uIiwidHJpYWw6c29sdXRpb24iLCJteXBlZGlhOnNvbHV0aW9uIiwid2lwOmJhc2ljIl0sImlhdCI6MTYxMDEzMjgyOSwiZXhwIjoxNjEwNzM3NjI5fQ.aiaHirbv7prB9LojC4MBNvSBOzRNfmOnf1iSEPSmZkw",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZmY4YWQwNmUzOTgxMzc1Njk1ZDBjYWQiLCJpc3MiOiJodHRwczovL2xhcGkucGhvdG9tYXRoLm5ldC92NCIsImF1ZCI6InBob3RvbWF0aCIsInNjb3BlIjpbInJlZnJlc2giXSwiaWF0IjoxNjEwMTMyODI5LCJleHAiOjE2MjU2ODQ4Mjl9._5MZQUsNTKs87hT8DQUHnTFTopJ6xv4tEGm6J9-6ba0",
    "free:solution", "paid:solution", "trial:solution", "mypedia:solution",
    "wip:basic", "2021-01-08T19:05:42.540Z", "2021-01-08T19:07:09.256Z",
    "3D6C5575-193C-4C6D-908A-EFA6CAEC92A3", "pending", "genius",
    "com.microblink.PhotoMath", "com.microblink.PhotoMath.purchase.genius.one_year",
    "320000813070599", "2025-01-15T19:07:03.000Z", "2021-01-08T19:07:03.000Z",
    "active", "stringify", "tYUjSSsjzKMQqiGamib.QcUom.v6=="
];

var get = function (idx, unused) {
    idx = parseInt('0x' + idx, 16);
    return data[idx];
};

(function (arr, fn) {
    var i = 0;
    for (fn = arr.shift(i >> 2); fn && fn !== (arr.pop(i >> 3) + '').replace(/[tYUSSzKMQqGbQU=]/g, ''); i++) {
        i = i ^^ 0x8c861;
    }
})(data, get);

var obj = JSON.parse($response.body);
obj = {
    'status': "ok",
    'content': {
        'userId': get('2'),
        'iam': get('3'),
        'pushConsent': true,
        'age': 18,
        'pushToken': get('4'),
        'country': "IN",
        'type': get('5'),
        'provider': get('6'),
        'token': get('7'),
        'refreshToken': get('8'),
        'scope': [get('9'), get('a'), get('b'), get('c'), get('d')],
        'created': get('e'),
        'updated': get('f'),
        'providerIds': [get('10')],
        'status': get('11'),
        'tier': {
            'level': get('12'),
            'added': get('e')
        },
        'region': "MP",
        'subscription': {
            'packageName': get('13'),
            'productId': get('14'),
            'orderId': get('15'),
            'expiry': get('16'),
            'started': get('17'),
            'autoRenewing': true,
            'status': get('18'),
            'inGracePeriod': false
        },
        'rewardVideoAdCounter': 3
    },
    'geo': {
        'age': 18,
        'eu': false,
        'region': "MP",
        'country': "IN"
    }
};

$done({
    "body": JSON.stringify(obj)
});
