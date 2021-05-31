const form = document.getElementById("form");
const email = document.getElementById("email");
const id = document.getElementById("clg-id");
const phone = document.getElementById("mobile");
const fullname = document.getElementById("fullname");
const textarea = document.getElementById("textarea");

const sendData = (sRate, count) => {
  if (count === sRate) alert("Registration Successfull");
  else usernameVal = "";
  emailVal = "";
  passwordVal = "";
  cpassword = "";
  phoneVal = "";
  textareaVal = "";
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

const successMsg = () => {
  let formCont = document.getElementsByClassName("form-control");
  let count = formCont.length - 1;
  for (let i = 0; i < formCont.length; i++) {
    if (formCont[i].className === "form-control success") {
      var sRate = 0 + i;
      sendData(sRate, count);
    } else return false;
  }
};

const validate = () => {
  const fullnameVal = fullname.value.trim();
  const emailVal = email.value.trim();
  const idVal = id.value.trim();
  const phoneVal = phone.value.trim();
  const textareaVal = textarea.value.trim();

  const isEmail = (emailVal) => {
    const atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    const dot = emailVal.lastIndexOf(".");
    if (dot < atSymbol + 2) return false;
    if (dot + 3 != emailVal.length - 1 && dot + 2 != emailVal.length - 1)
      return false;
    return true;
  };

  const isID = (idVal) => {
    if (idVal.length !== 9) return false;
    const value = parseInt(idVal, 10);
    if (value < 202120001) return false;
    if (value > 202120150) return false;
    if (value > 202120055 && value < 202120101) return false;
    return true;
  };

  if (fullnameVal === "") setErrorMsg(fullname, "name can't be blank");
  else if (fullnameVal.length <= 2)
    setErrorMsg(fullname, "name must be atleast 3 characters");
  else if (!fullnameVal.includes(" "))
    setErrorMsg(fullname, "please enter full name");
  else setSuccessMsg(fullname);

  if (emailVal === "") setErrorMsg(email, "email can't be blank");
  else if (!emailVal.match(/^[A-za-z0-9_@.]+$/i))
    setErrorMsg(email, "email only contain alphanumeric and @,.,_ only");
  else if (!isEmail(emailVal)) setErrorMsg(email, "not a valid email");
  else setSuccessMsg(email);

  if (idVal === "") setErrorMsg(id, "id can't be blank");
  else if (!isID(idVal)) setErrorMsg(id, "not a valid scholarid");
  else setSuccessMsg(id);

  if (phoneVal === "") setErrorMsg(phone, "number can't be blank");
  else if (phoneVal.length != 10) setErrorMsg(phone, "not a valid number");
  else setSuccessMsg(phone);

  if (textareaVal === "") setErrorMsg(textarea, "please give your feedback");
  else if (textareaVal.length > 50)
    setErrorMsg(textarea, "type your feedback within 50 words");
  else setSuccessMsg(textarea);
};

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

successMsg();
