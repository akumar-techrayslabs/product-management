// async function loadComponent(id: string, file: string): Promise<void> {
//     try {
//         const res = await fetch(file);

//         if (!res.ok) {
//             throw new Error(`HTTP error! status: ${res.status}`);
//         }

//         const data = await res.text();
//         const element = document.getElementById(id);

//         if (element) {
//             element.innerHTML = data;
//         } else {
//             console.error(`Element with ID "${id}" not found.`);
//         }
//     } catch (error) {
//         console.error("Failed to load component:", error);
//     }
// }

// loadComponent('sidebar-container',"../../components/sidebar.html");
