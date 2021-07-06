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
} // document.getElementById("header-page").addEventListener("scroll", animation());


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} // window.onscroll = function() { menuBackground() };
// function menuBackground() {
//     var marTop = document.getElementById("menu").style.marginTop;
//     if (marTop < "10") {
//         document.getElementById("menu").style.background = "transparent";
//     }
//     document.getElementById("menu").style.background = "white";
//     document.getElementById("menu").style.opacity = "0.6";
// }


$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("#menu").addClass("active-header");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $("#menu").removeClass("active-header");
  }
});