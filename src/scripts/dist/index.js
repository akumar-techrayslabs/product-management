const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
let flag = true;
function menuBtnfunct() {
    console.log("click");
    sidebar?.classList.toggle("hidden");
}
window.menuBtnfunct = menuBtnfunct;
export {};
//# sourceMappingURL=index.js.map