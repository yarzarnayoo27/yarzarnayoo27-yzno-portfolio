import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const MessageModal = ({ status }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm",
        )}
      >
        <div
          className={clsx(
            "px-8 py-6 rounded-2xl shadow-xl text-center",
            theme === "dark" ? "bg-dark-modern" : "bg-light",
          )}
        >
          {status === "success" && (
            <>
              <div className="flex justify-center">
                <AiOutlineCheckCircle
                  className={clsx(
                    "text-4xl",
                    theme === "dark" ? "text-primary" : "text-violet-500",
                  )}
                />
              </div>
              <h3
                className={clsx(
                  "mt-3 text-lg font-semibold",
                  theme === "dark" ? "text-primary" : "text-violet-500",
                )}
              >
                Successfully Sent
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Thank you for contacting me.
              </p>
            </>
          )}

          {status === "error" && (
            <>
              <div className="flex justify-center">
                <AiOutlineCloseCircle className="text-4xl text-red-400" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-red-400">
                Failed to Send Message
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Please try again later.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MessageModal;
