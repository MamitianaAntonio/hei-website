import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Opportunities from "./components/Opporturnities";
import Domains from "./components/Domains";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Admission from "./components/Admission";
import "./App.css";
import Technos from "./components/Technos";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Team />
      <Opportunities />
      <Domains />
      <Admission />
      <Technos />
      <Footer />
    </>
  );
}

export default App;
