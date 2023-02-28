const connection = require('./config/connection')
const {Note,User} = require('./models')


Note.create({title:"test",body:"test2"})