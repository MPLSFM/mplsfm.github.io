$(document).ready(function(){$("a.nav-link").on("click",function(){$("i.arrow").toggleClass("down up")}),$(".topnav-trigger").on("click",function(){$("i.arrow").toggleClass("down up"),$(".overlay").toggleClass("hide")}),$(".hamburger-menu").on("click",function(){$(".overlay-mobile").removeClass("hide"),$(".closeBtn").toggleClass("hide"),$(this).toggleClass("hide")}),$(".closeBtn").on("click",function(){$(".hamburger-menu").toggleClass("hide"),$(".overlay-mobile").addClass("hide"),$(".overlay-mobile-2").addClass("hide"),$(this).toggleClass("hide")}),$(".dropdown-mobile").on("click",function(){$(".overlay-mobile-2").toggleClass("hide")}),$(".back-icon").on("click",function(){$(".overlay-mobile-2").toggleClass("hide")}),$(window).resize(function(){$(".overlay").addClass("hide"),$(".overlay-mobile").addClass("hide"),$(".overlay-mobile-2").addClass("hide"),$(".closeBtn").addClass("hide"),$(".hamburger-menu").addClass("hide"),$(".hamburger-menu").removeClass("hide"),$("i.arrow").removeClass("up"),$("i.arrow").addClass("down")}),$("i.arrow").hasClass(".up")?$("body").css({overflow:"hidden",height:"100%"}):$("body").css({overflow:"scroll",height:"100%"})});