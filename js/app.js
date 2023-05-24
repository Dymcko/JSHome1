
let firstName = "Mykola";
let lastName = "Dymchyshyn";
let user = firstName + lastName;
console.log(user)

let height = "5"
let width = "3"
let S = height*width
console.log(S)

let a=10
let b=6
console.log(Math.pow(a,b))

console.log(Math.floor(Math.random()*50))

let number = -2
if (number < 0) {
    console.log('negative value')
} else  {
    console.log('positive value')
}

let text = "äbra-cadabra";
let symbol = text[text.length -2];
console.log(symbol);


let mounth = 15;

switch(mounth) {
    case 1:
        console.log("January");
        break;
    case 2: 
        console.log("February");
        break;   
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;   
    case 5:
        console.log("May");
        break;     
    case 6:
        console.log("June");
        break;
    case 7: 
        console.log("July");
        break;   
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;   
    case 10:
        console.log("October");
        break;  
    case 11:
        console.log("November");
        break;    
    case 12:
        console.log("December");
        break;
    default :
        console.log("that mounth was not discovered yet");           
}
let password = "fullHouse";
if (password.length > 5 ) {
    if (password.indexOf ("&") ) {
        console.log("this password is strong");
    }
}else {
    console.log("this password is weak");
}

let q = 3;
let w = 2;
if (typeof q == "number" && typeof w == "number") {
    console.log( q+w );
}else {
    console.log("summ of this items can not be counted");
}

let textOne = "asdfg"
let textTwoo = "asdfgrvsd"
if ( typeof textOne == "string" && typeof textTwoo == "string" 
    && textOne.length >= textTwoo.length ) {
        console.log ("those items are strings and they equal");
    }else {
        console.log("items are not compareble");
    }