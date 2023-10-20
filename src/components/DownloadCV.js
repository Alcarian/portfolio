import React from "react";
import { saveAs } from "file-saver";
import * as docx from "docx";

export default function DownloadCV() {
  return (
    <div className="downloadCV">
      <img src="./img/CV20-10-23.PNG" alt="" />

      <a
        href="./CV/CV DEV 20-10-23.docx"
        download="CV DEV 20-10-23.docx"
        className="hover"
      >
        <span className="button">Télécharger mon CV</span>
      </a>
    </div>
  );
}
