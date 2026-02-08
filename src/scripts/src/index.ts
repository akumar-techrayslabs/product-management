

const menuBtn = document.getElementById("menu-btn") as HTMLButtonElement | null;
const sidebar = document.getElementById("sidebar") as HTMLElement | null;
let flag:boolean = true

function menuBtnfunct(){
  
    
  console.log("click");
  sidebar?.classList.toggle("hidden")
   
}




(window as any).menuBtnfunct = menuBtnfunct;
