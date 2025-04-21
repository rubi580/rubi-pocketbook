const form = document.getElementById("money-form");
const totalSpan = document.getElementById("total");

let total = 0;

function addEntry() {
  const date = document.getElementById("date").value;
  const item = document.getElementById("item").value;
  const amount = parseInt(document.getElementById("amount").value);
  const category = document.getElementById("category").value;

  if (!date || !item || isNaN(amount)) return;

  const table = document.querySelector("#list tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${date}</td>
    <td>${item}</td>
    <td>${category}</td>
    <td>${amount}円</td>
    <td><button onclick="deleteEntry(this, ${amount})">削除</button></td>
  `;

  row.classList.add(`cat-${category}`);
  table.appendChild(row);

  total += amount;
  updateTotal();

  // ✅ 入力欄をリセット
  document.getElementById("date").value = "";
  document.getElementById("item").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "";
}

function deleteEntry(button, amount) {
  const row = button.closest("tr");
  row.remove();
  total -= amount;
  updateTotal();
}

function updateTotal() {
  totalSpan.textContent = `合計: ${total}円`;
}
