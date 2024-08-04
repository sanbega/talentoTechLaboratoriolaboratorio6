"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetchFile from "../../utils/fetchFile";

const RequestPage = () => {
  const router = useRouter();
  const { filename } = router.query;
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    if (filename) {
      fetchFile(filename)
        .then((content) => setFileContent(content))
        .catch((error) => console.error("Error fetching file:", error));
    }
  }, [filename]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contenido del Archivo</h1>
      <iframe
        srcDoc={fileContent}
        title="Archivo HTML"
        style={{ width: "100%", height: "600px", border: "none" }}
      />
    </div>
  );
};

export default RequestPage;
