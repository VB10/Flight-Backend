const appMiddleware = (req, res, next) => {
     console.log("Time22:", Date.now());
     next();
   };
   
   const errorMiddleware = (err, req, res, next) => {
     console.error(err.stack);
     res.status(500).send("Something broke!");
   };
   
   module.exports = { appMiddleware, errorMiddleware };
   