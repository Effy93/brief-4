import { useEffect, useState } from "react";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <header className={`header ${scrolled ? "header--small" : ""}`}>
      <h1 className="logo">Popularize</h1>

      <nav>
        <ul>
          <li>A propos</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}