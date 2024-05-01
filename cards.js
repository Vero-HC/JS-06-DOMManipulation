const CARDS_CONTAINER = document.querySelector("#card-container");
const USER = {
    id: 1,
    username: "User Name",
    desc: "Sobre mi",
    age: 27,
    fav_books: {
        books: ["Hush Hush", "Mírame y dispara", "After", "El principito", "La chica del tren",
        ],
    },
};


const card = document.createElement("div");
const name_section = document.createElement("h3");
const desc_section = document.createElement("p");
const age_section = document.createElement("p");
const book_section = document.createElement("div");

const booklist = USER.fav_books.books.map((e) => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
});

console.log(booklist);

 
name_section.textContent = USER.username;
desc_section.textContent = USER.desc;
age_section.textContent = USER.age;
book_section.append(...booklist);
card.append(name_section, desc_section, age_section, book_section); 

CARDS_CONTAINER.appendChild(card);