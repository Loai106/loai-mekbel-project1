const favourite_btn = document.querySelector('.favourites--btn');
const favourites_section =document.querySelector('.fav-section');
const close_btn = document.querySelector('.close--btn')


favourite_btn.addEventListener('click',(e)=>{

    console.log(' fav clicked')
    favourites_section.classList.toggle('hidden');

})


close_btn.addEventListener('click',(e)=>{
    console.log('closing fav section');
    favourites_section.classList.add('hidden');
})