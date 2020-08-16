const toffee = `<image src="./toffee.png" class="toffee"/>`;
totalToffee = (n) => {
  if (n < 0) {
    n = n * -1;
  }
  let toffeeAdd = "";
  for (var i = 1; i <= n; i++) {
    toffeeAdd = toffeeAdd + toffee;
    if (i != n) toffeeAdd = toffeeAdd + "+";
  }
  toffeeAdd = toffeeAdd + " = " + n;
  document.getElementById("tableNtoffee").innerHTML = toffeeAdd;
};

toffeeCalculate = (n, t) => {
  t = t >= 10 ? 10 : t;
  t = t <= 0 ? 1 : t;
  n = n >= 10 ? 10 : n;
  n = n <= 0 ? 1 : n;

  let totalTof = "";
  let toffeeuse = toffee;
  for (var i = 1; i <= n; i++) {
    totalTof = totalTof + toffeeuse;
  }

  totalTof = totalTof + " = " + n;

  let addTo = "<div class='editstyletoffee'>" + totalTof + "</div>";
  let toffeeAdd = "";
  for (var i = 1; i <= t; i++) {
    toffeeAdd = toffeeAdd + addTo;
    if (i != t) toffeeAdd = toffeeAdd + "+ ";
  }

  toffeeAdd = toffeeAdd + `<p>Total Number of toffees = ${n * t}</p>`;
  document.getElementById("toffeeCalculate").innerHTML = toffeeAdd;
};

tableget = (n) => {
  if (!n || n <= 0) {
    n = 2;
    document.getElementById("inputNum").value = "2";
  }
  if (n >= maximumTable) {
    n = 10;
    document.getElementById("inputNum").value = "10";
  }
  let rows = "";
  for (var i = 1; i <= tableMaxLength; i++) {
    rows =
      rows +
      `<tr>
      <td>${n}</td>
      <td>*</td>
      <td>${i}</td> 
      <td>=</td>
      <td>${n * i}</td>
    </tr>`;
  }
  let table = `
    <table style="width:15%">
    ${rows}
  </table>`;
  document.getElementById("tablesShows").innerHTML = table;
  totalToffee(n);
};
tableget(2);

function validateInput(idpass) {
  let t = document.getElementById(idpass).value;
  t = t > 10 ? 10 : t;
  t = t < 0 ? 1 : t;
  document.getElementById(idpass).value = t;
}
