//// console.log(fromHex("736f6d657468696e6720492077616e6e612068696465"));


function fromHex(h) {
  var s = ''
  for (var i = 0; i < h.length; i += 2) {
    s += String.fromCharCode(parseInt(h.substr(i, 2), 16))
  }
  return decodeURIComponent(escape(s))
}

function toHex(s) {
  // utf8 to latin1
  var s = unescape(encodeURIComponent(s))
  var h = ''
  for (var i = 0; i < s.length; i++) {
    h += s.charCodeAt(i).toString(16)
  }
  return h
}

// Function to encrypt a message with a key
function encrypt(message, key) {
  let encryptedMessage = '';
  for (let i = 0; i < message.length; i++) {
    // XOR each character with the corresponding character in the key
    let charCode = message.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    encryptedMessage += String.fromCharCode(charCode);
  }
  return encryptedMessage;
}

// Function to decrypt an encrypted message with the same key
function decrypt(encryptedMessage, key) {
  return encrypt(encryptedMessage, key);
}

function copyToClipboard(copyText) {

  //select the text
  copyText.select();
  copyText.setSelectionRange(0, 99999); //for mobile devices

  navigator.clipboard.writeText(copyText.value);

}

const copyButtons = document.querySelectorAll('.copy');
const encoder = document.querySelector('.encoderContainer');
const decoder = document.querySelector('.decoderContainer');
const encodedOutput = encoder.querySelector('.outputDisplay');
const decodedOutput = decoder.querySelector('.outputDisplay');


copyButtons.forEach((btn) => {

  btn.addEventListener('click', () => { copyToClipboard(encodedOutput) });

});