window.addEventListener('keydown', ({ key }) => {
    if (key === 'ArrowUp') {
        moveCarsUp();
    }
    if (key === 'ArrowLeft') {
        moveCarsLeft();
    }
    if (key === 'ArrowRight') {
        moveCarsRight();
    }
})


function moveCarsUp() {
    document.querySelectorAll('.car')
        .forEach(car => {
            const currentY = car.style.bottom || 0;
            car.style.bottom = parseInt(currentY) + 5 + 'px';
        })
}

function moveCarsLeft() {
    document.querySelectorAll('.car')
        .forEach(car => {
            const currentX = car.style.left || 0;
            car.style.left = parseInt(currentX) - 5 + 'px';
        })
}

function moveCarsRight() {
    document.querySelectorAll('.car')
        .forEach(car => {
            const currentX = car.style.left || 0;
            car.style.left = parseInt(currentX) + 5 + 'px';
        })
}

function renderCars() {
    [
        { x: 10, y: 10 },
        { x: 50, y: 50 },
        { x: 90, y: 90 },
        { x: 130, y: 130 },
    ].forEach(({ x, y }) => {
        const car = document.createElement('div');
        car.classList.add('car');
        car.style.cssText = `left: ${x}px; bottom: ${y}px;`

        document.querySelector('.street').appendChild(car);
    })
}

renderCars();