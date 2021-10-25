function limpiar() {
    document.getElementById('miFormulario').reset();
}
function sumar() {
    var x = parseInt(document.getElementById('valor 1').value);
    var y = parseInt(document.getElementById('valor 2').value);

    alert(x+y);
}

function restar() {
    var x = parseInt(document.getElementById('valor 1').value);
    var y = parseInt(document.getElementById('valor 2').value);

    alert(x-y);
}

function multiplicar() {
    var x = parseInt(document.getElementById('valor 1').value);
    var y = parseInt(document.getElementById('valor 2').value);

    alert(x*y);
}

function dividir() {
    var x = parseInt(document.getElementById('valor 1').value);
    var y = parseInt(document.getElementById('valor 2').value);

    alert(x/y);
}