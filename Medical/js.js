let users = [
    {
        username: 'Gohar',
        pass:  '1234',
    },
    {
        username: 'Gagik',
        pass:  '4321',
    },

];

 
let hivandutyunner =[
    {   name: 'Diabet',
        simpton:[ 'weakness', 'body tremor'],
        medication:[ 'insulin', ' noshpa'],

    },
    {   name: 'Grip',
        simpton:[ 'fever', 'cough'],
        medication:[ 'antigripin', 'paracetamol'],
    }

]

 let login =+prompt('Mutq der username')
 let password =+prompt('Mutq der password')


    function Mutq(){
    	for ( i = 0; i < users.length; i++) {
    		if (users[i].username === login && users[i].pass === password ) {
    			alert (`Barev ${users[i].username}`)
    		}
    	}
    }

    Mutq();
    let gtnel =+prompt('greq der simptonner@');
        for ( i = 0; i < hivandutyunner.length; i++) {
        	if (gtnel === hivandutyunner[i].simpton ) {
        		alert(`Duq hivand eq ${hivandutyunner[i].simpton} . der bujumna ${hivandutyunner[i].medication}`)

        	}
        }