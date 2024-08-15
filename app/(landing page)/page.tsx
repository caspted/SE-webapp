import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Events from "./Events";
import Hero from "./Hero";
import Inquiries from "./Inquiries";
import Projects from "./Projects";
import Sponsors from "./Sponsors";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <main className="flex select-none flex-col">
      <NavBar />
      <Hero />
      <Testimonials />
      <Events />
      <Projects />
      <Sponsors />
      <Inquiries />
      <Footer />
    </main>
  );
}
