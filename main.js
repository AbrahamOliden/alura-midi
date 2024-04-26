const keyList = document.querySelectorAll('.tecla');

let index = 0;

while (index < 9) {
    const button = keyList[index];
    const sound = button.classList[1];

    button.onclick = () => {
        playSound(`#sonido_${sound}`);
    };
    index++;
};

function playSound(id) {
    document.querySelector(id).play();
};