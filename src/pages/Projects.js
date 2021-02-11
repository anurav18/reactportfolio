import React from "react";
import ParticlesBg from 'particles-bg';
import Card from "../components/projectsCard";
import projects from "../utils/projects.json";
import './style.css'

function Projects(){

//     return(
// <div>
//     <h1>Projects of Anusha</h1>

//     <ParticlesBg color="#ffd500" num={200} type="cobweb" bg={true} />
// </div> 

// );
return (

    <React.Fragment>
<ParticlesBg color="#ffd500" num={200} type="cobweb" bg={true} />
        <main role="main" className="container" id="contain-style">
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-12 p-4">
                
                    {projects.map(item => <Card {...item}/>)}

                </div>
            </div>
        </main>

    </React.Fragment>

    )
}

export default Projects;