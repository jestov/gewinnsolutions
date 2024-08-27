import { useState, useEffect } from "react";

const useTyped = (
  words: string[],
  typeSpeed: number,
  backSpeed: number,
  backDelay: number,
) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      setDisplayedText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1),
      );

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), backDelay);
        setTypingSpeed(backDelay);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(typeSpeed);
      } else {
        setTypingSpeed(isDeleting ? backSpeed : typeSpeed);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    typingSpeed,
    words,
    currentWordIndex,
    typeSpeed,
    backSpeed,
    backDelay,
  ]);

  return displayedText;
};

export default useTyped;
