// O jogo é iniciado quando o documento é carregado no navegador, através da função $(document).ready().
$(document).ready(function () {
    // O jogo consiste em um número fixo de pares de cartas (8, no caso), cada par contendo duas cartas idênticas. Os pares de cartas são gerados aleatoriamente e distribuídos na tela.
    const numPairs = 8;
    const pairs = [];
    for (let i = 1; i <= numPairs; i++) {
        pairs.push(i);
        pairs.push(i);
    }
    shuffleArray(pairs);

    const cards = $('.card');
    // Quando o usuário clica em uma carta, a imagem correspondente é revelada.
    cards.on('click', cardClick);
    // Se o usuário selecionar duas cartas que formam um par, as cartas ficam desabilitadas e permanecem visíveis.
    cards.children('.card-img-top').addClass('hidden');
    // O jogo tem um contador de tempo de 60 segundos. Se o tempo acabar antes do usuário encontrar todos os pares, o jogo termina e uma mensagem de "Tempo Esgotado!" é exibida.
    let timeLeft = 60;
    $('.timer').text(`Tempo Restante: ${timeLeft}s`);

    const timerId = setInterval(function () {
        timeLeft--;
        $('.timer').text(`Tempo Restante: ${timeLeft}s`);
        if (timeLeft === 0) {
            clearInterval(timerId);
            cards.off('click');
            $('.message').text('Tempo Esgotado! Tente Novamente.');
        }
    }, 1000);

    function cardClick() {
        const card = $(this);
        if (card.hasClass('selected') || card.hasClass('disabled')) {
            return;
        }
        card.children('.card-img-top').removeClass('hidden');
        card.addClass('selected');
        if ($('.selected').length === 2) {
            const card1 = $('.selected:eq(0)');
            const card2 = $('.selected:eq(1)');
            if (card1.children('.card-img-top').attr('src') === card2.children('.card-img-top').attr('src')) {
                card1.addClass('disabled');
                card2.addClass('disabled');
                card1.removeClass('selected');
                card2.removeClass('selected');
                if ($('.disabled').length === cards.length) {
                    clearInterval(timerId);
                    cards.off('click');
                    // Se o usuário encontrar todos os pares antes do tempo acabar, o jogo termina e uma mensagem de "Parabéns! Você Ganhou!" é exibida.
                    $('.message').text('Parabéns! Você Ganhou!');
                }
            } else {
                setTimeout(function () {
                    card1.children('.card-img-top').addClass('hidden');
                    card2.children('.card-img-top').addClass('hidden');
                    card1.removeClass('selected');
                    card2.removeClass('selected');
                }, 1000);
            }
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

});