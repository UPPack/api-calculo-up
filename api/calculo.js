module.exports = function (req, res) {
  try {
    const query = req.query || {};

    const largura = parseFloat(query.largura);
    const altura = parseFloat(query.altura);

    if (isNaN(largura) || isNaN(altura)) {
      res.status(400).json({
        erro: "Use: ?largura=10&altura=5"
      });
      return;
    }

    const resultado = largura * altura;

    res.status(200).json({
      resultado: resultado
    });

  } catch (err) {
    res.status(500).json({
      erro: "Erro interno",
      detalhe: err.message
    });
  }
};
