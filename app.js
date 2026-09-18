let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let ans = document.getElementById("ans");
let select = document.getElementById("select");
let ranNum = Math.floor(Math.random()*10)+1;

btn.addEventListener("click",()=>{
    console.log(select.value);
    console.log(inp.value);
    console.log(ranNum);
    if(select.value === "Easy") {
        easy(ranNum);
    }
    else if(select.value === "Medium") {
        medNum(ranNum);
    }
    else {
        HadNum(ranNum);
    }
});

function easy(ranNum) {
    
        if(ranNum==inp.value) {
            console.log("WIn");
            ans.innerText = "Right guess, Congrats";
        }
        else if(inp.value<ranNum) {
            console.log("lesser");
             ans.innerText = `Number ${inp.value} is lesser`;
        }
        else {
            console.log("greater");
            ans.innerText = `Number ${inp.value} is greater`;
        }
    
}

function medNum(ranNum) {
    
        if(ranNum==inp.value) {
            console.log("WIn");
            ans.innerText = "Right guess, Congrats";
        }
        else if(inp.value<ranNum) {
            console.log("lesser");
            ans.innerText = `Number ${inp.value} is lesser`;
        }
        else {
            console.log("greater");
            ans.innerText = `Number ${inp.value} is greater`;
        }
    
}

function HadNum(ranNum) {

        if(ranNum==inp.value) {
            console.log("Win");
            ans.innerText = "Right guess, Congrats";
        }
        else if(inp.value<ranNum) {
            console.log("lesser");
            ans.innerText = `Number ${inp.value} is lesser`;
        }
        else if(inp.value>ranNum ) {
            console.log("greater");
            ans.innerText = `Number ${inp.value} is greater`;
        }
       else {
        console.log("Invalid");
       }
}