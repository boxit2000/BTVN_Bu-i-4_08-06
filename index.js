import loadData from "./loadData.js";
loadData();

// updateData()
import add from "./add.js";
let btn_add = document.getElementById('btn-add');
btn_add.addEventListener('click', () => {
    add();
});

import deleData from "./delete.js";
let btn_delete = document.getElementById('btn-delete');
btn_delete.addEventListener('click', () => {
   deleData();
});

import updateData from "./update.js"
let btn_update = document.getElementById('btn-update');
btn_update.addEventListener('click', () => {
   updateData();
});





