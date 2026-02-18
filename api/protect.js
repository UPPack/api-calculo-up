import fs from "fs";
import path from "path";

export default async function handler(req, res) {

  try {

    const referer = req.headers.referer || "";

    const dominioPermitido = "uppack.com.br";

    // Bloqueio
    if (!referer.includes(dominioPermitido)) {
      return res.status(403).send(`
        <html>
          <body style="font-family:Arial;text-align:center;margin-top:100px;">
            <h2>Acesso restrito</h2>
          </body>
        </html>
      `);
    }

    // Lê o HTML manualmente
    const filePath = path.join(process.cwd(), "public/index.html");

    const html = fs.readFileSync(filePath, "utf8");

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);

  } catch (error) {

    console.error("Erro protect:", error);

    res.status(500).send("Erro interno");
  }
}
