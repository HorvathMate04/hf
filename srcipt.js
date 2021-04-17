document.getElementById("cimsor").innerHTML="Gyakorló feladat. Matematikai műveletek:"
function csere(){
    for (i = 0; i < document.getElementsByClassName("1").length; i++){
       document.getElementsByClassName("1")[i].src='piros1.png'
    }
    for (i = 0; i < document.getElementsByClassName("0").length; i++){
        document.getElementsByClassName("0")[i].src='kek0.png'
     }
     for (i = 0; i < document.getElementsByClassName("5").length; i++){
        document.getElementsByClassName("5")[i].src='szurke5.png'
     }
     document.getElementById("szöv").innerHTML="Eredmény=100"
}
function visszacsere(){
    for (i = 0; i < document.getElementsByClassName("1").length; i++){
       document.getElementsByClassName("1")[i].src='piros.png'
    }
    for (i = 0; i < document.getElementsByClassName("0").length; i++){
        document.getElementsByClassName("0")[i].src='kek.png'
     }
     for (i = 0; i < document.getElementsByClassName("5").length; i++){
        document.getElementsByClassName("5")[i].src='szurke.png'
     }
     document.getElementById("szöv").innerHTML="Eredmény="
}