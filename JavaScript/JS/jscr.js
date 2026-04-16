  /*//crear variable
        let mivar = "adios";
        //crear constante
        const numero = 5;
        mivar = "hola";
        //numero = 10; error, no se puede reasignar un valor a una constante
        console.log("El valor de mivar es",mivar);
        //otra forma console.log("El valor de mivar es" + mivar);
        //otra: console.log(`nuevo valor de var es ${mivar}`);
        //se ve en consola
        //crear array
        const item = ["pedro", 2, false];
        item.push("otro"); //valido
        //crear objetos
        const alumno = {nombre: "ana", edad: 65, jubilado: true};
        //recorrer array
        for(let i=0; i<item.length;i++){
            console.log("item : " , item[i]);
        }
        //otra forma   
        item.forEach(   (itemactual) => { console.log("itemactual ", itemactual)}   );

        //funciones
        function saludar(mensaje){
            console.log("saludos: ", mensaje);
            return;
        }
        saludar("holi holi");

        function suma(op1, op2){
            console.log("suma: ", op1 + op2);
            return (op1 + op2);
        }
        suma(2, 3);
        */

        const mititulo=document.querySelector("#titulo");
        mititulo.textContent = "nuevo titulo";