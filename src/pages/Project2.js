import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

export default function Project2() {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <Buttons left={"/projet-1"} right={"/projet-3"} />
      </div>
    </main>
  );
}
