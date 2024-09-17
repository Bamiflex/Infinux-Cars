function changeContent(page) {
    var contentDiv = document.getElementById('content');
 
    switch (page) {
        case 'home':
            contentDiv.innerHTML = `
                <h2>Welcome to Infinity Cars!</h2>
                <p>We're your ultimate destination for all things automotive. 
                    Whether you're a car enthusiast or a first-time buyer, we provide you with the latest car reviews, industry news, and expert advice. 
                    Our mission is to help you make informed decisions and find the perfect vehicle to match your lifestyle. Explore our extensive collection of 
                    cars, discover the latest trends in automotive technology, and join our community of car lovers. At infinity cars, we're driven by a passion 
                    for cars and a commitment to excellence. Start your journey with us today!
                </p>
                <p>
                    Visit our main website
<a href="https://www.infiniti.com/" target="_blank">
                        here
                    </a>.
                </p>
                <div id="placeholder">                       
                        
                        <div class="image" style="background-image: url('../images/sp1.jpg')" alt="infiniti car 1";>
                        </div>
        
                        <div class="image" style="background-image: url('../images/sp2.jpg')" alt="infiniti car 2";>
                        </div>

                        <div class="image" style="background-image: url('../images/sp4.jpg')" alt="infiniti car 4";>
                        </div>

                        <div class="image" style="background-image: url('../images/sp5.jpg')" alt="infinti car 5";>
                        </div>
                        
                        <div class="image" style="background-image: url('../images/sp6.jpg')" alt="infinti car 6";>
                        </div>

                        <div class="image" style="background-image: url('../images/sp7.jpg')" alt="infinti car 7";>
                        </div>

                        <div class="image" style="background-image: url('../images/sp8.jpg')" alt="infinti car 8";>
                        </div>

                        <div class="image" style="background-image: url('../images/sp9.jpg')" alt="infinti car 9";>
                        </div>

                        <div class="image" style="background-image: url('../images/sp10.jpg')" alt="infinti car 10";>
                        </div>

                        <div class="image" style="background-image: url('../images/sp11.jpg')" alt="infinti car 11";>
                        </div>

                        <div class="image" style="background-image: url('../images/sp12.jpg')" alt="infinti car 12";>
                        </div>

                        <div class="image" style="background-image: url('../images/sp13.jpg')" alt="infinti car 13";>
                        </div>

            `;
            break;

        case 'about':
            contentDiv.innerHTML = `
                <h2>About Us</h2>
                <h3>
Who Makes Infiniti Cars?
                </h3>
                <p>
We’ll jump straight to the answer: Nissan owns Infiniti. More specifically, Infiniti is the luxury division of Japan’s Nissan Motor Company and competes in the premium luxury segment with the likes of Lexus and Acura.

If you want to learn specifically about Nissan and how good its cars are, read our analysis of the brand.

Now that you know who makes Infiniti, how about a brief history of the brand?
</p>

<h3>History Of Infiniti!</h3>

<p>
Infiniti was officially founded in 1987, though the idea of the brand was conceived in 1985. 

Japanese brands of that period had a great reputation for making affordable and reliable vehicles in North America; however, seeing that it was the European luxury car brands that were making all the money, they decided to leverage their solid reputation for dependability to become players in the highly lucrative luxury car market.

Hence Nissan gave birth to Infiniti to take on the likes of BMW, Mercedes, Audi, and Cadillac, in much the same way that Toyota and Honda created Lexus and Acura, respectively, and Hyundai created Genesis.

The Infiniti logo is believed to symbolize the brand’s never-ending pursuit of innovation and advancement, as represented by the two lines that lead into an infinite point on the horizon. 

However, some believe those two lines form the shape of a mountain to honor Mount Fuji, a landmark that represents the apex of quality, sophistication, and technical advancements in Japanese culture.

Even though Nissan’s new luxury brand came into fruition in 1987, it wasn’t until 1989 (1990 model year) that it introduced its first models, the Q45 sedan and performance-oriented M30 coupe. It followed them up one year later with a small sports sedan called the G20.

Infiniti grew its model lineup throughout the 1990s, providing consumers with sleek, sporty, and surprisingly affordable luxury vehicles. Recognizing the potential of the luxury SUV segment, the brand was one of the first to introduce a luxury SUV, the QX4.

Infiniti hit its stride in the early to mid-2000s, when they debuted the fantastic G35, a luxury sedan that many driving enthusiasts and automotive journalists considered superior to the luxury car benchmark at the time — the BMW 3 Series — in just about every way.

Having made a name for itself in North America, the brand expanded into the European and Chinese markets in 2008 and 2013, respectively, becoming more of a global player. Interestingly, Infiniti isn’t present in Japan (at least not in name), even though it’s the home country of parent company Nissan.

</p>

<h3>
Iconic Infiniti Cars
</h3>

<p>
As mentioned in the previous section, Infiniti is the luxury marque of Nissan, developed to compete with other premium brands such as BMW, Mercedes-Benz, Audi, and Lexus. 

Basically, if you’re looking to upgrade from a Nissan, the idea is that you will buy an Infiniti instead of a BMW, Lexus, or another premium marque. 

Today, Infiniti mostly offers crossovers and SUVs, which is understandable seeing as they are the most popular vehicle segments. This includes the QX50 (a successor to the QX4) and the QX80, a true, body-on-frame SUV.

Considering declining popularity of sedans and coupes, its car lineup has shrunken to only the Q50 and Q60, the successors to the G35 sedan and coupe, respectively. 

Infiniti has sold over 1 million vehicles since hitting the market back in 1989, with the U.S. accounting for the majority. Even though it is sold in Japan and other Asian countries besides China, some of its models such as the G and Q sedans have been rebranded as Nissans.

The  Q50 sedan, for instance, is known as the Nissan Skyline in Japan.

Where Is Infiniti Made?
Despite being primarily geared towards the North American market, Infiniti cars have traditionally been made in several places around the world. The brand’s sedans have mostly come from Japan, while its crossovers and SUVs are sourced from Mexico, the USA, and Japan.

The Q50/Q60 sedan and coupe are manufactured at Nissan’s plant in Kaminokawa, Japan; the QX50 compact crossover is made in Mexico; and the QX60 midsize crossover is assembled in America, in Smyrna, Tennessee, to be exact. 

As for the massive QX80, it is the only Infiniti SUV made in Japan. It is essentially the luxury version of the Nissan Armada.
                </p>
            `;
            break;
            
        case 'contact':
            contentDiv.innerHTML =
                `<h5>Contact Us</h5>
                <h6>
                    Feel free to reach out to us!
                </h6>
                <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"
                        placeholder="Your Name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"
                        placeholder="Your Email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message"
                            placeholder="Your Message"
                            rows="4" required>
                    </textarea>
                <button type="submit">Send Message</button>
                </form>`;
            break;
 
        default:
            contentDiv.innerHTML = '<h2>Page not found!</h2>';
    }
}