import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mailFormSchema } from "../../constants";
import MessageModal from "./MessageModal";
import ValidationMessage from "./ValidationMessage";

const MAX_EMAILS = 6;
const TIME_WINDOW = 60 * 60 * 1000;

const MailForm = () => {
  const { theme } = useContext(ThemeContext);
  const [isSending, setIsSending] = useState(false);
  const [modalData, setModalData] = useState(null);
  const formRef = useRef();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mailFormSchema),
  });

  useEffect(() => {
    if (modalData) {
      const timer = setTimeout(() => setModalData(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [modalData]);

  const sendEmail = () => {
    if (formRef.current["honeypot"]?.value) return;
    setIsSending(true);

    const now = Date.now();
    const submissions =
      JSON.parse(localStorage.getItem("mailSubmissions") || "[]") || [];

    const recentSubmissions = submissions.filter(
      (time) => now - time < TIME_WINDOW,
    );

    if (recentSubmissions.length >= MAX_EMAILS) {
      setModalData({
        status: "limit",
        title: "Limit Reached",
        message: `You can send a maximum of ${MAX_EMAILS} emails per hour.`,
      });
      setIsSending(false);
      return;
    }

    recentSubmissions.push(now);
    localStorage.setItem("mailSubmissions", JSON.stringify(recentSubmissions));

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setModalData({
            status: "success",
            title: "Message Sent",
            message: "Thank you for contacting me.",
          });
          reset();
        },
        () => {
          setModalData({
            status: "error",
            title: "Failed to Send",
            message: "Please try again later.",
          });
          reset();
        },
      )
      .finally(() => setIsSending(false));
  };
  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit(sendEmail)}
        className="space-y-4 mt-4 max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:justify-center max-[1100px]:items-center"
      >
        <input
          type="text"
          {...register("userName")}
          placeholder="Your Name"
          className={clsx(
            "w-full p-2 border border-slate-400/40 rounded-lg outline-none",
            theme === "dark"
              ? "focus:border-primary placeholder-slate-400"
              : "focus:border-violet-500 placeholder-slate-400",
          )}
        />
        {errors.userName && (
          <ValidationMessage message={errors.userName.message} />
        )}

        <input
          type="email"
          {...register("userEmail")}
          placeholder="Your Email"
          className={clsx(
            "w-full p-2 border border-slate-400/40 rounded-lg outline-none",
            theme === "dark"
              ? "focus:border-primary placeholder-slate-400"
              : "focus:border-violet-500 placeholder-slate-400",
          )}
        />
        {errors.userEmail && (
          <ValidationMessage message={errors.userEmail.message} />
        )}

        <input
          type="text"
          {...register("subject")}
          placeholder="Subject"
          className={clsx(
            "w-full p-2 border border-slate-400/40 rounded-lg outline-none focus:border-primary",
            theme === "dark"
              ? "focus:border-primary placeholder-slate-400"
              : "focus:border-violet-500 placeholder-slate-400",
          )}
        />
        {errors.subject && (
          <ValidationMessage message={errors.subject.message} />
        )}

        <textarea
          rows="3"
          {...register("message")}
          placeholder="Your Message"
          className={clsx(
            "w-full p-2 border border-slate-400/40 rounded-lg outline-none focus:border-primary",
            theme === "dark"
              ? "focus:border-primary placeholder-slate-400"
              : "focus:border-violet-500 placeholder-slate-400",
          )}
        />
        {errors.message && (
          <ValidationMessage message={errors.message.message} />
        )}

        <input
          type="text"
          name="honeypot"
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />

        <button
          type="submit"
          disabled={isSending}
          className={clsx(
            "px-6 py-3 rounded-lg hover:opacity-90 transition duration-300",
            isSending && "cursor-not-allowed opacity-60",
            theme === "dark"
              ? "bg-primary text-dark"
              : "bg-violet-500 text-light",
          )}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {modalData && (
        <MessageModal
          status={modalData.status}
          title={modalData.title}
          message={modalData.message}
        />
      )}
    </>
  );
};

export default MailForm;
