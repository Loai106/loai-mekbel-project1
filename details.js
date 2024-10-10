//geting the topic's id 
const url = new URLSearchParams(window.location.search);
const id = url.get('id');

console.log(id);


//fetching the topic data

fetch('./topics.json')
    .then(res=>res.json())
    .then(data=>{
        const topic = data.find(t=>t.id == id);

        console.log(topic);
        
        //creating the page with topic's data
        const htmlString = ` <div class="background">
            <div class="black-bg"></div>
        </div>
        <div class="main_container">

            <div class="container_details">
                <div class="details_header">
                    <p>${topic.category}</p>
                    <h3>${topic.topic}</h3>
                    <div>⭐⭐⭐⭐</div>

                </div>
                <p class="details_content">${topic.description}</p>

            </div>
            <div class="details_card">
                <img src="assets/logos/${topic.image}" />
                <p><strong>${topic.topic}</strong> by <a>${topic.name}</a></p>
                <div class="details_card--content">
                    <p>interested about this topic?</p>
                    <button>Add to Favourites ❤️</button>
                    <small>Unlimited Credits</small>
                </div>
            </div>
            <div class="list_container">
                <h3>${topic.topic} Sub Topics</h3>
                <ul class="list">
                
                </ul>

            </div>

        </div>`

        const main = document.querySelector('main')
        main.insertAdjacentHTML('afterbegin',htmlString);

        const ul = document.querySelector('.list');

        //adding each of topic's subtopic items into the list
        topic.subtopics.forEach(subTopic=>{
            const li = `
                    <li class="list-item"><span><svg xmlns="http://www.w3.org/2000/svg" class="ionicon"
                                viewBox="0 0 512 512" height="12" width="12">
                                <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                                    fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="32" d="M352 176L217.6 336 160 272" />
                            </svg></span>${subTopic}</li>`;

                  ul.insertAdjacentHTML("afterend",li);          
        });
});


//display mode handeler
const currentMode = localStorage.getItem('display_mode');
if(currentMode ==='dark_mode'){
    document.body.classList.add('dark_mode')
}


const darkMode_btn = document.querySelector('.dark_mode--btn');
darkMode_btn.addEventListener('click',(e)=>{
    console.log('clicked')
    document.body.classList.toggle('dark_mode');
    if( document.body.classList.contains('dark_mode')){
        localStorage.setItem('display_mode','dark_mode');
        console.log('it is dark mode')
        darkMode_btn.value(' 🌞Light Mode ');
    }
    else{
        localStorage.setItem('display_mode','light_mode')

        console.log('it is Light mode')

        darkMode_btn.value(' 🌙 Dark Mode ');

    }
});
