var fecha = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

document.getElementById('first-btn').innerHTML = fecha.toLocaleDateString("es-ES", options) + ' (hasta 16:00)'