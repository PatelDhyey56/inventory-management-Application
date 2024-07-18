function addCategory() {
  const categoryForm = document.getElementById('myForm1');
  categoryForm.style.display = 'block';
};

const closeFormCategory = () => {
  document.getElementById('myForm1').style.display = 'none';
  const customerInput = document.querySelectorAll(".customerInput");
  for (let element of customerInput) {
    element.innerHTML = "";
  }
};

const submitbtn1 = async () => {
  try {
    const data = formData('categoryForm');
    const response = await fetch(`/category`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      alert('Category Added');
      closeFormCategory();
      fetchcategory();
    }
    if (response.status === 409) {
      document.getElementById('error').innerHTML = 'Category already exist';
      document.getElementById('error').style.color = 'red';
    }
  } catch (error) {
    console.log(error);
  }
};

const fetchcategory = async () => {
  const category = document.getElementById("categoryStatus").value;
  if (category === "Active") {
    await paggination(`/api/category/0`);
  } else if (category === "Inactive") {
    await paggination(`/api/category/1`);
  }
};

fetchcategory();

const dataTableGrid = (category, startIndex) => {
  document.getElementById('cards').innerHTML = '';
  const categoryStatus = document.getElementById("categoryStatus");

  const cards = document.getElementById('cards');
  for (const element of category) {
    const card1 = document.createElement('div');
    card1.setAttribute('class', 'card1');
    const cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title');
    const cardId = document.createElement('h5');
    const cardIn = document.createElement('div');
    cardIn.setAttribute('class', 'cardIn');

    for (const key in element) {
      if (key == 'id') {
        cardId.textContent = ++startIndex;

        cardIn.appendChild(cardId);
      }

      cardTitle.textContent = element['value'];
      cardIn.appendChild(cardTitle);
    }
    if (categoryStatus.selectedIndex === 0) {
      const createDeleteButton = document.createElement('img');
      createDeleteButton.setAttribute(
        'src',
        'src/assets/manageCustomer/delete.svg'
      );
      createDeleteButton.setAttribute('onclick', 'deleteCategory(this)');
      createDeleteButton.setAttribute('id', `${element.id}`);
      createDeleteButton.setAttribute('width', '25');
      createDeleteButton.setAttribute('height', '25');
      createDeleteButton.style.cursor = "pointer";
      cardIn.appendChild(createDeleteButton);
    } else {
      const createReactiveButton = document.createElement('img');
      createReactiveButton.setAttribute(
        'src',
        'src/assets/manageCustomer/account-reactivate.svg'
      );
      createReactiveButton.setAttribute('onclick', 'reactivateCategory(this)');
      createReactiveButton.setAttribute('id', `${element.id}`);
      createReactiveButton.setAttribute('width', '25');
      createReactiveButton.setAttribute('height', '25');
      createReactiveButton.style.cursor = "pointer";
      cardIn.appendChild(createReactiveButton);
    }
    card1.appendChild(cardIn);
    cards.appendChild(card1);
  }
};


async function deleteCategory(category) {

  const responseDelete = await fetch('/api/deleteCategory', {
    method: 'POST',
    body: JSON.stringify({ categoryId: category.id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  try {
    if (!responseDelete.ok) {
      throw new Error("Can't delete category");
    }

    if (responseDelete.status === 200) {
      const responseMessage = await responseDelete.json();
      messagePopUp(responseMessage.message);
      fetchcategory();
    }
  } catch (error) {
    const responseMessage = await responseDelete.json();
    if (responseDelete.status === 400) {
      messagePopUp(responseMessage.message);
    }
    if (responseDelete.status === 500) {
      messagePopUp(responseMessage.message);
    }
  }
}

function categoryFilter() {
  const category = document.getElementById('categoryFilter').value.toLowerCase();
  if (category === '') {
    paggination(null, dataArray);
  } else {
    const filteredResult = [];
    dataArray.filter((ele) => {
      const categoryValue = ele.value.toLowerCase();
      if (categoryValue.includes(category)) {
        filteredResult.push(ele);
      }
    });
    paggination(null, filteredResult);
  }
}

async function reactivateCategory(category) {
  const categoryId = category.id;

  const response = await fetch(`/api/reactivateCategory/${categoryId}`);

  try {
    if (!response.ok) {
      throw new Error("Category Reactivate Error");
    }

    if (response.status === 200) {
      const responseMessage = await response.json();
      messagePopUp(responseMessage.message);
      fetchcategory();
    }
  } catch (error) {
    const responseMessage = await response.json();
    if (response.status === 404) {
      messagePopUp(responseMessage.message);
    }

    if (response.status === 500) {
      messagePopUp(responseMessage.message);
    }
  }
}