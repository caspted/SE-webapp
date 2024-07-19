import { QueryClient } from "@tanstack/react-query";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Events from "./Events";
import Hero from "./Hero";
import Inquiries from "./Inquiries";
import Projects from "./Projects";
import Sponsors from "./Sponsors";
import Testimonials from "./Testimonials";
import { fetchData } from "../utils/fetchData";

export default async function Home() {
  const queryClient = new QueryClient({});
  await queryClient.prefetchQuery({
    queryKey: ["projects"],
    queryFn: () =>  fetchData("projects")
  });
  await queryClient.prefetchQuery({
    queryKey: ["events"],
    queryFn: () => fetchData('events')
  });
  await queryClient.prefetchQuery({
    queryKey: ["testimonies"],
    queryFn: () => fetchData("testimonies")
  });

  return (
    <main className="flex flex-col ">
      <Header />
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
