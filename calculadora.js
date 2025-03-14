function somar(){
    let  n1 = parseFloat(document.getElementById("input1").value);
    let  n2 = parseFloat(document.getElementById("input2").value);
    let soma = n1+n2;
    return alert(soma);
}

function subtrair(){
    let  n1 = parseFloat(document.getElementById("input1").value);
    let  n2 = parseFloat(document.getElementById("input2").value);
    let subtracao = n1-n2;
    return alert(subtracao);
}

function multiplicar(){
    let  n1 = parseFloat(document.getElementById("input1").value);
    let  n2 = parseFloat(document.getElementById("input2").value);
    let multiplicacao = n1*n2;
    return alert(multiplicacao);
}

function dividir(){
    let  n1 = parseFloat(document.getElementById("input1").value);
    let  n2 = parseFloat(document.getElementById("input2").value);
    if (n2==0){
        return alert("Não se pode dividir por zero!");
    } else {
        let divisao = n1/n2;
        return alert(divisao);
    }
}