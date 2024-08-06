import Hero from "../components/Hero";
import Biography from "../components/Biography.jsx";
import Departments from "../components/Departments.jsx";
import MessageForm from "../components/MessageForm.jsx";
import Footer from "../components/Footer.jsx";
export function Home(){
    return(
         <div>
                <Hero title={"Welcome to Asta Healthcare"} imageUrl={"/hero.png"}/>
                <Biography imageUrl="./about.png"/>
                <Departments />
                <MessageForm />
                <Footer />
         </div>
    );
}