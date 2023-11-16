
// 1 Punktas

var legalAge = "20"
var clientAge = prompt("Įveskite savo amžių ⬇️");
console.log(clientAge)

if(clientAge >= legalAge) {
    console.log("Žmogus pasiekė legalAge");
    alert('Sveikiname! Jūs esate pilnametis.')
}
else {
    console.log("Dar nepsiekė legalAge");
    alert('Atsiprašome, jūs dar turite palaukti keletą metų.')
}

// 2 Punktas

var vardas = prompt("Įveskite savo vardą ⬇️");

if(vardas.length >= 6) {
    console.log(vardas + "Ilgesnis nei 6 raidės");
    alert("Ilgas vardas")
}
else {
    console.log(vardas + " Trumpas vardas");
}

// 3 Punktas

var age = prompt("Įveskite prašom savo amžių");

if(age > 100 || age < 0) {
    alert("Ivalid age");
    console.log(age + " Ivalid age");
} 
else if(1 <= age && age <= 18) {11
    alert("Child");
    console.log(age + " Child");
}
else if (19 <= age && age <= 99) {
    alert ("Adult");
    console.log(age + " Adult");
}

// 4 punktas

var car = prompt("Įveskite automobilio ženklą: ");

if (car === "VW" || car === "Audi" || car === "Bentley" || car === "Bugatti" || car === "Lamborghini" || car === "Porsche") {
    alert('Priklauso VW Group');  
    console.log(car + ' VW Group'); }

else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {  
    alert('Priklauso BMW Group');   
    console.log(car + ' BMW Group'); }

else {
    alert('Nepriklauso niekam')
    console.log(car + ' Nepriklauso niekam');
}




