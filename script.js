(function(){

    "use strict";

    const convertidor = document.querySelector("form");
    const contenedor = document.querySelector("#contenedor_resultado");
    
    convertidor.addEventListener("submit", function(e) {
    
        e.preventDefault();
        const numero = parseFloat(document.querySelector("#numero").value);
    
        if (numero) {
            const respuesta = document.createElement("p"); // Párrafo para especificar respuesta con color
            respuesta.textContent = `${numero} millas son `; // 1era parte del texto de respuesta
            const resultado = document.createElement("span"); // 2da parte del texto de respuesta
            resultado.textContent =`${convert(numero)} km.`;
            resultado.className = "correctColor"; //Aplicar color al la 2da parte del texto de respuesta
            respuesta.appendChild(resultado);
            contenedor.children[0].remove();
            contenedor.appendChild(respuesta);
        } else if (numero == 0) {
            const error = document.createElement("span");
            error.className = "errorColor";
            error.textContent = `0 millas son 0 kilómetros.`;
            contenedor.children[0].remove();
            contenedor.appendChild(error);
        } else {
            const error = document.createElement("span");
            error.className = "errorColor";
            error.textContent = `Error. Debes ingresar números.`;
            contenedor.children[0].remove();
            contenedor.appendChild(error);
        };

    });
    
    function convert(millas) {
        return (millas * 1.609344).toFixed(2);
    }

})();