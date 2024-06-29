import Footer from "../components/footer";
import Header from "../components/Header";
import Events from "./Events";
import Projects from "./Projects";
import Sponsors from "./Sponsors";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Testimonials />
      <Events />
      <Projects />
      <Sponsors />
      <Footer />      
    </main>
  );
}
