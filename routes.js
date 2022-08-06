const routes = require('next-routes')();

//for vairable routing
routes
.add('/products/new', '/products/new') //what url, which page
.add('/products/myProducts', '/products/myProducts') 
.add('/products/:address', '/products/show')
.add('/products/:address/requests', '/products/requests/index') //when variable is present in url
.add('/products/:address/requests/new', '/products/requests/new');



module.exports = routes;