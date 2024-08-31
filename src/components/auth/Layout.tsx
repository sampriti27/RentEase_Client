import React, { useState } from "react";
import { CloseIcon } from "../icons";
import Login from "./Login";
import { motion } from "framer-motion";
import Register from "./Register";

interface Props {
  openAuthModal: boolean;
  setOpenAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Layout: React.FC<Props> = ({ setOpenAuthModal, openAuthModal }) => {
  const handleClose = () => {
    setOpenAuthModal(false);
  };
  const [auth, setAuth] = useState<string>("login");
  return (
    <motion.div
      initial={{ scale: 0.9, x: "-50%", y: "-50%", opacity: 0 }}
      animate={{
        scale: openAuthModal ? 1 : 0.9,
        x: openAuthModal ? "-50%" : "-50%",
        y: openAuthModal ? "-50%" : "-50%",
        opacity: openAuthModal ? 1 : 0,
      }}
      exit={{ scale: 0.9, x: "-50%", y: "-50%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="w-[90vw] md:w-[420px] max-w-[95vw] bg-white p-4 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-full flex justify-end">
        <CloseIcon size={6} onClick={handleClose} />
      </div>

      <div className="w-full text-sky-950">
        {/* Heading  */}
        <h3 className="font-medium text-2xl">Login / Register</h3>
        {/* Login / Register Component  */}
        {auth === "login" ? (
          <Login setAuth={setAuth} setOpenAuthModal={setOpenAuthModal} />
        ) : (
          <Register setAuth={setAuth} setOpenAuthModal={setOpenAuthModal} />
        )}
      </div>
    </motion.div>
  );
};

export default Layout;
