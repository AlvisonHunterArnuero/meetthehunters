(this.webpackJsonpmymovieslist=this.webpackJsonpmymovieslist||[]).push([[0],{15:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(5),i=t.n(l),s=(t(15),t(2));var c=function(){var e=Object(s.b)();return o.a.createElement("div",{className:"d-flex flex-row justify-content-end"},o.a.createElement("div",{className:"m-2"},o.a.createElement("button",{onClick:function(){return e({type:"DISPLAY_LIAM",payload:{id:"1",name:"Liam Hunter",quote:"Are you kidding me?",hobbies:"Play with Dinosaurs, singing and dancing, watching TV",food:"Chicken, Fish, Fried Plantains, Potatoes, Espaguetti",languages:"Spanish, English",photos:{photo1:"liam01.jpeg",photo2:"liam02.jpeg",photo3:"liam03.jpeg",photo4:"liam04.jpeg"}}})},className:"btn btn-outline-primary btn-lg"},"The Baby")),o.a.createElement("div",{className:"m-2"},o.a.createElement("button",{onClick:function(){return e({type:"DISPLAY_ONICE",payload:{id:"2",name:"Onice Acevedo",quote:"Family is not an important thing. It\u2019s everything.",hobbies:"Read, Music, Languages, Shoes, Clothings, Romantic Movies, to sing, to cook, to run",food:"Shrimps, Fish, Chinese Food, Italian Food, pizza, chocolate, brownies",languages:"Spanish, English, trying to learn French",photos:{photo1:"onice01.jpeg",photo2:"onice02.jpeg",photo3:"onice03.jpeg",photo4:"onice04.jpeg"}}})},className:"btn btn-outline-success btn-lg"},"The Mother")),o.a.createElement("div",{className:"m-2"},o.a.createElement("button",{onClick:function(){return e({type:"DISPLAY_DECLAN",payload:{id:"0",name:"Declan Hunter",quote:"Pappa don't eat my food!",hobbies:"read, play guitar, listen to music, painting, build things with legos, to draw, program with scratch",food:"Rice & Beans, Gallopinto with fried cheese, Beans Soup with cheese in crumbles",languages:"Spanish, English",photos:{photo1:"declan01.jpeg",photo2:"declan02.jpeg",photo3:"declan03.jpeg",photo4:"declan04.jpeg"}}})},className:"btn btn-outline-warning btn-lg"},"The Elder")),o.a.createElement("div",{className:"m-2"},o.a.createElement("button",{onClick:function(){return e({type:"DISPLAY_ALVISON",payload:{id:"3",name:"Alvison Hunter",quote:"a mind is a terrible thing to waste",hobbies:"Read, Music, Languages, Programming languages",food:"Chicken, Fish, Chinese Food",languages:"French, Spanish, English, Italian, Portuguese, German",photos:{photo1:"alvison01.jpeg",photo2:"alvison02.jpeg",photo3:"alvison03.jpeg",photo4:"alvison04.jpeg"}}})},className:"btn btn-outline-info btn-lg"},"The Father")))};var r=function(){var e=Object(s.c)((function(e){return e.familyMembersReducer})),a=function(e){return"/meetthehunters/pics/"+e};return o.a.createElement(o.a.Fragment,null,o.a.createElement("hr",{className:"border-top"}),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"box"},o.a.createElement("img",{src:(null===e||void 0===e?void 0:e.photos)?a(e.photos.photo1):a("liam01.jpeg"),className:"fade-in chosen",alt:null===e||void 0===e?void 0:e.name})),o.a.createElement("div",{className:"box"},o.a.createElement("img",{src:(null===e||void 0===e?void 0:e.photos)?a(e.photos.photo2):a("liam02.jpeg"),className:"fade-in chosen",alt:null===e||void 0===e?void 0:e.name})),o.a.createElement("div",{className:"box"},o.a.createElement("img",{src:(null===e||void 0===e?void 0:e.photos)?a(e.photos.photo3):a("liam03.jpeg"),className:"fade-in chosen",alt:null===e||void 0===e?void 0:e.name})),o.a.createElement("div",{className:"box"},o.a.createElement("img",{src:(null===e||void 0===e?void 0:e.photos)?a(e.photos.photo4):a("liam04.jpeg"),className:"fade-in chosen",alt:null===e||void 0===e?void 0:e.name}))),o.a.createElement("hr",{className:"border-top"}))},m=function(){return o.a.createElement("footer",{class:"footer bg-sucess"},o.a.createElement("div",{class:"d-flex justify-content-center text-warning"},o.a.createElement("p",null,"Copyright \xa9 ",(new Date).getFullYear(),", All Rights Reserved - Coded by Alvison Hunter using ReactJS.")))};var d=function(){var e=Object(s.c)((function(e){return e.familyMembersReducer})),a=e.name,t=e.quote,n=e.hobbies,l=e.food,i=e.languages;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(c,null),o.a.createElement("div",{className:"row"},o.a.createElement("p",{className:"text-info ml-4 text-uppercase display-4"},"MEET ",a||"Liam Hunter")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-3 col-xl-3"},o.a.createElement("div",{className:"card text-white bg-secondary mb-3"},o.a.createElement("div",{className:"card-header"},"FAMOUS QUOTE"),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},t||"Are you kidding me?")))),o.a.createElement("div",{className:"col-lg-3 col-xl-3"},o.a.createElement("div",{className:"card text-white bg-secondary mb-3"},o.a.createElement("div",{className:"card-header"},"HOBBIES"),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},n||"Play with Dinosaurs, singing and dancing, watching TV")))),o.a.createElement("div",{className:"col-lg-3 col-xl-3"},o.a.createElement("div",{className:"card text-white bg-secondary mb-3"},o.a.createElement("div",{className:"card-header"},"FAVORITE FOOD"),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},l||"Chicken, Fish, Fried Plantains, Potatoes, Espaguetti")))),o.a.createElement("div",{className:"col-lg-3 col-xl-3"},o.a.createElement("div",{className:"card text-white bg-secondary mb-3"},o.a.createElement("div",{className:"card-header"},"SPOKEN LANGUAGES"),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},i||"Spanish, English"))))),o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-12 col-xl-12"},o.a.createElement(r,null))),o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=t(4),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"liam01.jpeg",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"DISPLAY_LIAM":case"DISPLAY_DECLAN":case"DISPLAY_ONICE":case"DISPLAY_ALVISON":return a.payload;default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0;return"SIGN_IN"===a.type?!e:e},g=Object(h.b)({familyMembersReducer:u,myStatus:p}),v=Object(h.c)(g);i.a.render(o.a.createElement(s.a,{store:v},o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.8db7fb5f.chunk.js.map