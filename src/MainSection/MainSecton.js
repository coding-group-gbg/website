import './MainSection.css'

function MainSection() {
    return (
       <div className="MainSection">
         <div className="MainSection-text">
             
            <a href="/Landing page template for developers & startups">
                <p id="MainText-one">Landing page template for developers & startups</p>
            </a>
            
            <a href="/Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.">
                <p id="MainText-two"> Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes</p>
            </a>
            
            <div className="MainSection-buttons"> 
                <a href="/Explore"><button id="Explore">Explore</button></a> 
                <a href="/Learn-More"><button id="Learn-More">Learn More</button></a>
            </div>
          
          </div> 
          
          <img className="MainSection-image" src="https://landy.website/img/svg/developer.svg" />
       </div>
    )
}

export default MainSection;