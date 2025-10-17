import Footer from "../components/Footer"  
import Header from "../components/Header";
import styles from "./home.module.css";

function Home (){
    return (
        <div className={styles.container}>
            <Header />
            <main className="text-center">Texto de ejemplo</main>
            <Footer />
        </div>
    )
}

export default Home;