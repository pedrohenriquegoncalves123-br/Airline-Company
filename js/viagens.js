document.addEventListener('DOMContentLoaded', () => {
    const checkboxTodos = document.getElementById('todos');
    const checkboxInter = document.getElementById('inter');
    const checkboxDomestico = document.getElementById('domestico');

    const cards = document.querySelectorAll('.card-evento');

    const menuCards = document.querySelectorAll(".menu-cards");

    function filtrarCards(tipoSelecionado) {
        if (tipoSelecionado === 'todos') {
            checkboxTodos.classList.add('ativo')
            checkboxInter.checked = false;
            checkboxDomestico.checked = false;
        } else if (tipoSelecionado === 'inter') {
            checkboxInter.classList.add('ativo')
            checkboxTodos.checked = false;
            checkboxDomestico.checked = false;
        } else if (tipoSelecionado === 'domestico') {
            checkboxTodos.checked = false;
            checkboxInter.checked = false;
            checkboxDomestico.classList.add('ativo');
        }

        cards.forEach(card => {
            if (tipoSelecionado === 'todos') {
                card.style.display = 'flex';
            } else if (tipoSelecionado === 'inter' && card.classList.contains('cardInter')) {
                card.style.display = 'flex';
            } else if (tipoSelecionado === 'domestico' && card.classList.contains('cardDomestico')) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }


    checkboxTodos.addEventListener('change', () => {
        if (checkboxTodos.checked) filtrarCards('todos');
    });

    checkboxInter.addEventListener('change', () => {
        if (checkboxInter.checked) filtrarCards('inter');
    });

    checkboxDomestico.addEventListener('change', () => {
        if (checkboxDomestico.checked) filtrarCards('domestico');
    });

    // Inicializa a página mostrando todos
    checkboxTodos.checked = true;
    filtrarCards('todos');
});