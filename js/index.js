// INPUT NAMA
var nickname = prompt("Masukkan nama kamu");
document.getElementById("nama").innerText = nickname;

// CURRENT TIME
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

// FORM VALIDASI
function validateForm() {
  var name = document.forms["message-form"]["full-name"].value;
  var date = document.forms["message-form"]["birth-date"].value;
  var gender = document.forms["message-form"]["gender"].value;
  var messages = document.forms["message-form"]["messages"].value;

  if (name == "" || date == "" || gender == "" || messages == "") {
    alert("nama tidak boleh kosong");
    return false;
  }

  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = date;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
  console.log(name, date, gender, messages);
  // console.log({name});
  return false;
}