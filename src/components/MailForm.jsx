import { useContext, useRef } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";
import emailjs from "@emailjs/browser";

const MailForm = () => {
  const { theme } = useContext(ThemeContext);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {},
        (error) => {},
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="space-y-4 mt-4 max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:justify-center max-[1100px]:items-center"
    >
      <input
        type="text"
        name="userName"
        placeholder="Your Name"
        className={clsx(
          "w-full p-2 border border-slate-400/40 rounded-lg outline-none",
          theme === "dark"
            ? "focus:border-primary placeholder-slate-400"
            : "focus:border-violet-500 placeholder-slate-400",
        )}
      />

      <input
        type="email"
        name="userEmail"
        placeholder="Your Email"
        className={clsx(
          "w-full p-2 border border-slate-400/40 rounded-lg outline-none",
          theme === "dark"
            ? "focus:border-primary placeholder-slate-400"
            : "focus:border-violet-500 placeholder-slate-400",
        )}
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className={clsx(
          "w-full p-2 border border-slate-400/40 rounded-lg outline-none focus:border-primary",
          theme === "dark"
            ? "focus:border-primary placeholder-slate-400"
            : "focus:border-violet-500 placeholder-slate-400",
        )}
      />

      <textarea
        rows="3"
        name="message"
        placeholder="Your Message"
        className={clsx(
          "w-full p-2 border border-slate-400/40 rounded-lg outline-none focus:border-primary",
          theme === "dark"
            ? "focus:border-primary placeholder-slate-400"
            : "focus:border-violet-500 placeholder-slate-400",
        )}
      ></textarea>

      <button
        type="submit"
        className={clsx(
          "px-6 py-3 rounded-lg hover:opacity-90 transition duration-300",
          theme === "dark"
            ? "bg-primary text-dark"
            : "bg-violet-500 text-light",
        )}
      >
        Send Message
      </button>
    </form>
  );
};

export default MailForm;
