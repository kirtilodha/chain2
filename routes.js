const routes = require('next-routes')();

//for vairable routing
routes
.add('/campaigns/new', '/campaigns/new') //what url, which page
.add('/campaigns/:address', '/campaigns/show')
.add('/campaigns/:address/requests', '/campaigns/requests/index') //when variable is present in url
.add('/campaigns/:address/requests/new', '/campaigns/requests/new');



module.exports = routes;