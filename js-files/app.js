function textOrInput(id, type) {
    const parameter = id;
    let amount = 0;
    if (type === "tag") {
      const tagElement = document.getElementById(parameter);
      const tagText = tagElement.innerText;
      const textToNumber = parseFloat(tagText);
      amount = textToNumber;
    } else if (type === "input") {
      const inputElement = document.getElementById(parameter);
      const inputText = inputElement.value;
      const inputValueToNumber = parseFloat(inputText);
      amount = inputValueToNumber;
    }
    return amount;
  }