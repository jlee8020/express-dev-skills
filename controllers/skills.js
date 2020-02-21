let Skills = require('../models/skills');

module.exports = {
    index,
    show
}

function index(req, res){
    
        res.render('skills/index',{
           skills: Skills.getAll() //model to talk to DB
        })
}

function show(req,res){
 res.render('skills/show', {
     skill: Skills.getOne(req.params.id),
 })
}

