["name","handle","text"].forEach((id)=>{
  let el = document.querySelector(`#user${id}`)
  el.addEventListener("input", (event)=>{
     let input = event.target.value;
     let target = document.querySelector(`#user-${id}`);
     target.innerText = input;
  })
});

["picture", "media"].forEach((id)=>{
  let el = document.querySelector(`#user${id}`)
  el.addEventListener("input", (event)=>{ 
     let target = document.querySelector(`#user-${id}`);
     target.setAttribute("src", URL.createObjectURL(this.event.target.files[0]))   
  })
});

var button = document.querySelector("#download")
var element = document.querySelector("#container")

button.addEventListener("click", (event)=>{
  html2canvas(element).then(function(canvas) {
    var getCanvas = canvas;
    const link = document.createElement('a');
    link.download = new Date();
    link.href = getCanvas.toDataURL("image/jpeg") //link.href = getCanvas.toDataURL("image/png") for better quality
  link.click();
  });         
}) 
