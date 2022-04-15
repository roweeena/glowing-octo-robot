//TODO: add user CRUD actions e.g. creating a trip => login/signup authentication again hahahahaha

module.exports = {

    async userIn(req,res){
        const message = 'hello'
        return res.status(200).json(message) 
    },

    async trips(req, res){
        const message = 'hello'
        return res.status(200).json(message)
    }
}