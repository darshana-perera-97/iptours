import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { TourPackages } from "./pages/TourPackages";
import { AboutUs } from "./pages/AboutUs";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Contact } from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Simple routing based on URL hash
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === "/tours") {
        setCurrentPage("tours");
      } else if (path === "/about") {
        setCurrentPage("about");
      } else if (path.startsWith("/blog/")) {
        setCurrentPage("blog-post");
      } else if (path === "/blog") {
        setCurrentPage("blog");
      } else if (path === "/contact") {
        setCurrentPage("contact");
      } else {
        setCurrentPage("home");
      }
    };

    handleRouteChange();
    window.addEventListener("popstate", handleRouteChange);
    
    // Handle link clicks
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = new URL(link.href).pathname;
        window.history.pushState({}, "", path);
        handleRouteChange();
        window.scrollTo(0, 0);
      }
    });

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "tours":
        return <TourPackages />;
      case "about":
        return <AboutUs />;
      case "blog":
        return <Blog />;
      case "blog-post":
        return <BlogPost />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
