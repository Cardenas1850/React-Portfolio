import React from "react";
import myPhoto from "../../images/jason.jpg"

function About() {
 return (
<section>
    <div>
        <h1>Jason Cardenas</h1>
        <div>
            <p>
                My name is Jason Cardenas and I am a former educator who transitioned into web development in early 2022. I am an outgoing individual with an interest in learning more about coding and how to implment these languages to create projects, such as this Portfolio. In my free time I enjoy cooking/baking, hanging out with my wife and dog, and spending time online with my friends chatting in discord or playing some videogames. My love for coding and web development derives from my creativeness in the kitchen. I am always working on perfecting recipes that I have created and hope to one day create an online database of those to share with friends and family. Over the next few months I am going to be spending my time honing my skills in react and CSS as well as reseraching CSS frameworks to create more detailed and visually pleasing UI designs.
            </p>
        </div>
        <div>
            <img src={myPhoto}
            alt="Jason Cardenas, from my wedding day"
            />
        </div>
    </div>
</section>




 )
}




export default About;