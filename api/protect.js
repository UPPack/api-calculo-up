import path from "path";

export default function handler(req, res) {

  // De onde veio o acesso
  const referer = req.headers.referer || "";

  // Domínio autorizado (UP Pack)
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

  // Caminho do HTML
  const filePath = path.join(process.cwd(), "public/index.html");

  // Envia o conteúdo
  res.sendFile(filePath);
}

