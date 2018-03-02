var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase:true
      },
      
  password: {
    type: String,
    required: true,
    //unique:false
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase:true
  }
  //updatedAt: Date
});

mongoose.model('users', UsersSchema);