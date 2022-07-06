function displayList() {
  const fruits = document.getElementById('fruits').innerText.split('\n\n');

  let change = '<ul>';

  fruits.forEach(fruit => {
    change += '<li>' + fruit + '</li>';
  })

  change += '</ul>';

  document.getElementById('fruits').innerHTML = change;
}
