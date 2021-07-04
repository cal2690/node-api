const { response, request } = require('express');

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
    const { name, age } = req.body;
    res.status(200).json({
        msg: "post API userPost",
        body
    });
}

const userPut = (req, res = response) => {
    const { id } = req.params.id;
    res.status(200).json({
        msg: "put API userPut",
        id
    });
}

const userDelete = (req, res = response) => {
    const { id } = req.params.id;
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