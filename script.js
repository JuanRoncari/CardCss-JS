const card = document.querySelectorAll('.js-card img');
console.log(card);

function handleClick(event){
    card.forEach((img) =>{
        img.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
};

card.forEach((index) =>{
    index.addEventListener('mouseover',handleClick);
});


