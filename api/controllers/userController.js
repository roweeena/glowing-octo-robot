//TODO: add user CRUD actions e.g. creating a trip => login/signup authentication again hahahahaha
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userInfo = require('../models/userModel.js');

const userToken = (id) => {
  return jwt.sign(
    {_id: id},
    config.jwt.secretKey,
    { expiresIn: config.jwt.expiresInSec },
  )
}


module.exports = {

    async userIn(req,res){ // check login
        const message = 'user in'
        return res.status(200).json(message) 
    },

    async trips(req, res){ // get trip info
      let call = undefined
      const trips = call || 'there are no trips'
      return res.status(200).json(trips)
    },

    async getUser(req, res){ // grab info for user
      const userId = req.params.id;
      const currentUser = await userInfo.findOne({_id: userId})
        .populate("trips")
      return res.status(200).json(currentUser);
    },

    async login(req, res){ // login user
      const { email, password } = req.body
      const user = await UserData.findOne({email})
      if (!user){ // incorrect credentials - email
        return res.status(401).json({response: 'Sorry, invalid username or password'})
      }
      const matched = await bcrypt.compare(password, user.password); // incorrect credentials - password
      if (!matched){
        return res.status(401).json({response: 'Sorry, invalid username or password'})
      }
      const token = userToken(user._id);
      return res.status(200).json({
        _id:user._id,
        token
      })
    },

    async signup(req, res){ // signup user
      const { email, password } = req.body
      const inUse = await userInfo.findOne({email});
      if (inUse){
        return res.status(401).json({response:'email already in use'});
      }
      const bcryptPass = bcrypt.hashSync(password, 17)
      const createUser = await userInfo.create({ // CREATE USER
        email: email, // can just be 'email' but looks a little confusing
        password: encryptedPassword
      })
      if (!createUser){
        return res.status(404).json({response: `Error: can't create user`})
      }
      const token = userToken(createUser.id)
      return res.status(200).json({ // login user
        _id:createUser._id,
        token
      })
    }

}