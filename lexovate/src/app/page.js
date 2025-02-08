import Contact from "@/component/contact";
import Cursor from "@/component/cursor";
import Features from "@/component/features";
import Footer from "@/component/footer";
import Hero from "@/component/hero";
import Mission from "@/component/mission";
import Navbar from "@/component/navbar";

export default function Home() {
  return (
    <div>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <div className="bg-background relative">
          <Mission />
          <Features />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
