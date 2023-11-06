const Sequelize = require('sequelize')
const sequelize = new Sequelize('metroshop', 'aluno', 'ifpe2023', {
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate().then(function () {
    console.log("Conectado!!")
}).catch(function (erro) {
    console.log("Erro ao conectar: " + erro)
});