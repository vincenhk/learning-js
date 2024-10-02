let array = ["a", "b", "c", 1];

array.push("4");
console.log(array);

document.writeln(array);
delete array[0];

document.writeln("<p>" + array + "</p>");
console.table(array);

let shwOI = {};

shwOI.firstName = "Vincentius";
shwOI.midName = "Hendri";
shwOI.lastName = "Kurniawan";

document.writeln("<p>" + shwOI.firstName + "</p>");

console.table(shwOI);

let showII = {
  firstName: "Vincentius",
  midName: "Hendri",
  lastName: "Kurniawan",
};

console.table(showII);
