const cards_container = document.querySelector('.cards_container');

fetch('./topics.json').then(res =>res.json())
.then(data =>{
    data.forEach(topic => {
            cards_container.insertAdjacentHTML('afterbegin',`<div class="card">
                    <img src="assets/logos/${topic.image}"/>
                    <div class="content">
                        <div class="card_details">
                            <p>${topic.category}</p>
                            <h3>${topic.topic}</h3>
                        </div>
                        <div>⭐⭐⭐⭐</div>
                        <p>Authour: ${topic.name}</p>
                    </div>
        </div>`)
   
      //details page directing on click
      const card = cards_container.querySelector('.card');
      card.addEventListener('click',(e)=>{
          console.log('clicking')
  
      window.location.href=`details.html?id=${topic.id}`;
   
    });

 
})
})



