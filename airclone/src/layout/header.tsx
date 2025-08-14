import Container from "./container";
import SearchBar from "../components/ui/searchBar";
import NavCenter from "../components/ui/navBar";
import NavUserMenu from "../components/ui/NavUserMenu";
import logo from "../assets/logo.svg";
import useScrollDirection from "../hooks/scrollDirections";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const {offset} = useScrollDirection();
  const solid = offset > 40;
  
  // Track if the header is at the very top
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.header
      initial={false}
      animate={{ y: 0 }}
      transition={{ type: "tween", duration: 0.25 }}
      className={`sticky top-0 z-50 backdrop-blur-md ${
        solid ? "bg-white/90 shadow" : "bg-white/50"
      }`}
    >
      <Container>
        <div className="flex flex-col">
          <div className="flex h-16 items-center justify-between">
            <a
              href="/"
              className="hidden sm:flex items-center gap-2 hover:opacity-80 transition"
            >
              <img
                src={logo}
                alt="Airbnb Logo"
                className="h-15 w-15 object-contain"
              />
            </a>

             {/*hidden on scroll down*/}
           <motion.div
              initial={false}
              animate={{
                height: isAtTop ? "auto" : 0,
                opacity: isAtTop ? 1 : 0,
              }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden hidden md:flex justify-center"
            >
              <NavCenter />
          </motion.div>

            <div className="hidden sm:block">
              <NavUserMenu />
            </div>
          </div>

            <div>
              <SearchBar/>
            </div>
         
        </div>
      </Container>
    </motion.header>
  );
}
