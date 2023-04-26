import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

export default function Project3() {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <Buttons left={"/projet-2"} right={"/projet-4"} />
      </div>
    </main>
  );
}
