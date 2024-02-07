document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('boton-menu').addEventListener('click', function () {
        var menu = document.getElementById('menu');
        if (menu.style.right === '0px') {
            menu.style.right = '-200px';
        } else {
            menu.style.right = '0px';
        }
    });

    document.addEventListener('click', function (event) {
        var menu = document.getElementById('menu');
        var botonMenu = document.getElementById('boton-menu');
        var target = event.target;

        if (!menu.contains(target) && target !== botonMenu) {
            menu.style.right = '-200px';
        }
    });
});