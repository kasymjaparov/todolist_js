!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=document.querySelector(".main_btn"),o=document.querySelector(".main_input"),r=document.querySelector("#main_textarea");function d(e,t){fetch("http://localhost:3000/edit/"+e,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(()=>window.location.reload())}fetch("http://localhost:3000/list").then(e=>e.json()).then(e=>{const t=document.querySelector(".list");e.forEach(e=>{const i=document.createElement("div");i.classList.add("btnBlock");const c=document.createElement("input"),a=document.createElement("button");a.textContent="Done";const l=document.createElement("button");l.textContent="Edit";const u=document.createElement("button");u.textContent="Delete",c.value=e.text,c.setAttribute("data-number",e.id),e.done&&c.classList.add("done"),t.appendChild(c),c.after(i),i.appendChild(a),i.appendChild(l),i.appendChild(u),a.addEventListener("click",()=>{e.done?(d(e.id,{done:!e.done}),c.classList.remove("done")):(c.classList.add("done"),d(e.id,{done:!e.done}))}),u.addEventListener("click",()=>{var t;t=e.id,fetch("http://localhost:3000/delete/"+t,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(()=>window.location.reload())}),l.addEventListener("click",()=>{d(e.id,{text:""+c.value}).then(()=>window.location.reload())}),n.addEventListener("click",()=>{var e;e={text:""+o.value,description:""+r.value},fetch("http://localhost:3000/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(()=>{})})})})}]);