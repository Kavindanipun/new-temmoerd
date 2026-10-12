// ===== WHATSAPP EXPERIENCE =====
(() => {
  const phone = "94759902703";
  const wa = (text) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  const generic = "Hi GlassGuard! I need help finding the correct tempered glass for my phone.";

  const float = document.getElementById("ggWaFloat");
  if(float) float.href = wa(generic);
  document.querySelectorAll("[data-wa-generic]").forEach(a => a.href = wa(generic));

  // Existing navbar WhatsApp CTA: use the real number.
  const navWa = document.querySelector(".wa-order");
  if(navWa){ navWa.href=wa(generic); navWa.target="_blank"; navWa.rel="noopener"; }

  document.querySelectorAll("[data-wa-generic],#ggWaFloat").forEach(a=>{
    a.target="_blank"; a.rel="noopener";
  });

  const bubble=document.getElementById("ggWaBubble");
  const close=document.querySelector(".gg-wa-close");
  let bubbleTimer=setTimeout(()=>bubble?.classList.add("show"),2800);
  let hideTimer=setTimeout(()=>bubble?.classList.remove("show"),10500);
  close?.addEventListener("click",()=>{
    clearTimeout(bubbleTimer);clearTimeout(hideTimer);bubble.classList.remove("show");
  });
})();
