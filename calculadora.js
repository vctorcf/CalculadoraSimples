function nan(){
    let  n1 = parseFloat(document.getElementById("input1").value);
    let  n2 = parseFloat(document.getElementById("input2").value);
    if (isNaN(n1)||isNaN(n2)){
        return true;
}}

function somar(){
    let  n1 = parseFloat(document.getElementById("input1").value);
    let  n2 = parseFloat(document.getElementById("input2").value);
    if (nan()==true){
        return alert("Por favor, digite um número!");;
    } else {
    let soma = n1+n2;
    return alert(soma);
    }
}

function subtrair(){
    let  n1 = parseFloat(document.getElementById("input1").value);
    let  n2 = parseFloat(document.getElementById("input2").value);
    if (nan()==true){
        return alert("Por favor, digite um número!");;
    } else {
    let subtracao = n1-n2;
    return alert(subtracao);
    }
}

function multiplicar(){
    let  n1 = parseFloat(document.getElementById("input1").value);
    let  n2 = parseFloat(document.getElementById("input2").value);
    if (nan()==true){
        return alert("Por favor, digite um número!");;
    } else {
    let multiplicacao = n1*n2;
    return alert(multiplicacao);
    }
}

function dividir(){
    let  n1 = parseFloat(document.getElementById("input1").value);
    let  n2 = parseFloat(document.getElementById("input2").value);
    if (nan()==true){
        return alert("Por favor, digite um número!");;
    } else if (n2==0){
        return alert("Não se pode dividir por zero!");
    } else {
        let divisao = n1/n2;
        return alert(divisao);
    }
}

function parOuImpar(){
    let  n1 = parseFloat(document.getElementById("input1").value);
    let  n2 = parseFloat(document.getElementById("input2").value);
    if (nan()==true){
        return alert("Por favor, digite um número!");;
    } else if (n1%2==0 && n2%2==0){
        return alert(`${n1} e ${n2} são pares`);
    } else if (n1%2!=0 && n2%2==0) {
        return alert(`${n1} é impar e ${n2} é par`);
    } else if (n1%2==0 && n2%2!=0){
        return alert(`${n1} é par e ${n2} é impar`);
    } else if (n1%2!=0 && n2%2!=0){
        return alert(`${n1} e ${n2} são impares`);
    }
} 
