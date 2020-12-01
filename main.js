let mynote_key='my_note_key';
let my_notes=[];
window.onload=function(){
	getSavedNotes();
}
function onAddNote(){
	let myNote=document.getElementById('note').value;
	let note={};
	note.value=myNote;
	note.date=new Date();
	my_notes.push(note);

	localStorage.setItem(mynote_key,JSON.stringify(my_notes));
	
	getSavedNotes();
}
function getSavedNotes(){
	let notes=localStorage.getItem(mynote_key);
	let my_notes_html='';

	
	JSON.parse(notes).forEach(function(val){
	my_notes_html=my_notes_html+
	'<div> <p>'+val.date+'\n</p><p>'+val.value+'\n</p></div>'
	});
	document.getElementById('savedNotes').innerHTML=my_notes_html;
}