const MHT = document.getElementById("montantHT");
const MTVA = document.getElementById("montantTVA");
const MTTC = document.getElementById("montantTTC");
const TVA = document.getElementById("tauxTVA");

const INPUT = document.querySelectorAll("input");
const TYPE = document.querySelectorAll('input[type=tel]');
console.log(TYPE)



function cleanValue(valueToFormat) {
    return valueToFormat.replace(" €", "");
}

for (let i = 0; i < TYPE.length; i++) {
    TYPE[i].addEventListener("keyup", function () {
        let valeur = TYPE[i].value;
        valeur = cleanValue(valeur)
        console.log((valeur));
    })

}


