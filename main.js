let mynote_key='my_note_key';
window.onload=function(){
	getSavedNotes();
}
function onAddNote(){
let myNote=document.getElementById('note').value;//gets the value of textara note
localStorage.setItem(mynote_key,myNote);
getSavedNotes();
}
function getSavedNotes(){
	let notes=localStorage.getItem(mynote_key);
	document.getElementById('savedNotes').innerText=notes;
}