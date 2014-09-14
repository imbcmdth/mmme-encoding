var max = Math.max;
var pow = Math.pow;
var log = Math.log;
var LN2 = Math.LN2;
var floor = Math.floor;
var ceil = Math.ceil;
var expTable = (function() {
	var a = [];
	for(var i = -136; i < 120; i++) {
		a.push(pow(2, i));
	}
	return a;
})();

// NOTE
// Not passing in a result is VERY SLOW because allocating typed-arrays isn't the fastest operation
// So always pass in a pre-allocated typed array if you don't want to die of old age waiting for the
// operation to complete.

module.exports = {
	toFloats: function (input, result) {
		var e = input[3];
		result = result || new Float32Array(3);

		if (e === 0) {
			return allZeros(result);
		}

		var m = expTable[e];

		result[0] = input[0] * m;
		result[1] = input[1] * m;
		result[2] = input[2] * m;

		return result;
	},

	fromFloats: function (input, result) {
		result = result || new Uint8ClampedArray(4);
		var a = input[0];
		var b = input[1];
		var c = input[2];

		var v = max(a, b, c);

		if (v < 1e-38) {
			return allZeros(result);
		}

		var e = ceil(log2(v)) + 1;
		var m =  v / expTable[e + 136] * 256 / v;

		result[0] = floor(a * m);
		result[1] = floor(b * m);
		result[2] = floor(c * m);
		result[3] =  e + 128;

		return result;
	}
};

function allZeros (result) {
	result[0] = result[1] = result[2] = 0;

	if (result.length > 3) {
		result[3] = 0;
	}

	return result;
}

function log2 (n) { return log(n) / LN2; }
