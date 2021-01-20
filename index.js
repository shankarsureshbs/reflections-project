const employeeName = document.getElementById("employeeName");
const employeeId = document.getElementById("employeeId");
const employeeDesignation = document.getElementById("employeeDesignation");
const employeeEmail = document.getElementById("employeeEmail");

const modal = document.getElementById("modal");
const form = document.getElementById("employeeForm");
const modalClose = document.getElementById("modal-close");

form.addEventListener('submit', e => {
    e.preventDefault();
    formValidation();
})

function formValidation() {
    if(employeeName.value.trim() === ""){
        errorMsg(employeeName, "* Name cannot be blank.");
    }
    if(employeeId.value.trim() === ""){
        errorMsg(employeeId,"* ID cannot be blank.");
    }
    if(employeeEmail.value.trim()===""){
        errorMsg(employeeEmail,"* Email cannot be blank.")
    }else if(!emailCheck(employeeEmail.value.trim())){
        errorMsg(employeeEmail, "* Email is not valid.")
    }
    if(employeeDesignation.value.trim() === ""){
        errorMsg(employeeDesignation,"* Designation cannot be blank.")
    }
   if(employeeName.value.trim()&&employeeId.value.trim()&&employeeDesignation.value.trim()&&employeeEmail.value.trim()){
        modal.classList.add("modal-bg-active");
   }      
}


function emailCheck(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function errorMsg(value, msg){
    const formControl  = value.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = msg;
    formControl.className = "container error-field";
}

modalClose.addEventListener("click",closeModal);
function closeModal(){
    modal.className = "app-modal-bg d-flex justify-content-center align-items-center ";
}

