const userRoutes = require('express').Router();

userRoutes.get('/', (req, res)=> {
res.json("hit get route for users");

});

userRoutes.post('/', (req, res) => {
res.json("hit post route for user");

});

module.exports = userRoutes;