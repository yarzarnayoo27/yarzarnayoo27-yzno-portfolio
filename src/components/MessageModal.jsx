import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const MessageModal = ({ status, title, message }) => {
  const { theme } = useContext(ThemeContext);

  const statusMap = {
    success: {
      icon: AiOutlineCheckCircle,
      color: theme === "dark" ? "text-primary" : "text-violet-500",
    },
    error: { icon: AiOutlineCloseCircle, color: "text-red-400" },
    limit: { icon: AiOutlineCloseCircle, color: "text-red-400" },
  };

  const Icon = statusMap[status]?.icon;
  const statusColor = statusMap[status]?.color;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm transition-opacity duration-300"
    >
      <div
        className={clsx(
          "px-8 py-6 rounded-2xl shadow-xl text-center",
          theme === "dark" ? "bg-dark-modern" : "bg-light",
        )}
      >
        {Icon && (
          <div className="flex justify-center">
            <Icon className={clsx("text-4xl", statusColor)} />
          </div>
        )}
        {title && (
          <h3 className={clsx("mt-3 text-lg font-semibold", statusColor)}>
            {title}
          </h3>
        )}
        {message && <p className="mt-2 text-sm text-slate-500">{message}</p>}
      </div>
    </div>
  );
};

export default MessageModal;
