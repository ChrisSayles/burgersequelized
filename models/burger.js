'use strict';

var Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {

    var burgers = sequelize.define("burgers", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        devoured: {
            type: DataTypes.INTEGER,
            dafaultValue: false
        },
        date:{
          type: Sequelize.DATE
        }
    }, {
      timestamps: false
    });
    return burgers;
};