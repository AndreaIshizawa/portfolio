"use strict";var menu={btn:document.querySelectorAll(".btn"),home:document.querySelector("#home"),cv:document.querySelector("#cv"),work:document.querySelector("#work"),select:document.querySelectorAll('[data-select="select"]')},page={home:document.querySelector("#page-home"),cv:document.querySelector("#page-cv"),work:document.querySelector("#page-work")},animabar=document.querySelectorAll("[data-bar]"),animacircle=document.querySelectorAll("[data-circle]");function criarBarra(t,e){var r=new ProgressBar.Line(e,{strokeWidth:4,easing:"easeInOut",duration:1400,color:"#38bf92",trailColor:"#eee",trailWidth:4,svgStyle:{width:"100%",height:"100%"},text:{style:{color:"#999",position:"absolute",right:"0",top:"30px",padding:0,margin:0,transform:null},autoStyleContainer:!1},from:{color:"#FFEA82"},to:{color:"#ED6A5A"},step:function(e,t){t.setText(Math.round(100*t.value())+" %")}});menu.btn.forEach(function(e){e.addEventListener("click",function(){menu.cv.getAttribute("id")==e.getAttribute("id")?r.animate(t):r.animate(0,{duration:0})})})}function criarCirculo(t,e){var r=new ProgressBar.Circle(e,{color:"#38bf92",strokeWidth:10,trailWidth:10,easing:"easeInOut",duration:1400,text:{autoStyleContainer:!1},step:function(e,t){t.setText(Math.round(100*t.value())+" %")}});menu.btn.forEach(function(e){e.addEventListener("click",function(){menu.cv.getAttribute("id")==e.getAttribute("id")?r.animate(t):r.animate(0,{duration:0})})})}animabar.forEach(function(e){criarBarra((e.dataset.bar/100).toFixed(2),"#"+e.getAttribute("id"))}),animacircle.forEach(function(e){criarCirculo((e.dataset.circle/100).toFixed(2),"#"+e.getAttribute("id"))});