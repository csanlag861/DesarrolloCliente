import Header from "../../components/Home/Header/Header";
import Hero from "../../components/Home/Hero/Hero";
import stylesHome from "./home.module.css";

function Home() {
  return (
    <div className={stylesHome.container}>
      <Header />
      <Hero />
    </div>
  );
}

export default Home;
