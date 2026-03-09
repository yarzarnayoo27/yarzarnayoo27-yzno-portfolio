import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import MailForm from "../components/MailForm";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="contact"
      className="relative z-10 w-full transition-colors duration-500 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-8">
        <div className="px-[15%] max-md:px-0">
          <div className="px-5 pb-5">
            <div className="max-w-6xl mx-auto flex max-[1100px]:flex-col flex-row">
              <div
                className={clsx(
                  "flex-1 space-y-6 min-[1100px]:rounded-l-xl max-[1100px]:rounded-t-xl border min-[1100px]:border-r-0 max-[1100px]:border-b-0 border-dark",
                  theme === "dark" ? "bg-primary" : "bg-violet-500",
                )}
              >
                <div className="p-20 max-sm:p-10 max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:justify-center max-[1100px]:items-center">
                  <h2
                    className={clsx(
                      "text-lg font-bold",
                      theme === "dark" ? "text-dark" : "text-light",
                    )}
                  >
                    Get in Touch
                  </h2>

                  <p
                    className={clsx(
                      "text-sm mt-2",
                      theme === "dark" ? "text-dark" : "text-light",
                    )}
                  >
                    Reach out anytime
                  </p>

                  <div className="my-5 space-y-4">
                    <div className="flex items-center gap-4">
                      <FaEnvelope
                        className={clsx(
                          "text-xl",
                          theme === "dark" ? "text-dark" : "text-light",
                        )}
                      />
                      <span
                        className={clsx(
                          theme === "dark" ? "text-dark" : "text-light",
                        )}
                      >
                        <a
                          href="mailto:yarzarnayoo27@email.com"
                          className="hover:underline"
                        >
                          yarzarnayoo27@email.com
                        </a>
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <FaPhoneAlt
                        className={clsx(
                          "text-xl",
                          theme === "dark" ? "text-dark" : "text-light",
                        )}
                      />
                      <span
                        className={clsx(
                          theme === "dark" ? "text-dark" : "text-light",
                        )}
                      >
                        <a href="tel:+959764412498" className="hover:underline">
                          +95 9 764 412 498
                        </a>
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <FaMapMarkerAlt
                        className={clsx(
                          "text-xl",
                          theme === "dark" ? "text-dark" : "text-light",
                        )}
                      />
                      <span
                        className={clsx(
                          theme === "dark" ? "text-dark" : "text-light",
                        )}
                      >
                        Yangon, Myanmar
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2.5">
                    <a
                      href="https://github.com/yarzarnayoo27"
                      className={clsx(
                        "p-3 rounded-full border transition duration-300",
                        theme === "dark"
                          ? "border-dark hover:bg-dark hover:text-primary text-dark"
                          : "border-slate-300 hover:bg-light hover:text-violet-500 text-light",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/yarzarnayoo/"
                      className={clsx(
                        "p-3 rounded-full border transition duration-300",
                        theme === "dark"
                          ? "border-dark hover:bg-dark hover:text-primary text-dark"
                          : "border-slate-300 hover:bg-light hover:text-violet-500 text-light",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>

                    <a
                      href="https://www.facebook.com/share/173VsyVHQw/"
                      className={clsx(
                        "p-3 rounded-full border transition duration-300",
                        theme === "dark"
                          ? "border-dark hover:bg-dark hover:text-primary text-dark"
                          : "border-slate-300 hover:bg-light hover:text-violet-500 text-light",
                      )}
                    >
                      <FaFacebook />
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div
                className={clsx(
                  "flex-1 min-[1100px]:rounded-r-xl max-[1100px]:rounded-b-xl border min-[1100px]border-l-0 max-[1100px]:border-t-0",
                  theme === "dark"
                    ? "bg-dark-modern border-slate-400/40"
                    : "bg-light border-dark",
                )}
              >
                <div className="p-20 max-sm:p-10">
                  <h2
                    className={clsx(
                      "text-lg font-bold max-[1100px]:text-center",
                      theme === "dark" ? "text-light" : "text-dark",
                    )}
                  >
                    Send a Message
                  </h2>
                  <MailForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
