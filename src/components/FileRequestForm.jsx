import { useState } from "react";
import axios from "axios";

const FileRequestForm = () => {
  const [filename, setFilename] = useState("");
  const [method, setMethod] = useState("GET");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method,
        url: `/api/file`,
        params: { filename },
      });

      window.location.href = `/request?filename=${filename}`;
    } catch (err) {
      setError("Error al solicitar el archivo.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="filename" className="block text-lg font-medium">
          Nombre del Archivo
        </label>
        <input
          type="text"
          id="filename"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="method" className="block text-lg font-medium">
          Método de Solicitud
        </label>
        <select
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Solicitar Archivo
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default FileRequestForm;
