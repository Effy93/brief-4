import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const logoText = "Popularize";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--small" : ""}`}>
      <h1 className="logo">
        {logoText.split("").map((char, index) => {
          const uniqueKey = `${char}-${Math.random().toString(36).substr(2, 5)}`;
          return (
            <span
              key={uniqueKey}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              {char}
            </span>
          );
        })}
      </h1>

      <nav>
        <ul>
          <li>
            <a href="./"> A propos</a>
          </li>
          <li>
            <a href="./"> Contact </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
