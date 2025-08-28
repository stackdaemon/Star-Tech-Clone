// <!-- JS for auto slide -->
<script>
  const bannerSlider = document.getElementById("bannerSlider");
  const banners = bannerSlider.children;
  let bannerIndex = 0;

  setInterval(()  {
    bannerIndex = (bannerIndex + 1) % banners.length;
    bannerSlider.style.transform = `translateX(-${bannerIndex * 100}%)`;
  }, 2000); // প্রতি 2 সেকেন্ড পর পর চেঞ্জ হবে
</script>