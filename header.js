
/*pgae display mode functionality*/ 
const currentMode = localStorage.getItem('display_mode');
if(currentMode ==='dark_mode'){
    document.body.classList.add('dark_mode')
}



const darkMode_btn = document.querySelector('.dark_mode--btn');
darkMode_btn.addEventListener('click',(e)=>{
    console.log('clicked')
    document.body.classList.toggle('dark_mode');
    if( document.body.classList.contains('dark_mode')){
        localStorage.setItem('display_mode','dark_mode')
        console.log('it is dark mode')
        darkMode_btn.textContent= ' 🌞Light Mode ';
    }
    else{
        localStorage.setItem('display_mode','light_mode')

        console.log('it is Light mode')

                darkMode_btn.textContent=' 🌙 Dark Mode ';

    }
});s