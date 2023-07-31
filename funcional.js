let isLampOn = false;
const lamp = document.getElementById('lamp');

function toggleLamp() {
    isLampOn = !isLampOn;
    if (isLampOn) {
        lamp.style.backgroundColor = '#FFD700'; // Lâmpada acesa (cor dourada)
        lamp.style.boxShadow = '0 0 20px 5px #FFD700';
    } else {
        lamp.style.backgroundColor = '#ccc'; // Lâmpada apagada (cor cinza)
        lamp.style.boxShadow = 'inset 0 10px 20px rgba(0, 0, 0, 0.2)';
    }
}
