// Função para detectar se o usuário está em um dispositivo móvel
function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
}

// Se o usuário for mobile, exibe a tela branca com a mensagem
if (isMobile()) {
    // Cria um elemento div para cobrir a tela
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'white';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '9999';
    overlay.style.color = 'black';
    overlay.style.fontSize = '24px';
    overlay.style.textAlign = 'center';

    // Cria um texto dentro do overlay
    var text = document.createElement('div');
    text.innerText = 'Essa versão não funciona para mobile :(';
    overlay.appendChild(text);

    // Adiciona o overlay ao corpo do documento
    document.body.appendChild(overlay);
}
