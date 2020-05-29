const tourContainer = document.querySelector(".main__section--tours");


let html = "";

tours.forEach(function(tour){

    html +=`
        <!-- Tour ${tour.id} -->
        <section class="main__section--tour__section">
            <img class="main__section--tour__section__img" src="${tour.image}" alt="${tour.name}">
            <div class="main__section--tour__section__block">
                <h2 class="main__section--tour__section__block__h2">${tour.name}</h2>
                <ul class="main__section--tour__section__block__list">
                    <li><span class="bold">Price:</span> ${tour.price}</li>
                    <li><span class="bold">Difficulty:</span> ${tour.difficulty}</li>
                    <li><span class="bold">Time:</span> ${tour.time}</li>
                </ul>
                <p class="main__section--tour__section__block__p">${tour.details}</p>  
            </div>
            <iframe class="main__section--tour__section__iframe" src="${tour.map}"  frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </section>
    `;
});

tourContainer.innerHTML = html;