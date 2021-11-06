
let radioform = document.forms[0];
let rating = 0;
const form2 = `1) How many letters are there in the word 
"World"? <br> <label> <input type="radio" name="word2">4<br>
</label><label><input type="radio" name="word2">5<br>
</label><button>Finish</button>`

radioform.addEventListener('submit', (e) => {
    e.preventDefault();
    let rad1 = document.getElementsByName('word1');
    if(rad1[0].checked)rating++;
    if(rad1[0].checked || rad1[1].checked)
    radioform.innerHTML = form2;
})
radioform.addEventListener('submit', (e) => {
    e.preventDefault();
let rad2 = document.getElementsByName('word2');
if(rad2[1].checked)++rating;
const form3 = `<p>Result: ${rating} correct answers to 2 questions</p>`;
if(rad2[0].checked || rad2[1].checked)
radioform.innerHTML = form3;
})
