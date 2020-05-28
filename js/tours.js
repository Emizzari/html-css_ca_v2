const tourContainer = document.querySelector(".main__section--tours");


let html = "";

tours.forEach(function(tour){

    html +=`
        <!-- Tour ${tour.id} -->
        <section class="main__section--${tour.id}">
            <img class="" src="${tour.image}" alt="${tour.name}">
            <div class="">
                <h2 class="">${tour.name}</h2>
                <ul class="">
                    <li><span class="bold">Prices:</span> ${tour.prices}</li>
                    <li><span class="bold">Difficulty:</span> ${tour.difficulty}</li>
                    <li><span class="bold">Time:</span> ${tour.time}</li>
                </ul>
                <p class="">${tour.details}</p>  
            </div>
            <iframe class="" src="${tour.map}"  frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </section>
    `;
});

tourContainer.innerHTML = html;