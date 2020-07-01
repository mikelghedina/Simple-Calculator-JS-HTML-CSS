//nums
document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);
//ops
document.getElementById("s").addEventListener("click",o1);
document.getElementById("r").addEventListener("click",o2);
document.getElementById("m").addEventListener("click",o3);
document.getElementById("d").addEventListener("click",o4);
document.getElementById("showresult").addEventListener("click",showResult);


//numbers
function n1(){
    let current_value = document.getElementById('resultado').innerHTML;
    let sum = document.getElementById("n1").innerHTML;
    document.getElementById('resultado').innerHTML = current_value + sum;
}
function n2(){
    let current_value = document.getElementById('resultado').innerHTML;
    let sum = document.getElementById("n2").innerHTML;
    document.getElementById('resultado').innerHTML = current_value + sum;
}
function n3(){
    let current_value = document.getElementById('resultado').innerHTML;
    let sum = document.getElementById("n3").innerHTML;
    document.getElementById('resultado').innerHTML = current_value + sum;
}
function n4(){
    let current_value = document.getElementById('resultado').innerHTML;
    let sum = document.getElementById("n4").innerHTML;
    document.getElementById('resultado').innerHTML = current_value + sum;
}
function n5(){
    let current_value = document.getElementById('resultado').innerHTML;
    let sum = document.getElementById("n5").innerHTML;
    document.getElementById('resultado').innerHTML = current_value + sum;
}
function n6(){
    let current_value = document.getElementById('resultado').innerHTML;
    let sum = document.getElementById("n6").innerHTML;
    document.getElementById('resultado').innerHTML = current_value + sum;
}
function n7(){
    let current_value = document.getElementById('resultado').innerHTML;
    let sum = document.getElementById("n7").innerHTML;
    document.getElementById('resultado').innerHTML = current_value + sum;
}
function n8(){
    let current_value = document.getElementById('resultado').innerHTML;
    let sum = document.getElementById("n8").innerHTML;
    document.getElementById('resultado').innerHTML = current_value + sum;
}
function n9(){
    let current_value = document.getElementById('resultado').innerHTML;
    let sum = document.getElementById("n9").innerHTML;
    document.getElementById('resultado').innerHTML = current_value + sum;
}
function n0(){
    let current_value = document.getElementById('resultado').innerHTML;
    let sum = document.getElementById("n0").innerHTML;
    document.getElementById('resultado').innerHTML = current_value + sum;
}

//operations
function o1(){
    let current_value = document.getElementById('resultado').innerHTML;
    let sum = document.getElementById("s").innerHTML;
    document.getElementById('resultado').innerHTML = current_value + sum;
}
function o2(){
    let current_value = document.getElementById('resultado').innerHTML;
    let sum = document.getElementById("r").innerHTML;
    document.getElementById('resultado').innerHTML = current_value +sum;
}
function o3(){
    let current_value = document.getElementById('resultado').innerHTML;
    let sum = document.getElementById("m").innerHTML;
    document.getElementById('resultado').innerHTML = current_value + sum ;
}
function o4(){
    let current_value = document.getElementById('resultado').innerHTML;
    let sum = document.getElementById("d").innerHTML;
    document.getElementById('resultado').innerHTML = current_value + sum ;
}


function showResult(){
    let current_value = document.getElementById('resultado').innerHTML;
    let suma = current_value.indexOf("+");
    let resta = current_value.indexOf("-");
    let mult = current_value.indexOf("*");
    let div = current_value.indexOf("/");
    if(suma !== -1){
        arr = current_value.split("+", 2);
        res = parseInt(arr[0]) + parseInt(arr[1]);
        document.getElementById("resultado").innerHTML = res;
    }else if (resta !== -1){
        arr = current_value.split("-", 2);
        res = arr[0] - arr[1];
        document.getElementById("resultado").innerHTML = res;
    }else if (mult !== -1){
        arr = current_value.split("*", 2);
        res = arr[0] * arr[1];
        document.getElementById("resultado").innerHTML = res;
    }else if (div !== -1){
        arr = current_value.split("/", 2);
        res = arr[0] / arr[1];
        document.getElementById("resultado").innerHTML = res;
    }

}