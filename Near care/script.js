function newElement() {
  const input = document.getElementById("myInput");
  const val = input.value.trim();
  if (!val) return alert("Write something!");

  const li = document.createElement("li");
  li.textContent = val;

  const span = document.createElement("SPAN");
  span.textContent = "\u00D7";
  span.className = "close";
  li.appendChild(span);

  document.getElementById("myUL").appendChild(li);
  input.value = "";

  span.onclick = () => li.remove();
}

document.getElementById("myUL").addEventListener("click", e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle("checked");
  }
});
