let emali = document.querySelector(".emali")
let password = document.querySelector(".password")
let NumberPhone = document.querySelector(".Number1")

reload = function(){

}



if (emali = "Admin@123") {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      localStorage.setItem(emali, "emali");
}
else {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}


if (password = "12345") {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      localStorage.setItem(password, "password");
}
else {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}


if (NumberPhone = "01123693911") {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      localStorage.setItem(NumberPhone, "NumberPhone");


}
else {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}