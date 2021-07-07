const { response, request } = require('express');
const { dbConnection } = require('../database/config');

const usersGet = (req = request, res = response) => {
    const { q, name = 'No name', apikey, page = 1, limit } = req.query;
    res.status(200).json({
        msg: "get API usersGet",
        q,
        name,
        apikey,
        page,
        limit
    });
}

const userPost = (req, res = response) => {
    const { name, lastname, email, password, image, role } = req.body;
    const query = 'CALL SP_User_Create(?, ?, ?, ?, ?, ?)';
    dbConnection.query(query, [name, lastname, email, password, image, role], (err, rows, fields) => {
        if (!err) {
            let result = rows[0][0];
            res.status(200).json({
                ok: result.ok,
                err: result.err,
                template: result.template,
            })
        } else {
            res.status(500).json({
                msg: err
            })
        }
    });
}

const userPut = (req, res = response) => {
    const { id } = req.params;
    res.status(200).json({
        msg: "put API userPut",
        id
    });
}

const userDelete = (req, res = response) => {
    const { id } = req.params;
    res.status(200).json({
        msg: "delete API userDelete",
        id
    });
}

module.exports = {
    usersGet,
    userPost,
    userPut,
    userDelete,
}