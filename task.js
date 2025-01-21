
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todo-in");
    const list = document.getElementById("todo-li");
    const itemsLeft = document.getElementById("it-left");
    
    function updateCount() {
        const count = list.children.length;
        itemsLeft.textContent = `${count} item${count !== 1 ? 's' : ''} left`;
    }
    
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter" && input.value.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = input.value.trim();
            
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "❌";
            removeBtn.style.border = "none";
            removeBtn.style.background = "transparent";
            removeBtn.style.cursor = "pointer";
            removeBtn.onclick = () => {
                li.remove();
                updateCount();
            };
            
            li.appendChild(removeBtn);
            list.appendChild(li);
            input.value = "";
            updateCount();
        }
    });
});