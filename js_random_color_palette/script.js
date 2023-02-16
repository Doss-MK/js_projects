const colorPaletteCards = document.querySelector('.color-palette');
const refreshColorCards = document.querySelector('.refresh-color-palette');

const handleCopyHexCode = (event, randomHexCode) => {
    const cardFooter = event.querySelector('.card-footer');
    
    navigator.clipboard.writeText(randomHexCode).then(() => {
        cardFooter.innerText = "Copied";
        setTimeout(() => {
            cardFooter.innerText = `${randomHexCode}`;
        }, 1000);
    }).catch(() => {
        console.log('sorry, error has occured');
    });
};

const generateColorPalette = () => {
    colorPaletteCards.innerHTML = "";

    for (let i of Array(6).keys()) {
        const randomNumber = Math.floor(Math.random() * 0xffffff).toString(16);
        const randomHexCode = `#${randomNumber.padStart(6, '0')}`;

        colorPaletteCards.innerHTML += `
            <div class="col-2">
                <div class="card" onclick="handleCopyHexCode(this, '${randomHexCode}');">
                    <div class="card-body p-5" style="background: ${randomHexCode}"></div> 
                    <div class="card-footer text-center font-weight">${randomHexCode}</div>
                </div>
            </div>
        `;
    }
};

refreshColorCards.addEventListener('click', () => {
    generateColorPalette();
});

window.addEventListener('DOMContentLoaded', () => {
    generateColorPalette();
});