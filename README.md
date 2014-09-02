# MMME-ENCODING

Convert between RGB or XYZ (where each channel is a floating poing value) and RGBE and XYZE (where each channel is a byte) pixel formats, respectively.

`MMME` stands for Mantissa-Mantissa-Mantissa-Exponent and it allows you to encode 3 floating point values in just 32bits of storage with acceptable accuracy by sharing a single exponent value. This encoding was first used by HDR (or radiance PIC) file format for the storage of high dynamic range image data in a compact form.

## Contents

* [Installation](#install)

* [Basic Usage](#basic-usage)

* [Versions](#versions)

* [License](#license---mit)

## Install

````bash
npm install mmme-encoding
````

..then `require` mmme-encoding:

````javascript
var mmmeEncoding = require('mmme-encoding');
````

## Basic Usage

```javascript
var mmmeEncoding = require('mmme-encoding');

var rgbColor = [1.2, 22.5, 1.9];

var rgbeColor = mmmeEncoding.fromFloats.apply(null, rgbColor);

rgbeColor; //=> [ 4, 90, 7, 134 ]

mmmeEncoding.toFloats.apply(null, rgbeColor); //=> [ 1, 22.5, 1.75 ]

//- Notice that the decoded values are close but NOT exactly the original values
//- This is a natural limitation of trying to store 24 bytes of data in just 4 bytes
```

## Versions

* [v0.5.0](https://github.com/imbcmdth/mmme-encoding/archive/v0.5.0.zip) Initial public release

## License - MIT

> Copyright (C) 2013 Jon-Carlos Rivera
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
