
const db = require('../config/databaseConnection');
const Sequelize = require('sequelize');
var sequelize = db.sequelize;
var path = require('path')

console.log("db", db);
module.exports = function (sequelize, DataTypes) {
    // var User = sequelize.import('../model/' + 'users');
    var User = require(path.join('../model/' + 'users'))(sequelize, Sequelize.DataTypes);
    const Employee = sequelize.define('employee', {
        id: {
            type: Sequelize.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        employeeId: {
            type: Sequelize.INTEGER,
            unique: true
        },
        organizationName: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true
    })
    Employee.belongTo(User, { as: "user" })
    return Employee;
}