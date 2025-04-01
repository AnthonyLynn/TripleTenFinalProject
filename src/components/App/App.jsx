import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { getToken, setToken, removeToken } from "../../utils/token.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ConfrimationModal from "../ConfrimationModal/ConfrimationModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { getUserInfo } from "../../utils/auth.js";
import { APIkey } from "../../utils/constants.js";
import { getNewsSources } from "../../utils/newsApi.js";

import "./App.css";

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({
    username: "Fox",
    email: "foxsiler@fox.com",
    _id: "11",
  });

  const [newsSources, setNewsSources] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function getOpenModalFunction(modal) {
    return () => {
      setActiveModal(modal);
    };
  }

  const openConfrimationModal = getOpenModalFunction("confrimation");
  const openRegisterModal = getOpenModalFunction("register");
  const openLoginModal = getOpenModalFunction("login");
  const closeModal = getOpenModalFunction("");

  function onSearch({ searchTerm }) {
    getNewsSources({ apiKey: APIkey, searchTerm: searchTerm })
      .then((data) => {
        setNewsSources(data);
      })
      .catch(console.error);
  }

  function onLogin(data) {
    const loginRequest = () => {
      return signin(data).then((data) => {
        if (data.token) {
          setToken(data.token);
          setCurrentUser(data.user);
          setIsLoggedIn(true);
          closeModal();
        } else {
          console.error("No token was found");
        }
      });
    };

    handleSubmit(loginRequest);
  }

  function onLogOut() {
    removeToken();
    setIsLoggedIn(false);
    setCurrentUser({
      username: "",
      email: "",
      savedArticles: [],
      _id: "",
    });
    navigate("/");
  }

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

  // Check if there's a token
  /*
  useEffect(() => {
    const token = getToken();

    if (!token) {
      return;
    }

    getUserInfo(token)
      .then(({ data }) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
      })
      .catch(console.error);
  }, []);*/

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                newsSources={newsSources}
                isLoggedIn={isLoggedIn}
                openLoginModal={openLoginModal}
                onLogOut={onLogOut}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedNews
                  newsSources={newsSources}
                  isLoggedIn={isLoggedIn}
                  openLoginModal={openLoginModal}
                  onLogOut={onLogOut}
                />
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
