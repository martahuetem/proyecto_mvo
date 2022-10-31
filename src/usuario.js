class Usuario{
    /**
     * Esta clase contendrá toda la información del usuario. 
     * Se podraá identificar con el email.
     * Tendremos la lista de los ingredientes de los que dispone.
     * Tendremos el tiempo del que dispone.
     * Tendremos la lista de la colección de recetas que se adecuan a sus neceesidades.
     */

    /**
     * Constructor de la clase Usuario
     * @param {String} nombre
     * @param {String} email
     * @param {Array} ingredientes_disponibles
     * @param {int} tiempo_disponible
     * @param {Array} recetas_propuestas
     */

    constructor(nombre, email, ingredientes_disponibles, tiempo_disponible, recetas_propuestas){
        this.nombre = nombre;
        this.email = email
        this.ingredientes_disponibles = ingredientes_disponibles;
        this.tiempo_disponible = tiempo_disponible;
        this.recetas_propuestas = recetas_propuestas;
    }

    /**
     * Método para obtener el nombre del usuario
     * @returns {String}
     */
    getNombre(){
        return this.nombre;
    }

    /**
     * Método para obtener el nombre del usuario
     * @returns {String}
     */
     getEmail(){
        return this.email;
    }

    /**
     * Método para obtener los ingredientes disponibles
     * @returns {Array}
     */
     getIngredientesDisponibles(){
        return this.ingredientes_disponibles;
    }

    /**
     * Método para obtener el tiempo disponible
     * @returns {int}
     */
     getTiempoDisponible(){
        return this.tiempo_disponible;
    }

    /**
     * Método para obtener la lista de recetas propuestas
     * @returns {Array}
     */
     getRecetasPropuestas(){
        return this.recetas_propuestas;
    }
}

