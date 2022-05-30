const contactsNameArr = [];
const contactsPhoneArr = [];
let counter = 0;

function removeContact(num) {
    let contactList = document.querySelector('#contactsList'),
        contact = document.querySelectorAll('li');

    contactList.removeChild(contact[num]);
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
    div1.textContent = contactsNameArr[counter];
    div2.textContent = contactsPhoneArr[counter];
    div3.innerHTML = `<button class="btn btn-secondary" onclick="removeContact(${counter})">Delete</button>`;
    contact.append(div1);
    contact.append(div2);
    contact.append(div3);
    document.querySelector('#contactsList').append(contact);
    counter += 1;
}