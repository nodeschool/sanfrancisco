import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import FocusedSession from "./components/FocusedSession";
import Faq from "./components/Faq";
import CodeOfConduct from "./components/CodeOfConduct";
import Footer from "./components/Footer";

import event from "../data/event.json";

const App = () => (
  <div className="site">
    <Header event={event} />
    <FocusedSession />
    <Faq />
    <CodeOfConduct />
    <Footer />
  </div>
);

createRoot(document.querySelector("#root")).render(<App />);
