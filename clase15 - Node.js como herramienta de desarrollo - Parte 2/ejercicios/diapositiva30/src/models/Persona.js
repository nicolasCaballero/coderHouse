"use strict";
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    ;
    Persona.prototype.getFullName = function () {
        return this.nombre + " " + this.apellido;
    };
    return Persona;
}());
;
exports["default"] = Persona;
