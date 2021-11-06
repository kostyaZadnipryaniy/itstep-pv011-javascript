

let fontStyle = document.forms[0];

fontStyle.addEventListener('submit', (e)=>{
    e.preventDefault();
paragraph.innerHTML = null;
    paragraph.insertAdjacentHTML('afterbegin', `Result: ${document.getElementById('textArea').value}`)
 if(document.getElementById('Underline').checked){
    document.getElementById('paragraph').style.textDecoration = 'underline'
 }else{document.getElementById('paragraph').style.textDecoration = 'none'};
 if(document.getElementById('Italic').checked){
     document.getElementById('paragraph').style.fontStyle = 'italic'
    }else{document.getElementById('paragraph').style.fontStyle = 'normal'}
 if(document.getElementById('Bold').checked){
     document.getElementById('paragraph').style.fontWeight = "bolder"
 }else{document.getElementById('paragraph').style.fontWeight = "normal"}
 
 let align = document.getElementsByName('align');
 for (let i = 0; i < align.length; i++) {
     if(align[i].checked)
     document.getElementById('paragraph').style.textAlign = `${align[i].value}`;  
 }
}) 

