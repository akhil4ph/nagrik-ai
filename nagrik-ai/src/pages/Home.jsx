import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DecoderCard from '../components/DecoderCard';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      <div>
        <Navbar />
        <main>
          <Hero />
          <DecoderCard />
          <Features />
        </main>
      </div>
      <Footer />
    </div>
  );
}