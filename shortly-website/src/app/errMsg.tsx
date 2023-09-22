'use client'

import { error } from 'console';
import React, { useEffect, useState } from 'react';

const input = document.getElementById('link-input') as HTMLInputElement;
const linkForm = document.getElementById('link-form') as HTMLFormElement;
const errMsg = document.getElementById('err-msg') as HTMLDivElement;
const btn = document.getElementById('shorten-btn') as HTMLButtonElement;

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
  var message = 'Shortening...';
  const setMessage = (msg:any) => {
    message = msg;
  }
  
  async function callShorten(){
    
    btn.innerHTML = message;
    await fetch("http://localhost:8080/api/home").then(
      response => response.json()
    ).then(
      data => {
        setMessage("Shorten");
        btn.innerHTML = message;
      }
    ).catch(error => {console.log(error)})
    setMessage("Shortening...");
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
        callShorten();
    }
}
