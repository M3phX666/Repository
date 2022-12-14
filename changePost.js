function changePost(pageNumber) {
    let posts = document.getElementById("postContainer");
    let allPageItemsNumber = document.getElementsByClassName("page-item").length;
    if (pageNumber == -2) {
        if (saveNumber >= 2) {
            pageNumber = saveNumber - 1;
        }
    }
    if (pageNumber == -1) {
        if (saveNumber < allPageItemsNumber - 1) {
            console.log(allPageItemsNumber);
            pageNumber = saveNumber + 1;
        }
    }
    switch (pageNumber) {
        case 1: {
            saveNumber = 1;
            posts.innerHTML = `<div class="blog-post pl-1">
            <img src="images/Bosnia.jpg" alt="" class="rounded float-right w-50 ml-4 mb-4" id="img">
            <h4 class="blog-post-title">Bosnia Road Trip</h4>
            <p class="blog-post-date">Feb 9, 2020 <a href="#">Harry Callum</a></p>
            <p>Itinerary for Bosnia-Herzegovina [10 Days] in the Balkans</p>
            <hr>
            <h5>How awesome is Bosnia-Herzegovina</h5>
            <p>How awesome is Bosnia-Herzegovina – There are epic waterfalls, stunning clear rivers and
                charming little towns.
                When considering a country in eastern Europe for a road trip, Bosnia & Herzegovina should be
                one of the first countries on your mind. This idyllic country often gets overshadowed by its
                neighbour, Croatia. Don’t get me wrong, Croatia is a magnificent country in itself but
                Bosnia & Herzegovina is just something else. <br>Nature-lovers will be astounded by the
                abundance of natural marvels that are hidden within Bosnia & Herzegovina. It is a surprise
                that it is often less travelled than its neighbours, but that also means that it is
                typically less crowded. This also means that you will be able to travel around without
                seeing the full effects that tourism has on the society. You can expect genuine,
                unforgettable experiences.

                Even though this post has a recommended itinerary for a road trip in Bosnia-Herzegovina, we
                recommend not making concrete plans but having a rough idea where you want to start and end.
                Enter Bosnia, go find a river and drive along it.</p>
        </div>
        <div class="blog-post mt-5 pl-1">
            <img src="images/pulaCroatia.jpg" alt="" class="rounded float-right w-50 ml-4 mb-4" id="img">
            <h4 class="blog-post-title">Things to do in Pula, Croatia</h4>
            <p class="blog-post-date">Nov 14, 2019 <a href="#">Anna Bernard</a></p>
            <p>Things to do in Pula, Croatia: Travel Guide for the Gem of Istria</p>
            <hr>
            <h5>Where is Pula</h5>
            <img src="images/pula.PNG" alt="" class="rounded float-right w-50 ml-4 mb-4" id="img">
            <p>Best places in Pula, Croatia:</p>
            <ul>
                <li>Pula Beaches</li>
                <li>Ambrela Beach</li>
                <li>Stoja Beach</li>
            </ul>
            <p>If you are planning to visit multiple places in the country, then Pula is the best place to
                start your Croatia itinerary. Istria is the westernmost county in Croatia which makes it an
                ideal place to begin your escapades around this mesmerizing country.</p>
            <h5>?How to Reach Pula</h5>
            <p>It is simple to reach Pula by many different ways. We arrived here on bus from Slunj town
                but below are all the other ways to enter Pula:</p>
        </div>`
        }
            break;
        case 2: {
            saveNumber = 2;
            posts.innerHTML = `
            <div class="blog-post pl-1">
                        <img src="images/post1Picture.jpg" alt="" class="rounded float-right w-50 ml-4 mb-4" id="img">
                        <h4 class="blog-post-title">Mokra Gora</h4>
                        <p class="blog-post-date">Jan 2, 2019 <a href="#">Paula Middleton</a></p>
                        <p>Small mountains, old school train journey and a wooden village – this is Mokra Gora in
                            Western Serbia.</p>
                        <hr>
                        <p>In a mood for a digital detox, we searched for a scenic destination in the middle of nowhere
                            when we found Mokra Gora. We knew we had found a special place when Google maps completely
                            threw us off. Oh and we had to use the Translate app to communicate with the locals. It was
                            exactly the kind of escape we wanted after Belgrade’s busy vibe.</p>
                        <h5>Mokra Gora Travel Guide</h5>
                        <p>Mokra Gora’s Narnia like landscape totally won our hearts.

                            There were little green hills, fairy tale-ish wooden cottages, simple village life and a
                            vibe that was still unaffected by tourism. Using simple hand gestures to communicate with
                            the locals somehow made our experience even more special.</p>
                        <h6>How to Reach Mokra Gora from Belgrade</h6>
                        <p>The nearest big towns near Mokra Gora are Zlatibor and Užice. We arrived here on a rented
                            card from Belgrade. The journey on the road takes around 3 – 4 hours but we spent 9 hours to
                            reach. It was because of a traffic jam that was caused due to the road repair work.</p>
                            <h6>Things to do in Mokra Gora, Serbia</h6>
                            <ul>
                                <li>Mokra Gora Train – Šargan Eight steam train</li>
                                <li>Drvengrad Bamboo Village [Küstendorf]</li>
                                <li>Tara National Park</li>
                            </ul>
                    </div>
                    <div class="blog-post mt-5 pl-1">
                        <img src="images/camera.jpg" alt="" class="rounded float-right w-50 ml-4 mb-4" id="img">
                        <h4 class="blog-post-title">The Ultimate Turkey Itinerary 10 Days</h4>
                        <p class="blog-post-date">Aug 14, 2019 <a href="#">Clare Stokes</a></p>
                        <p>Is it Asia or Europe? Turkey is both – the best of two continents in just one country.

                            At first it may appear that Turkey mostly suits cultural travelers. After all, it sits on
                            the cusp of both Europe and Asia, it’s no wonder that the Turkish heritage is a fascinating
                            fusion of various cultures. By finely balancing age-old traditions with modern influences,
                            Turkey promises travelers an unforgettable experience.</p>
                        <hr>
                        <h6>The ultimate 10 day Turkey itinerary for first timers</h6>
                        <p>Here’s the thing – Turkey is an amazing destination for literally every kind of traveler.
                            Adventure seekers, backpackers, families, fantasy landscape chasers, pilgrims and party
                            travelers – they all will love Turkey for same as well as different reasons.</p>
                        <p>I’m not much of a cultural traveler but I’m always in search of fantastic landscapes. I
                            traveled to Turkey mainly because I had seen photos of Cappadocia‘s surreal structures that
                            looked something like a fantasy movie. Moreover, I really wanted to sit in Pamukkale‘s blue
                            and white natural pools.</p>
                        <p>Yes, I did everything that I wanted to do, and even more. Believe it or not, I fell in love
                            with the culture in Turkey despite claiming not to be a cultural traveler. </p>
                    </div>`;
        }
            break;
        case 3: {
            saveNumber = 3;
            posts.innerHTML = `                    <div class="blog-post pl-1">
            <img src="images/amsterdam.jpg" alt="" class="rounded float-right w-50 ml-4 mb-4" id="img">
            <h4 class="blog-post-title">The Ultimate Amsterdam Nightlife Guide</h4>
            <p class="blog-post-date">Nov 19, 2019 <a href="#">Brian Hunter</a></p>
            <p>Best Nightclubs + Tips</p>
            <hr>
            <h5>Best Amsterdam Nightclubs </h5>
            <h6>Bars in Amsterdam Central (including Leidseplein)</h6>
            <p>And it is time for the legendary Amsterdam Center! Everyone knows that this famous city
                center offers a one of a kind night out. Europe’s nightlife capital has a lot of options
                when it comes to nightclubs, venues, and bars. </p>
            <h6>Cafe de Dokter</h6>
            <p>Want to time travel and enter history? Visit Cafe de Dokter. This isn’t a dance club but a
                vintage bar that has been in business since 1798. It is in Amsterdam Centraal near Rokin
                station. It is a gem in Amsterdam’s busy area which many say is the best bar in the world.
            </p>
            <h6>Club Hartje (Bar ‘t Hartje)</h6>
            <p>
                Club Hartje is a popular party spot in Leidseplein. The drinks are cheap, the atmosphere is
                insane and you will not just find tourists but also plenty of locals.

                Ever tried a body shot? Try one here because Club Hartje is famous for its body shots. There
                is also a VIP area. The entry is free everyday, even on Fridays and Saturdays.
            </p>
            <h6>Amsterdam West (Oud-West)</h6>
            <p>
                Being known as the most diverse part of the city, the West offers a nice time for every
                taste. With its busy shops, fine dining, cool pubs, and cozy cafes, this district is always
                fun, whether it is day or night.

                If you are looking for an epic night out, Oud-West is a great spot to start the party. When
                the night hits, there’s nothing more exciting than wandering around the streets of Amsterdam
                West and finding the best nightclub! Here are some of the best nightclubs of the West
                district!
            </p>
        </div>
        <div class="blog-post mt-5 pl-1">
            <img src="images/netherlands.jpg" alt="" class="rounded float-right w-50 ml-4 mb-4" id="img">
            <h4 class="blog-post-title">Netherlands</h4>
            <p class="blog-post-date">Nov 14, 2019 <a href="#">Peter Lawton</a></p>
            <p>Top Places to visit</p>
            <hr>
            <h5>Itinerary + Travel Guide</h5>
            <p>What’s the first image that comes to your mind when someone mentions the Netherlands? I bet
                it’s the colorful tulips, spectacular windmills, delicious waffles, loads of bicycles, gouda
                cheese, or the narrow canals. Yes, the Netherlands has all of that but also a lot more.</p>
            <ul>
                <li>If you’re visiting this amazing country, then don’t just spend all of your time in
                    Amsterdam. Here are the top places to visit in the Netherlands, check them out. </li>
                <li>The most famous destination in the Netherlands is Amsterdam – but you know that already.
                    It is a part of every single itinerary for the Netherlands. But hey, don’t miss out on
                    all the other amazing things to do in the Netherlands just because of Amsterdam.</li>
                <li>Geographically flat, the Netherlands is the perfect place to bicycle. This amazing
                    country has some of the most bicycle friendly places in the world. Maybe because of
                    this, the Dutch are extremely fit and sporty. In a way, the Dutch are like the
                    Australians of Europe. They’re awesome! Make sure you talk to a few locals and get to
                    know them when you visit the Netherlands.</li>
            </ul>
            </div>`
        }
            break;
        case 4: {
            saveNumber = 4;
            posts.innerHTML = `<div class="blog-post pl-1">
            <img src="images/campervan.jpg" alt="" class="rounded float-right w-50 ml-4 mb-4" id="img">
            <h4 class="blog-post-title">Traveling Europe by Campervan</h4>
            <p class="blog-post-date">Dec 6, 2019 <a href="#">Jennifer Fisher</a></p>
            <p>Our Tips for “Van Life Europe”.</p>
            <hr>
            <p>It has almost been a year that San and I bought a campervan. In this time, we have driven
                around Europe in our van from east to west and covered many countries. We have driven in 11
                different countries on our campervan, that includes three national parks, mountains, beaches
                as well as two music festivals. </p>
            <p>With very little knowledge at the start of our first trip, we made a few rookie mistakes.
                Nothing serious but we laughed a lot at our stupidity and eventually learned how to explore
                Europe in our campervan like pros. A lot of information that we needed about traveling
                Europe in a campervan wasn’t really available online because most of the website focused on
                living in a van, versus traveling in one. </p>
            <p>Anyway, before we share our essential tips for exploring Europe by camper van, we’d like to
                discuss a few things to help you decide if van-life is really for you, and if it is – then
                what kind of van you really need.</p>
        </div>`;
        }
            break;
    }
}