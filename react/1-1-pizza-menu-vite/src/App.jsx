import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Header from "./components/Header";

/* ARROW FUNCTIONS */
const App = () => {
  /* -->  JAVASCRIPT <-- */
  return (
    /* SI NO QUIERO USAR DIV USO FRAGMENTOS <>...<> */
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;