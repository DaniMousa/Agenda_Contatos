const form = document.getElementById('formContatos');
const nome = [];
const telephoneCamp = [];

let lines = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLine();
    updateTable();
})

function addLine() {
    const inputNamePerson = document.getElementById('namePerson');
    const inputTelephone = document.getElementById('telephone');

    if (telephoneCamp.includes (inputTelephone.value)) {
        alert (`Telefone ${inputTelephone.value} já foi inserido.`);
    } else {
        telephoneCamp.push(inputTelephone.value);

        let line = '<tr>';
        line += `<td class="nameInputted">${inputNamePerson.value}</td>`;
        line += `<td>${inputTelephone.value}</td>`;
        line += '</tr>';

        lines += line;

        inputNamePerson.value ='';
        inputTelephone.value ='';
    }
}

function updateTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = lines
}