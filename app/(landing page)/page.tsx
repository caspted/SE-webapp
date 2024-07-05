import Footer from "../components/Footer";
import Header from "../components/Header";
import Events from "./Events";
import Hero from "./Hero";
import Projects from "./Projects";
import Sponsors from "./Sponsors";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <Testimonials />
      <Events />
      <Projects />
      <Sponsors />
      <Footer />      
    </main>
  );
}
