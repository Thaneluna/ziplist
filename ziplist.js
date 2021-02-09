const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

function zipList(listOne, listTwo) {
  const listedTogether = [];
  for (let i = 0; i < listOne.length && listTwo.length; i++) {
    listedTogether.push(listOne[i], listTwo[i]);
  }
  return listedTogether;
}

console.log(zipList(letters, numbers));

function zipListTheSimpleWay(listOne, listTwo) {
  return _.flatten(_.zip(listOne, listTwo));
}

console.log(zipListTheSimpleWay(letters, numbers));
