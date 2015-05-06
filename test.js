var assert = require("assert");
var algurl = require("./index");

var url = require("url");
var querystring = require("querystring");

var assertQueryMatches = function(expected, actual) {
  var parsedUrl = url.parse(actual);
  var parsedQuery = querystring.parse(parsedUrl.query);
  assert.deepEqual(expected, parsedQuery);
};

describe("creating urls", function() {
  it("creates a url given a scramble and an alg", function() {
    assertQueryMatches({
      setup: "R_U_R-_U-",
      alg: "U_R_U-_R-"
    }, algurl({
      setup: "R U R' U'",
      alg: "U R U' R'"
    }));
  });

  it("sets the type based on isReconstruction and presence of setup", function() {
    assertQueryMatches({
      alg: "R_U_R-_U-",
      type: "reconstruction-end-with-setup"
    }, algurl({
      alg: "R U R' U'",
      isReconstruction: true
    }));

    assertQueryMatches({
      alg: "R_U_R-_U-",
      type: "alg"
    }, algurl({
      alg: "R U R' U'"
    }));
  });

  it("allows setting the puzzle and stage", function() {
    assertQueryMatches({
      setup: "R_U_R-_U-",
      puzzle: "2x2x2",
      stage: "WV"
    }, algurl({
      setup: "R U R' U'",
      puzzle: "2x2x2",
      stage: "WV"
    }));
  });
});
