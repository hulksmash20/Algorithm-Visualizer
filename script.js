function generateArray() {
  var area = document.getElementsByClassName("bar-area")[0];
  while (area.firstChild) {
    area.removeChild(area.firstChild);
  }
  for (var i = 0; i < 20; i++) {
    value = Math.floor(Math.random() * 100) + 10;
    var bar = document.createElement("div");
    bar.classList.add("bars");
    bar.style.height = `${value * 4}px`;
    bar.style.transform = `translateX(${i * 38}px)`;
    var lab = document.createElement("label");
    lab.classList.add("bar-val");
    lab.innerHTML = value;
    bar.appendChild(lab);
    document.getElementsByClassName("bar-area")[0].appendChild(bar);
  }
}

async function linearSearch(number) {
  if (!number) {
    alert("Please Enter a Number Before Searching");
    return;
  }
  var buttons = document.getElementsByClassName("btns");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].style.backgroundColor = "crimson";
  }

  var bars = document.getElementsByClassName("bars");

  for (var i = 0; i < 20; i++) {
    bars[i].style.backgroundColor = "rgb(127, 209, 73)";
  }

  for (var i = 0; i < 20; i++) {
    bars[i].style.backgroundColor = "red";

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );

    if (parseInt(bars[i].firstChild.innerHTML) == number) {
      bars[i].style.backgroundColor = "green";
      break;
    } else {
      bars[i].style.backgroundColor = "rgb(127, 209, 73)";
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].style.backgroundColor = "rgb(17, 17, 17)";
  }
}

async function binarySearch(number) {
  if (!number) {
    alert("Please Enter a Number Before Searching");
    return;
  }
  var bars = document.getElementsByClassName("bars");
  var buttons = document.getElementsByClassName("btns");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].style.backgroundColor = "crimson";
  }

  var arrayBars = Array.from(bars);

  sortedbars = arrayBars.sort(sorter);
  function sorter(a, b) {
    if (parseInt(a.firstChild.innerHTML) < parseInt(b.firstChild.innerHTML))
      return -1;
    if (parseInt(a.firstChild.innerHTML) > parseInt(b.firstChild.innerHTML))
      return 1;
    return 0;
  }

  var area = document.getElementsByClassName("bar-area")[0];

  for (var i = 0; i < 20; i++) {
    area.removeChild(area.firstChild);
  }
  for (var i = 0; i < 20; i++) {
    sortedbars[i].style.transform = `translateX(${i * 38}px)`;
    sortedbars[i].style.backgroundColor = "rgb(127, 209, 73)";
    document.getElementsByClassName("bar-area")[0].appendChild(sortedbars[i]);
  }
  sortedbars = document.getElementsByClassName("bars");
  var low = 0;
  var high = 19;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    sortedbars[low].style.backgroundColor = "darkblue";
    sortedbars[high].style.backgroundColor = "darkblue";
    sortedbars[mid].style.backgroundColor = "red";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 500)
    );
    if (parseInt(sortedbars[mid].firstChild.innerHTML) == number) {
      sortedbars[mid].style.backgroundColor = "green";
      break;
    } else {
      sortedbars[mid].style.backgroundColor = "rgb(127, 209, 73)";
      sortedbars[low].style.backgroundColor = "rgb(127, 209, 73)";
      sortedbars[high].style.backgroundColor = "rgb(127, 209, 73)";
      if (number < parseInt(sortedbars[mid].firstChild.innerHTML)) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 500)
    );
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].style.backgroundColor = "rgb(17, 17, 17)";
  }
}

async function selectionSort() {
  var bars = document.getElementsByClassName("bars");

  var buttons = document.getElementsByClassName("btns");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].style.backgroundColor = "crimson";
  }

  var min = 0;
  for (var i = 0; i < 20; i++) {
    min = i;
    bars[min].style.backgroundColor = "red";

    for (var j = i + 1; j < 20; j++) {
      var val1 = parseInt(bars[j].firstChild.innerHTML);
      var val2 = parseInt(bars[min].firstChild.innerHTML);
      bars[j].style.backgroundColor = "darkblue";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );
      if (val1 < val2) {
        bars[min].style.backgroundColor = "rgb(127, 209, 73)";
        min = j;
        bars[min].style.backgroundColor = "red";
        bars[i].style.backgroundColor = "purple";
      } else {
        bars[j].style.backgroundColor = "rgb(127, 209, 73)";
      }
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );
    var temp1 = bars[i].firstChild.innerHTML;
    var temp2 = bars[i].style.height;
    bars[i].firstChild.innerHTML = bars[min].firstChild.innerHTML;
    bars[i].style.height = bars[min].style.height;
    bars[min].firstChild.innerHTML = temp1;
    bars[min].style.height = temp2;
    bars[min].style.backgroundColor = "rgb(127, 209, 73)";
    bars[i].style.backgroundColor = "green";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].style.backgroundColor = "rgb(17, 17, 17)";
  }
}

async function bubbleSort() {
  var bars = document.getElementsByClassName("bars");
  var buttons = document.getElementsByClassName("btns");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].style.backgroundColor = "crimson";
  }

  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 20 - i - 1; j++) {
      var val1 = parseInt(bars[j].firstChild.innerHTML);
      var val2 = parseInt(bars[j + 1].firstChild.innerHTML);
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "darkblue";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 500)
      );
      if (val1 > val2) {
        var temp1 = bars[j].firstChild.innerHTML;
        var temp2 = bars[j].style.height;
        bars[j].firstChild.innerHTML = bars[j + 1].firstChild.innerHTML;
        bars[j].style.height = bars[j + 1].style.height;
        bars[j + 1].firstChild.innerHTML = temp1;
        bars[j + 1].style.height = temp2;
        bars[j].style.backgroundColor = "rgb(127, 209, 73)";
        bars[j + 1].style.backgroundColor = "red";
      }
      bars[j].style.backgroundColor = "rgb(127, 209, 73)";
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 500)
    );
    bars[j].style.backgroundColor = "green";
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].style.backgroundColor = "rgb(17, 17, 17)";
  }
}

async function insertionSort() {
  var bars = document.getElementsByClassName("bars");

  var buttons = document.getElementsByClassName("btns");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].style.backgroundColor = "crimson";
  }
  var i, key, j;
  for (i = 1; i < 20; i++) {
    key = parseInt(bars[i].firstChild.innerHTML);
    var height = bars[i].style.height;
    j = i - 1;
    bars[i].style.backgroundColor = "red";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 500)
    );
    while (j >= 0 && parseInt(bars[j].firstChild.innerHTML) > key) {
      bars[j].style.backgroundColor = "darkblue";
      bars[j + 1].firstChild.innerHTML = bars[j].firstChild.innerHTML;
      bars[j + 1].style.height = bars[j].style.height;
      j = j - 1;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 500)
      );
    }
    bars[j + 1].firstChild.innerHTML = key;
    bars[j + 1].style.height = height;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 500)
    );
    for (k = 0; k <= i; k++) {
      bars[k].style.backgroundColor = "green";
    }
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].style.backgroundColor = "rgb(17, 17, 17)";
  }
}
