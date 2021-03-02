`use strict`;

const mngr = new StorageManager(`test`, []);
const mngrArr = mngr.entries;


document.body.insertAdjacentHTML(`beforeend`, `<p>${
   mngr.entries.length
}</p>`);