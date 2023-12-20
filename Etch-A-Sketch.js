const container = document.querySelector('div');
const box = document.createElement('span');
container.appendChild(box);

for(let i = 0; i < 16; i++) {
    const rsquares = document.createElement('div');
    //rsquares.textContent = 'div';
    rsquares.style.cssText = 'background-color: white';

    rsquares.addEventListener('mouseover', () => {
        rsquares.style.cssText = 'background-color: black';
    });

    for(let j = 0; j < 15; j++) {
        const csquares = document.createElement('div');
        //csquares.textContent = 'div';
        csquares.style.cssText = 'background-color: white';

        csquares.addEventListener('mouseover', () => {
            csquares.style.cssText = 'background-color: black';
        });

        rsquares.appendChild(csquares);
    };
    container.appendChild(rsquares);
};

