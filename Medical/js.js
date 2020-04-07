let users = [
    {
        username: 'Gohar',
        pass:  '1234',
    },
    {
        username: 'Arman',
        pass:  '4321',
    },

];

let pacient = [

    {      
       name: 'Gohar',
       disease: 'Diabet',
    },

    {      
       name: 'Arman',
       disease: 'Grip',
    },  

]
 
let disease =[
    {   name: 'Gohar',
        simpton:[ 'weakness', 'body tremor'],
        medication:[ 'insulin', ' noshpa'],

    },
    {   name: 'Arman',
        simpton:[ 'fever', 'cough'],
        medication:[ 'antigripin', 'paracetamol'],
    }

]
let logi = +prompt('Enter your username');
let pas  = +prompt('Enter your pass')
let sym

function enter(users){
    for (i = 0; i <users.length; i++) {
        if(users[i].username === logi && users[i].pass === pas){
           alert( 'Hi ${logi[i].name}' );}
           sym =+prompt('enter your simptons');
           for ( i = 0; i < disease.length; i++) {
               if (sym===disease[i].simpton) {
                alert('you have ${disease[i]}.name.${disease[i]}.medication ');

               
           }
        }
        }
}
