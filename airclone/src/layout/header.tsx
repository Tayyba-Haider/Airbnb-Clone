import Container from "./container";
import SearchBar from "../components/ui/searchBar";
import NavCenter from "../components/ui/navBar";
import NavUserMenu from "../components/ui/NavUserMenu";
import logo from "../assets/logo.svg";

export default function Header() {

  return (
    <Container>
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
        <NavCenter />

        <div className="hidden sm:block">
          <NavUserMenu />
        </div>
      </div>
      
      <div >
          <SearchBar />
      </div>
    </Container>
  );
}
