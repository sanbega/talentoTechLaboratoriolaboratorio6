// import fs from "fs";
// import path from "path";

// export default function handler(req, res) {
//   const { name } = req.query;

//   if (!name || !["pag1.html", "pag2.html"].includes(name)) {
//     return res
//       .status(400)
//       .json({ error: "Nombre del archivo es requerido o inválido." });
//   }

//   const filePath = path.resolve(process.cwd(), "public", name);

//   if (!fs.existsSync(filePath)) {
//     return res.status(404).json({ error: "Archivo no encontrado." });
//   }

//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return res.status(500).json({ error: "Error al leer el archivo." });
//     }

//     res.status(200).send(data);
//   });
// }
// pages/api/file.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { filename } = req.body;

  const filePath = path.join(process.cwd(), "public", filename);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf8");
    res.status(200).send(fileContent);
  } else {
    res.status(404).json({ error: "File not found" });
  }
}
