const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    const rgbColor = generateRGBColor();
    
    document.body.style.background = rgbColor;
    color.textContent = rgbColor;
});

function getRandomColor() {
    return Math.floor(Math.random() * 256); // Retorna um valor entre 0 e 255
}

function generateRGBColor() {
    const red = getRandomColor();
    const green = getRandomColor();
    const blue = getRandomColor();
    
    return `rgb(${red}, ${green}, ${blue})`;
}
