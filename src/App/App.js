import './App.css';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSecton';
import SectionTwo from '../SectionTwo/SectionTwo';
import ContactForm from '../ContactForm/ContactForm';
import SectionOne from '../SectionOne/SectionOne';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <SectionOne/>
      <SectionTwo />
      <ContactForm />
    </div>
  );
}

export default App;