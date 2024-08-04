import { useState } from "react";
import InputForm from "../components/InputForm";

export default function Home() {
  const [iframeSrc, setIframeSrc] = useState("");

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Cargar Página HTML</h1>
      <InputForm setIframeSrc={setIframeSrc} />
      {iframeSrc && (
        <iframe
          src={iframeSrc}
          title="HTML Preview"
          className="mt-8 w-full h-96 border border-gray-300"
        />
      )}
    </div>
  );
}
