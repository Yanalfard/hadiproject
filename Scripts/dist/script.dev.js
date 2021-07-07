"use strict";

function step1() {
  document.getElementById("step1Dot").style.borderColor = "black";
  document.getElementById("step1InnerDot").style.background = "red";
  document.getElementById("step1Date").style.color = "black";
  document.getElementById("step1Line").style.borderTopColor = "black";
  document.getElementById("step1Chev").classList.remove("d-none");
  document.getElementById("step2Dot").style.borderColor = "black";
  document.getElementById("step2InnerDot").style.background = "red";
  document.getElementById("step2Date").style.color = "#B2B2B2";
  document.getElementById("step2Line").style.borderTopColor = "#B2B2B2";
  document.getElementById("step2Chev").classList.add("d-none");
  document.getElementById("step3Dot").style.borderColor = "#B2B2B2";
  document.getElementById("step3InnerDot").style.background = "#B2B2B2";
  document.getElementById("step3Dot").style.borderColor = "#B2B2B2";
  document.getElementById("step3InnerDot").style.background = "#B2B2B2";
  document.getElementById("step3Date").style.color = "#B2B2B2";
  document.getElementById("step3Line").style.borderTopColor = "#B2B2B2";
  document.getElementById("step3Chev").classList.add("d-none");
  document.getElementById("step4Dot").style.borderColor = "#B2B2B2";
  document.getElementById("step4InnerDot").style.background = "#B2B2B2";
  document.getElementById("Game-Submission").style.borderColor = "black";
}

function step2() {
  document.getElementById("step2Dot").style.borderColor = "black";
  document.getElementById("step2InnerDot").style.background = "red";
  document.getElementById("step2Date").style.color = "black";
  document.getElementById("step2Line").style.borderTopColor = "black";
  document.getElementById("step2Chev").classList.remove("d-none");
  document.getElementById("step3Dot").style.borderColor = "black";
  document.getElementById("step3InnerDot").style.background = "red";
  document.getElementById("step3Date").style.color = "#B2B2B2";
  document.getElementById("step3Line").style.borderTopColor = "#B2B2B2";
  document.getElementById("step3Chev").classList.add("d-none");
  document.getElementById("step4Dot").style.borderColor = "#B2B2B2";
  document.getElementById("step4InnerDot").style.background = "#B2B2B2";
  document.getElementById("step1Dot").style.borderColor = "#B2B2B2";
  document.getElementById("step1InnerDot").style.background = "#B2B2B2";
  document.getElementById("step1Date").style.color = "#B2B2B2";
  document.getElementById("step1Line").style.borderTopColor = "#B2B2B2";
  document.getElementById("step1Chev").classList.add("d-none");
  document.getElementById("Shortlisting").style.borderColor = "black";
}

function step3() {
  document.getElementById("step3Dot").style.borderColor = "black";
  document.getElementById("step3InnerDot").style.background = "red";
  document.getElementById("step3Date").style.color = "black";
  document.getElementById("step3Line").style.borderTopColor = "black";
  document.getElementById("step3Chev").classList.remove("d-none");
  document.getElementById("step4Dot").style.borderColor = "black";
  document.getElementById("step4InnerDot").style.background = "red";
  document.getElementById("step2Dot").style.borderColor = "#B2B2B2";
  document.getElementById("step2InnerDot").style.background = "#B2B2B2";
  document.getElementById("step2Date").style.color = "#B2B2B2";
  document.getElementById("step2Line").style.borderTopColor = "#B2B2B2";
  document.getElementById("step2Chev").classList.add("d-none");
  document.getElementById("step1Dot").style.borderColor = "#B2B2B2";
  document.getElementById("step1InnerDot").style.background = "#B2B2B2";
  document.getElementById("step1Date").style.color = "#B2B2B2";
  document.getElementById("step1Line").style.borderTopColor = "#B2B2B2";
  document.getElementById("step1Chev").classList.add("d-none");
  document.getElementById("step2Dot").style.borderColor = "#B2B2B2";
  document.getElementById("step2InnerDot").style.background = "#B2B2B2";
  document.getElementById("Final-Round").style.borderColor = "black";
}

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("#menu").addClass("active-header");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $("#menu").removeClass("active-header");
  }
}); // document.getElementById("header-page").addEventListener("scroll", animation());

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function fadeIn(first, second) {
  var one = document.getElementById(first);
  one.classList.remove('fade-in');
  one.classList.add('fade-out');
  var two = document.getElementById(second);
  two.classList.remove('fade-out');
  two.classList.add('fade-in');
}

function fadeOut(first, second) {
  var one = document.getElementById(first);
  one.classList.remove('fade-out');
  one.classList.add('fade-in');
  var two = document.getElementById(second);
  two.classList.remove('fade-in');
  two.classList.add('fade-out');
}

$(function () {
  $('a[href=#judges-section]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
$(function () {
  $('a[href=#header-page]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
$(function () {
  $('a[href=#competition-journey]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
$(function () {
  $('a[href=#faq-section]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
$(function () {
  $('a[href=#whatSTW]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});