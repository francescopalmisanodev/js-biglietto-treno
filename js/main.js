let km, age;
do{
    km = parseFloat(prompt("inserisci i km che vuoi percorrere:"));
}
while((km<=0) || (isNaN(km)))
do{
    age = parseInt(prompt("inserisci età:"));
}
while((age<=0) || (isNaN(age)))
let price = km*0.21
if (age<18) {
    price= price-(price/10 *2);
}
else if (age>65){
    price= price-(price/10 *4);
}
price= price.toFixed(2);
document.getElementById ("output").innerHTML=`il tuo biglietto costa: ${price}€`;
console.log(price);