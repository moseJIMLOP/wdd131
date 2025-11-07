const input = document.querySelector('#favchap');
const buttom = document.querySelector('buttom');
const list = document.querySelector('#chaplist');


button.addEventListener('click', () => {
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        deleteButton.textContent = '✖️';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.textContent = input.value + " ";
        li.append(deleteButton);
        list.append(li);

        input.value = "";
        input.focus();
    }
});