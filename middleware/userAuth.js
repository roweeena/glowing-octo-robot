import jwt from 'jsonwebtoken';
import UserData from '../models/User.js';
import {config} from '../config.js';

export const userAuth = async (req, res, next) => {
  let token;
  const header = req.get('Authorization');

  if(header && header.startsWith('Bearer' + ' ')) {
    token = header.split(' ')[1];
  }

  if(!token) return res.status(401).json({ message: 'Authentication error' });

  jwt.verify(token, config.jwt.secretKey, async (err, decoded) => {

    if(err) return res.status(401).json({ message: 'Authentication error' });

    const user = await UserData.findOne({_id: decoded._id});

    if(!user) return res.status(401).json({ message: 'Authentication error' });
    
    req.userID = user._id;

    // next();
  });
}