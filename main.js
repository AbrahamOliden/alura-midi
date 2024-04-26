const buttonList = document.querySelectorAll('.tecla');

for (const button of buttonList) {
    const sound = button.classList[1];

    button.onclick = () => {
        playSound(`#sonido_${sound}`);
    };

    button.onkeydown = (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            button.classList.add('activa');
        };
    };

    button.onkeyup = () => button.classList.remove('activa');
};

function playSound(id) {
    document.querySelector(id).play();
};