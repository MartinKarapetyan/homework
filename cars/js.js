const cars = [
    {
        model: 'MERCEDES BENZ',
        year: 2020,
        owner: 0,
        service: 1,
    },
    {
        model: 'BMW',
        year: 2015,
        owner: 1,
        service: 1,
    },
    {
        model: 'AUDI',
        year: 2001,
        owner: 0,
        service: 0,
    },
    {
        model: 'LEXUS',
        year: 2000,
        owner: 2,
        service: 0,
    }
]
const owner = [
    {
        name: 'Armen',
        index: 0,
    },
    {
        name: 'Narek',
        index: 1,
    },
    {
        name: 'Hayk',
        index: 2,
    }
]
const service = [
    {
        serviceName: 'Mec Aniv',
        index: 0,
    },
    {
        serviceName: 'Poqr Aniv',
        index: 1,
    },
];

//Գտնել քանի մեքենա է սպասարկվում ամեն սերվիսում


	//let carServices = service.map((item) => {     
	    // let carList = cars.filter((index) => {
	         return index.service === item.index;
	    // });
	     return carList;
	// });
	// console.log(carServices)

 //Գտնել Նարեկի բոլոր մեքենաները

	 //const narekCar = owner.find (function (elem) {
	 //  return elem.index == 1;

	 //  console.log(narekCar),

//Գտնել տաս տարեկանից մեծ մեքենաները

	//let carAge = cars.filter((item) => item.year > 2020 - item.year > 10);
	//console.log(carAge)
