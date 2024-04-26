const keyList = document.querySelectorAll('.tecla');

for (const button of keyList) {
    const sound = button.classList[1];

    button.onclick = () => {
        playSound(`#sonido_${sound}`);
    };
};

function playSound(id) {
    document.querySelector(id).play();
    console.log(id);
};