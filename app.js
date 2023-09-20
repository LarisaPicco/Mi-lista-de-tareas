const input = document.getElementById('ingresarTarea')
const boton = document.querySelector('button')
const listaDeTareas = document.getElementById('listaDeTareas')

function agregarTarea (){

    if(input.value){
        /*Crear tarea */
        let tareaNueva = document.createElement('div')
        tareaNueva.classList.add('tarea');

        // Texto ingresado por el usuario
        let texto = document.createElement('p'); 
        texto.innerText = input.value;
        tareaNueva.appendChild(texto)

        //Crear y agregar contenedor de iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        //Iconos
       let completar = document.createElement('i');
       completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar') /*Se pueden agregar varias clases */
       completar.addEventListener('click', completarTarea) 

       let eliminar = document.createElement('i');
       eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
       eliminar.addEventListener('click', eliminarTarea);

       iconos.append(completar, eliminar);

       //Agregar tarea a la lista
       listaDeTareas.appendChild(tareaNueva)
     }  else{  //else en el caso en el que el valor value ingresado por el usuario esté vacío
        alert('Por favor ingresa una tarea'); //para alertar al usuario que ingrese una tarea

     }
}
//TRABAJO CON JERARQUIAS, EJ: PARENTNODE
function completarTarea(e){ //esta funcion tiene como parametro un objeto de evento e, 
                               //es decir, va a recibir un evento, porque vamos a 
                            //    asignarla como un eventListener para el boton completar
                        //este parentNode es el padre contenedor de los iconos, la tarea
    let tarea = e.target.parentNode.parentNode // target es una propiedad del evento 
                                    //este otro parentNode es el padre del padre contenedor de los iconos
    tarea.classList.toggle('completada')

}

function eliminarTarea(e){
  let tarea = e.target.parentNode.parentNode;
              //obtenemos el elemento e.target que es el elemento donde se hizo click, luego su 
              //padre parentNode que es el contenedor de los iconos, y luego el padre del padre,
              // el último parentNode que es la tarea
        tarea.remove(); //eliminará la tarea del DOM
     }

boton.addEventListener('click', agregarTarea);

//EVENTOS DESENCADENADOS POR EL TECLADO
input.addEventListener('keydown', (e) => 
{ if(e.key === 'Enter'){  //si la tecla presionada es Enter, 
    agregarTarea() //llama a la funcion agregarTarea();

}

})
                       //el evento se desencadena cuando el usuario presiona la tecla Enter