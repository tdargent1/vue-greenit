(function(e){function t(t){for(var c,r,o=t[0],u=t[1],a=t[2],s=0,O=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&O.push(i[r][0]),i[r]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);b&&b(t);while(O.length)O.shift()();return l.push.apply(l,a||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],c=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(c=!1)}c&&(l.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},i={app:0},l=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var b=u;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2170:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),i=(n("ac1f"),n("841c"),Object(c["e"])("h1",null,"Indice de fragilité numérique",-1)),l={class:"flex w-100 mt-3"},r={class:"left"},o=Object(c["e"])("h2",null,"Recherche",-1),u=Object(c["e"])("label",{for:"iRegions"},"Régions",-1),a={id:"regions"},b=Object(c["e"])("label",{for:"iDepartments",class:"mt-1"},"Départements",-1),s={id:"departments"},O=Object(c["e"])("label",{for:"iMunicipalities",class:"mt-1"},"Communes",-1),j={id:"municipalities"},p={class:"right"},d={key:0,style:{width:"100%"}},h=Object(c["e"])("h2",null,"Résultat",-1),f={id:"tableData"},m=Object(c["e"])("tr",null,[Object(c["e"])("th",null,"Commune"),Object(c["e"])("th",null,"Code iris"),Object(c["e"])("th",null,"Nom iris"),Object(c["e"])("th",null,"Département"),Object(c["e"])("th",null,"Région"),Object(c["e"])("th",null,"Population"),Object(c["e"])("th",null,"SCORE GLOBAL"),Object(c["e"])("th",null,"ACCES A L'INFORMATION"),Object(c["e"])("th",null,"ACCÈS AUX INTERFACES NUMERIQUES"),Object(c["e"])("th",null,"COMPETENCES ADMINISTATIVES"),Object(c["e"])("th",null,"COMPÉTENCES NUMÉRIQUES / SC.."),Object(c["e"])("th",null,"GLOBAL ACCES"),Object(c["e"])("th",null,"GLOBAL COMPETENCES")],-1);function g(e,t,n,g,y,v){return Object(c["f"])(),Object(c["d"])("div",null,[i,Object(c["e"])("div",l,[Object(c["e"])("div",r,[o,u,Object(c["j"])(Object(c["e"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return y.region=e}),list:"regions",id:"iRegions"},null,512),[[c["i"],y.region]]),Object(c["e"])("datalist",a,[(Object(c["f"])(!0),Object(c["d"])(c["a"],null,Object(c["g"])(y.regions,(function(e,t){return Object(c["f"])(),Object(c["d"])("option",{key:t},Object(c["h"])(e),1)})),128))]),b,Object(c["j"])(Object(c["e"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return y.department=e}),list:"departments",id:"iDepartments"},null,512),[[c["i"],y.department]]),Object(c["e"])("datalist",s,[(Object(c["f"])(!0),Object(c["d"])(c["a"],null,Object(c["g"])(y.departments,(function(e,t){return Object(c["f"])(),Object(c["d"])("option",{key:t},Object(c["h"])(e),1)})),128))]),O,Object(c["j"])(Object(c["e"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return y.municipality=e}),list:"municipalities",id:"iMunicipalities"},null,512),[[c["i"],y.municipality]]),Object(c["e"])("datalist",j,[(Object(c["f"])(!0),Object(c["d"])(c["a"],null,Object(c["g"])(y.municipalities,(function(e,t){return Object(c["f"])(),Object(c["d"])("option",{key:t},Object(c["h"])(e),1)})),128))]),Object(c["e"])("button",{class:"mt-1",onClick:t[3]||(t[3]=function(){return v.search&&v.search.apply(v,arguments)})},"Chercher")]),Object(c["e"])("div",p,[y.result.length?(Object(c["f"])(),Object(c["d"])("div",d,[h,Object(c["e"])("table",f,[m,(Object(c["f"])(!0),Object(c["d"])(c["a"],null,Object(c["g"])(y.result,(function(e,t){return Object(c["f"])(),Object(c["d"])("tr",{key:t},[Object(c["e"])("td",null,Object(c["h"])(e["libcom"]),1),Object(c["e"])("td",null,Object(c["h"])(e["code_iris"]),1),Object(c["e"])("td",null,Object(c["h"])(e["nom_iris"]),1),Object(c["e"])("td",null,Object(c["h"])(e["libdep"]),1),Object(c["e"])("td",null,Object(c["h"])(e["libreg"]),1),Object(c["e"])("td",null,Object(c["h"])(e["pop"]),1),Object(c["e"])("td",null,Object(c["h"])(e["score_global"]),1),Object(c["e"])("td",null,Object(c["h"])(e["acces_infos"]),1),Object(c["e"])("td",null,Object(c["h"])(e["acces_interf"]),1),Object(c["e"])("td",null,Object(c["h"])(e["competences_admin"]),1),Object(c["e"])("td",null,Object(c["h"])(e["competences_num"]),1),Object(c["e"])("td",null,Object(c["h"])(e["global_acces"]),1),Object(c["e"])("td",null,Object(c["h"])(e["global_comp"]),1)])})),128))])])):Object(c["c"])("",!0)])])])}n("d3b7"),n("3ca3"),n("ddb0"),n("9861");var y={name:"App",data:function(){return{region:"",regions:[],department:"",departments:[],municipality:"",municipalities:[],result:[]}},methods:{search:function(){var e=this,t={};""!=this.region&&(t.regions=this.region),""!=this.municipality&&(t.municipalities=this.municipality),""!=this.department&&(t.departments=this.department),fetch("http://localhost:3000/search?"+new URLSearchParams(t),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET"}).then((function(e){if(e.ok)return e.json()})).then((function(t){console.log(t),e.result=t})).catch((function(){console.log("Error")}))}},beforeMount:function(){var e=this;fetch("http://localhost:3000/data",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET"}).then((function(e){if(e.ok)return e.json()})).then((function(t){e.regions=t.regions,e.departments=t.departments,e.municipalities=t.municipalities}))}},v=(n("a04e"),n("6b0d")),C=n.n(v);const E=C()(y,[["render",g]]);var S=E;Object(c["b"])(S).mount("#app")},a04e:function(e,t,n){"use strict";n("2170")}});
//# sourceMappingURL=app.c06c496d.js.map