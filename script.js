

const editableText= document.getElementById('editable-text');

if(localStorage.getItem('savedText')){
  editableText.textContent=localStorage.getItem('savedText');
}


editableText.addEventListener('input', function(){

  localStorage.setItem('savedText',this.textContent);
})

