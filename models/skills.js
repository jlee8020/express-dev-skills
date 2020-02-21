const skills = [
    {skill: 'JavaScript', learned: true},
    {skill: 'HTML/CSS', learned: true},
    {skill: 'Node.js', learned: false},
    {skill: 'Express.js', learned: false},
]
module.exports = {
    getAll,
    getOne
}
function getAll(){
    return skills;
}
function getOne(id){
    return skills[id];
}
