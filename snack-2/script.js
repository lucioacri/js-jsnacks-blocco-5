const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi

const personName = people.map((person) => person.name);
console.log(personName);

// Risultato: 'Paolo', 'Giulia', 'Marco'
