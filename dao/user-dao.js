var db = require("../config/databaseConnection");

module.exports = {
    
    getUser: function (reqObj) {
    console.log("user ::", reqObj)
    return new Promise(function (resolve, reject) {
        return db.users.findOne({ where: { isDeleted: reqObj.isDeleted } }).then(function (result) {
            if (result) {
                 
            } else {
                return reject(500).send("Error while adding")
            }
        })
    });
},

}