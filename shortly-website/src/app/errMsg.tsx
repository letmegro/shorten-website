'use client'
const input = document.getElementById('link-input') as HTMLInputElement;
const linkForm = document.getElementById('link-form') as HTMLFormElement;
const errMsg = document.getElementById('err-msg') as HTMLDivElement;

linkForm?.addEventListener('submit', formSubmit);

function checkUrl (string:any) {
    let givenURL ;
    try {
        givenURL = new URL (string);
    } catch (error) {
       return false; 
    }
    return true;
  }

function formSubmit(e:any){
    e.preventDefault();
    if(input.value === "" || !checkUrl(input.value)){
        errMsg.innerHTML = "Please enter a valid link";
        input.classList.add('border-red');
    }
    else{
        errMsg.innerHTML = "";
        input.classList.remove('border-red');
    }
}
