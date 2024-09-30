
import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Project } from "./components/Project/Project";

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <Experience />
    <Project />
    <Contact />
    </div>;
  
}

export default App
