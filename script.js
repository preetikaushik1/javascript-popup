
let clickButton = document.querySelector('.button')
   
clickButton.addEventListener('click', function(){

    document.querySelector('.popup').style.display = 'flex'
})



let closeButton = document.querySelector('.button-close')


closeButton.addEventListener('click', function(){

    document.querySelector('.popup').style.display = 'none'
})
