
let miner;
function startMining() {
  const threads = parseInt(document.getElementById("threads").value);
  document.getElementById("status").innerText = "Status: mining with " + threads + " thread(s)...";
  console.log("Simulated mining started with", threads, "thread(s)");
  // In real use: load WASM miner engine from local and start
}
function stopMining() {
  document.getElementById("status").innerText = "Status: stopped";
  console.log("Simulated mining stopped.");
}
