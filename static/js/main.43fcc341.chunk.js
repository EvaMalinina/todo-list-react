(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{12:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),o=a(5),c=a(1),l=a(2),i=a(4),s=a(3),u=a(0),m=a.n(u),d=a(10),f=a.n(d),h=function(e){var t=e.todo,a=e.done;return m.a.createElement("div",{className:"header"},m.a.createElement("h1",null,"My Todo list"),m.a.createElement("span",null,t," more to do, ",a," done"))},p=a(11),b=(a(9),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.onDeleted,n=e.onToggleImportant,r=e.onToggleDone,o="item";return e.done&&(o+=" done"),e.important&&(o+=" important"),m.a.createElement("div",{className:o},m.a.createElement("span",{onClick:r},t),m.a.createElement("div",{className:"item__btns"},m.a.createElement("a",{href:"#1",className:"item__icon",onClick:a},m.a.createElement("i",{className:"fas fa-trash-alt"})),m.a.createElement("a",{href:"#2",className:"item__icon",onClick:n},m.a.createElement("i",{className:"fas fa-exclamation"}))))}}]),a}(u.Component)),v=function(e){var t=e.todos,a=e.onDeleted,n=e.onToggleImportant,r=e.onToggleDone,o=t.map((function(e){var t=e.id,o=Object(p.a)(e,["id"]);return m.a.createElement("li",{key:t,className:"list__item"},m.a.createElement(b,Object.assign({},o,{onDeleted:function(){return a(t)},onToggleDone:function(){return r(t)},onToggleImportant:function(){return n(t)}})))}));return m.a.createElement("ul",{className:"list"},o)},g=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inptToSearch:""},e.onLabelSearch=function(t){var a=t.target.value;e.setState({inptToSearch:a}),e.props.onLabelSearch(a)},e}return Object(l.a)(a,[{key:"render",value:function(){return m.a.createElement("form",{className:"search"},m.a.createElement("input",{className:"search__inpt",placeholder:"Type here to search",onChange:this.onLabelSearch,value:this.state.inptToSearch,autoFocus:!0}))}}]),a}(u.Component),E=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.filter,a=e.onFilterChange,n=this.buttons.map((function(e){var n=e.name,r=e.label,o=t===n?"active":"";return m.a.createElement("li",{className:"filter__item",key:n+1},m.a.createElement("button",{type:"button",className:"filter__btn ".concat(o),key:n,onClick:function(){return a(n)}},r))}));return m.a.createElement("div",{className:"filter"},m.a.createElement("ul",{className:"filter__list"},n))}}]),a}(u.Component),O=function(e){var t=e.onLabelSearch,a=e.filter,n=e.onFilterChange;return m.a.createElement("div",{className:"panels"},m.a.createElement(g,{onLabelSearch:t}),m.a.createElement(E,{filter:a,onFilterChange:n}))},j=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onAdd(e.state.label),e.setState({label:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return m.a.createElement("form",{className:"add",onSubmit:this.onSubmit},m.a.createElement("input",{type:"text",className:"add__inpt",onChange:this.onLabelChange,placeholder:"What's need to be done?",value:this.state.label}),m.a.createElement("button",{className:"add__btn"},"Add task"))}}]),a}(u.Component);a.d(t,"default",(function(){return y}));var y=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).maxId=100,e.state={todoData:[e.createItem("Drink Coffee"),e.createItem("Create awesome app"),e.createItem("Have lunch")],inptToSearch:"",filter:"all"},e.deleteItem=function(t){e.setState((function(e){var a=e.todoData,n=a.findIndex((function(e){return e.id===t}));return{todoData:[].concat(Object(o.a)(a.slice(0,n)),Object(o.a)(a.slice(n+1)))}}))},e.addItem=function(t){var a=e.createItem(t);e.setState((function(e){var t=e.todoData;return{todoData:[].concat(Object(o.a)(t),[a])}}))},e.onSearchChange=function(t){e.setState({inptToSearch:t})},e.onFilterChange=function(t){e.setState({filter:t})},e.onToggleImportant=function(t){e.setState((function(a){var n=a.todoData;return{todoData:e.toggleProperty(n,t,"important")}}))},e.onToggleDone=function(t){e.setState((function(a){var n=a.todoData;return{todoData:e.toggleProperty(n,t,"done")}}))},e}return Object(l.a)(a,[{key:"createItem",value:function(e){return{label:e,done:!1,important:!1,id:this.maxId++}}},{key:"searchItem",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.indexOf(t)>-1}))}},{key:"filterItem",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.done}));case"done":return e.filter((function(e){return e.done}));default:return e}}},{key:"toggleProperty",value:function(e,t,a){var c=e.findIndex((function(e){return e.id===t})),l=e[c],i=Object(r.a)(Object(r.a)({},l),{},Object(n.a)({},a,!l[a]));return[].concat(Object(o.a)(e.slice(0,c)),[i],Object(o.a)(e.slice(c+1)))}},{key:"render",value:function(){var e=this.state,t=e.todoData,a=e.inptToSearch,n=e.filter,r=this.filterItem(this.searchItem(t,a),n),o=t.filter((function(e){return e.done})).length,c=t.length-o;return m.a.createElement("div",{className:"wrapper"},m.a.createElement(h,{todo:c,done:o}),m.a.createElement(O,{onLabelSearch:this.onSearchChange,filter:n,onFilterChange:this.onFilterChange}),m.a.createElement(v,{todos:r,onDeleted:this.deleteItem,onAdd:this.addItem,onToggleDone:this.onToggleDone,onToggleImportant:this.onToggleImportant}),m.a.createElement(j,{onAdd:this.addItem}))}}]),a}(u.Component);f.a.render(m.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.43fcc341.chunk.js.map