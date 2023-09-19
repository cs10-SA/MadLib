// Mad Lib by Salwa

// Event listener
document.getElementById("btn").addEventListener("click", madLib);

// store order code in a functtion
function madLib() {
  // INPUT
  let friend = document.getElementById("friend-in").value;
  let adj = document.getElementById("adj-in").value;
  let noun = document.getElementById("noun-in").value;

  // PROCESS
  let msg = `Yesterday, ${friend} went shopping and bought some ${adj} ${noun}`;

  // Output
  document.getElementById("output").innerHTML = msg;
}
