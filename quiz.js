let questions=[

{
q:"ما نوع الجملة: كتب الطالب الدرس",
a:["جملة اسمية","جملة فعلية","جملة تعجب","جملة استفهام"],
correct:1
},

{
q:"جمع كلمة مدرسة",
a:["مدارس","مدرسات","مدرسون","مدرستان"],
correct:0
},

{
q:"ضد كلمة طويل",
a:["قصير","كبير","صغير","بعيد"],
correct:0
},

{
q:"أي كلمة تحتوي همزة",
a:["قرأ","ذهب","كتب","جلس"],
correct:0
}

]

let current=0
let score=0

let startTime=Date.now()

let timerInterval

startTimer()

let buttons=document.querySelectorAll(".answer")

buttons.forEach((btn,i)=>{

btn.onclick=()=>choose(i)

})

loadQuestion()

function startTimer(){

timerInterval=setInterval(()=>{

let seconds=Math.floor((Date.now()-startTime)/1000)

let m=Math.floor(seconds/60)

let s=seconds%60

document.getElementById("timer").innerText=
m.toString().padStart(2,"0")+":"+s.toString().padStart(2,"0")

},1000)

}

function loadQuestion(){

let q=questions[current]

document.getElementById("question").innerText=q.q

q.a.forEach((ans,i)=>{

document.getElementById("a"+i).innerText=ans

})

}

function choose(i){

if(i===questions[current].correct){

score++

notify("إجابة صحيحة","success")

}else{

notify("إجابة خاطئة","error")

}

current++

if(current<questions.length){

setTimeout(loadQuestion,600)

}else{

clearInterval(timerInterval)

let time=(Date.now()-startTime)/1000

localStorage.setItem("score",score)

localStorage.setItem("time",time)

window.location="result.html"

}

}

function notify(msg,type){

let n=document.createElement("div")

n.className="notification "+type

n.innerHTML=msg

document.getElementById("notifications").appendChild(n)

setTimeout(()=>{

n.remove()

},2500)

}