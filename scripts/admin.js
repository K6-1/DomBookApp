
window.onload=()=>
    {
    getData();
};
let form=document.getElementById("form");
form.addEventListener("submit",async function () {
    event.preventDefault
    let title=form.title.valueOf;
    let optionA=form.fiction.value;
    let optionB=form.comedy.value;
    let optionC=form.technical.value;
    let correctOption=form.select.value;
})
try{
   await fetch(`${baseUrl}/books`,{
    method :"Post",
    headers:{
        "content-type":
        "application/json",
    },
    body:JSON.stringify(bookObj),
   }) ;
   alert("Book Added Successfully");
   form.reset();
};

let button=getElementById("vb")
button.addEventListener("submit",async function () {
    prompt("Are you sure to Verify..?")
    if(prompt==yes){
        alert("is Verified");
        status:true
    }
    button.disabled=true
});
let button2=getElementById("de")
button.addEventListener("submit",async function () {
    prompt("Are you sure to Delete..?")
    if(prompt==yes){
      deletebook.getElementById
    }
    button2.disabled=true;
})