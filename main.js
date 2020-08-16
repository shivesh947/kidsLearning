const signArr = TypeSign;
const diff1 = Maxa;
const diff2 = Maxb;

const mathsolver = () => {
  let a = Math.floor(Math.random() * Math.floor(diff1));
  let op = signArr[Math.floor(Math.random() * Math.floor(signArr.length - 1))];
  let b = Math.floor(Math.random() * Math.floor(diff2));
  let ex = a + op + b;
  document.getElementById("matha").innerHTML = a;
  document.getElementById("mathoperatoe").innerHTML = op;
  document.getElementById("mathb").innerHTML = b;
  document.getElementById("correctMathAns").value = eval(ex);
  document.getElementById("mathans").value = "";
  document.getElementById("checkAnsIcon").src = "./questionMark.png";
};

const mathcheck = () => {
  var x = document.getElementById("correctMathAns").value;
  var y = document.getElementById("mathans").value;
  if (x == y) {
    document.getElementById("checkAnsIcon").src = "./tick.svg";
    setTimeout(mathsolver, 1000);
  } else {
    document.getElementById("checkAnsIcon").src = "./cross.svg";
  }
};
mathsolver();

// const removeTimer = () => {
//   clearInterval(vartimer);
//   document.getElementById("screen2").innerHTML = "";
//   document.getElementById("screen3").style.display = "block";
// };
