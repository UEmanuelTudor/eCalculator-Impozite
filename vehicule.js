var idbtn = 0;
var transform = function(obj) {
    var id = obj.value;
    window.idbtn = obj.value;
    return true;
}
var idcheckbox = 0;
var checkbox = function(obj) {
    window.idcheckbox = obj.value;
    return true;
}
document.getElementById("cc").style.display = 'block'
var inputVal = document.getElementById("cc").value;  // preluam valoarea introdusa pentru capacitatea cilindrica
function calculate_vehicule() {
    var cc = document.getElementById("cc").value;
    var nrfractiuni = Math.round(cc / 200);
    var imp = 0;
    if (cc === "" || idbtn === "") {
        window.alert("Alege toate optiunile !");   // impunem clientului sa introduca o valoare pentru a putea calcula
        return;
    }
    if (idbtn == '1') {
        if (cc <= 1600) {
            imp = 8 * nrfractiuni;
        } else {
            imp = 9 * nrfractiuni;
        }                                    // modul de calcul pentru diferite valori in functie de categoria de vehicule aleasa 
    } else if (idbtn == '2') {
        if (cc < 1601) {
            imp = 8 * nrfractiuni;
        } else if (cc > 1600 && cc < 2001) {
            imp = 18 * nrfractiuni;
        } else if (cc > 2000 && cc < 2601) {
            imp = 72 * nrfractiuni;
        } else if (cc > 2601 && cc < 3000) {
            imp = 144 * nrfractiuni;
        } else imp = 290 * nrfractiuni;
    } else if (idbtn == '3') {
        imp = 24 * nrfractiuni;
    } else if (idbtn == '4') {
        imp = 30 * nrfractiuni;
    } else if (idbtn == '5') {
        imp = 18 * nrfractiuni;
    }
    document.getElementById("Rezultat").innerHTML = Math.round(imp);     // afisarea impozitului anual
    var imp2 = imp / 2;
    document.getElementById("Rezultatt").innerHTML = Math.round(imp2);   // afisarea ratelor egale
    document.getElementById("Rezultattt").innerHTML = Math.round(imp2);
}