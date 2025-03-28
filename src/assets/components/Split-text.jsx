import { useState, useEffect } from "react";

const TypingEffect = () => {
  const texts = ["Web Developer", "Tech Enthusiast"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150; // Speed for typing and deleting

    const type = setTimeout(() => {
      if (!isDeleting && charIndex < texts[index].length) {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (charIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      } else if (charIndex === texts[index].length) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
      }
    }, typingSpeed);

    return () => clearTimeout(type);
  }, [charIndex, isDeleting, index]);

  return (
    <h1 className=" inline-flex text-2xl lg:text-5xl font-bold text-cyan-400 ">
      {text} <span className="animate-ping">|</span> {/* Blinking cursor */}
    </h1>
  );
};

export default TypingEffect;
