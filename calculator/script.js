    let input = "";
    const display = document.getElementById("display");

    function press(num) {
      if (input.length >= 20) return; // limit input length
      input += num;
      display.textContent = input;
    }

    function calculate() {
      try {
        let result = eval(input);
        display.textContent = result;
        input = result.toString();
      } catch (e) {
        display.textContent = "Error";
        input = "";
      }
    }

    function clearDisplay() {
      input = "";
      display.textContent = "0";
    }
