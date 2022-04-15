//TODO: add user CRUD actions e.g. creating a trip => login/signup authentication again hahahahaha
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userInfo = require('../models/userModel.js');

const createJWT = (id) => {
  return jwt.sign(
    {_id: id},
    config.jwt.secretKey,
    { expiresIn: config.jwt.expiresInSec },
  )
}


module.exports = {

    async userIn(req,res){
        const message = 'user in'
        return res.status(200).json(message) 
    },

    async getUser(req,res){

    },

    async trips(req, res){
        const message = 'hello'
        return res.status(200).json(message)
    }
}