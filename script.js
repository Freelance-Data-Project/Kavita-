(() => {
 const url = "https://whatsapp.com/channel/0029VbE1NtMKLaHwnWVBOr0u";
 const btn = document.getElementById("whatsappBtn");
 const text = document.getElementById("countdown");
 btn.addEventListener("click", () => { if (window.fbq) fbq("trackCustom","WhatsAppChannelClick"); });
 let left = 7;
 const timer = setInterval(() => {
   left--;
   if (left > 0) { text.textContent = `WhatsApp channel ${left} सेकंड में खुलेगा...`; return; }
   clearInterval(timer); text.textContent = "WhatsApp channel खोला जा रहा है...";
   if (window.fbq) fbq("trackCustom","WhatsAppAutoRedirect");
   window.location.href = url;
 }, 1000);
})();
