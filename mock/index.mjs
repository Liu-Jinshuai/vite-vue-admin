export default {
    '/hello': 'hello',
    '/login'(req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(JSON.stringify({
            code: 0,
            data: {
                token: '123'
            }
        }));
    },
    '/shop/list': {
        handler(req, res) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(JSON.stringify({
                code: 0,
                data: [
                    {
                        id: 1,
                        name: '商品1'
                    },
                    {
                        id: 2,
                        name: '商品2'
                    }
                ]
            }));
        }
    },
    '/json': {
        handler: { hello: 1 }
    },
    '/package.json': {
        file: './package.json'
    }
};