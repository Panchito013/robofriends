(this.webpackJsonprobofirends=this.webpackJsonprobofirends||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(12),n(1)),l=n(2),s=n(3),u=n(4),h=(n(13),function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 pointer"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"Profile"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))}),m=function(e){var t=e.robots,n=t.map((function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}));return r.a.createElement("div",null,n)},d=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"br4 pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},b=(n(14),function(e){return r.a.createElement("div",{class:"scrollable"},e.children)}),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),n}(a.Component),p=(n(15),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriendz"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(f,null,">",r.a.createElement(m,{robots:a})))):r.a.createElement("h1",{class:"loading"},"Loading")}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c0b87a34.chunk.js.map