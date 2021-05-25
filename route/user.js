var express = require('express');
var router = express.Router();
var userService = require('../service/user-service');
var {verifyAccessToken}=require('../utilities/commonUtil')


router.get('/getUser', verifyAccessToken, (req, res) => {
    // verifyUser(req).then((verifyUserResult) => {
    //     if (verifyUserResult) {
            userService.getUser(verifyUserResult).then((result) => {
                res.status(200).send(result)
            }, (err) => {
                res.status(401).send(err);
            })
//         } else {
//             res.status(401);
//         }
//     }, (err) => {
//         res.status(401).send(err);
//     });
// }, (err) => {
//     res.status(500).send(err);
})

module.exports = router;