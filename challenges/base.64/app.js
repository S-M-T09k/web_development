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
  // console.log(copyText);
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); //for mobile devices

  navigator.clipboard.writeText(copyText);
  alert(`text copied: ${copyText}`);

}


const encoder = document.querySelector('.encoderContainer');
const encodedOutput = encoder.querySelector('.outputDisplay');
const encodeInput = encoder.querySelector('#encode');
const encodeBtn = encoder.querySelector('.encodeBtn');
const copyEncoded = encoder.querySelector('.copy');

const decoder = document.querySelector('.decoderContainer');
const decodedOutput = decoder.querySelector('.outputDisplay');
const decodeInput = decoder.querySelector('#decode');
const decodeBtn = decoder.querySelector('.decodeBtn');

const key = `I will think of something else later`;
let encryptedMsg = ``;

// console.log(encodedOutput);
// console.log(decodedOutput.value);

encodeBtn.addEventListener('click', () => {

  let msg = encodeInput.value;
  // console.log(msg);
  // encryptedMsg = encrypt(msg, key);
  encryptedMsg = toHex(msg);
  // console.log(encryptedMsg);
  encodedOutput.textContent = encryptedMsg;

});

copyEncoded.addEventListener('click', () => {

  copyToClipboard(encryptedMsg);

});