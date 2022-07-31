var value_checkbox = 0;
var checkbox = function (obj) {
    window.value_checkbox = obj.value;
    return true;
}

var value_scutit = 0;
var scutit = function (obj) {
    window.value_scutit = obj.value;
    return true;
}

document.getElementById("sbrut").style.display = 'block'
var inputVal = document.getElementById("sbrut").value;

document.getElementById("sindicat").style.display = 'block'
var inputVal = document.getElementById("sindicat").value;

document.getElementById("pensie_facultativa").style.display = 'block'
var inputVal = document.getElementById("pensie_facultativa").value;



function calculate_vehicule() {


    var cs = 0;
    var cpf = 0;
    var nrpers = 0;

    var sbrut = document.getElementById("sbrut").value;
    var cs = document.getElementById("sindicat").value;
    var cpf = document.getElementById("pensie_facultativa").value;
    var nrpers = document.getElementById("nrpers").value;
    var cass = 0;
    var contorlinie = 0;
    var imp = 0;
    var fara = 0;


    if (value_checkbox == '1') {
        if (sbrut >= 3600) {
            dp = 0;
        } else {
            if (sbrut < 1950) {
                contorlinie = 0;
            } else {
                contorlinie = (sbrut - 1950) / 50;
            }
            if (Math.round(contorlinie) < contorlinie) {
                fara = 510 - 15 * (Math.round(contorlinie) + 1);
            } else {
                fara = 510 - 15 * (Math.round(contorlinie));
            }

            if (nrpers > 3) {
                dp = fara + 160 * 5;
            } else dp = fara + 160 * nrpers;

        }
        if (value_scutit == '1') {
            imp = 0;
        } else imp = 0.065 * sbrut - 0.1 * dp - 0.1 * cs - 0.1 * cpf;
        var sn = 0.585 * sbrut - 0.9 * cs - 0.9 * cpf + 0.1 * dp - imp;

    } else if (value_checkbox == '2') {
        var dp = 0;
        if (value_scutit == '1') {
            imp = 0;
        } else imp = 0.065 * sbrut - 0.1 * cs - 0.1 * cpf;
        var sn = 0.585 * sbrut - 0.9 * cs - 0.9 * cpf;
    }
    var cas = 0.25 * sbrut;
    var cass = 0.1 * sbrut;

    document.getElementById("Rezultat_sbrut").innerHTML = Math.round(sbrut);
    document.getElementById("Rezultat_cas").innerHTML = Math.round(cas);
    document.getElementById("Rezultat_cass").innerHTML = Math.round(cass);
    document.getElementById("Rezultat_dp").innerHTML = Math.round(dp);
    document.getElementById("Rezultat_i").innerHTML = Math.round(imp);
    document.getElementById("Rezultat_sn").innerHTML = Math.round(sn);
    document.getElementById("Test").innerHTML = fara;
}
