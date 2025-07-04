import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import PersonalData from './components/PersonalData';

function App() {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <About />
      <Projects />
      <Skills />
      <PersonalData />
    </div>
  );
}

export default App;
