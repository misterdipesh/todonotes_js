let mynote_key='my_note_key';
let my_notes=localStorage.getItem(mynote_key)?
	JSON.parse(localStorage.getItem(mynote_key)):[];
window.onload=function(){
	getSavedNotes();
}
function onAddNote(){
	let myNote=document.getElementById('note').value;
	let note={};
	note.value=myNote;
	note.date=new Date();
	note.id=new Date().getTime();
	my_notes.push(note);
	localStorage.setItem(mynote_key,JSON.stringify(my_notes));
	document.getElementById('note').value='';
	getSavedNotes();
}
function getSavedNotes(){
	let notes=my_notes;
	let my_notes_html='';
	notes.forEach(function(val,index){
	if(val){
	my_notes_html=my_notes_html+
	`<div><p>${getUserReadableDate(val.date)}</p>
	<p>${val.value}</p>
	<div class="delete" onclick="deleteNote(`+index+`)" >Delete</div>
	</div>`
	//'<div> <p>'+getUserReadableDate(val.date)+'\n</p><p>'+val.value+
	//'\n</p>'+'<div class="delete" onclick="deleteNote(`+index+`)" >Delete</div>'+
	//'</div>'Error in comment: This doesn't pass index as variable'
	}
	});
	document.getElementById('savedNotes').innerHTML=my_notes_html;
}
function getUserReadableDate(date){
	let eng_month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
	let readableDate= new Date(date);
	return readableDate.getDate()+' '+eng_month[readableDate.getMonth()]+' '+
	readableDate.getFullYear()+' '+ readableDate.getHours()+':'
	+ readableDate.getMinutes();
}
function deleteNote(index){
	delete my_notes[index];
	localStorage.setItem(mynote_key,JSON.stringify(my_notes));
	getSavedNotes();
}
function onSearchNote(item){
	let searched_item =document.getElementById('searchText').value;
	let search= my_notes.filter(note=>note.value.toLowerCase()==searched_item.toLowerCase());
	getSearchNotes(search);
}
function getSearchNotes(notes){
	let notes=my_notes;
	let my_notes_html='';
	notes.forEach(function(val,index){
	if(val){
	my_notes_html=my_notes_html+
	`<div><p>${getUserReadableDate(val.date)}</p>
	<p>${val.value}</p>
	<div class="delete" onclick="deleteNote(`+index+`)" >Delete</div>
	</div>`
	}
	});
	document.getElementById('savedNotes').innerHTML=my_notes_html;
}