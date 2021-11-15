import "./SectionTwo.css"
import image from '../assets/section-two.svg';
import notesImage from '../assets/notes.svg';

function SectionTwo() {
    return (
        <div className="SectionTwo">
            <img id="section-two-image" src={image} />
            <div id="section-two-half-two">
                <h2>Light, fast &amp; responsive</h2>
                <p>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</p>
                <div>
                    <div id="sec2-half2-subsection">
                        <div>
                            <img src={notesImage} />
                            <h5>WHY ANTD?</h5>
                            <p>Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.</p>
                        </div>
                        <div>
                            <img src={notesImage} />
                            <h5>WHY STYLED-COMPONENTS?</h5>
                            <p>Styled Components gives you total control over your components.</p>
                        </div>
                    </div>
                    
                </div>
           </div>
       </div>
    )
}

export default SectionTwo;