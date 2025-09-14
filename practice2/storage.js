// Local Storage keeps data permanently until cleared, across tabs/windows.
// Session Storage keeps data only for one browser tab and is cleared when the tab is closed.
localStorage.setItem("name", "Subham");
console.log(localStorage.getItem("name")); // "Subham"
localStorage.removeItem("name");


sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token")); // "abc123"
sessionStorage.clear();




// Local Storage persists data even after the browser is closed and is
//  shared across all tabs of the same domain. Session Storage stores 
// data only for one tab and clears it when the tab is closed. Both 
// store key–value pairs (strings only) and usually have a 5–10 MB limit.