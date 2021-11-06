
const loginform = document.forms[0];

loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = e.target.elements[0].value;
    let message = e.target.elements[1].value
    View.insertAdjacentHTML('beforebegin', `<div class="newMessage"><div>${name} <span>${Date()}</span></div><div class="message">${message}</div></div>`);
    loginform.reset();
})