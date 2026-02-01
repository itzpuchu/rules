// ===== Section Switch =====
function showSection(id){
  document.querySelectorAll('.section').forEach(sec=>sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-right a').forEach(a=>a.classList.remove('active'));
  const activeLink=[...document.querySelectorAll('.nav-right a')].find(a=>a.getAttribute('onclick')?.includes(id));
  if(activeLink) activeLink.classList.add('active');
}

// ===== Live Placeholder Data =====
function updateLiveData(){
  document.getElementById('mc-count').textContent="Players online: "+Math.floor(Math.random()*500);
  document.getElementById('discord-count').textContent="Members online: "+Math.floor(Math.random()*100);
}
setInterval(updateLiveData,5000);
updateLiveData();

// ===== Copy IP =====
function copyIP(){
  navigator.clipboard.writeText('play.novanetwork.com');
  alert('Server IP copied!');
}
