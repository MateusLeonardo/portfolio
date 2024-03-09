import React from "react";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useRef } from "react";
import { NotFound } from "./components/NotFound";
import Projects from "./pages/Projects";

const App = () => {
  const sobreRef = useRef(null);
  const projetosRef = useRef(null);
  const contatoRef = useRef(null);
  const [dark, setDark] = React.useState(true)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`containerTema ${dark ? 'dark' : 'light'}`}>
    <BrowserRouter>
      <Header
        scrollToSection={scrollToSection}
        sobreRef={sobreRef}
        projetosRef={projetosRef}
        contatoRef={contatoRef}
        setDark={setDark}
        dark={dark}
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
        <Route path="/projeto" element={<Projects />} />
        <Route path="/projeto/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
};

export default App;
