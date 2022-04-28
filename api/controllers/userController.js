//TODO: add user CRUD actions e.g. creating a trip => login/signup authentication again hahahahaha
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userInfo = require('../models/userModel.js');

const userToken = (id) => {
  return jwt.sign(
    {_id: id},
    process.env.TOKEN,
    { expiresIn: '72h' },
  )
}

module.exports = {

    async userIn(req,res){ // check login
        const message = 'user in'
        return res.status(200).json(message) 
    },

    async edit(req, res){
      console.log('user edit controller called', req.body)
      userId = req.body.id
      const currentUser = await userInfo.findOne({_id: userId})
      currentUser.name = req.body.newName
      currentUser.update()
      const updatedUser = await userInfo.findOne({_id: userId})
      console.log('update user', updatedUser)
      return res.status(200).json(updatedUser);
    },

    async trips(req, res){ // get trip info
      let call = undefined
      const trips = call || 'there are no trips'
      return res.status(200).json(trips)
    },

    async getUser(req, res){ // grab info for user
      const userId = req.params.id;
      const currentUser = await userInfo.findOne({id: userId})
        // .populate("trips")
      return res.status(200).json(currentUser);
    },

    async login(req, res){ // login user
      console.log('login controller called')
      const { email, password } = req.body
      const user = await userInfo.findOne({email})
      if (!user){ // incorrect credentials - email
        console.log('Sorry, invalid username or password')
        return res.status(401).json({response: 'Sorry, invalid username or password'})
      }
      const matched = await bcrypt.compare(password, user.password); // incorrect credentials - password
      if (!matched){
        console.log('Sorry, invalid username or password')
        return res.status(401).json({response: 'Sorry, invalid username or password'})
      }
      const token = userToken(user.id);
      return res.status(200).json({
        id:user.id,
        name: user.name,
        token
      })
    },

    async signup(req, res){ // signup user
      const { email, password } = req.body
      console.log("SIGNUP IS BEING CALLED IN BACKEND")
      const encryptedPassword = bcrypt.hashSync(password, 10);
      // console.log('reaching token')
      const inUse = await userInfo.findOne({email});
      if (inUse){
        console.log('email already in use')
        return res.status(401).json({response:'email already in use'});
      }
      const bcryptPass = bcrypt.hashSync(password, 17)
      const createUser = await userInfo.create({ // CREATE USER
        email: email, // can just be 'email' but looks a little confusing
        password: encryptedPassword
      })
      if (!createUser){
        console.log(`can't create user`)
        return res.status(404).json({response: `Error: can't create user`})
      }
      const token = userToken(createUser.id)
      return res.status(200).json({ // login user
        id:createUser.id,
        token
      })
    }

}