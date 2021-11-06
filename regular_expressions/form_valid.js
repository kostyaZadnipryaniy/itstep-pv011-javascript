let oldColor = new Array('YELLOWGREEN', 'DARKCYAN', 'ORANGERED');


document.addEventListener('submit', (e) => {
    
let newColor = document.getElementById('color').value;
let type = document.getElementById('type').value;
let code = document.getElementById('code').value;
let hexDiv = `<div style="background-color:${code}" id=${newColor}>${newColor} <br> ${type} <br> ${code}</div>`;
let rgbDiv = `<div style="background-color: rgb(${code})" id=${newColor}>${newColor} <br> ${type} <br> ${code}</div>`;
let rgbaDiv = `<div style="background-color: rgba(${code})" id=${newColor}>${newColor} <br> ${type} <br> ${code}</div>`;
for (const some of oldColor) {if(newColor.toUpperCase() == some.toUpperCase()){alert('errrrror'); return 0}else{}};
switch(type){
    case 'RGB': if(!/^(([0-1]?[0-9]?[0-9])|([2][0-4][0-9])|(25[0-5]))[,](([0-1]?[0-9]?[0-9])|([2][0-4][0-9])|(25[0-5]))[,](([0-1]?[0-9]?[0-9])|([2][0-4][0-9])|(25[0-5]))$/gm.test(code)){alert('errrror RGB');return 0}else{oldColor.push(newColor); document.forms[0].insertAdjacentHTML('beforeend', rgbDiv);};break
    case 'RGBA': if(!/^(([0-1]?[0-9]?[0-9])|([2][0-4][0-9])|(25[0-5]))[,](([0-1]?[0-9]?[0-9])|([2][0-4][0-9])|(25[0-5]))[,](([0-1]?[0-9]?[0-9])|([2][0-4][0-9])|(25[0-5]))[,](0|1|[0]\d*)(\.[0-9]{0,1})?/.test(code)){alert('errrror RGBA');return 0}else{oldColor.push(newColor); document.forms[0].insertAdjacentHTML('beforeend', rgbaDiv);};break
    case 'HEX' : if(!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/gm.test(code)){alert('errrror HEX');return 0}else{oldColor.push(newColor); document.forms[0].insertAdjacentHTML('beforeend', hexDiv);};break
}
e.preventDefault();
oldColor.push(newColor); document.forms[0].insertAdjacentHTML('beforeend', newDiv);
})





//#hex: ^#(?:[A-Fa-f0-9]{3}){1,2}$

//rgb(): ^(?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}$

//rgba(): ^^rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$ DEMO

