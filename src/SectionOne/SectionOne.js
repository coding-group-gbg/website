import "./SectionOne.css";

function SectionOne() {
  return (
    <div className="SectionOne">
      <div className="SectionOne-text">
        <p id="Sectiontext-One">Introduce your product quickly &amp; effectively</p>
        <p id="Sectiontext-Two">
          Landy comes with multi-lingual support, all of the content is stored
          in the JSON files, so that you can manage the texts without having any
          prior knowledge in developing web applications using React.js.
        </p>
        <button id="SectionOne-button">
          <a href="#">Get started</a>
        </button>
      </div>
    </div>
  );
}

export default SectionOne;
