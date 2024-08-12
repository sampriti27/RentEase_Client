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
      initial={{ scale: 0.9, y: "-20%", opacity: 0 }}
      animate={{
        scale: openAuthModal ? 1 : 0.9,
        y: openAuthModal ? "0%" : "-20%",
        opacity: openAuthModal ? 1 : 0,
      }}
      exit={{ scale: 0.9, y: "-20%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="w-[420px] bg-white p-4  rounded-lg"
    >
      <div className="w-full flex justify-end">
        <CloseIcon size={6} onClick={handleClose} />
      </div>

      <div className="w-full text-sky-950">
        {/* Heading  */}
        <h3 className="font-medium text-2xl">Login / Register</h3>
        {/* Login / Register Component  */}
        {auth === "login" ? (
          <Login setAuth={setAuth} />
        ) : (
          <Register setAuth={setAuth} />
        )}
      </div>
    </motion.div>
  );
};

export default Layout;
