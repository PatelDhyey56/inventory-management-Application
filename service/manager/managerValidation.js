function closeForm() {
  document.getElementById('myForm').style.display = 'none';
  document.getElementById('childbody').style = 'none';
}
async function submitbtn() {
  try {
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const serialData = {};

    for (const [key, value] of formData.entries()) {
      if (serialData[key] != undefined) {
        serialData[key] += ',' + value;
      } else {
        serialData[key] = value;
      }
    }
    const data = JSON.stringify(serialData);
    showLoader();
    const response = await fetch(`/getmanager`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: data,
    });
    hideLoader();
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    if (response.status == 200) {
      document.getElementById('error').innerHTML = 'manager ades';
      alert('Manager added');
      window.location = `/user`;
      document.getElementById('error').innerHTML = 'manager ades';
      alert('Manager added');
      window.location = `/user`;
    }
  } catch (error) {
    console.log(error);
  }
}
