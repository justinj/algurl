algurl
======

Easily create URLs for [alg.cubing.net](https://alg.cubing.net/).


Usage
=====

```javascript
var algurl = require("algurl");

algurl({
  setup: "R U R' U'",
  alg: "U R U' R'"
});
// => https://www.alg.cubing.net/?setup=R_U_R-_U-&alg=U_R_U-_R-
```

API
===

##algurl(`<options object>`)

###options:

####`alg`

The algorithm being shared.

####`setup`

The setup to be applied to the cube before showing `alg`.

####`puzzle`

alg.cubing.net defaults to `"3x3x3"`.

The puzzle to show.
As of this writing, alg.cubing.net supports:

* `2x2x2`
* `3x3x3`
* `4x4x4`
* `5x5x5`
* `6x6x6`
* `7x7x7`
* `8x8x8`
* `9x9x9`
* `17x17x17`
* `1x1x1`

####`stage`

alg.cubing.net defaults to `"full"`.

The stage of the puzzle to show, will result in pieces being highlighted or greyed out as relevant.
Currently alg.cubing.net supports:

* `full`
* `PLL`
* `OLL`
* `LL`
* `F2L`
* `CLS`
* `ELS`
* `L6E`
* `WV`
* `void`

####`isReconstruction`

Default: `false`

If true, the `type` will be set to an appropriate value based on whether a `setup` was provided.
