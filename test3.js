

var name = prompt('Введите имя');



function searchByName(name1)
{
    var names = [ {name: 'Jonny Walker', birthDate:'1995-12-17'},
    {name:'Andrew', birthDate:'2001-10-29'},
    {name:'Viktor', birthDate:'1998-11-09'},
    {name: 'Andrew', birthDate:'2002-10-02'}
]
    var finArr = names.filter(function(el){

        if(name1 == el.name){
            return true;
        }
        else {
            return false;
        }
    });
    return finArr;


}

var fin = [searchByName(name)];

console.log(searchByName(name));
console.log(name);