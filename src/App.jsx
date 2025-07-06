import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Opportunities from "./components/Opporturnities";
import Domains from "./components/Domains";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Team />
      <Opportunities />
      <Domains />
    </>
  );
}

export default App;
