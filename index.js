$(document).ready(function(){
    
    // Filtrando productos
    $('.category_item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        // Ocultando Productos
        $('.proyect').css('transform','scale(0)');
        function hideProduct(){
            $('.proyect').hide();
        } setTimeout(hideProduct,400);

        // Mostrando Productos
        function showProduct(){
            $('.proyect[category="'+catProduct+'"]').css('transform','scale(1)');
            $('.proyect[category="'+catProduct+'"]').show();
        } setTimeout(showProduct,400);

    });
    // Mostrando todos los productos
    $('.category_item[category="all"]').click(function(){
        function showAll(){
            $('.proyect').show();
            $('.proyect').css('transform','scale(1)');
        } setTimeout(showAll,400);

    });
    
    
    // Selecciona todos los elementos con la clase 'proyect'
    const proyectos = document.querySelectorAll('.proyect');

    // Oculta todos excepto los últimos 6
    const totalProyectos = proyectos.length;
        if (totalProyectos > 6) {
            for (let i = 0; i < totalProyectos - 6; i++) {
                proyectos[i].style.display = 'none';
            }
        }
});