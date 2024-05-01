import React from "react";

function Footer() {
  return (
    <footer style={{ position: "fixed" }}>
      <p>&copy; {new Date().getFullYear()} Stephanie Borchers</p>
    </footer>
  );
}

export default Footer;
