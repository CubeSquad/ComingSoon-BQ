function selectedfield(){var e=document.getElementById("reason");"placeholder"!==e.options[e.selectedIndex].value&&$("#reason").removeClass("no-selection")}function menuclosing(){$("#menu , #fullpage , .holdscroll , #fp-nav , #menu-access").removeClass("menu-opened"),$("#menu-access .icon_menu").removeClass("display-none"),$("#menu-access .icon_close").addClass("display-none")}$(window).load(function(){"use strict";$("#right-block-top , #right-block-bottom , #fullpage , #fp-nav , #menu-access , .social-footer").css("opacity","0"),$("#fullpage").css("top","100vh"),setTimeout(function(){$("#loading").fadeOut()},1e3),setTimeout(function(){$("#fullpage").css({top:"0",opacity:"1"}),$("#right-block-top").addClass("animated-quick fadeInUp").css("opacity","1")},1500),setTimeout(function(){$("#right-block-bottom").addClass("animated-quick fadeInUp").css("opacity","1")},1600),setTimeout(function(){$("#fp-nav , #menu-access , .social-footer").css("opacity","1"),$("#right-block-bottom , #right-block-top").removeClass("animated-middle fadeInUp")},2210)}),$("#menu-access").on("mouseenter mouseleave",function(){$(this).toggleClass("hovered")}),$(".form-control").on("focusin focusout",function(){$(this).siblings(".icon-fields").toggleClass("active")}),$(document).ready(function(){"use strict";$("#fullpage").fullpage({anchors:["1","2","3","4","5"],navigationTooltips:["Home","About","Work","Team","Contact"],showActiveTooltip:!1,menu:"#menu",css3:!0,scrollingSpeed:800,responsiveWidth:1025}),$("#getting-started").countdown("2017/10/24 15:30:30",function(e){$(this).html(e.strftime('%D Days <br> <span class="time">%Hh %Mm %Ss</span> <span class="text">... Before the launch</span>'))}),$("#gallery-1").on("click",function(){$.swipebox([{href:"img/gallery-1.jpg",title:"Carefully designed"},{href:"img/gallery-2.jpg",title:"Colors of life"},{href:"img/gallery-3.jpg",title:"Where the energy is"}])}),$("#gallery-2").on("click",function(){$.swipebox([{href:"img/gallery-2.jpg",title:"Carefully designed"},{href:"img/gallery-3.jpg",title:"Colors of life"},{href:"img/gallery-1.jpg",title:"Where the energy is"}])}),$(window).on("click",function(e){"fp-nav"===e.target.id||$("#menu-access , #fp-nav li, #fp-nav a").find(e.target).length||menuclosing()}),$("#menu-access").on("click",function(e){e.stopPropagation(),$("#menu , #fullpage , #fp-nav").toggleClass("menu-opened"),$("#menu-access .icon_to_act").toggleClass("display-none")}),$(document).on("keyup",function(e){27==e.keyCode&&menuclosing()}),1025>$(window).width()&&($("#right-block").insertAfter("#section0"),$("a#anchor").attr("href","#right-block"),$("a").on("click",function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500),!1})),/Android/i.test(navigator.userAgent)||$(window).resize(function(){1025>$(window).width()?($("#right-block").insertAfter("#section0"),$("a#anchor").attr("href","#right-block")):($("#right-block").insertAfter("#fullpage"),$("a#anchor").attr("href","#2"))}),$("#carousel-services").addClass("slide"),$("#notifyMe").notifyMe()});