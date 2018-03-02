var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,
  seller: {
       type: String,
     required: true,
       trim: true,
       lowercase: true
     },
     component: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }



});

mongoose.model('reem', productSchema);
