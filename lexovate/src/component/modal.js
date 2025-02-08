import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);
  if (typeof document === "undefined") return null;
  const handleOverlayClick = (
    event
  ) => {
    if (event.target === overlayRef.current) {
      onClose()
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key == "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, duration: 0.1, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 h-screen flex items-center justify-center"
          onClick={handleOverlayClick}
          ref={overlayRef}
          style={{ width: '100vw', background: 'rgba(0, 0, 0, 0.7)', zIndex: 50 }}
        >
          <motion.div
            initial={{ opacity: 0, y: '100vh' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100vh' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden h-fit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl p-6 h-fit max-w-xl">
              <div className="flex relative items-center justify-center mb-6">
                <h6 className="text-xl font-semibold text-background">GET EARLY ACCESS</h6>
                <button className="absolute right-0" onClick={onClose}><img src="/icons/close-icon.svg" alt="close" /></button>
              </div>
              <p className="text-center leading-6 mb-8"
                style={{ color: "#454343" }}
              >
                Thank you for your interest in LexovateAI ! We're currently developing the beta version. Please enter your email below to gain access to our exclusive demo as soon as it's ready!
              </p>
              <form>
                <input placeholder="Enter your email address" className="w-full rounded-lg text-background"
                  style={{
                    background: "#FAFAFA",
                    marginBottom: "1.5rem",
                    padding: "1rem"
                  }}
                  required type="email" />
                <button type="submit" className="w-full bg-gradient-to-r from-[#ED6C4E] via-[#E24391] to-[#6E53E8] rounded-lg font-medium" style={{ padding: "0.625rem" }}>SUBMIT</button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;