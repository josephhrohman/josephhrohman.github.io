window.onload = function () {

  let num = null;
  let a = 1;
  let b = 0.5;
  let c = 0.25;
  let d = 0.125;
  let e = 0.0625;
  let f = 0.03125;
  let g = 0.015625;
  let h = 0.0078125;
  let output = null;
  let hold = null;

  const valueList = [a, b, c, d, e, f, g, h];

  const modRunner2 = (num) => {
    num = document.getElementById('inputValue').value;
    hold = num%a;
    output = (num-hold)/a;
    document.getElementById("inputNumber").innerHTML = `${num}`;
    document.getElementById(valueList[0]).innerHTML = output;
    // document.getElementById('indicator').style.
    for (let i=1; i < valueList.length; i++) {
      num = hold;
      hold = num%valueList[i];
      output = (num-hold)/valueList[i];
      document.getElementById(valueList[i]).innerHTML = output;
    };
  }

  let run = document.getElementById("run");
  if (run.addEventListener)
      run.addEventListener("click", modRunner2, false);
  else if (run.attachEvent)
      run.attachEvent('onclick', modRunner2);
}