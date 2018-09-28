function mountLoadingScreen() {
    $('#root').html(loadingScreen());
 
    setTimeout(() => {
       session();
    }, 2000);
 }

 function loadingScreen() {
    let container = document.createElement('div');     //to create an HTML element
    container.id = 'loading-screen';                    //to loading screen
    container.classList.add('Loading-screen');
    //to create in center
    container.innerHTML = `
     <div class="loading">
     <div></div>
     </div>

    `
    
    
    // container.style.height = '100vh';
    // container.style.display = 'flex';
    // container.style.justifyContent = 'center';
    // container.style.alignItems = 'center';
    
    return container;
}
{/* <div></div>
<div></div>
<div></div>
<div></div> */}