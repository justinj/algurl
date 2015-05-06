var url = require("url");

var urlifyAlg = function(alg) {
  return alg.replace(/'/g, "-").replace(/ /g, "_");
};

module.exports = function(options) {
  var queryObj = {};

  if (options.hasOwnProperty("alg")) {
    queryObj.alg = urlifyAlg(options.alg);
  }

  if (options.hasOwnProperty("puzzle")) {
    queryObj.puzzle = options.puzzle;
  }

  if (options.hasOwnProperty("stage")) {
    queryObj.stage = options.stage;
  }


  if (options.hasOwnProperty("isReconstruction")) {
    if (options.hasOwnProperty("setup")) {
      queryObj.setup = urlifyAlg(options.setup);
      queryObj.type = "reconstruction"
    } else {
      queryObj.type = "reconstruction-end-with-setup";
    }
  } else {
    if (options.hasOwnProperty("setup")) {
      queryObj.setup = urlifyAlg(options.setup);
    } else {
      queryObj.type = "alg";
    }
  }

  return url.format({
    protocol: "https",
    host: "www.alg.cubing.net/",
    query: queryObj
  });
};
