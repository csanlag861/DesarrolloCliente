import Hero from "../../components/Home/Hero/Hero";
import HomeStyles from "./home.module.css";
import { useEffect, useRef } from "react";

function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.classList.add(HomeStyles.animated);
    }
  }, []);
  return (
    <div  className={HomeStyles.container}>
      <div ref={containerRef} className={HomeStyles.animated && HomeStyles.mask}>
      <Hero className={HomeStyles.hero} />
      </div>
    </div>
  );
}

export default Home;
