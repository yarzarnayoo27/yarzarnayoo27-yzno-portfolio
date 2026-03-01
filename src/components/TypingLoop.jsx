import { useEffect, useState } from "react";
import { loopTexts } from "../../constants";

export default function TypingLoop() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = loopTexts[textIndex];
    const typingSpeed = isDeleting ? 60 : 110;
    const pauseDuration = 1500;
    let timeout;

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % loopTexts.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentText.slice(0, prev.length - 1)
            : currentText.slice(0, prev.length + 1),
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <h1 className="text-3xl max-[400px]:text-[25px] font-bold bg-clip-text text-transparent bg-linear-to-r from-primary via-yellow-500 to-yellow-700">
      {displayText}
      <span className="ml-1 animate-pulse bg-yellow-500">|</span>
    </h1>
  );
}
