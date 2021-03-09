(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/portrait.d8dde6f9.jpg"},20:function(e){e.exports=[{id:1,image:"./img/trivia.jpg",title:"Pokemon Trivia Game",summary:"A timed trivia game to test your knowledge of the pokemon video games.",githubLink:"https://github.com/rayhe921/TriviaGame",projectLink:"https://rayhe921.github.io/TriviaGame/"},{id:2,image:"./img/crystal.jpg",title:"Crystal Collector Game",summary:"Collect the correct amount of crystals to win this game.",githubLink:"https://github.com/rayhe921/unit-4-game",projectLink:"https://rayhe921.github.io/unit-4-game/"},{id:3,image:"./img/gifgen.gif",title:"Video Game Gif Generator",summary:"Search for your favorite video games in this Gif generator.",githubLink:"https://github.com/rayhe921/GiphyAPI",projectLink:"https://rayhe921.github.io/GiphyAPI/"},{id:4,image:"./img/train.jpg",title:"Train Scheduler",summary:"Enter in your train's information to find out the next arrival time.",githubLink:"https://github.com/rayhe921/train-scheduler",projectLink:"https://rayhe921.github.io/train-scheduler/"},{id:5,image:"./img/pikachu.jpg",title:"Pokemon Shuffle Game",summary:"A memory clicking game build with React.js",githubLink:"https://rayhe921.github.io/clicky-game/",projectLink:"https://fast-castle-08448.herokuapp.com/"},{id:6,image:"./img/food2.jpg",title:"What's Cooking? App",summary:"A recipe app that allows you to search, edit, and save recipes.",githubLink:"https://github.com/jsills3110/Project-1",projectLink:"https://jsills3110.github.io/Project-1/"},{id:7,image:"./img/hotel2.jpg",title:"Hot Hotel App",summary:"A full stack developed Hotel Reservation site deployed on Heroku.",githubLink:"https://github.com/rayhe921/Project-2",projectLink:"https://thawing-sierra-68759.herokuapp.com/"}]},24:function(e,t,a){e.exports=a(42)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(18),o=a.n(r),l=(a(29),a(7)),c=a(8),s=a(10),m=a(9),u=a(11),d=a(21),h=a(5);a(30),a(31);var p=function(e){return i.a.createElement("div",{className:"col s12 m6"},i.a.createElement("h2",{className:"header white-text"},e.title),i.a.createElement("div",{className:"horizontal z-depth-2"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{className:"card-image",src:e.img,alt:e.title})),i.a.createElement("div",{className:"card-stacked"},i.a.createElement("div",{className:"card-content"},e.children))))};function g(e){var t=e.fluid,a=e.children,n=e.items;return i.a.createElement("div",{className:"container".concat(t?"-fluid":""," ").concat(n)},a)}function f(e){var t=e.fluid,a=e.children;return i.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}var v=a(19),b=a.n(v),k=(a(32),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(g,null,i.a.createElement(p,{img:b.a},i.a.createElement("p",{className:"text"},"Welcome to my profile page. My name is Raymond He and I am a full stack developer currently looking for a front end or back end developer position. I have completed my full stack web development course and I am eager learn more about software development.",i.a.createElement("br",null),"My current skill set involves HTML5, CSS3, JavaScript, jQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, React.js, Git, and Firebase.",i.a.createElement("br",null),"My current project involves learning Java for a stronger back-end language.",i.a.createElement("br",null),"Feel free to reach out to me on my contact page if you know of any opportunities in software development.")))}}]),t}(n.Component));a(33);var y=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("img",{src:e.image,className:"card-img-top",alt:e.title}),i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title title-style"},e.title),i.a.createElement("p",{className:"card-text"},e.summary),i.a.createElement("div",{className:"button-ori"},i.a.createElement("a",{href:e.githubLink,className:"btn btn-primary"},"Github Link"),i.a.createElement("a",{href:e.projectLink,className:"btn btn-primary"},"Project Link"))))},E=a(20),j=(a(34),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={projects:E},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(g,null,i.a.createElement(f,null,this.state.projects.map(function(e){return i.a.createElement(y,{key:e.id,image:e.image,title:e.title,summary:e.summary,githubLink:e.githubLink,projectLink:e.projectLink})})))}}]),t}(n.Component));a(35);var w=function(e){var t=e.closeSide?"active":"not-active";return i.a.createElement("div",{className:"wrapper mr0"},i.a.createElement("nav",{id:"sidebar",className:t},i.a.createElement("div",{className:"sidebar-header"},i.a.createElement("h3",null,e.title)),i.a.createElement("ul",{className:"list-unstyled components"},i.a.createElement("p",null,"Dummy Heading"),i.a.createElement("li",null,i.a.createElement("a",{href:"/"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"/portfolio"},"Portfolio")),i.a.createElement("li",null,i.a.createElement("a",{href:"#pageSubmenu","data-toggle":"collapse","aria-expanded":"false",className:"dropdown-toggle"},"Contact"),i.a.createElement("ul",{className:"collapse list-unstyled",id:"pageSubmenu"},i.a.createElement("li",null,i.a.createElement("a",{href:e.linkOne},e.email)),i.a.createElement("li",null,i.a.createElement("a",{href:e.linkTwo},e.github)),i.a.createElement("li",null,i.a.createElement("a",{href:e.linkThree},e.linkedIn)),i.a.createElement("li",null,i.a.createElement("a",{href:e.linkFour},e.resume)))))))};a(36);var N=function(e){return i.a.createElement("div",{id:"content"},i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"align-content-center"},i.a.createElement("button",{type:"button",className:"btn btn-dark btn-outline-light",onClick:e.onClick,"data-toggle":e.dataToggle,"data-target":e.dataTargetID},e.title)))))},L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={sidebarButton:!1},a.activeSidebar=function(e){e.preventDefault(),!0===a.state.sidebarButton?a.setState({sidebarButton:!1}):a.setState({sidebarButton:!0})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",null,i.a.createElement(w,{title:"Raymond He",email:"Email",github:"Github",linkedIn:"LinkedIn",resume:"Resume",linkOne:"mailto:rayhe921@gmail.com",linkTwo:"https://github.com/rayhe921",linkThree:"https://www.linkedin.com/in/raymond-he-7086545a",linkFour:"https://drive.google.com/file/d/1JUPCPCCRIVjmAfSGsqsHot-cjqi9ZTSb/view?usp=sharing",closeSide:this.state.sidebarButton})),i.a.createElement("div",{className:"content col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2"},i.a.createElement(N,{onClick:this.activeSidebar,title:"Toggle Menu"}),i.a.createElement(h.c,null,i.a.createElement(h.a,{exact:!0,path:"/",component:k}),i.a.createElement(h.a,{exact:!0,path:"/portfolio",component:j})))))}}]),t}(n.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(L,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");O?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):S(e)})}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.a17d85d1.chunk.js.map