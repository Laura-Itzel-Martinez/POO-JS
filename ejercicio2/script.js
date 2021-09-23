class palabraPalíndromo{
    palabra="";
    obtenerPalabra(){
        this.palabra=prompt("ingresa la palabra ");
    }
    imprimirPalabra(){
        console.log("cadena ingresado : " + this.palabra); 
    }
    operacionPalabra(){
        if(this.palabra == this.palabra){
            console.log("No es una palabra polindromo" + " = " + " Falso");
        }else if (this.palabra== "a" ){
            console.log("Es palindromo" + " = " + " true ");

        }
    }
    ejecutarMetodos(){
        //llamar a los metodos
        this.obtenerPalabra();
        this.imprimirPalabra();
        this.operacionPalabra();
       
    }
    
}
let miObjecto = new palabraPalíndromo();
miObjecto.ejecutarMetodos();