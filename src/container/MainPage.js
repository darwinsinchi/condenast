import React from "react";
import Footer from "../components/Footer";
import AllNews from "../components/AllNews";
import NAVbar from "../components/NAVbar";

function MainPage() {
  return (
    <div>
      <NAVbar />
      <AllNews />
      <Footer />
    </div>
  );
}

export default MainPage;
