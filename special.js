let landingPage=document.querySelector(".landing-page")
let myArray=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg",]
let setingsBox=document.querySelector(".setings-box")
let icon=document.querySelector(".ico")
let ii=document.querySelector(".fa-solid")
let btnYes=document.querySelector(".yes")
let colorList=document.querySelectorAll(".color-list li")
let random=document.querySelectorAll(".choose span")
let backgroundImage=true;
let interval;
let scro=document.querySelectorAll(".bullets .bull")
let links=document.querySelectorAll(".links a")
function go(link){
link.forEach((a)=>{
a.addEventListener("click",(e)=>{
document.querySelector(e.target.dataset.scr) .scrollIntoView({
        behavior:"smooth"
})
        })
})
}
go(scro)
go(links)
if(window.localStorage.getItem("color-option") !==null){
document.documentElement.style.setProperty("--min-color",window.localStorage.getItem("color-option"))
colorList.forEach((li)=>{
    li.classList.remove("active")

if(li.dataset.color===window.localStorage.getItem("color-option")){
li.classList.add("active")
}})}

if(window.localStorage.getItem("randoom")!==null){
    if(window.localStorage.getItem("randoom")==="true"){
        backgroundImage=true
    }else{
        backgroundImage=false
    }
    random.forEach((ele)=>{
ele.classList.remove("active")
if(window.localStorage.getItem("randoom")==="true"){
document.querySelector(".yes").classList.add("active")
}else{
    document.querySelector(".no").classList.add("active")
}

    })
}
icon.onclick=function(){
    setingsBox.classList.toggle("open");
    ii.classList.toggle("fa-spin");}

    colorList.forEach((li)=>{
        li.addEventListener("click",(e)=>{
            document.documentElement.style.setProperty("--min-color",e.target.dataset.color)
            window.localStorage.setItem("color-option",e.target.dataset.color)
            activee(e)
        })})
    // start random
    random.forEach((span)=>{
        span.addEventListener("click",(e)=>{
        activee(e)
            
            if(e.target.dataset.background==="yes"){
                backgroundImage=true
                randomaiz()
                window.localStorage.setItem("randoom",true)
            }else{
                backgroundImage=false
                clearInterval(interval)
                window.localStorage.setItem("randoom",false)
            }
        })
    })
function randomaiz(){
if(backgroundImage===true){
    interval= setInterval(()=>{
        let randomN=Math.floor(Math.random() * myArray.length)
        landingPage.style.backgroundImage='url("./media/' + myArray[randomN] + '")'
    },2000)
}
}
randomaiz()
let skills=document.querySelector(".skills")
if(window.localStorage.getItem("color-option")===null){
    document.documentElement.style.setProperty("--min-color","#04724D")
}
let up=document.querySelector(".up")

up.onclick=function(){
window.scrollTo({
    top:0,
    behavior:"smooth"
})}
this.onscroll=function(){
let ele=skills.offsetTop;
let elem=skills.offsetHeight;
let wind=window.innerHeight;
let windo=window.pageYOffset;
if(windo > (ele + elem - wind )){
    let span=document.querySelectorAll(".skills .content span")
    span.forEach((sp)=>{
sp.style.width=sp.dataset.scroll
up.classList.add("shwo")
    })
}else{
            up.classList.remove("shwo")}}
let allImg=document.querySelectorAll(".gallery img")
allImg.forEach((img)=>{
img.addEventListener("click",(e)=>{
let over=document.createElement("div")
over.className="x"
let popup=document.createElement("div")
popup.className="popup"
let pec=document.createElement("img")
pec.src=img.src
let span=document.createElement("span")
    span.className="xx"
    span.appendChild(document.createTextNode("X"))
    if(img.alt !== null){
        let hading=document.createElement("h3");
        hading.className="nnn"
        hading.appendChild(document.createTextNode(img.alt))
        popup.appendChild(hading)
    }
    popup.appendChild(pec)
    popup.appendChild(span)
document.body.appendChild(popup)
document.body.appendChild(over)
let vv=document.querySelector(".xx")
let zz=document.querySelector(".x")
vv.onclick=function(){
vv.parentElement.remove()
zz.remove()
}
})
})
function activee(ele){
    console.log(ele.target.parentElement.querySelectorAll(".active"))
        ele.target.parentElement.querySelectorAll(".active").forEach((w)=>{
        w.classList.remove("active")
    })
    ele.target.classList.add("active")
}
let bolSpan=document.querySelectorAll(".choosee span")
let bullets=document.querySelector(".bullets")
let getIte=localStorage.getItem("option-bull")
let y=document.querySelector(".choosee .yes")
let n= document.querySelector(".choosee .no")

if(getIte!==null){
    bolSpan.forEach((span)=>{
    span.classList.remove("active")
    })
if(getIte==="b"){
    bullets.style.display="block"
y.classList.add("active")

}else{
    bullets.style.display="none" 
    n.classList.add("active")
}
}
bolSpan.forEach((span)=>{
span.addEventListener("click",(e)=>{
    activee(e)
    if(e.target.dataset.display==="yes"){
        bullets.style.display="block"
        localStorage.setItem("option-bull","b")
    }else{
        bullets.style.display="none"
        localStorage.setItem("option-bull","n")
    }
})
})
let btn=document.querySelector(".button-86").onclick=function(){
    localStorage.removeItem("option-bull")
    localStorage.removeItem("randoom")
    localStorage.removeItem("color-option")
    window.location.reload()
}
let run=document.querySelector(".run")
let bb=document.documentElement.clientHeight
let cc=document.documentElement.scrollHeight
let result=cc-bb
this.addEventListener("scroll",function(){
    let top=document.documentElement.scrollTop
    run.style.width=`${top / result *100}%`
})
let menuActive=document.querySelector(".menu-active")
let menu=document.querySelector(".menu")
let op=document.querySelector(".toto")
let ox=document.querySelector(".links")
menu.onclick=function(e){
    e.stopPropagation()
    menu.classList.toggle("menu-active")
    op.classList.toggle("open")
    ox.classList.toggle("open")
}
document.addEventListener("click",(e)=>{
    if(e.target!==menu && e.target!==op){
        if(ox.classList.contains("open")){

            menu.classList.toggle("menu-active")
            op.classList.toggle("open")
            ox.classList.toggle("open")
        }
    }
})
op.onclick=function(e){
    e.stopPropagation()
}





