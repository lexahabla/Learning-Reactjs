import React from "react";
import PropTypes from "prop-types"; //Demos importar para que funcione

export default function Propiedades(props){
    return(
    <div>
        <h2>Propiedades</h2>
        <h2>{props.porDefecto}</h2>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.numero2}</li>
            <li>{props.booleano ? "Verdadero" : "falso"}</li>
            <li>{props.booleano2 ? "Verdadero" : "falso"}</li>
            <li>{props.array.join(", ")}</li>
            <li>{props.objeto.nombre +" - "+ props.objeto.email}</li>
            <li>{props.array.map(props.funcion).join(", ")}</li>
            <li>{props.elementoReact}</li>
            <li>{props.componenteoReact}</li>
        </ul>
    </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: "Las Props",
};

// Podemos definir que ciertos valores se inicilizen con un tipo de dato esapecial o que sean 
// requeridos. Para ello hay que importar un modulo que se llama prop-types
// para instalar :   npm i -s prop-types

// //una vez instlado el modulo podemos definir un atributo llamado prop-types, y en el definir las 
// diferentes caractiristicas que necesitamos que soporten nuestras propiedades 
// Podemos encontrar la documentacion en https://www.npmjs.com/package/prop-types

Propiedades.propTypes = {
numero2:PropTypes.number.isRequired,
};
