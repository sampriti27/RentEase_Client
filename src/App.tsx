import { useState } from "react";
import Navbar from "./components/shared/navbar/Navbar";
import Home from "./pages/Home";
import Layout from "./components/auth/Layout";

function App() {
  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);
  return (
    <div className="scrollbar-hide">
      <Navbar
        openAuthModal={openAuthModal}
        setOpenAuthModal={setOpenAuthModal}
      />
      <Home />
      {openAuthModal && (
        <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-70 z-40">
          <Layout
            openAuthModal={openAuthModal}
            setOpenAuthModal={setOpenAuthModal}
          />
        </div>
      )}
    </div>
  );
}

export default App;
