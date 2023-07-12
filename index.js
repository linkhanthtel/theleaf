function joinwithus() {
    alert("Welcome to The Leaf");
}

function asksomething() {
    alert("Yes! Ask me anything!");
}

let btn = document.getElementById("btn");
let quote = document.getElementById("quotes");
let author = document.getElementById("author");

const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    }
  ];

function generatequotes() {
    const randomindex = Math.floor(Math.random() * quotes.length);
    const randomquotes = quotes[randomindex];
    document.getElementById("quote").innerHTML = randomquotes.quote;
    document.getElementById("author").innerHTML = `- ${randomquotes.author}`;
}


