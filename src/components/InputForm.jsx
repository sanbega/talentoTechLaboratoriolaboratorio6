// "use client";
// import { useState } from "react";
// import axios from "axios";

// const InputForm = () => {
//   const [filename, setFilename] = useState("");
//   const [method, setMethod] = useState("GET");
//   const [content, setContent] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios({
//         method: method.toLowerCase(),
//         url: `/api/file?name=${filename}`,
//       });
//       setContent(response.data);
//     } catch (error) {
//       console.error("Error fetching file:", error);
//       setContent("Error fetching file.");
//     }
//   };

//   return (
//     <div className="max-w-md p-6 mx-auto space-y-4 bg-white shadow-md rounded-xl">
//       <h1 className="mb-4 text-2xl font-bold">Solicitar Archivo</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="filename" className="block mb-1 text-sm font-medium">
//             Nombre del archivo:
//           </label>
//           <input
//             type="text"
//             id="filename"
//             name="filename"
//             value={filename}
//             onChange={(e) => setFilename(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="method" className="block mb-1 text-sm font-medium">
//             Método de solicitud HTTP:
//           </label>
//           <select
//             id="method"
//             name="method"
//             value={method}
//             onChange={(e) => setMethod(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//           >
//             <option value="GET">GET</option>
//             <option value="POST">POST</option>
//           </select>
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
//         >
//           Enviar
//         </button>
//       </form>
//       {content && (
//         <div className="p-4 mt-4 border border-gray-200 rounded-md">
//           <h2 className="mb-2 text-lg font-semibold">Contenido del Archivo:</h2>
//           <iframe
//             srcDoc={content}
//             title="Contenido del Archivo"
//             className="w-full h-64 border border-gray-300"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default InputForm;
// components/InputForm.js
import { useState } from "react";
import axios from "axios";

export default function InputForm({ setIframeSrc }) {
  const [filename, setFilename] = useState("");
  const [method, setMethod] = useState("GET");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (method === "GET") {
        response = await axios.get(`/api/file?filename=${filename}`);
      } else {
        response = await axios.post("/api/file", { filename });
      }
      setIframeSrc(
        `data:text/html;charset=utf-8,${encodeURIComponent(response.data)}`
      );
    } catch (error) {
      console.error("Error fetching file:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="filename"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre de página HTML
        </label>
        <input
          type="text"
          id="filename"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="method"
          className="block text-sm font-medium text-gray-700"
        >
          Método de solicitud HTTP
        </label>
        <select
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
}
