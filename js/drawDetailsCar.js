const details_car = doc.querySelector('.details_car');
let carDetailsImg = doc.createElement('img'), myLink;

function drawDetailsCar(){
    details_car.innerHTML = '';
    myLink = 'images/cars/'+choice_id+'/standart++.jpg';
    carDetailsImg.className = 'carDetailsImg';
    carDetailsImg.setAttribute('src', myLink);
    details_car.appendChild(carDetailsImg); 
    const detail = 'menu3';
    drawPartsOfPartialPlan(detail);
    // drawPartsOfPartialPlan(detail);
    // const partsOfPartialPlan = doc.createElement('div');
    // partsOfPartialPlan.className = 'partsOfPartialPlan row'; 
    // for(let i=0;i<partsStandartTwoPlusPlan.length;i++){
    //     let onePartOfPartialPlan = doc.createElement('div');
    //     onePartOfPartialPlan.className = 'onePartOfPartialPlan';
    //     let imgPartOfPartialPlan = doc.createElement('img');
    //     imgPartOfPartialPlan.className = 'imgPartOfPartialPlan';
    //     imgPartOfPartialPlan.setAttribute('src', 'images/detail/'+partsStandartTwoPlusPlan[i].image);
    //     let textPartOfPartialPlan = doc.createElement('p');
    //     textPartOfPartialPlan.className = 'textPartOfPartialPlan';
    //     textPartOfPartialPlan.innerHTML = partsStandartTwoPlusPlan[i].text;

    //     onePartOfPartialPlan.appendChild(imgPartOfPartialPlan);
    //     onePartOfPartialPlan.appendChild(textPartOfPartialPlan);
    //     partsOfPartialPlan.appendChild(onePartOfPartialPlan);
    //     details_car.appendChild(partsOfPartialPlan);
    // }
  
}

function showPartialPlan(){
    details_car.innerHTML = '';
    
    let detail = this.className;
    switch (detail) {
        case 'menu0':
        myLink = 'images/cars/'+choice_id+'/min.jpg';
            break;
        case 'menu1':
        myLink = 'images/cars/'+choice_id+'/standart.jpg';
          break;
        case 'menu2':
        myLink = 'images/cars/'+choice_id+'/standart+.jpg';
          break;
        case 'menu3':
        myLink = 'images/cars/'+choice_id+'/standart++.jpg';
          break;
        case 'menu4':
        myLink = 'images/cars/'+choice_id+'/standart+++.jpg';
          break;
        case 'menu5':
        myLink = 'images/cars/'+choice_id+'/full.jpg';
          break;
    }

    carDetailsImg.setAttribute('src', myLink);
    details_car.appendChild(carDetailsImg);
    drawPartsOfPartialPlan(detail);
    hiddenMenuParts();
}

function drawPartsOfPartialPlan(detail){
    const partsOfPartialPlan = doc.createElement('div');
    partsOfPartialPlan.className = 'partsOfPartialPlan row';
    let partialPlan = [];
    switch (detail) {
        case 'menu0':
        partialPlan = partsMiniPlan;
            break;
        case 'menu1':
        partialPlan = partsStandartPlan;
            break;
        case 'menu2':
        partialPlan = partsStandartPlusPlan;
            break;
        case 'menu3':
        partialPlan = partsStandartTwoPlusPlan;
            break;
        case 'menu4':
        partialPlan = partsStandartThreePlusPlan;
            break;
    }    
    for(let i=0;i<partialPlan.length;i++){
        let onePartOfPartialPlan = doc.createElement('div');
        onePartOfPartialPlan.className = 'onePartOfPartialPlan';
        let imgPartOfPartialPlan = doc.createElement('img');
        imgPartOfPartialPlan.className = 'imgPartOfPartialPlan';
        imgPartOfPartialPlan.setAttribute('src', 'images/detail/'+partialPlan[i].image);
        let textPartOfPartialPlan = doc.createElement('p');
        textPartOfPartialPlan.className = 'textPartOfPartialPlan';
        textPartOfPartialPlan.innerHTML = partialPlan[i].text;

        onePartOfPartialPlan.appendChild(imgPartOfPartialPlan);
        onePartOfPartialPlan.appendChild(textPartOfPartialPlan);
        partsOfPartialPlan.appendChild(onePartOfPartialPlan);
        details_car.appendChild(partsOfPartialPlan);
    }
        drawPrice();
}

function showOnePart(){
    details_car.innerHTML = '';
    
    let detail = this.className;
    switch (detail) {
        case 'menuParts0':
        myLink = 'images/cars/'+choice_id+'/optic.jpg';
            break;
        case 'menuParts1':
        myLink = 'images/cars/'+choice_id+'/rapids-in.jpg';
          break;
        case 'menuParts2':
        myLink = 'images/cars/'+choice_id+'/rapids-out.jpg';
          break;
        case 'menuParts3':
        myLink = 'images/cars/'+choice_id+'/doors.jpg';
          break;
        case 'menuParts4':
        myLink = 'images/cars/'+choice_id+'/back-wing.jpg';
          break;
        case 'menuParts5':
        myLink = 'images/cars/'+choice_id+'/hood.jpg';
          break;
        case 'menuParts6':
        myLink = 'images/cars/'+choice_id+'/front-bamp.jpg';
          break;
        case 'menuParts7':
        myLink = 'images/cars/'+choice_id+'/back-bamp.jpg';
          break;
      }
    carDetailsImg.setAttribute('src', myLink);
    details_car.appendChild(carDetailsImg);
    drawPrice();
}

function drawPrice(){
    const content = doc.createElement('div');
    content.className = 'price row';
    const div = doc.createElement('div');
    const button = doc.createElement('button');
    button.className = 'btn btn_black';
    button.innerHTML = 'ПЕРЕЗВОНИТЕ МНЕ';
    const span1 = doc.createElement('span');
    span1.innerHTML = 'Цена:';
    div.appendChild(span1);
    const hr = doc.createElement('hr');
    div.appendChild(hr);
    const divIn = doc.createElement('div');
    divIn.className = 'price_down row';
    divIn.innerHTML = 'Материалы + работа';
    const span2 = doc.createElement('span');
    span2.innerHTML = '7000 руб.';
    divIn.appendChild(span2);
    div.appendChild(divIn);

    content.appendChild(div);
    content.appendChild(button);
    details_car.appendChild(content);}