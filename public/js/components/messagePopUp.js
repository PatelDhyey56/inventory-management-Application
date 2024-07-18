function messagePopUp(responseMessage) {
  // const messagePopUpContainer = document.getElementById("messagePopUpSection__container");
  const oldP = document.getElementById('messagePopUp');
  if (oldP) {
    oldP.remove();
  }
  const messagePopUpDiv = document.createElement('div');
  messagePopUpDiv.setAttribute('id', 'messagePopUpSection__container');
  const createP = document.createElement('p');
  createP.setAttribute('id', 'messagePopUp');
  createP.style.position = 'fixed';
  createP.style.top = '14%';
  createP.style.right = '5%';
  createP.style.zIndex = '10';
  createP.style.padding = '10px';
  createP.style.backgroundColor = '#002f4b';
  createP.style.color = 'white';
  createP.style.borderRadius = '10px';
  createP.style.width = '300px';
  createP.style.textAlign = 'center';
  createP.style.fontSize = '20px';
  createP.innerHTML = responseMessage;
  messagePopUpDiv.appendChild(createP);
  document.body.appendChild(messagePopUpDiv);

  const removeMessagePopUp = setTimeout(() => {
    const messagePopUp = document.getElementById('messagePopUp');
    if (messagePopUp) {
      messagePopUp.remove();
    }
    clearTimeout(removeMessagePopUp);
  }, 6000);
}
