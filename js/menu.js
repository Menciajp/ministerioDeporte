document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('boton-menu').addEventListener('click', function () {
        var menu = document.getElementById('menu');
        var scrollbar = document.documentElement.style;
        // Cambiar el estilo de la barra de desplazamiento al abrir el menú
        scrollbar.overflowY = 'hidden'; // Oculta la barra de desplazamiento vertical
        if (menu.style.right === '0px') {
            menu.style.right = '-200px';
            document.documentElement.style.opacity = '0';
            setTimeout(() => { scrollbar.overflowY = ''; }, 300);
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
            document.documentElement.style.opacity = '1';
            setTimeout(() => { 
                document.documentElement.style.overflowY = 'auto'; // Restablece después de la animación
            }, 300);
        }
    });
});