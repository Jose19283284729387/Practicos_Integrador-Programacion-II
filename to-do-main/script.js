// Info date
const numeroFecha = document.getElementById('dateNumber');
const textoFecha = document.getElementById('dateText');
const mesFecha = document.getElementById('dateMonth');
const anioFecha = document.getElementById('dateYear');

// Tasks Container
const contenedorTareas = document.getElementById('tasksContainer');

const establecerFecha = () => {
    const fechaActual = new Date();
    numeroFecha.textContent = fechaActual.toLocaleString('es', { day: 'numeric' });
    textoFecha.textContent = fechaActual.toLocaleString('es', { weekday: 'long' });
    mesFecha.textContent = fechaActual.toLocaleString('es', { month: 'short' });
    anioFecha.textContent = fechaActual.toLocaleString('es', { year: 'numeric' });
};

const agregarNuevaTarea = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const tarea = document.createElement('div');
    tarea.classList.add('task', 'roundBorder');
    tarea.addEventListener('click', cambiarEstadoTarea)
    tarea.textContent = value;
    contenedorTareas.prepend(tarea);
    event.target.reset();
};

const cambiarEstadoTarea = event => {
    event.target.classList.toggle('done');
};

const ordenar = () => {
    const realizadas = [];
    const porHacer = [];
    contenedorTareas.childNodes.forEach( elemento => {
        elemento.classList.contains('done') ? realizadas.push(elemento) : porHacer.push(elemento)
    })
    return [...porHacer, ...realizadas];
}

const renderizarTareasOrdenadas = () => {
    ordenar().forEach(elemento => contenedorTareas.appendChild(elemento))
}

establecerFecha();