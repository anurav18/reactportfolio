import React,{Component} from "react";
import ParticlesBg from 'particles-bg';
import ExperienceCard from '../components/ExperienceCard';
import './style.css';
import experience from '../utils/experience.json';
import Wrapper from "../components/Wrapper";

class Experience extends Component{

render(){
 return(
<div>
    
<div class="container" id="experience-container">

    {experience.map(experience => (
          <ExperienceCard
            id={experience.id}
            key={experience.id}
            name={experience.ClientName}
            image={experience.image}
            description={experience.Description}
          />
        ))}
</div>
    <ParticlesBg color="#ffd500" num={200} type="cobweb" bg={true} />
</div>
    );
    }
   
}

export default Experience;