// const jwt = require('jsonwebtoken')
// const userInfo = require('../models/userModel.js');

// export const checkAuth = async (req, res, next) => {
//   let token;
//   const header = req.get('Authorization');

//   if(header && header.startsWith('Bearer' + ' ')) {
//     token = header.split(' ')[1];
//   }

//   if(!token) return res.status(401).json({ message: 'Authentication error' });

//   jwt.verify(token, process.env.jwt.token, async (err, decoded) => { // need jwt secret token in env

//     if(err) return res.status(401).json({ message: 'Authentication error' });

//     const user = await UserData.findOne({_id: decoded._id});

//     if(!user) return res.status(401).json({ message: 'Authentication error' });
    
//     req.userID = user._id;

//     // next();
//   });
// }