const {Sequelize} = require('sequelize')

const sequelize = new Sequelize ('d3n9pcpvlld7kv',
"tntjsavihstmrx",
"9030657a5e719537ca1c68374152f09e3134b32118933acffaf3430979ed8781",{
    host:"ec2-23-23-128-222.compute-1.amazonaws.com",
     ssl: true,
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
})
module.exports =sequelize
