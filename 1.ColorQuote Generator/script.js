




const quotes = [
  "Discipline is choosing what you want most over what you want now.",
  "Success is built on consistency, not intensity.",
  "Small improvements every day lead to massive results.",
  "You don’t rise to your goals; you fall to your systems.",
  "Comfort is the enemy of progress.",
  "Do the hard work, especially when you don’t feel like it.",
  "Dreams don’t work unless you do.",
  "Your future is created by what you do today, not tomorrow.",
  "Excuses are the nails used to build a house of failure.",
  "Focus on progress, not perfection.",
  "Winners are not people who never fail, but people who never quit.",
  "The pain of discipline is less than the pain of regret.",
  "Action beats overthinking every time.",
  "Success starts with self-belief.",
  "If it’s important, you’ll find a way; if not, you’ll find an excuse.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Your habits shape your future.",
  "Stay consistent, results will follow.",
  "Growth begins where comfort ends.",
  "Don’t wait for opportunity—create it."
];


// function generateQuotes(){
//     const  qt=document.getElementById("quote");
//     const index=Math.floor(Math.random()*quotes.length);
//     qt.textContent=quotes[index];

// }
// setInterval(generateQuotes,5000);



function getRandomColor() {
  return `rgb(${Math.floor(Math.random()*256)}, 
              ${Math.floor(Math.random()*256)}, 
              ${Math.floor(Math.random()*256)})`;
}

// setInterval(() => {
//   document.body.style.backgroundColor = getRandomColor();

// }, 5000);
const btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
    const  qt=document.getElementById("quote");
    const index=Math.floor(Math.random()*quotes.length);
    qt.textContent=quotes[index];
    //document.body.style.backgroundColor = getRandomColor();
})
// document.addEventListener("keydown",()=>{
//     document.body.style.backgroundColor = getRandomColor();
// })
document.addEventListener("keydown",(event)=>{
    console.log(event);
    if(event.key=="Enter")
       document.body.style.backgroundColor = getRandomColor();
})




