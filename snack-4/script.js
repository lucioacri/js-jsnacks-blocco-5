const posts = [
  { author: "Marco", date: "12/3/2021", content: "lorem ipsum..." },
  { author: "Luca", date: "30/6/2021", content: "lorem ipsum..." },
  { author: "Fabrizio", date: "12/9/2020", content: "lorem ipsum..." },
  { author: "Enrico", date: "09/12/2021", content: "lorem ipsum..." },
];

// Crea un nuovo array coi nomi di tutti gli autori

const authorNames = posts.map((person) => person.author);
console.log(authorNames);

// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']
