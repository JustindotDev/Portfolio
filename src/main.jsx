import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./assets/components/Navbar.jsx";
import Footer from "./assets/components/Footer.jsx";
import Loader from "./assets/components/Loader.jsx";

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay if needed
  }, []);

  return (
    <StrictMode>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <App />
          <Footer />
        </>
      )}
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Main />);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Navbar />
//     <App />
//     <Footer />
//   </StrictMode>
// );
