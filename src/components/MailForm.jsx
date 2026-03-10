import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mailFormSchema } from "../../constants";
import MessageModal from "./MessageModal";
import ValidationMessage from "./ValidationMessage";

const MailForm = () => {
  const { theme } = useContext(ThemeContext);
  const [status, setStatus] = useState(null);
  const formRef = useRef();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mailFormSchema),
  });

  const sendEmail = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("success");
          reset();
          setTimeout(() => {
            setStatus(null);
          }, 3000);
        },
        () => {
          setStatus("error");
          reset();
          setTimeout(() => {
            setStatus(null);
          }, 3000);
        },
      );
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

      {status && <MessageModal status={status} />}
    </>
  );
};

export default MailForm;
