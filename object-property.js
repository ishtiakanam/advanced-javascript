const students = [
    {id: 20, name : "Ishtiak anam"},
    {id: 30, name : "Kairul anam"},
    {id: 40,  name : "Ishraful anam"},
    {id: 50,  name : "Ashraful anam"}
    
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 30)
const bigger1 = students.find(s => s.id > 30)

console.log(bigger1);