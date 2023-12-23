let court = document.querySelector('div');

const grid = function (scale) {

    for(let i = 0; i < scale; i++) {
        const gsqr = document.createElement('div');
        gsqr.className = 'grid-item'

        gsqr.addEventListener('mouseover', () => {
            gsqr.style.cssText = 'background-color: white'
        });

        for(let j = 0; j < scale-1; j++) {
            const gsqr2 = document.createElement('div');
            gsqr2.className ='grid-bro';

            gsqr2.addEventListener('mouseover', () => {
                gsqr2.style.cssText = 'background-color: white'
            });

            gsqr.appendChild(gsqr2);
        };
        court.appendChild(gsqr);
    };
};

grid(16);

const reset = document.querySelector('button');

reset.addEventListener('click', () => {
    while(court.firstChild) {
        court.removeChild(court.firstChild);
    };

    let input = window.prompt();
    let num = parseInt(input);

    grid(num);

});