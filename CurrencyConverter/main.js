let BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
// const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
// let response = await fetch(URL);
// let data = await response.json();
// let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
// let finalAmount = amtVal * rate;
// msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
let msg=document.querySelector(".msg");
let fromCurr = document.querySelector(".from select");
// console.log(fromCurr);
let toCurr = document.querySelector(".to select");
const dropdowns=document.querySelectorAll(".dropdown select");
let btn=document.querySelector("button");


window.addEventListener("load",()=>{
    updateExchangeRate();

});
for(let select of dropdowns){
    for(let currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        // console.log(currCode);
        if(select.name === "from" && currCode === "USD" ){
            newOption.selected="selected";
        }else if(select.name === "to" && currCode === "INR" ){
            newOption.selected="selected";
        }
        select.appendChild(newOption);
        // console.log(currCode);
        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target);
        });
    }
}

const updateFlag=(evt)=>{
    let curr=evt.value;
    // console.log(countryList[curr]);
    let newSource=`https://flagsapi.com/${countryList[curr]}/flat/64.png`;
    let img= evt.parentElement.querySelector("img");
    img.src=newSource;
}


btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    updateExchangeRate();
})

const updateExchangeRate=async ()=>{
    let amt=document.querySelector(".ammount input");
    let amtValue=amt.value;
    //console.log(amtValue);
    if(amtValue == "" || amtValue<1){
        amtValue="1";
        amt.value="1";
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = amtValue * rate;
    msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

document.addEventListener("keydown", async (evt) => {
    if (evt.key === "Enter") {
        evt.preventDefault();
        updateExchangeRate();
    }
});