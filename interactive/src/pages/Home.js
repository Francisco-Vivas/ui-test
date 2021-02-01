import React from "react";
import Header from "../components/Header";
import Rules from "../components/Rules";
import Votes from "../components/Votes";
import Footer from "../components/Footer";
import AddNew from "../components/AddNew";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Rules />
        <Votes />
        <AddNew />
        <Footer />
      </div>
    </>
  );
};

export default Home;
