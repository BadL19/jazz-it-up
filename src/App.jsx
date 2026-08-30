import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("home");
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page, activeService]);

  function goTo(p) {
    setPage(p);
  }

  function goToService(service) {
    setActiveService(service);
    setPage("service");
  }

  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <Nav page={page} goTo={goTo} goToService={goToService} />
      <main>
        {page === "home" && <Home goTo={goTo} goToService={goToService} />}
        {page === "services" && <Services goTo={goTo} goToService={goToService} />}
        {page === "service" && activeService && <ServiceDetail service={activeService} goTo={goTo} />}
        {page === "contact" && <Contact />}
      </main>
      <Footer goTo={goTo} />
    </div>
  );
}
