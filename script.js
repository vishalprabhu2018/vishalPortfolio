


const arr=['HTML','CSS','JS', 'React'];
const arr2=['./assests/images/communication.png','./assests/images/creativity.png', './assests/images/decision-making.png', './assests/images/teamwork.png'];
const arr3=[{name:'bubble game', link:'https://vishalprabhu2018.github.io/bubbleGame/'}]
const arr4=['bubble game','google.com']

//skills card
function makeCard(arr){
let element='';

for(let i=0;i<arr.length;i++){
element+=`<div class='box' id='b1'> <h1> ${arr[i]} </h1> </div>`
}

document.querySelector('#cards').innerHTML=element;
}


//soft skills

function makeCard2(arr){
    let element2='';
    
    for(let i=0;i<arr.length;i++){
    element2+=`<div class='box' id='b2'> <img src=${arr[i]} alt="image not found" width="80%" height="80%"></img></div>`
    }
    
    document.querySelector('#cards2').innerHTML=element2;
    }
    
    //Projects
    function makeCard3(arr){

        element='';
        let op=arr.forEach((item)=>{
            element+=`<div class='box' id='b3'> <a href=${item.link} target='_blank'> ${item.name} </a> </div>`
        })
        
        // for(let i=0;i<arr.length;i++){
        // element+=`<div class='box' id='b3'> <a href=${arr[i]} target='_blank'> ${arrN[i]} </a> </div>`
        // }


        
        document.querySelector('#cards3').innerHTML=element;
        }
        




//Button works

const resume= document.querySelector('#resume');
const linkedIn=document.querySelector('#linkedIn');
const github=document.querySelector('#github');


    function buttonLink(){
        resume.addEventListener('click',()=>{
            window.open('./assests/resume/resume.pdf')
           });

        //    same as above resume code

        linkedIn.addEventListener('click',()=>{
            window.open('https://www.linkedin.com/in/prabhuvishal2018/')
           });

           
           github.addEventListener('click',()=>{
            window.open('https://github.com/vishalprabhu2018')
           });
           

        
    }





    //CDN
  
//     function sendMail(){
//     // smtpjs.com 
// //elastic email 
//  let name= document.getElementById("name").value;
//  let email=document.getElementById("email").value;
//  let message=document.getElementById("message").value;

//    let body=`Name:${name}<br>Email:${email} <br>Message: ${message} ` ;
//    console.log(body);
   
//         Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "prabhuvishal2019@gmail.com",
//         Password : "563D6496248CBADD6F8F391D501C376E73EB",
//         To : 'prabhuvishal2018@gmail.com',
//         From : 'prabhuvishal2019@gmail.com',
//         Subject : "Contact Me Form enquiry",
//         Body : "All  done"
//     }).then(
//       message => alert(message)
//     );
//     }

    buttonLink();
    makeCard(arr);
    makeCard2(arr2);
    makeCard3(arr3);