let Skills = require('../models/skills');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
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

function newSkill(req, res) {
    res.render('skills/new');
  }

  function create(req, res) {
   console.log(req.body);
   req.body.done = false;
   Skills.create(req.body);
   res.redirect('/skills');
 }

 function deleteSkill(req, res) {
    Skills.deleteOne(req.params.id);
    res.redirect('/skills');
  }