const doc = document;
const cars = doc.querySelector('.choice_car');
let choice_id = '';

function drawCar(){
    for (let i=0;i<carsList.length;i++){
        const car = doc.createElement('div');
        car.className = 'car';
        cars.appendChild(car);
        const blackButton = doc.createElement('button');
        blackButton.className = 'btn btn_black';
        blackButton.innerHTML = carsList[i].class;
        car.appendChild(blackButton);
        const carImg = doc.createElement('img');
        carImg.className = 'carImg';
        carImg.setAttribute('src', carsList[i].image);
        car.appendChild(carImg);
        const redButton = doc.createElement('button');
        redButton.className = 'btn btn_red ';
        redButton.id = carsList[i].id;
        redButton.innerHTML = 'РАССЧИТАТЬ СТОИМОСТЬ';
        const triangle = doc.createElement('div');
        triangle.className = 'triangle '+carsList[i].id;
        car.appendChild(redButton);
        redButton.appendChild(triangle);

        redButton.addEventListener('click', showMenu);
    }
    drawMenu();
    drawMenuParts();
}

function showMenu(){
    let ul = doc.querySelector('ul');
    ul.style.display = 'block';
    choice_id = this.id;

    showTriangle();
    drawDetailsCar();
}

function showTriangle(){
    const triangle = doc.getElementsByClassName(choice_id);
    const allTriangles = doc.getElementsByClassName('triangle');
    for(let i=0;i<allTriangles.length;i++){
        allTriangles[i].style.display = 'none';
        
    }
    triangle[0].style.display = 'block';
}

window.onload = drawCar;