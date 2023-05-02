import React from "react";
import { saveAs } from "file-saver";
import * as docx from "docx";

export default function DownloadCV() {
  return (
    <div className="downloadCV">
      <img src="./img/CV.PNG" alt="" />

      <a href="./CV/monCV.docx" download="monCV.docx" className="hover">
        <span className="button">Télécharger mon CV</span>
      </a>
    </div>
  );
}
