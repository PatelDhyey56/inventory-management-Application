async function dataTableGrid(records) {
  let head = `<tr>`;
  for (let key of [
    'No.',
    'Storage Name',
    'Storage Type',
    'Location',
    'Date',
  ]) {
    head += `<th scope="col" class="align-middle">
      <span class="d-inline-flex flex-row align-items-center">
        ${key}
        ${
          mapping[key]
            ? `
        <span class="d-inline-flex flex-column align-items-center ms-2">
          <span style="cursor: pointer" onclick="paggination('api/warehouse?key=${mapping[key]}&value=asc&${queryString}')">^</span>
          <span style="rotate: 180deg; cursor: pointer" onclick="paggination('api/warehouse?key=${mapping[key]}&value=desc&${queryString}')">^</span>
        </span>
        `
            : ``
        }
      </span>
    </th>`;
  }

  head += `<th scope="col" colspan="3" class="align-middle">Action</th>`;

  head += `</tr>`;

  document.getElementById('thead').innerHTML = head;

  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  records.forEach((obj, index) => {
    let tr = document.createElement('tr');

    let noTd = document.createElement('td');
    noTd.innerText = startIndex + index + 1;

    let suppTd = document.createElement('td');
    suppTd.innerText = obj.fname;

    let comTd = document.createElement('td');
    comTd.innerText = obj.company;

    let phTd = document.createElement('td');
    phTd.innerText = obj.phone;

    let gstTd = document.createElement('td');
    gstTd.innerText = obj.gst;

    let amountTd = document.createElement('td');
    amountTd.innerText = obj.amount;

    let dateTd = document.createElement('td');
    dateTd.innerText = new Date(obj.date).toLocaleDateString();

    [noTd, suppTd, comTd, phTd, gstTd, amountTd, dateTd].forEach((e) =>
      tr.appendChild(e)
    );

    if (!obj.is_delete) {
      let actionTd = document.createElement('td');
      actionTd.setAttribute('colspan', 3);
      actionTd.innerHTML = `<b><i>ACTIVE</i></b>`;
      [actionTd].forEach((e) => tr.appendChild(e));

      [actionTd].forEach((e) => tr.appendChild(e));
    } else {
      let actionTd = document.createElement('td');
      actionTd.setAttribute('colspan', 3);
      actionTd.innerHTML = `<b><i>DELETED</i></b>`;
      [actionTd].forEach((e) => tr.appendChild(e));
    }

    tbody.append(tr);
  });
}