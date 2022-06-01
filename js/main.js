const contactsNameArr = [];
const contactsPhoneArr = [];
let counter = 0;

function removeContact(num) {
    let contactList = document.querySelector('#contactsList'),
        contact = document.querySelector(`#li${num}`);

    contactList.removeChild(contact);
}

function saveContact() {
    let inputName = document.querySelector('#nameInput');
    contactsNameArr.push(inputName.value);

    let inputPhone = document.querySelector('#telInput');
    contactsPhoneArr.push(inputPhone.value);

    createLi();
    
}


function createLi() {
    let contact =  document.createElement('li'),
        div1 = document.createElement('div'),
        div2 = document.createElement('div'),
        div3 = document.createElement('div');
    contact.setAttribute("id", `li${counter}`);
    div1.textContent = contactsNameArr[counter];
    div2.textContent = contactsPhoneArr[counter];
    div2.innerHTML = `<a href="tel:+${contactsPhoneArr[counter]}">+${contactsPhoneArr[counter]}</a>`;
    div3.innerHTML = `<button class="btn btn-secondary" onclick="removeContact(${counter})">Delete</button>`;
    contact.append(div1);
    contact.append(div2);
    contact.append(div3);
    document.querySelector('#contactsList').append(contact);
    counter += 1;
}