// videoPlayer.currentTime = videoPlayer.duration
// Bookmarklet is just named javascript code

(function(){
    console.log("BOok mark has beeb clicked")
 if (document.getElementsByClassName("video-ads")[0].innerHTML !== "") 
 {var banner = false;
  if (banner === false) 
  {document.getElementsByClassName("html5-main-video")[0].currentTime = document.getElementsByClassName("html5-main-video")[0].duration;
   document.getElementsByClassName("ytp-ad-skip-button")[0].click();}
  void 0;})();
