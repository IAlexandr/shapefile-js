define(['shp/jszip/support','shp/jszip/compressions'], function(support,compressions) {
	var utils = {};
	/**
	 * Convert a string to a "binary string" : a string containing only char codes between 0 and 255.
	 * @param {string} str the string to transform.
	 * @return {String} the binary string.
	 */
	utils.string2binary = function(str) {
		var result = "";
		for (var i = 0; i < str.length; i++) {
			result += String.fromCharCode(str.charCodeAt(i) & 0xff);
		}
		return result;
	};
	/**
	 * Create a Uint8Array from the string.
	 * @param {string} str the string to transform.
	 * @return {Uint8Array} the typed array.
	 * @throws {Error} an Error if the browser doesn't support the requested feature.
	 */
	utils.string2Uint8Array =  function (str) {
         return utils.transformTo("uint8array", str);
      };

	/**
	 * Create a string from the Uint8Array.
	 * @param {Uint8Array} array the array to transform.
	 * @return {string} the string.
	 * @throws {Error} an Error if the browser doesn't support the requested feature.
	 */
	utils.uint8Array2String = function (array) {
         return utils.transformTo("string", array);
      };
	/**
	 * Create a blob from the given string.
	 * @param {string} str the string to transform.
	 * @return {Blob} the string.
	 * @throws {Error} an Error if the browser doesn't support the requested feature.
	 */
	utils.string2Blob = function (str) {
         var buffer = utils.transformTo("arraybuffer", str);
         return utils.arrayBuffer2Blob(buffer);
      };
	utils.arrayBuffer2Blog=function(buffer) {
		utils.checkSupport("blob");

         try {
            // Blob constructor
            return new Blob([buffer], { type: "application/zip" });
         }
         catch(e) {

         try {
            // deprecated, browser only, old way
            var builder = new (window.BlobBuilder || window.WebKitBlobBuilder ||
                               window.MozBlobBuilder || window.MSBlobBuilder)();
            builder.append(buffer);
            return builder.getBlob('application/zip');
         }
         catch(e) {
         	
         	// well, fuck ?!
         throw new Error("Bug : can't construct the Blob.");
         }
}
         

	};
/**
    * The identity function.
    * @param {Object} input the input.
    * @return {Object} the same input.
    */
   function identity(input) {
      return input;
   };

   /**
    * Fill in an array with a string.
    * @param {String} str the string to use.
    * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to fill in (will be mutated).
    * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated array.
    */
   function stringToArrayLike(str, array) {
      for (var i = 0; i < str.length; ++i) {
         array[i] = str.charCodeAt(i) & 0xFF;
      }
      return array;
   };

   /**
    * Transform an array-like object to a string.
    * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
    * @return {String} the result.
    */
   function arrayLikeToString(array) {
      // Performances notes :
      // --------------------
      // String.fromCharCode.apply(null, array) is the fastest, see
      // see http://jsperf.com/converting-a-uint8array-to-a-string/2
      // but the stack is limited (and we can get huge arrays !).
      //
      // result += String.fromCharCode(array[i]); generate too many strings !
      //
      // This code is inspired by http://jsperf.com/arraybuffer-to-string-apply-performance/2
      var chunk = 65536;
      var result = [], len = array.length, type = utils.getTypeOf(array), k = 0;

      while (k < len && chunk > 1) {
         try {
            if (type === "array" || type === "nodebuffer") {
               result.push(String.fromCharCode.apply(null, array.slice(k, Math.max(k + chunk, len))));
            } else {
               result.push(String.fromCharCode.apply(null, array.subarray(k, k + chunk)));
            }
            k += chunk;
         } catch (e) {
            chunk = Math.floor(chunk / 2);
         }
      }
      return result.join("");
   };

   /**
    * Copy the data from an array-like to an other array-like.
    * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayFrom the origin array.
    * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayTo the destination array which will be mutated.
    * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated destination array.
    */
   function arrayLikeToArrayLike(arrayFrom, arrayTo) {
      for(var i = 0; i < arrayFrom.length; i++) {
         arrayTo[i] = arrayFrom[i];
      }
      return arrayTo;
   };

   // a matrix containing functions to transform everything into everything.
   var transform = {};

   // string to ?
   transform["string"] = {
      "string" : identity,
      "array" : function (input) {
         return stringToArrayLike(input, new Array(input.length));
      },
      "arraybuffer" : function (input) {
         return transform["string"]["uint8array"](input).buffer;
      },
      "uint8array" : function (input) {
         return stringToArrayLike(input, new Uint8Array(input.length));
      },
      "nodebuffer" : function (input) {
         return stringToArrayLike(input, new Buffer(input.length));
      }
   };

   // array to ?
   transform["array"] = {
      "string" : arrayLikeToString,
      "array" : identity,
      "arraybuffer" : function (input) {
         return (new Uint8Array(input)).buffer;
      },
      "uint8array" : function (input) {
         return new Uint8Array(input);
      },
      "nodebuffer" : function (input) {
         return new Buffer(input);
      }
   };

   // arraybuffer to ?
   transform["arraybuffer"] = {
      "string" : function (input) {
         return arrayLikeToString(new Uint8Array(input));
      },
      "array" : function (input) {
         return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
      },
      "arraybuffer" : identity,
      "uint8array" : function (input) {
         return new Uint8Array(input);
      },
      "nodebuffer" : function (input) {
         return new Buffer(new Uint8Array(input));
      }
   };

   // uint8array to ?
   transform["uint8array"] = {
      "string" : arrayLikeToString,
      "array" : function (input) {
         return arrayLikeToArrayLike(input, new Array(input.length));
      },
      "arraybuffer" : function (input) {
         return input.buffer;
      },
      "uint8array" : identity,
      "nodebuffer" : function(input) {
         return new Buffer(input);
      }
   };

   // nodebuffer to ?
   transform["nodebuffer"] = {
      "string" : arrayLikeToString,
      "array" : function (input) {
         return arrayLikeToArrayLike(input, new Array(input.length));
      },
      "arraybuffer" : function (input) {
         return transform["nodebuffer"]["uint8array"](input).buffer;
      },
      "uint8array" : function (input) {
         return arrayLikeToArrayLike(input, new Uint8Array(input.length));
      },
      "nodebuffer" : identity
   };

   /**
    * Transform an input into any type.
    * The supported output type are : string, array, uint8array, arraybuffer, nodebuffer.
    * If no output type is specified, the unmodified input will be returned.
    * @param {String} outputType the output type.
    * @param {String|Array|ArrayBuffer|Uint8Array|Buffer} input the input to convert.
    * @throws {Error} an Error if the browser doesn't support the requested output type.
    */
   utils.transformTo = function (outputType, input) {
      if (!input) {
         // undefined, null, etc
         // an empty string won't harm.
         input = "";
      }
      if (!outputType) {
         return input;
      }
      utils.checkSupport(outputType);
      var inputType = utils.getTypeOf(input);
      var result = transform[inputType][outputType](input);
      return result;
   };

   /**
    * Return the type of the input.
    * The type will be in a format valid for JSZip.utils.transformTo : string, array, uint8array, arraybuffer.
    * @param {Object} input the input to identify.
    * @return {String} the (lowercase) type of the input.
    */
   utils.getTypeOf = function (input) {
      if (typeof input === "string") {
         return "string";
      }
      if (input instanceof Array) {
         return "array";
      }
      if (support.nodebuffer && Buffer.isBuffer(input)) {
         return "nodebuffer";
      }
      if (support.uint8array && input instanceof Uint8Array) {
         return "uint8array";
      }
      if (support.arraybuffer && input instanceof ArrayBuffer) {
         return "arraybuffer";
      }
   };

   /**
    * Throw an exception if the type is not supported.
    * @param {String} type the type to check.
    * @throws {Error} an Error if the browser doesn't support the requested type.
    */
   utils.checkSupport = function (type) {
      var supported = true;
      switch (type.toLowerCase()) {
         case "uint8array":
            supported = support.uint8array;
         break;
         case "arraybuffer":
            supported = support.arraybuffer;
         break;
         case "nodebuffer":
            supported = support.nodebuffer;
         break;
         case "blob":
            supported = support.blob;
         break;
      }
      if (!supported) {
         throw new Error(type + " is not supported by this browser");
      }
   };
	utils.MAX_VALUE_16BITS = 65535;
   utils.MAX_VALUE_32BITS = -1; // well, "\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF" is parsed as -1

   /**
    * Prettify a string read as binary.
    * @param {string} str the string to prettify.
    * @return {string} a pretty string.
    */
   utils.pretty = function (str) {
      var res = '', code, i;
      for (i = 0; i < (str||"").length; i++) {
         code = str.charCodeAt(i);
         res += '\\x' + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
      }
      return res;
   };

   /**
    * Find a compression registered in JSZip.
    * @param {string} compressionMethod the method magic to find.
    * @return {Object|null} the JSZip compression object, null if none found.
    */
   utils.findCompression = function (compressionMethod) {
      for (var method in compressions) {
         if( !compressions.hasOwnProperty(method) ) { continue; }
         if (compressions[method].magic === compressionMethod) {
            return compressions[method];
         }
      }
      return null;
   };
	return utils;
});