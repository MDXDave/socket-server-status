# Server status with socket.io   ![](https://travis-ci.org/MDXDave/socket.io-status.svg) ![](https://david-dm.org/MDXDave/socket.io-status.svg)
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


 