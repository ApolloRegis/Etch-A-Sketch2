const container = document.querySelector('div');

let num = 16;

for(i = 0; i < num; i++) {
    const box = document.createElement('div');
    box.style.cssText = "width: 100px; height: 100px; background-color: blue;";
    box.textContent = 'div';
    container.appendChild(box);
};