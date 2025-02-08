import Contact from "@/component/contact";
import Cursor from "@/component/cursor";
import Features from "@/component/features";
import Footer from "@/component/footer";
import Hero from "@/component/hero";
import Mission from "@/component/mission";
import Navbar from "@/component/navbar";
import { cache } from "react";

const fetchSolanaData = cache(async () => {
  const code = process.env.API_CODE;
  if (!code) {
    throw new Error("Missing API code.");
  }

  const apiUrl = `https://api.botfood.id/api/v1/solana/${code}`;

  const res = await fetch(apiUrl, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "max-age=0, s-maxage=300, stale-while-revalidate",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Error fetching data: ${res.status}`);
  }

  return res.json();
});

export default async function Home() {
  try {
    const resData = await fetchSolanaData();
    const data = resData.data
    return <div>
      <Cursor />
      <Navbar github={data.github_url} xLink={data.twitter_url}/>
      <main>
        <Hero caKey={data.key_ca}/>
        <div className="bg-background relative">
          <Mission />
          <Features />
          <Contact />
        </div>
      </main>
      <Footer xLink={data.twitter_url}/>
    </div>
  } catch (error) {
    return <div>
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
  }
}
