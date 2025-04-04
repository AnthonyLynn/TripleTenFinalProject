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

  // Dummy user for designing front end till implementing backend.
  const [currentUser, setCurrentUser] = useState({
    username: "Fox",
    email: "foxsil@fox.com",
    keywords: ["Nature", "Yellowstone", "Margret", "Spider-Man"],
    savedArticles: [
      {
        source: {
          id: "polygon",
          name: "Polygon",
        },
        author: "Matt Patches, Tasha Robinson",
        title:
          "Spider-Man: Brand New Day will put Tom Holland back in the Spidey suit between Avengers movies",
        description:
          "Tom Holland has said he’s about ready to hang up his red-and-blue spandex after 2021’s mega-successful Spider-Man: No Way Home and pass the torch to a live-action Miles Morales. But he isn’t done quite yet: Sony and Marvel Studios confirmed at the 2025 Cinema…",
        url: "https://www.polygon.com/movies/24203068/spider-man-brand-new-day-tom-holland-release-date",
        urlToImage:
          "https://platform.polygon.com/wp-content/uploads/sites/2/2025/03/MCDAVIN_EC086.jpg?quality=90&strip=all&crop=0%2C0.35873569904983%2C100%2C99.2825286019&w=1200",
        publishedAt: "2025-04-01T04:07:19Z",
        content:
          "Tom Holland has said he’s about ready to hang up his red-and-blue spandex after 2021’s mega-successful Spider-Man: No Way Home and pass the torch to a live-action Miles Morales. But he isn’t done qui… [+2564 chars]",
      },
      {
        source: {
          id: null,
          name: "Digital Trends",
        },
        author: "Nirave Gondhia",
        title: "Five reasons I’m excited for the new Google Pixel 9a",
        description:
          "Google has consistently ranked among the best smartphones for its affordable devices over the past six years, particularly with its Pixel A series. The Pixel 3a set the trend for major phone manufacturers to provide a compelling experience at half the price o…",
        url: "https://www.digitaltrends.com/mobile/5-reasons-im-excited-for-the-pixel-9a/",
        urlToImage:
          "https://www.digitaltrends.com/wp-content/uploads/2025/03/pixel-9a-in-hand.jpg?resize=1200%2C630&p=1",
        publishedAt: "2025-04-01T00:20:52Z",
        content:
          "Table of Contents\r\nTable of Contents\r\nA flagship processor\r\nMuch better battery life\r\nUnique and interesting colors\r\nA compelling camera without a bump\r\nOutstanding value for money\r\nGoogle has consis… [+6730 chars]",
      },
      {
        source: {
          id: null,
          name: "heise online",
        },
        author: "Andreas Knobloch",
        title:
          "Dienstag: Flugzeuge mit Starlink-Wi-Fi, Russland baut eigene Lithografie-Systeme",
        description:
          "FAA-Zulassung für United Airlines + Chiptechnik aus den 1990er-Jahren + Updates für iOS, iPadOS und macOS + Geld für Lobbyarbeit + Handyverbot an Schulen",
        url: "https://www.heise.de/news/Dienstag-Flugzeuge-mit-Starlink-Wi-Fi-Russland-baut-eigene-Lithografie-Systeme-10335096.html",
        urlToImage:
          "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/8/2/8/8/1/7/Wochentage-source-sans-95fdcb79b354e262.png",
        publishedAt: "2025-04-01T04:15:00Z",
        content:
          "Als erste große US-Fluggesellschaft wird United Airlines an Bord seiner Maschinen schnelles Satelliteninternet von Starlink anbieten. Nun hat die US-Bundesluftfahrtbehörde FAA United die Zulassung fü… [+4182 chars]",
      },
    ],
    _id: "7",
  });

  const [newsSources, setNewsSources] = useState([]);
  const [keyword, setKeyword] = useState("");
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
    setKeyword(searchTerm);
    getNewsSources({ apiKey: APIkey, searchTerm: searchTerm })
      .then(({ articles }) => {
        console.log(articles);
        setNewsSources(articles);
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
                keyword={keyword}
                newsSources={newsSources}
                isLoggedIn={isLoggedIn}
                openLoginModal={openLoginModal}
                onLogOut={onLogOut}
                onSearch={onSearch}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedNews
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
