# Server status with socket.io

[![Build status][travis-image]][travis-url] [![Test coverage][coveralls-image]][coveralls-url] [![Dependency Status][dependency-image]][dependency-url]

Check if server is online via socket.io

##Installation##
Just clone git repository

``git clone https://github.com/MDXDave/socket.io-status.git``

and install dependencies with

``npm install``

##Usage##
**Server side:** 

Open ``config.json`` and change *redirect_uri* to your domain (this redirect is used when someone access the node.js server directly), you can also change *port* to a port you would like to use.

Start server with 

``node status.js``

**Client side:**

See ``examples/status.html`` for usage


[travis-image]: https://img.shields.io/travis/MDXDave/socket.io-status/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/MDXDave/socket.io-status
[coveralls-image]: https://img.shields.io/coveralls/MDXDave/socket.io-status/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/MDXDave/socket.io-status
[dependency-image]: http://img.shields.io/david/MDXDave/socket.io-status.svg?style=flat-square
[dependency-url]: https://david-dm.org/MDXDave/socket.io

 