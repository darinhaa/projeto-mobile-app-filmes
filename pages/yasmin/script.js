
        // Variáveis globais
        let currentField = '';
        let selectedColor = '#FF9500';
        
        // Função para abrir modal genérico
        function openModal(title, field, placeholder) {
            currentField = field;
            document.getElementById('modal-header').textContent = title;
            document.getElementById('modal-input').placeholder = placeholder;
            document.getElementById('modal-input').value = document.getElementById(field + '-value').textContent;
            document.getElementById('editModal').style.display = 'flex';
        }
        
        // Função para fechar modal genérico
        function closeModal() {
            document.getElementById('editModal').style.display = 'none';
        }
        
        // Função para salvar alterações
        function saveChanges() {
            const newValue = document.getElementById('modal-input').value;
            if (newValue.trim() !== '') {
                document.getElementById(currentField + '-value').textContent = newValue;
                closeModal();
                
                // Atualiza o título da seção se for o nome
                if (currentField === 'name') {
                    document.querySelector('.section-title').textContent = newValue;
                }
            }
        }
        
        // Função para abrir modal de ícone
        function openIconModal() {
            document.getElementById('iconModal').style.display = 'flex';
        }
        
        // Função para fechar modal de ícone
        function closeIconModal() {
            document.getElementById('iconModal').style.display = 'none';
        }
        
        // Função para selecionar cor
        function selectColor(element, color) {
            // Remove a classe 'selected' de todas as opções
            document.querySelectorAll('.color-option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Adiciona a classe 'selected' à opção clicada
            element.classList.add('selected');
            selectedColor = color;
        }
        
        // Função para salvar ícone
        function saveIcon() {
            document.getElementById('icon-value').textContent = 'Personalizado';
            document.querySelector('.section-title').style.backgroundColor = selectedColor + '40'; // Adiciona transparência
            document.querySelector('.section-title').style.color = selectedColor;
            closeIconModal();
        }
        
        // API de cores laranja (simulada)
        function getOrangePalette() {
            return {
                primary: '#FF9500',
                light: '#FFB143',
                dark: '#E68600',
                pale: '#FFE8CC'
            };
        }
        
        // Inicializa a paleta de cores
        document.addEventListener('DOMContentLoaded', function() {
            const palette = getOrangePalette();
            console.log('Paleta de cores laranja carregada:', palette);
        });
    