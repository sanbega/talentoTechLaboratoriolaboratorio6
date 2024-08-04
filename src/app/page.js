// "use client";
// import Head from "next/head";
// import { useState } from "react";
// import InputForm from "../components/InputForm";

// export default function Home() {
//   const [pageContent, setPageContent] = useState("");

//   return (
//     <div>
//       <Head>
//         <title>Solicitar Archivo</title>
//         <meta
//           name="description"
//           content="Formulario para solicitar un archivo"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="min-h-screen bg-gray-100 p-6">
//         <InputForm onLoadPage={setPageContent} />
//         {pageContent && (
//           <iframe
//             srcDoc={pageContent}
//             className="w-full h-screen mt-8 border"
//           ></iframe>
//         )}
//       </main>
//     </div>
//   );
// }
// "use client";
// import { useState } from "react";
import FileRequestForm from "../components/FileRequestForm";

export default function Home() {
  // const [iframeSrc, setIframeSrc] = useState("");

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        React y Next.js: Solicitud de Archivo
      </h1>
      <FileRequestForm />
    </div>
  );
}
