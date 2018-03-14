const jwt = require('jsonwebtoken');

module.exports = {

  auth: (req,res,next) => {
    try {
      const decoded = jwt.verify(req.headers.token, 'secret');
      if(decoded.isAdmin){
        next();
      } else {
        res.status(500).json({
          message: "You Are Not Admin"
        });
      }

    } catch(err) {
        res.status(500).json({
          message: "Invalid Token"
        });
    }
  },
  token: (req,res) => {
    var token = jwt.sign({ isAdmin: true }, 'secret');
    return res.status(200).json({ token });
   }
}
