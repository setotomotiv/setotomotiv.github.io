
(function(){
  document.querySelectorAll('a[href="javascript:void(0)"]').forEach(function(link){link.addEventListener('click',function(e){e.preventDefault();});});
  document.querySelectorAll('img').forEach(function(img){ if(!img.getAttribute('alt')) img.setAttribute('alt','Set Otomotiv'); });
  var topBtn=document.createElement('button');
  topBtn.type='button'; topBtn.innerHTML='↑'; topBtn.setAttribute('aria-label','Yukari cik');
  topBtn.style.cssText='position:fixed;right:20px;bottom:20px;width:44px;height:44px;border:none;border-radius:999px;background:#1d4ed8;color:#fff;font-size:22px;display:none;z-index:9999;box-shadow:0 10px 25px rgba(29,78,216,.3)';
  topBtn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
  document.body.appendChild(topBtn);
  window.addEventListener('scroll',function(){topBtn.style.display=window.scrollY>300?'block':'none';});
})();
