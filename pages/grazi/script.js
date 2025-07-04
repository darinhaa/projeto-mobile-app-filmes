

            // Selecionar todos os cards
            const cards = document.querySelectorAll('.card');

            // Adicionar evento de clique em cada card
            cards.forEach(card => {
                card.addEventListener('click', () => {
                    // Alternar a classe 'selected' quando o card for clicado
                    card.classList.toggle('selected');
                });
            });


