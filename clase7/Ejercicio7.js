let numUno;
let numDos;
let numTres;

function Calcular(){
    numUno = Number(document.getElementById('NumUno').value);
    numDos = Number(document.getElementById('NumDos').value);
    numTres = Number(document.getElementById('NumTres').value);
    numMayor(numUno,numDos,numTres);

}


function numMayor(num1,num2,num3){
    if(num1>num2){
        if(num1>num3){
            alert('El número mayor es ' +num1 ); 
        }
        else{
            alert('El número mayor es ' +num3 );
        }
    }
    else{
        if(num2>num3){
            alert('El número mayor es ' +num2 );
        }
        else{
            alert('El número mayor es ' +num3 );
        }
    }
}
