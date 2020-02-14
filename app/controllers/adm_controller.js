const AdmController = {
  index: (req, res, next) => {
    res.send([{id: 1, nome: "Danilo"}]);
  }
}

module.exports = AdmController;
