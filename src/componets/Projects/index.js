import React from "react";
import noteTaker from "../../images/note-taker.png"
import teamGen from "../../images/teamgen.png"
import glass2 from "../../images/glass2.png"
import recipe from "../../images/recipeProject.png"
import runbuddy from "../../images/runbuddy.png"

function Projects () {
return (
    <div>
    <div className="circle-container">
        <div className="circle-box">
            <div className="thumb">
                <img src={noteTaker} alt="project 1"></img>
                <div className="project-link">
                    <button href="https://cryptic-beach-53854.herokuapp.com/">View Project</button>
                </div>
            </div>
            <div className="circle-text">
                <h2>Note Taker</h2>
                <p>button node JS application that allows users to store and save notes locally</p>
                <button href="" />
            </div>
        </div>

        <div className="circle-box">
            <div className="thumb">
                <img src={teamGen} alt="project 1"></img>
                <div className="project-link">
                    <button href="https://github.com/Cardenas1850/TeamProfile">View Project</button>
                </div>
            </div>
            <div className="circle-text">
                <h2>Team Profile Generator</h2>
                <p>An application that allows users to dynamically generate button team profile page</p>
                
            </div>
        </div>

        <div className="circle-box">
            <div className="thumb">
                <img src={glass2} alt="project 1"></img>
                <div className="project-link">
                    <button href="https://github.com/Caleeeb/glassfiller-2.0">View Project</button>
                </div>
            </div>
            <div className="circle-text">
                <h2>Glassfiller 2.0</h2>
                <p>This was one of my group projects, I worked on setting up the front end within react using JSX with HTML and CSS</p>
                
            </div>
        </div>

        <div className="circle-box">
            <div className="thumb">
                <img src={recipe} alt="project 1"></img>
                <div className="project-link">
                    <button href="https://cardenas1850.github.io/Recipe-Card-Generator/">View Project</button>
                </div>
            </div>
            <div className="circle-text">
                <h2>Recipe Card Generator</h2>
                <p>This is the start to my recipe database app, it isn't much but it will be along the same premise as the Glassfiller App, but based around food.</p>
                
            </div>
        </div>

        <div className="circle-box">
            <div className="thumb">
                <img src={runbuddy} alt="project 1"></img>
                <div className="project-link">
                    <button href="https://cardenas1850.github.io/run-buddy/">View Project</button>
                </div>
            </div>
            <div className="circle-text">
                <h2>Run Buddy</h2>
                <p>Our first front end project for the coding bootcamp</p>
                
            </div>
        </div>
    </div>

    

    </div>
)
}

export default Projects;