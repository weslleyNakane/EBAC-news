//função para abrir o menu quando clicar usando jquery
$(document).ready(function () {
    $(".botao-menu button").click(function () {
        $(".menu").slideToggle();
    });

})