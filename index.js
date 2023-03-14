// Code your solution in this file!

//TODO: returnFirstTwoDrivers()
//Todo: return a new array, contains 1st two drivers from the passed-in array
function returnFirstTwoDrivers(arr){
    let newA = [arr[0], arr[1]]
    return newA;
}


//TODO: returnLastTwoDrivers()
//Todo: return array, last two drivers
function returnLastTwoDrivers(arr){
    let newA = [arr[arr.length -2], arr[arr.length -1]]
    return newA;
}


//TODO: selectingDrivers()
//Todo: has the `returnFirstTwoDrivers` function to as its first element
//Todo: has the `returnLastTwoDrivers` function to as its last element
//Todo: allows us to invoke either function from the array
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



//TODO: createFareMultiplier()
//Todo: returns a function
//Todo: should multiply a given value using the created multiplier
function createFareMultiplier(num){
    let product = num*num
    return function () {return product}
}


//TODO: fareDoubler()
//Todo: is a function
//Todo: doubles fares
function fareDoubler(num){
    const newVar = createFareMultiplier()
    return num*2
}


//TODO: fareTripler()
//Todo: is a function
//Todo: triples fares
function fareTripler(fare){
    return fare*3
}

//TODO: selectDifferentDrivers(arrayOfDrivers, function)
//Todo: returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//Todo: returns the last two drivers when passed returnLastTwoDrivers() as the second argument
function selectDifferentDrivers(arrayOfDrivers, fx){
    if (fx === returnFirstTwoDrivers){
        return fx(arrayOfDrivers);
    }
    else if(fx === returnLastTwoDrivers){
        return fx(arrayOfDrivers)
    }
}

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

let gdm = createFareMultiplier(5)
console.log(gdm)