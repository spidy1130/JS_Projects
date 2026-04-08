const quizData = [
  {
    question: "Who has the most centuries in international cricket?",
    options: ["Virat Kohli","Sachin Tendulkar","Ricky Ponting","Viv Richards"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which country won the first ICC Cricket World Cup?",
    options: ["Australia","England","West Indies","India"],
    answer: "West Indies"
  },
  {
    question: "Who is known as the God of Cricket?",
    options: ["Virat Kohli","Sachin Tendulkar","Brian Lara","Jacques Kallis"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which country has won the most ICC Cricket World Cups?",
    options: ["India","Australia","England","Pakistan"],
    answer: "Australia"
  },
  {
    question: "Who was the captain of India in the 2007 T20 World Cup?",
    options: ["MS Dhoni","Sourav Ganguly","Rahul Dravid","Virender Sehwag"],
    answer: "MS Dhoni"
  },
  {
    question: "Which stadium is known as the Home of Cricket?",
    options: ["MCG","Eden Gardens","Lord's","Wankhede"],
    answer: "Lord's"
  },
  {
    question: "Who holds the highest individual score in ODI cricket?",
    options: ["Rohit Sharma","Martin Guptill","Chris Gayle","Virat Kohli"],
    answer: "Rohit Sharma"
  },
  {
    question: "Who has taken the most wickets in Test cricket?",
    options: ["Muttiah Muralitharan","Shane Warne","James Anderson","Anil Kumble"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Which country hosted the 2011 ICC Cricket World Cup final?",
    options: ["India","Sri Lanka","Bangladesh","England"],
    answer: "India"
  },
  {
    question: "Who scored the fastest century in ODI cricket?",
    options: ["AB de Villiers","Corey Anderson","Shahid Afridi","Chris Gayle"],
    answer: "AB de Villiers"
  },
  {
    question: "Who was the first cricketer to score 10,000 runs in ODIs?",
    options: ["Sachin Tendulkar","Sunil Gavaskar","Ricky Ponting","Brian Lara"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which bowler is known as the Sultan of Swing?",
    options: ["Wasim Akram","Waqar Younis","James Anderson","Dale Steyn"],
    answer: "Wasim Akram"
  },
  {
    question: "Who hit six sixes in an over in T20 World Cup?",
    options: ["Yuvraj Singh","Chris Gayle","Kieron Pollard","AB de Villiers"],
    answer: "Yuvraj Singh"
  },
  {
    question: "Which team won the 2019 ICC Cricket World Cup?",
    options: ["England","New Zealand","India","Australia"],
    answer: "England"
  },
  {
    question: "Who is known as Captain Cool?",
    options: ["MS Dhoni","Virat Kohli","Rohit Sharma","Steve Smith"],
    answer: "MS Dhoni"
  },
  {
    question: "Who scored 400 runs in a single Test innings?",
    options: ["Brian Lara","Sachin Tendulkar","Virat Kohli","Ricky Ponting"],
    answer: "Brian Lara"
  },
  {
    question: "Which country is called the Proteas?",
    options: ["South Africa","Australia","England","New Zealand"],
    answer: "South Africa"
  },
  {
    question: "Who has the most runs in T20 internationals?",
    options: ["Virat Kohli","Rohit Sharma","Babar Azam","Martin Guptill"],
    answer: "Virat Kohli"
  },
  {
    question: "Who was the first captain to win all ICC trophies?",
    options: ["MS Dhoni","Ricky Ponting","Clive Lloyd","Imran Khan"],
    answer: "MS Dhoni"
  },
  {
    question: "Which country won the 1992 Cricket World Cup?",
    options: ["Pakistan","England","India","Australia"],
    answer: "Pakistan"
  },
  {
    question: "Who is known as the Rawalpindi Express?",
    options: ["Shoaib Akhtar","Wasim Akram","Waqar Younis","Brett Lee"],
    answer: "Shoaib Akhtar"
  },
  {
    question: "Which Indian player is known as Hitman?",
    options: ["Rohit Sharma","Virat Kohli","KL Rahul","Shikhar Dhawan"],
    answer: "Rohit Sharma"
  },
  {
    question: "Who has the most sixes in international cricket?",
    options: ["Chris Gayle","Rohit Sharma","Shahid Afridi","MS Dhoni"],
    answer: "Chris Gayle"
  },
  {
    question: "Which team won the inaugural T20 World Cup?",
    options: ["India","Pakistan","Australia","England"],
    answer: "India"
  },
  {
    question: "Who is the fastest bowler in cricket history?",
    options: ["Shoaib Akhtar","Brett Lee","Shaun Tait","Jeff Thomson"],
    answer: "Shoaib Akhtar"
  },
  {
    question: "Who has the most double centuries in ODIs?",
    options: ["Rohit Sharma","Sachin Tendulkar","Virender Sehwag","Chris Gayle"],
    answer: "Rohit Sharma"
  },
  {
    question: "Which country won the 1983 World Cup?",
    options: ["India","West Indies","England","Australia"],
    answer: "India"
  },
  {
    question: "Who is known as Mr. 360?",
    options: ["AB de Villiers","Virat Kohli","Steve Smith","Joe Root"],
    answer: "AB de Villiers"
  },
  {
    question: "Who is the leading run scorer in Test cricket?",
    options: ["Sachin Tendulkar","Ricky Ponting","Jacques Kallis","Brian Lara"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which country won the 2003 Cricket World Cup?",
    options: ["Australia","India","South Africa","England"],
    answer: "Australia"
  }
];
function RandomQuestion(){
    // const data=new Set();
    // while(data.size!=5){
    //     const index=Math.floor(Math.random()*quizData.length);
    //     data.add(quizData[index]);

    // }
    // //set into array
    // return [...data];
    
     //randomly sort
    //  quizData.sort(()=>Math.random()-0.5);
    //  return quizData.slice(0,5);
    const arr=[];
    let length=quizData.length;
    for(let i=0;i<5;i++)
    {
        const index=Math.floor(Math.random()*length);
        arr.push(quizData[index]);
        [quizData[index],quizData[length-1]]=[quizData[length-1],quizData[index]];
        length--
    }
    return arr;
    
}
const form=document.querySelector("form");
const problem=RandomQuestion();


const original_answer={};



problem.forEach((obj,index)=>{
    const div_element=document.createElement("div");
    div_element.className='question';
    original_answer[`q${index+1}`]=obj['answer'];

    const p=document.createElement("p");
    p.textContent=`${index+1}. ${obj['question']}`;
    div_element.appendChild(p);
    //create four options
    obj['options'].forEach((data)=>{
        const label=document.createElement('label');
        const input=document.createElement('input');
        input.type='radio';
        input.name=`q${index+1}`;
        input.value=data;
        label.appendChild(input);
        label.appendChild(document.createTextNode(data));
        div_element.appendChild(label); 
        div_element.appendChild(document.createElement("br"));

    })
    form.appendChild(div_element);

})
const btn=document.createElement('button')
btn.type="submit";
btn.className='submit-btn';
btn.textContent='Submit';
form.appendChild(btn);
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = new FormData(form);
   
    let result=0;
    for(let [key,value] of data.entries())
    {
        if(value===original_answer[key])
            result++;
    }
    console.log(result);
    const output=document.getElementById('out')
    output.innerText=`${result} out of 5 is correct`
})











