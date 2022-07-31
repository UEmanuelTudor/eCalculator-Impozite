window.onload = function() {
    function calculateAmount() {
        // stocarea datelor 
        var venitp = document.getElementById("venitp").value;   // preluam valoarea introdusa pentru venitul din pensii
        var cota = 0.1;
        //validarea
        if (venitp === "" || cota === "") {
            window.alert("Te rog sa introduci o valoare !");   // impunem clientului sa introduca o valoare pentru a putea calcula
            return;
        }
     

        if (venitp > 2000) {                         // modul de calcul pentru un venit din pensii>2000 lei
            var vi = venitp - 2000;
         
        } else {                                    // modul de calcul pentru un venit din pensii<2000 lei
            var vi = 0;
        
        }
        var i = cota * vi;
        var fAmount = vi;
        var fAmountt = i;
        var s = venitp - i;
        var fAmounttt = s;

        // afisare
        document.getElementById("totalinterest2").style.display = "block";
        document.getElementById("sumaa").innerHTML = fAmountt.toFixed(2);
        document.getElementById("totalinterest3").style.display = "block";
        document.getElementById("sumaaa").innerHTML = fAmounttt.toFixed(2);

    }
    //hide amound and returns
    document.getElementById("totalinterest").style.display = "none";
    //on clicking button action
    document.getElementById("calculate").onclick = function() {
        calculateAmount();
    };
    //hide amound and returns
    document.getElementById("totalinterest2").style.display = "none";
    //on clicking button action
    document.getElementById("calculate").onclick = function() {
        calculateAmount();
    };
}


