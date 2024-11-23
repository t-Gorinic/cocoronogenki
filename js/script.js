//スマホの時だけ電話番号有効化

if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
  $(function() {
    $('.tel').each(function() {
      var str = $(this).html();
      if ($(this).children().is('img')) {
        $(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
      } else {
        $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
      }
    });
  });
}

//スムーススクロール

$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

/***************** MENU ******************/

$(function() {
  $(".navbar-toggle").click(function() {
    $("#gnavi").slideToggle(200);
    $(".icon-bar").toggleClass("closeup");
    return false;
  });
});

//スマホのメニューをタップしたら閉じる

$(document).ready(function () {
 $(".navbar-nav li a").click(function(event) {
 $(".navbar-collapse").removeClass('show');
 });
});


document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const images = document.querySelectorAll(".gallery-img");
  const closeBtn = document.querySelector(".close");

  images.forEach((img) => {
      img.addEventListener("click", function () {
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
      });
  });

  closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
  });

  modal.addEventListener("click", function (e) {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });
});