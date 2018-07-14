const myMenu = doc.querySelector('.menu');

function drawMenu(){
    const ul = doc.createElement('ul');
    myMenu.appendChild(ul);
    for (let i=0;i<menuOptions.length;i++){
        const li = doc.createElement('li');
        li.className = 'menu'+i;
        li.innerHTML = menuOptions[i];      
        li.addEventListener('click', showPartialPlan); 
        ul.appendChild(li);  
    }
    const partials = doc.querySelector('li:last-child');
    partials.addEventListener('click', showMenuParts);   
    ul.style.display = 'none';
}

function drawMenuParts(){
    const partials = doc.querySelector('ul li:last-child');
    partials.className = 'partials';
    const ul = doc.createElement('ul');
    ul.style.display = 'none';
    partials.appendChild(ul);
    for (let i=0;i<parts.length;i++){
        const li = doc.createElement('li');
        li.className = 'menuParts'+i;
        li.innerHTML = parts[i];
        li.addEventListener('click', showOnePart);
        ul.appendChild(li);
    }
}

function showMenuParts(){
    let ul = doc.querySelector('.partials ul');
    ul.style.display = 'block' ;
}

function hiddenMenuParts(){
    let ul = doc.querySelector('.partials ul');
    if(ul.style.display == 'block') ul.style.display = 'none';
}
