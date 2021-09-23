
class Siglos{
    año=0;
    obtenerAño(){
        this.año=prompt("ingresa el año");
    }
    imprimirAño(){
        console.log("año ingresado " + this.año); 
    }
    operacion(){
        if (this.año<101 ) {
            console.log("Siglo encontrado " + this.año + " = " + 1 );
        
        } else if (this.año<201 ) {
            console.log("Siglo encontrado del año  " + this.año + " = " + 2 );

        }else if(this.año<301 ){
            console.log("Siglo encontrado del año  " + this.año + " = " + 3 );

        }
        else if(this.año<401){
            console.log("Siglo encontrado del año  " + this.año + " = " + 4 );

        }
        else if(this.año< 501){
            console.log("Siglo encontrado del año  " + this.año + " = " + 5 );

        }
        else if(this.año<601){
            console.log("Siglo encontrado del año  " + this.año + " = " + 6 );

        }
        else if(this.año<701){
            console.log("Siglo encontrado del año  " + this.año + " = " + 7 );

        }
        else if(this.año<801){
            console.log("Siglo encontrado del año  " + this.año + " = " + 8 );

        }
        else if(this.año<901){
            console.log("Siglo encontrado del año  " + this.año + " = " + 9 );

        }
        else if(this.año<1001){
            console.log("Siglo encontrado del año  " + this.año + " = " + 10 );

        }
        else if(this.año<1101){
            console.log("Siglo encontrado del año  " + this.año + " = " + 11 );

        }
        else if(this.año<1201){
            console.log("Siglo encontrado del año  " + this.año + " = " + 12 );

        }
        else if(this.año<1301){
            console.log("Siglo encontrado del año  " + this.año + " = " + 13 );

        }
        else if(this.año<1401 ){
            console.log("Siglo encontrado del año  " + this.año + " = " + 14 );

        }
        else if(this.año<1501){
            console.log("Siglo encontrado del año  " + this.año + " = " + 15 );

        }
        else if(this.año<1601){
            console.log("Siglo encontrado del año  " + this.año + " = " + 16 );

        }
        else if(this.año<1701){
            console.log("Siglo encontrado del año  " + this.año + " = " + 17 );

        }
        else if(this.año<1801){
            console.log("Siglo encontrado del año  " + this.año + " = " + 18 );

        }
        else if(this.año<1901){
            console.log("Siglo encontrado del año  " + this.año + " = " + 19 );

        }
        else if(this.año<=2000){
            console.log("Siglo encontrado del año  " + this.año + " = " + 20 );

        }
        else if(this.año>=2001 && this.año<2006){
            console.log("Siglo encontrado del año  " + this.año + " = " + 21 );
        }
    }
    ejecutarMetodos(){
        //llamar a los metodos
        this.obtenerAño();
        this.imprimirAño();
        this.operacion();
       
    }
    
}
let miObjecto = new Siglos();
miObjecto.ejecutarMetodos();