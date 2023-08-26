const data = require('../data.json')

module.exports.getUserAll = (req, res) => {
    const { limit } = req.query
    console.log(limit)
    res.send(data.slice(0, limit))
};

module.exports.getRandomUser = (req, res) => {
    const randomMonth = data[Math.floor(Math.random() * (data.length - 1)) + 1];
    res.send(randomMonth)

};

module.exports.postUser = (req, res) => {
    const saveUser = req.body
    console.log(saveUser.name)


    data.push(saveUser)
    res.send(data)

}

module.exports.patchUser = (req, res) => {
    const { id } = req.params;
    const newData = data.find(item => item.id === Number(id))
    newData.id = id
    newData.name = req.body.name
    newData.gender = req.body.gender
    newData.contact = req.body.contact
    newData.address = req.body.address
    newData.photoUrl = req.body.photoUrl
    res.send(newData)
}


module.exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const newData = data.filter(item => item.id !== Number(id))
    res.send(newData)


}

