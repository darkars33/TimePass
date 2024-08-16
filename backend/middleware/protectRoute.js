const jwt = require('jsonwebtoken');
const User = require('../models/userAuth.module');



const protectRoute = async(req, res, next) =>{
          try {
                    const token = req.cookies.token;

                    if(!token){
                              return res.status(401).json({
                                        message: "You need to login first",
                                        success: false
                              })
                    }

                    const decode= jwt.verify(token, process.env.JWT_SECRET);
                    if(!decode){
                              return res.status(401).json({
                                        message: "Invalid token",
                                        success: false
                              })
                    }
                    
                    const user= await User.findById(decode.userId).select('-password');

                    req.user = user;

                    next();

          } catch (error) {
                    console.log(error);
                    return res.status(500).json({
                              message: error.message,
                              success: false
                    })
          }
}

module.exports = protectRoute;