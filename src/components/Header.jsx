import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { brainwaveSymbol } from "../assets";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(app), (user) => {
      if (!user) {
        navigate("/signup");
        setIsLoggedIn(false); 
      } else {
        setUser(user);
        setDisplayName(user.displayName || "");
        setIsLoggedIn(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  const handleClick2 = () => {
    const auth = getAuth(app);
    auth.signOut();
    setIsLoggedIn(false); // Update login status
    localStorage.removeItem("isLoggedIn");
  };

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true"); // Set login status to true in local storage
    } else {
      localStorage.removeItem("isLoggedIn"); // Remove login status from local storage
    }
  }, [isLoggedIn]);


  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link className="xl:mr-1 flex items-center" to="/">
          <img src={brainwaveSymbol} width={70} height={40} alt="Brainwave" />
          <h2 className="text-[2rem] ml-1">EDT 215</h2>
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            <a
              href="#hero"
              onClick={handleClick}
              className={`block relative font-code tracking-[.2rem] uppercase transition-color hover:text-color-1
                  "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                  
                    "z-2 lg:text-n-1"
                   "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              Home
            </a>
            <a
              href="#games"
              onClick={handleClick}
              className={`block relative font-code tracking-[.2rem] uppercase transition-color hover:text-color-1
                  "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                  
                    "z-2 lg:text-n-1"
                   "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              View Our Games
            </a>
            <a
              href="#contact"
              onClick={handleClick}
              className='block relative font-code tracking-[.2rem] uppercase transition-color hover:text-color-1
                 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                    "z-2 lg:text-n-1"
                   "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12'
            >
              Contact
            </a>

            {!user ? (
              <Link onClick={handleClick} to="/signup">
                <Button className="text-[14px]">Sign In</Button>
              </Link>
            ) : (
              <>
                <Button
                  className="mr-6 max-md:mb-5"
                  onClick={handleClick2}
                >
                  Sign Out
                </Button>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xs">Welcome,</p>
                  <p className="text-sm capitalize">{displayName}</p>
                </div>
              </>
            )}
          </div>
          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button> 
      </div>
    </div>
  );
};

export default Header;
