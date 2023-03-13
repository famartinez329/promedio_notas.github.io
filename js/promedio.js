function promediofinal() {
    

    let suma=0
    for(i=0;i<4;i++){
        let numero =parseInt(prompt("ingrese sus notas"))
        suma=suma+numero
        let promedio =parseFloat(suma)/4;
        

        if (promedio < 3.1){
        document.getElementById("final").innerHTML = `su promedio es ${promedio} lo siento compa perdio `
        }

        else if (promedio > 3.0){
        document.getElementById("final").innerHTML = `su promedio es ${promedio} felicidades compa paso `
        }

        

    }
    document.write(promedio)    


}
