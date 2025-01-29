function validate(){
    let name = document.getElementById("name").value;
    let surename1 = document.getElementById("Surename").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(surename1.length < 5){
      text = "Please Enter valid Surename";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 120){
      text = "Please Enter More Than 120 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }