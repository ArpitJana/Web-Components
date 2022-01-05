let item = document.getElementsByClassName("item");
let btnToggle = document.getElementsByClassName("btn-toggle");
let number = document.getElementsByClassName("number");
let title = document.getElementsByClassName("title");
let icon = document.getElementsByClassName("icon");
let content = document.getElementsByClassName("content");

for (let i = 0; i < btnToggle.length; i++) {
  btnToggle[i].addEventListener("click", () => {
    if (parseInt(content[i].style.height) != content[i].scrollHeight) {
      content[i].style.height = content[i].scrollHeight + "px";
      icon[i].style.transform = "rotate(180deg)";
      number[i].style.color = "#6741d9";
      title[i].style.color = "#6741d9";
      icon[i].style.color = "#6741d9";
      btnToggle[i].style.backgroundColor = "#f3f0ff";
    } else {
      content[i].style.height = "0px";
      icon[i].style.transform = "rotate(360deg)";
      number[i].style.color = "#adb5bd";
      title[i].style.color = "#343a40";
      icon[i].style.color = "#343a40";
      btnToggle[i].style.backgroundColor = "white";
    }

    console.log(parseInt(content[i].style.height));
    console.log(content[i].scrollHeight);

    for (let j = 0; j < content.length; j++) {
      if (j !== i) {
        content[j].style.height = "0px";
        icon[j].style.transform = "rotate(360deg)";
        number[j].style.color = "#adb5bd";
        title[j].style.color = "#343a40";
        icon[j].style.color = "#343a40";
        btnToggle[j].style.backgroundColor = "white";
      }
    }
  });
}
