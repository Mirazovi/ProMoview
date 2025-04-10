import "../globals.css";
import Footer from "@/Component/shared/footer/Footer";
import Navbar from "@/Component/shared/navbar/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default layout;
