var AESUtil = new function() {
	var e = this;

	e.encrypt = function(inputStr, phoneKey) {
		var key = CryptoJS.enc.Utf8.parse(phoneKey);
        var iv = CryptoJS.enc.Hex.parse("0000000000000000");
        var options = { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 };

        var encrypted = CryptoJS.AES.encrypt(inputStr, key, options).ciphertext.toString(CryptoJS.enc.Base64);
		return encrypted;
	};

	e.decrypt = function(base64Str, phoneKey) {
		var key = CryptoJS.enc.Utf8.parse(phoneKey);
        var iv = CryptoJS.enc.Hex.parse("0000000000000000");
        var options = { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 };

        var decrypted = CryptoJS.AES.decrypt(base64Str, key, options).toString(CryptoJS.enc.Utf8);
        return decrypted;
	};
};