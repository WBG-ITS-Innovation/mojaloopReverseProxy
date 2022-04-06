var SimpleReverseProxy = require('simple-reverse-proxy'),
SimplePathRouter = require('simple-path-router');

new SimplePathRouter()
.when('/', new SimpleReverseProxy(['http://testing-toolkit.local:8080']))
.listen(3000);

[3000].forEach(function (port) {
require('http')
    .createServer(function (req, res) {
        res.statusCode = 200;
        res.end();

        console.log(port);
    })
    .listen(port);
});