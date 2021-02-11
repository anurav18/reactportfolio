import React from "react";
import ParticlesBg from 'particles-bg';
import Profilepicture from '../components/Profilepicture';
import Introductioncard from '../components/IntroductionCard';

function AboutMe(){

return(

 <div class="container">
  <div class="row">
    <div class="col-md-4">
        <Profilepicture></Profilepicture> 
    </div>
    <div class="col-md-8">
     <Introductioncard></Introductioncard>
    </div>
  </div>
  <ParticlesBg color="#ffd500" num={200} type="cobweb" bg={true} />
</div>
 );
}

export default AboutMe;