import React, {useState} from "react";
import AddMovie from "../components/AddMovie";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import DataMovie from "../utils/constants/DataMovie";



function Main() {
    const [item, setItem] = useState(DataMovie)
    return(
        <main>
        <Hero />
        <Movies item={item}/>
        <AddMovie />
        </main>
    )
}
function Home() {
    return (
        <>
        <Navbar />
        <Main />
        <Footer/>
        </>
    );
}

export default Home;