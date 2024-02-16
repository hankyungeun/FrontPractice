function changeTotal(){
    let total = document.getElementById("total");
    let hobbies = document.getElementsByName("hobby");
    for(let hobby of hobbies){
        hobby.checked = total.checked;
    }
}

function trigger(){
    let total = document.getElementById("total");
    let hobbies = document.getElementsByName("hobby");
    for(hobby of hobbies){
        if(!hobby.checked){
            total.checked = false;
        }
    }
}


function selectCategory() {
    let hobby = document.getElementsByName("hobby");
    let show = document.getElementById("show");
    show.innerHTML = '';
    for(i = 1; i < hobby.length; i++){
        if(hobby[i].checked){
            // show.value += hobby[i].value;
            show.innerHTML += hobby[i].value + " ";
        }
    }
}