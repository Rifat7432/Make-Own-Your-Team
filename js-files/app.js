function  inputOrTag(id, type) {
    const parameter = id;
    let amount = 0;
    if (type === "tag") {
      const tagElement = document.getElementById(parameter);
      const tagText = tagElement.innerText;
      const textToNumber = parseFloat(tagText);
      amount = textToNumber;
    }
     else if (type === "input") {
      const inputElement = document.getElementById(parameter);
      const inputText = inputElement.value;
      const inputValueToNumber = parseFloat(inputText);
      amount = inputValueToNumber;
    }
    return amount;
  }
  function clicked(thisParameter){
    const playerName = thisParameter.parentNode.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    const ul = document.getElementById('player-list');
    const numberOfListItems = ul.childNodes.length;
    const selectedPlayerNumber = document.getElementById('selected-number');
    const button = thisParameter;
    if(numberOfListItems < 5){
      li.innerText = playerName;
      ul.appendChild(li);
      selectedPlayerNumber.innerText = numberOfListItems + 1;
      button.setAttribute('disabled',true);
    }
    else if(numberOfListItems === 5){
      alert('You have already been added five players !');
      button.removeAttribute('disabled',false);
    }
  }
  document.getElementById('calculate-button').addEventListener('click',function(){
    const perPlayerExpenses = inputOrTag('per-player-expenses','input');
    const selectedPlayerNumber = inputOrTag('selected-number','tag');
    if(isNaN(perPlayerExpenses)){
      const perPlayerExpensesInputFiled = document.getElementById('per-player-expenses');
      alert('Enter a Number !');
      perPlayerExpensesInputFiled.value = '';
    }
    else{
       const totalPlayerExpenses = document.getElementById('total-player-expenses');
       totalPlayerExpenses.innerText = perPlayerExpenses * selectedPlayerNumber;
    }
  })
document.getElementById('calculate-total-expenses-button').addEventListener('click',function(){
  const totalPlayerExpenses = inputOrTag('total-player-expenses','tag');
  const managerExpenses = inputOrTag('manager-expenses','input');
  const coachExpenses = inputOrTag('coach-expenses','input');
  const totalExpenses = document.getElementById('total-expenses');
  if(isNaN(totalPlayerExpenses) || isNaN(managerExpenses) || isNaN(coachExpenses)){
    alert('You have to enter number in manager and coach input filed');
    const managerExpensesValue = document.getElementById('manager-expenses');
    const coachExpensesValue = document.getElementById('coach-expenses');
    managerExpensesValue.value ='';
    coachExpensesValue.value ='';
  }
  else{
    totalExpenses.innerText = totalPlayerExpenses + managerExpenses + coachExpenses ;
  }
})