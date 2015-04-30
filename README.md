# Get status of server via socket.io/node.js
Check if server is online via socket.io and node.js

##Installation##
Just clone git repository

``git clone https://github.com/MDXDave/socket-server-status.git``

and install dependencies with

``npm install``

##Usage##
**Server side:** 

Open ``config.json`` and change *redirect_uri* to your domain (this redirect is used when someone access the node.js server directly), you can also change *port* to a port you would like to use.

Start server with 

``node status.js``

**Client side:**

See ``examples/status.html`` for usage


 