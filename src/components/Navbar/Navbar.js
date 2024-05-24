import React from "react";

export function Navbar() {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">Sobre</a>
          </li>
          <li>
            <a href="/contact">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
