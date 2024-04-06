function calculateIMC(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    if(weight!==""&&height!==""){
        var bmi=weight/((height/100)**2);
        var result=document.getElementById("result");
        result.innerHTML="Tu IMC es: "+bmi.toFixed(2);
        if(bmi<18.5){
            result.innerHTML+=" (Bajo peso)";
        }
        else if(bmi<24.9){
            result.innerHTML+=" (Peso normal)";
        }
        else if(bmi<29.9){
            result.innerHTML+=" (Sobrepeso)";
        }
        else if(bmi<34.9){
            result.innerHTML+=" (Obesidad tipo 1)";
        }     
        else if(bmi<39.9){
            result.innerHTML+=" (Obesidad tipo 2)";
        }
        else{
            result.innerHTML+=" (Obesidad tipo 3)";
        }
    }
    else{
        alert("Introduce tu peso y altura");
    }
}