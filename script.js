let vrijeme = 60;
let refres;
let rezultat = 0;

window.onload = function() {
    sakrijSve();
};

function sakrijSve(){
    for(let i = 1; i<=9; i++ ) {
        document.getElementById("grid"+i).style.visibility="hidden";
    }
}

function ispisi(){
    if(vrijeme==0){
        sakrijSve();
        clearInterval(refres);
    }

    if(vrijeme==10){
        document.getElementById("vrijeme").id = "crvenoDugme";
        document.getElementById("crvenoDugme").innerHTML="00:"+vrijeme;
    }

    if(vrijeme<=10){
        document.getElementById("crvenoDugme").innerHTML="00:"+vrijeme;
    } else {
        document.getElementById("vrijeme").innerHTML="00:"+vrijeme;
    }

    //document.getElementById("vrijeme").innerHTML="00:"+vrijeme;
    document.getElementById("rezultat").innerHTML=rezultat;
    vrijeme--;
}

function dajRandom() {
    return Math.floor((Math.random() * 9) + 1);
}

function pocetak(x){
    x.style.visibility="hidden";
    vrijeme = 60;
    refres = setInterval(ispisi, 1000);
    dajBroj();
}

function myFunction() {
    dajBroj();
    rezultat++;
}

function dajBroj(){
    let randomBroj = dajRandom();
    document.getElementById("grid"+randomBroj).style.visibility="visible";
    for(let i = 1; i<=9; i++ ) {
        if(i!=randomBroj)
        document.getElementById("grid"+i).style.visibility="hidden";
    }
}





