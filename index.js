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

module.exports = {
	toFloats: function (a, b, c, e) {
		if (e === 0) return [0, 0, 0];

		var m = expTable[e];

		return [a * m, b * m, c * m];
	},
	fromFloats: function (a, b, c) {
		var v = max(a, b, c);

		if (v < 1e-38) return [0, 0, 0, 0];

		var e = ceil(log(v) / LN2) + 1;
		var m =  v / expTable[e + 136] * 256 / v;

		return [floor(a * m), floor(b * m), floor(c * m), e + 128];
	}
};
