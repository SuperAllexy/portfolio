import AboutPreview from "./AboutPreview";
import HeaderPreview from "./HeaderPreview";
import ContactPreview from "./ContactPreview";
import { Footer } from "../../components";
import ScrollButton from "../../components/ScrollButton";
import { useEffect } from "react";

const Mainpage = () => {
  useEffect(() => {
    document.title = "Alex";
  })
  return (
    <article className="main-page">
      <HeaderPreview />
      <AboutPreview />
      <ContactPreview />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default Mainpage;
