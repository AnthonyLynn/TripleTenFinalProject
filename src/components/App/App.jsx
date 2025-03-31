import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { getToken, setToken, removeToken } from "../../utils/token.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ConfrimationModal from "../ConfrimationModal/ConfrimationModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { APIkey } from "../../utils/constants.js";
import { getNewsSources } from "../../utils/newsApi.js";

import "./App.css";

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({
    username: "",
    email: "",
    _id: "",
  });

  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  useEffect(() => {
    getNewsSources({ apiKey: APIkey, searchTerm: "nature" })
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);
  }, []);

  function onLogOut() {
    removeToken();
    setIsLoggedIn(false);
    setCurrentUser({
      username: "",
      email: "",
      _id: "",
    });
    navigate("/");
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="page">
        <Navigation
          isLoggedIn={isLoggedIn}
          openLoginModal={openLoginModal}
          onLogOut={onLogOut}
        />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedNews />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />

        <LoginModal
          name="login"
          activeModal={activeModal}
          onClose={closeModal}
          openRegisterModal={openRegisterModal}
        />
        <RegisterModal
          name="register"
          activeModal={activeModal}
          onClose={closeModal}
          openLoginModal={openLoginModal}
        />
        <ConfrimationModal
          name="confrimation"
          activeModal={activeModal}
          onClose={closeModal}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
