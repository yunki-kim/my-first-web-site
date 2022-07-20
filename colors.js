var Links = {
  setColor: function (color) {
    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  },
};
var Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};
function nightDayHandler(self) {
  if (self.value === "Night") {
    Body.setBackgroundColor("#121212");
    Body.setColor("white");
    Links.setColor("white");
    self.value = "Day";
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    Links.setColor("black");
    self.value = "Night";
  }
}
