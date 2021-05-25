var userDao = require('../dao/user-dao');
const paginateService = require('../utilities/commonUtil');


module.exports = {
 getUser:function (req) {
    // let userId = req.id
    // let eventId = !req.query.eventId?'':req.query.eventId
     return new Promise(function (resolve, reject) {
        userDao.getUser({isDeleted:0}).then(function (result) {
            return resolve(result);
        }, function (err) {
            return reject(err);
        });
    }, function (err) {
        return reject(err);
    });
}
}