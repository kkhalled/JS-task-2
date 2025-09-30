// var quotes = {
//   1: {
//     quote: "bismallah allah akber",
//     author: "khaled",
//   },
// };

// var num=1;

// function genrateQuote() {

//   document.getElementById("quote").innerText = quotes[1].quote;
//   document.getElementById("author").innerHTML = quotes[num].author;
//   return num;
// }

//  genrateQuote();

var quotes = [
  {
    quote: `"The best revenge is massive success."`,
    author: "--Frank Sinatra",
  },
  {
    quote: `"It's not what happens to you, but how you react to it that matters."`,
    author: "--Epictetus",
  },
  {
    quote: `"Resentment is like drinking poison and waiting for your enemies to die."`,
    author: "--Nelson Mandela",
  },
  {
    quote: `"Do not take life too seriously. You will not get out alive."`,
    author: "--Elbert Hubbard",
  },
  {
    quote: `"You miss 100% of the shots you don't take."`,
    author: "--Wayne Gretzy",
  },
];

function genrateQuote() {
  var num = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").innerText = quotes[num].quote;
  document.getElementById("author").innerText = quotes[num].author;

  console.log(num);
}
