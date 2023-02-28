const {Schema,model} = require('mongoose')
const {Note,noteSchema} = require('./Note')

const userSchema = new Schema({
    username:  {
        type: String,
    },
       
    password:{
        type: String,
    },
    notes: [{
        type: noteSchema
    }]
    

})

const User = model('User',userSchema)

module.exports = User