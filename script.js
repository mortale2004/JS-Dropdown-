let boxes = document.getElementsByClassName("ans");
boxes = Array.from(boxes);
const toggle = document.getElementsByClassName("fa-plus");

Array.from(toggle).forEach((element, index) => {
    element.addEventListener("click", ()=>{
        if (boxes[index].classList.contains("show"))
        {   
            boxes.forEach((e)=>{
                element.innerText = "-";
                e.classList.add("show");
            })


            boxes[index].classList.remove("show");
        }
        else
        {
            
            element.innerText = "+";
            boxes[index].classList.add("show");  
        }
    })
});