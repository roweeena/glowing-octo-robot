//TODO: add user CRUD actions e.g. creating a trip => login/signup authentication again hahahahaha

module.exports = {

    async trips(req, res){
        const message = 'hello'
        // console.log(req)
        return res.status(200).json(message)
    }
}