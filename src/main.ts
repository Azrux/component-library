import "./style.css";

const appDiv = document.querySelector<HTMLDivElement>("#app");
if (appDiv) {
  appDiv.innerHTML = `
    <h1>Welcome to Component Library!</h1>
  `;
}
