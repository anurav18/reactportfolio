import React,{Component} from "react";
import ParticlesBg from 'particles-bg';
import ExperienceCard from '../components/ExperienceCard';
import './style.css';
import experience from '../utils/experience.json';
import Wrapper from "../components/Wrapper";

class Experience extends Component{

render(){
 return(
  
     
  <React.Fragment>
<ParticlesBg color="#ffd500" num={200} type="cobweb" bg={true} />
  <main role="main" className="container" id="experience-container">
      <div className="row">
      
          <div className="col-xs-12 col-sm-8 col-md-12 p-4">
          
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
      </div>
  </main>

</React.Fragment>
    );
}
   
}

export default Experience;