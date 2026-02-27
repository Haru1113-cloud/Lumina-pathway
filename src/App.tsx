import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Process from "./pages/Process";
import Policies from "./pages/Policies";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Book from "./pages/Book";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Voice from "./pages/Voice";

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
{!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/process" element={<Process />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/book" element={<Book />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/voices/:id" element={<Voice />} />
      </Routes>
    </Layout>
    </>
  );
}
