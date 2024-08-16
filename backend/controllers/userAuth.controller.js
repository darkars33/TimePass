const User = require('../models/userAuth.module');
const bcryptjs = require('bcryptjs');
const generateToken = require('../utils/generateToken');

const signup= async(req, res) =>{
          try {
                    const {name, email, password} = req.body;

                    const user = await User.findOne({email});
                    if(user){
                              return res.status(400).json({message: "User already exists"});
                    }

                    const salt = await bcryptjs.genSalt(10);
                    const hashPassword = await bcryptjs.hash(password, salt);

                    const newUser = new User({
                              name,
                              email,
                              password: hashPassword
                    })

                    if(newUser){
                              generateToken(newUser._id, res);
                              await newUser.save();
                              return res.status(200).json({
                                        message: "User created successfully",
                                        data: newUser,
                                        success: true
                              })
                    }else{
                              return res.status(400).json({
                                        message: "Failed to create user",
                                        success: false
                              })
                    }


          } catch (error) {
                    console.log(error);
                    return res.status(500).json(
                              {
                                        message: error.message,
                                        success: false
                              }
                    )
                                      
          }
}

const login= async(req, res) =>{
          try {
                    const {email, password} = req.body;

                    const user= await User.findOne({email});
                    if(!user){
                              return res.status(400).json({
                                        message: "User not found",
                                        success: false
                              })
                    }

                    const isMatch = await bcryptjs.compare(password, user.password);
                    if(!isMatch){
                              return res.status(400).json({
                                        message:"Invalid credentials",
                                        success: false
                              })
                    }

                    generateToken(user._id, res);

                    return res.status(200).json({
                              message: "User logged in successfully",
                              success: true
                    })

          } catch (error) {
                    console.log(error);
                    return res.status(500).json({
                              message: error.message,
                              success: false
                    })
          }
}

const logout = (req, res) =>{
          try {
                  res.cookie('token', '', {maxAge: 0});
                  return res.status(200).json({
                    message: "logout successfully",
                    status: true
                  }) 
          } catch (error) {
                console.log(error);
                return res.status(500).json({
                    message: error.message,
                    status: false
                })    
          }
}

const getMe = async(req, res) =>{
          try {
                    const userId = req.user._id;
                    const user = await User.findById(userId).select('-password');

                    if(!user){
                      return res.status(400).json({
                        message: "User not found",
                        success: false
                      })
                    }

                    return res.status(200).json({
                      message: "User found",
                      data: user,
                      success: true
                    })

          } catch (error) {
                    console.log(error);
                    return res.status(500).json({
                              message: error.message,
                              success: false
                    })
          }
}

module.exports = {
          signup,
          login,
          logout,
          getMe
}