var SimpleReverseProxy = require('simple-reverse-proxy'),
SimplePathRouter = require('simple-path-router');

new SimplePathRouter()
.when('/', new SimpleReverseProxy(['http://testing-toolkit.local:8080']))
.listen(3000);

