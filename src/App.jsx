import React from "react";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useRef } from "react";

const App = () => {
  const sobreRef = useRef(null);
  const projetosRef = useRef(null);
  const contatoRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <Header
       scrollToSection={scrollToSection}
       sobreRef={sobreRef}
       projetosRef={projetosRef}
       contatoRef={contatoRef}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              sobreRef={sobreRef}
              projetosRef={projetosRef}
              contatoRef={contatoRef}
            />
          }
        />
        <Route path="/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
