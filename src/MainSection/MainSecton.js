import './MainSection.css'

function MainSection() {
    return (
       <div className="MainSection">
         <div className="MainSection-text">
            <p><a id="MainText-one" href="/Landing page template for developers & startups">Landing page template for developers & startups</a></p>
            <p><a id="MainText-two" href="/Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.">
                Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.</a></p>
            
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