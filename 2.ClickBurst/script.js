

function getRandomColor() {
  return `rgb(${Math.floor(Math.random()*256)}, 
              ${Math.floor(Math.random()*256)}, 
              ${Math.floor(Math.random()*256)})`;
}



document.body.addEventListener("click",(event)=>{
    const circle=document.createElement("div");
    circle.className='circle';
    const text=["Hi","Hola","Welcome","Bonjour","Namaste",'Hey There!'];
    circle.textContent=text[Math.floor(Math.random()*text.length)];


    const x=event.clientX;
    const y=event.clientY;

    circle.style.left=`${x-25}px`
    circle.style.top=`${y-25}px`

    //const color=["red","yellow","blue","orange","purple","green", "white",'wheat']
    //circle.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
    circle.style.backgroundColor=getRandomColor();
    document.body.appendChild(circle);
    setTimeout(()=>{
        circle.remove();
    },5000)
})
