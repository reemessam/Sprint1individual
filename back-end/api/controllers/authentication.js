
//const users = require('../models/users');
var mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  hoba = mongoose.model('users'); 


module.exports=(router) =>{
    
    router.post('users/register' , (req , res)=>{
        if(!req.body.email){
            res.json({
                success:false , message: 'check your Email'
            });
        }
        else {
            if(!req.body.name){
                res.json({
                    success:false , message: 'check your Name'
                    
                });
            }
            else{
                if(!req.body.password){
                    res.json({
                        success:false , message: 'your password is wrong'
                    });
                }
                else{
                    
                    res.send('Sign up successfully')

                }
                
            }
            
        }
        let users = new hoba({
            email:req.body.email.toLowerCase(),
            fullname:req.body.fullname.toLowerCase(),
            password:req.body.password
        });
        users.save(hoba.body);
       users.save((err)=>{
          //  if(err){
              //  res.json({
                //    success:false , message: 'not save ',err
              //  });
          //  }
          //  else{
               // res.json({
                   // success:false , message: 'saved '
               // });
            //}
        })
    });
     
    return router;
}