/**
 * @providesModule lib-bitcoin
 */

global.Random = require('random-js')

import "./shim";

const Bitcoin = require("bitcoinjs-lib");
import { ECPair } from 'bitcoinjs-lib'
var BigInteger = require('bigi')
var ecurve = require('ecurve')
var secp256k1 = ecurve.getCurveByName('secp256k1')

ECPair.makeRandom = function (options) {
  options = options || {}

  function myRng(n) {
    var buf = new Buffer(n)
    var random = new Random(Random.engines.mt19937().autoSeed())
    var num = random.int32();
    buf.fill(num)
    return buf
  }

  var d
  do {
    var buffer = myRng(32)
    d = BigInteger.fromBuffer(buffer)
  } while (d.signum() <= 0 || d.compareTo(secp256k1.n) >= 0)

  return new ECPair(d, null, options)
}

module.exports = Bitcoin