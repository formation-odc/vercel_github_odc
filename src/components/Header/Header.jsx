import "./Header.css";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">

        <div className="logo-box">
          G
        </div>

        <div>
          <h1 className="logo-title">Git<span>Hub</span></h1>

          <p className="logo-subtitle">
            GUIDE D'INITIATION
          </p>
        </div>

      </div>

      <button className="menu-button">
        <Menu size={24} />
      </button>

    </header>
  );
};

export default Header;