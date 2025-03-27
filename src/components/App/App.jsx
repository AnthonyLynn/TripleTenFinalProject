import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../Header/Header";
import Search from "../Search/Search";
import Results from "../Results/Results";
import Saved from "../Saved/Saved";
import AboutAuthor from "../AboutAuthor/AboutAuthor";
import Footer from "../Footer/Footer";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ConfrimationModal from "../ConfrimationModal/ConfrimationModal";

import "./App.css";

function App() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState("");

  function getOpenModalFunction(modal) {
    return () => {
      setActiveModal(modal);
    };
  }

  const openConfrimationModal = getOpenModalFunction("confrimation");
  const openRegisterModal = getOpenModalFunction("register");
  const openLoginModal = getOpenModalFunction("login");
  const closeModal = getOpenModalFunction("");

  // Close modals on Esc key
  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (evt) => {
      if (evt.key == "Escape") closeModal();
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <Header />
      <Search />
      <Saved />
      <Results />
      <AboutAuthor />
      <Footer />

      <LoginModal
        name={"login"}
        activeModal={activeModal}
        onClose={closeModal}
      />
      <RegisterModal
        name={"register"}
        activeModal={activeModal}
        onClose={closeModal}
      />
      <ConfrimationModal
        name={"confrimation"}
        activeModal={activeModal}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
