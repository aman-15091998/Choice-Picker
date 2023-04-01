const textarea=document.querySelector('.textarea');
const choiceDiv=document.querySelector('.choices');
var newArray;

textarea.addEventListener('keyup', addChoice);

function addChoice(e){
    if(e.key!=='Enter')
    {
        const array=textarea.value.split(',');
        // const temp=array[array.length-1].split('\n');
       
        // array[array.length-1]=temp[0];
        newArray=[];
        let ind=0;
        
        array.forEach((element) => {
            if(element.trim()!=='')
            {
             newArray[ind]=element.trim();
             ind++;
            }
        });
        choiceDiv.innerHTML=``;
        newArray.forEach((element)=>{
            let newtag=document.createElement('span');
            newtag.classList='tag';
            newtag.innerHTML=element;
            choiceDiv.appendChild(newtag);
        });
    }
}

textarea.addEventListener('keypress', choose);


function choose(e){
    if(e.key==='Enter' && newArray.length!==0)
    {
        setTimeout(()=>{
             textarea.value=''},10);

        selectRandom(newArray);
    }


}

function selectRandom(newArray){
    let i=Math.floor(Math.random()*30);
    console.log(i);
    let select;
    let int=setInterval(()=>{ 
        let c=Math.floor(Math.random()*newArray.length);
            choiceDiv.children[c].classList.remove('tag');
            choiceDiv.children[c].classList.add('highlight');
            setTimeout(() => {
                choiceDiv.children[c].classList.add('tag');
                choiceDiv.children[c].classList.remove('highlight');    
            }, 100);
            i--;
        
    },100);

    setTimeout(() => {
        clearInterval(int);
        select=Math.floor(Math.random()*newArray.length);
        choiceDiv.children[select].classList.remove('tag');
        choiceDiv.children[select].classList.add('highlight');
    }, i*120);
        
}

