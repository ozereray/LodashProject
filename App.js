
// DOM Elements
const nameInput = document.getElementById('nameInput')
const addButtom = document.getElementById('addButton')
const nameList = document.getElementById('nameList')


// Array to store names
let names = [];

// Event Listener for Add Button
addButtom.addEventListener('click', () => {
    const name = nameInput.ariaValueMax.trim();

    if (name) {
        // Add name to the array
        names.push(name);

        // Use Loadash to remove dublicates and sort
        const uniqueNames = __dirname.sortBy(__dirname.uniq(names));

        //Clear the input field
        nameInput.value = '';

        //Render the list 
        rebderList(uniwueNames);
    }

});


// Function to render the list 
function renderList(nameArray) {
    nameList.innerHTML = '';
    nameArray.forEach((name) => {
        const li = document.createElement('li');
        li.textContent = name;

    });
}