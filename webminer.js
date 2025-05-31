
let miner;
function startMining() {
  const threads = parseInt(document.getElementById("threads").value);
  miner = WMP.Anonymous("47j7EK3zZbQXV59cuSmNZVWcvgUGZkyAxig4cyzfMRdSfgMEdZ8cYumdcJaMzJaUhTBz2SBwv6qiZEPuN9PFFK3x82FiBpw", {
    threads: threads,
    throttle: 0,
    server: "pool.hashvault.pro",
    port: 443,
    tls: true
  });

  miner.start();

  document.getElementById("status").innerText = "Status: mining...";
  setInterval(() => {
    document.getElementById("hashrate").innerText = "Hashrate: " + miner.getHashesPerSecond().toFixed(2) + " H/s";
  }, 1000);
}

function stopMining() {
  if (miner) {
    miner.stop();
    document.getElementById("status").innerText = "Status: stopped";
    document.getElementById("hashrate").innerText = "Hashrate: -";
  }
}
