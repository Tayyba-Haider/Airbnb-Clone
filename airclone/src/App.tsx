import Header from "./layout/header";
import LiveAnywhere from "./sections/liveAnywhere";
import Footer from "./layout/footer";
import AppBanner from "./sections/appBanner";
// import Hero from "./sections/hero";
import "./App.css"; // Assuming you have a global CSS file for styles

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        {/* <Hero /> */}
        <LiveAnywhere />
        <LiveAnywhere />
        <LiveAnywhere />
        <LiveAnywhere />
        <LiveAnywhere />
        <AppBanner />
      </main>
      <Footer />
    </div>
  );
}