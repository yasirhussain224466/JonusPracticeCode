const fs = require('fs')

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../DevData/SimpleTours.json`,'utf-8'
))

exports.getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'Error from the internal Server',
        message: 'Server Down'
    })
}
exports.getUser = (req, res) => {
    res.status(500).json({
        status: 'Error from the internal Server',
        message: 'Server Down'
    })
}
exports.createUser = (req, res) => {
    res.status(500).json({
        status: 'Error from the internal Server',
        message: 'Server Down'
    })
}
exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'Error from the internal Server',
        message: 'Server Down'
    })
}
exports.UpdateUser = (req, res) => {
    res.status(500).json({
        status: 'Error from the internal Server',
        message: 'Server Down'
    })
}
