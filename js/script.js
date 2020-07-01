let finalizar = false
let mi_arreglo = [];

while(!finalizar) {
    let num = prompt ('Ingrese su numero');

    if (!isNaN(parseInt(num))){
        mi_arreglo.push(num);
    
    } else{
        if(num == ''){
            finalizar = true;
            console.log(mi_arreglo);
            //Sacar promedio//
            let sum = mi_arreglo.reduce((previous, current)=> current += previous);
            let prom = sum / mi_arreglo.length;
            console.log('Su prmedio es:',prom);

            //Acomodar
            mi_arreglo.sort((a,b) => a- b);

            //Sacar el # menor
            let menor = Math.min.apply(null,mi_arreglo);
            console.log('Su numero menor es:', menor);

            //Sacar el # mayor
            let mayor = Math.max.apply(null, mi_arreglo);
            console.log('Su numero mayor es:',mayor);

            //Sacar la mediana
            let media1 = Math.floor((mi_arreglo.length - 1) / 2);
            let media2 = Math.ceil((mi_arreglo.length - 1) / 2);
            let media = (mi_arreglo[media1] + mi_arreglo[media2]) / 2;
            console.log('La mediana es:',media);

        }
    }
}