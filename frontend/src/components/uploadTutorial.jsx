import { useState } from "react";
import { Worker } from "@react-pdf-viewer/core";

// Import the main component
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function UploadTutorial() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [pdfFile, setPdfFile] = useState(null);

  const [pdfError, setPdfError] = useState("");

  const allowedFiles = ["application/pdf"];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfError("");
          setPdfFile(e.target.result);
          console.log(e.target.result);
        };
      } else {
        setPdfError("Not a valid pdf: Please select only PDF");
      }
    } else {
      console.log("Please select a PDF");
    }
  };

  return (
    <div className="container">
      <form>
        <label>
          <h5>Upload PDF</h5>
        </label>
        <br></br>
        <input
          type="file"
          className="form-control"
          onChange={handleFile}
        ></input>
        {pdfError && <span className="text-danger">{pdfError}</span>}
      </form>

      <h5>View PDF</h5>
      <div className="viewer">
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile}
            plugins={[defaultLayoutPluginInstance]}></Viewer>
          </Worker>
        )}

        {!pdfFile && <>No file is selected yet</>}
      </div>
    </div>
  );
}

export default UploadTutorial;
