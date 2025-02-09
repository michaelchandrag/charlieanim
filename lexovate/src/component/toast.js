import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ message, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
        initial={{ x: 300, opacity: 0, filter: "blur(20px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ x: 300, opacity: 0, filter: "blur(20px)" }}
          transition={{
            type: "spring",
            stiffness: 600,
            damping: 60,
          }}
          className="fixed top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 z-50"
        >
          <p className="text-sm text-background">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;