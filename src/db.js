const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const dbSequilize = new Sequelize('alunos','root','green8007jk', {
    dialect:'mysql', host:'localhost'
});

module.exports = dbSequelize