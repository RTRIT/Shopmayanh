const mongoose = require('mongoose');
const Buy = require('../models/Buy');
const bcrypt = require('bcrypt');

class validateController{

    showRegister(req, res, next){
        res.render('users/register')
    }
    register(req, res, next){
        // console.log(req.body);
        // console
        // res.json(req.body);
        const{user_name, email, password, password2} = req.body;
        var errors = [];
        var flag = false;
        // Fill o
        var Tong=0;
        
        if(user_name=='' || email=='' || password=='' || password2==''){
            errors.push("Please fill in all the field !!!");
            res.json(req.body)
            flag = true;
        } 
            // Buy.findOne({ user_name })
            //     .then(usr => {
            //         if(user_name == usr.user_name){
            //             errors.push("Ten dang nhap da ton tai !!!");
            //             flag=true;
            //         }
            //     })
            //     .catch(next)
            if(password != password2){
                errors.push("Password is not matched !!!");
                flag = true;
            }
            if(password.length<6){
                errors.push("Password should be at least 6 character");
                flag=true;
            }
        
        if(errors.length>0){
            res.render('users/register',{
                flag,
                errors
        })}else{
            Buy.findOne({email})
                .then(user => {
                    if(user){
                        errors.push("Email is already registered");
                        flag = true;
                        res.render('users/register',{
                            flag,
                            errors
                        })
                    }else{
                        const newUser = new Buy({email, user_name, password});
                        newUser.save()
                            .then(() => res.render('users/login'))
                            .catch(next);
                    }
                })
                .catch(next)
        }
    }

    showLogin(req, res, next){
        // res.send("Testing success!!")
        res.render('users/login')
    }
    login(req, res, next){
        var errors=[];
        var flag = false;
        const {email, password} = req.body;
        Buy.findOne({email})
            .then(user => {
                if(user){
                    if(user.password == req.body.password){
                        res.cookie('user_id', user.id);
                        res.cookie('user_name', user.user_name);
                        res.redirect('/')
                    }else{
                        errors.push("Password is not correct!!!");
                        flag = true;
                        res.render('users/login',{
                            flag,
                            errors
                        });
                    }
                    
                }else{
                    errors.push("Email is not correct!!!");
                    flag = true;
                    res.render('users/login',{
                        flag,
                        errors
                    });
                }
            })
    }
}

module.exports = new validateController;