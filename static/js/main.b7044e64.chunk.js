(this.webpackJsonpPOC=this.webpackJsonpPOC||[]).push([[0],{116:function(e,t){},129:function(e,t,n){e.exports=n(164)},162:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(108),l=n.n(o),c=n(19),i=n(179),u=n(45),s=n(32),b=n(21),m=n(30),p=n(109),f=n(173),d=n(26),O=n(174);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var h=function(){function e(t,n){var r=this;Object(s.a)(this,e),this.blobStorage=t,this.blobState=n,this.deleteQueueInner$=new m.a,this.deletedItems$=this.deleteQueue$.pipe(Object(p.a)((function(e){return r.deleteFile(e)})),this.blobState.scanEntries()),this.deleteFile=function(e){return r.blobState.getStorageOptionsWithContainer().pipe(Object(f.a)((function(t){return r.blobStorage.deleteBlobItem(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{filename:e})).pipe(r.mapDeleteResponse(e,t),r.blobState.finaliseBlobChange(t.containerName))})))},this.mapDeleteResponse=function(e,t){return function(n){return n.pipe(Object(d.a)((function(){return{filename:e,containerName:t.containerName}})),Object(O.a)({filename:e,containerName:t.containerName}))}}}return Object(b.a)(e,[{key:"deleteQueue$",get:function(){return this.deleteQueueInner$.asObservable()}}]),Object(b.a)(e,[{key:"deleteItem",value:function(e){this.deleteQueueInner$.next(e)}}]),e}(),g=n(25);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var v=function(){function e(t,n){var r=this;Object(s.a)(this,e),this.blobStorage=t,this.blobState=n,this.downloadQueueInner$=new m.a,this.downloadedItems$=this.downloadQueue$.pipe(Object(p.a)((function(e){return r.downloadFile(e)})),this.blobState.scanEntries()),this.downloadFile=function(e){return r.blobState.getStorageOptionsWithContainer().pipe(Object(f.a)((function(t){return r.blobStorage.downloadBlobItem(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{filename:e})).pipe(r.getDownloadUrlFromResponse(),r.mapDownloadResponse(e,t))})))},this.mapDownloadResponse=function(e,t){return function(n){return n.pipe(Object(d.a)((function(n){return{filename:e,containerName:t.containerName,url:n}})),Object(O.a)({filename:e,containerName:t.containerName,url:""}))}},this.getDownloadUrlFromResponse=function(){return function(e){return e.pipe(Object(f.a)((function(e){return Object(g.a)(e.blobBody?e.blobBody:Promise.resolve({})).pipe(Object(d.a)((function(e){return window.URL.createObjectURL(e)})))})))}}}return Object(b.a)(e,[{key:"downloadQueue$",get:function(){return this.downloadQueueInner$.asObservable()}}]),Object(b.a)(e,[{key:"downloadItem",value:function(e){this.downloadQueueInner$.next(e)}}]),e}(),y=n(97),w=n(86),C=n(175),k=n(176),S=n(177);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(){function e(t,n){var r=this;Object(s.a)(this,e),this.sasGenerator=t,this.blobStorage=n,this.selectedContainerInner$=new y.a(""),this.containers$=this.getStorageOptions().pipe(Object(f.a)((function(e){return r.blobStorage.getContainers(e)}))),this.itemsInContainer$=this.selectedContainer$.pipe(Object(w.a)((function(e){return!!e})),Object(f.a)((function(e){return r.getStorageOptions().pipe(Object(f.a)((function(t){return r.blobStorage.listBlobsInContainer(P({},t,{containerName:e}))})))}))),this.finaliseBlobChange=function(e){return function(t){return t.pipe(Object(C.a)((function(){return r.selectedContainerInner$.value===e&&r.selectedContainerInner$.next(e)})))}},this.scanEntries=function(){return function(e){return e.pipe(Object(d.a)((function(e){return Object(u.a)({},"".concat(e.containerName,"-").concat(e.filename),e)})),Object(k.a)((function(e,t){return P({},e,{},t)}),{}),Object(d.a)((function(e){return Object.values(e)})))}}}return Object(b.a)(e,[{key:"selectedContainer$",get:function(){return this.selectedContainerInner$.asObservable()}}]),Object(b.a)(e,[{key:"getContainerItems",value:function(e){this.selectedContainerInner$.next(e)}},{key:"getStorageOptionsWithContainer",value:function(){return this.getStorageOptions().pipe(Object(S.a)(this.selectedContainer$),Object(d.a)((function(e){var t=Object(c.a)(e,2);return P({},t[0],{containerName:t[1]})})))}},{key:"getStorageOptions",value:function(){return this.sasGenerator.getSasToken()}}]),e}(),x=n(121),$=n(87),B=n.n($),D=n(110),R=n(180),F=n(6),V=n(178);function Q(e){var t,n,r,a=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,r=Symbol.iterator);a--;){if(n&&null!=(t=e[n]))return t.call(e);if(r&&null!=(t=e[r]))return new T(t.call(e));n="@@asyncIterator",r="@@iterator"}throw new TypeError("Object is not async iterable")}function T(e){function t(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:t}}))}return(T=function(e){this.s=e,this.n=e.next}).prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var n=this.s.return;return void 0===n?Promise.resolve({value:e,done:!0}):t(n.apply(this.s,arguments))},throw:function(e){var n=this.s.return;return void 0===n?Promise.reject(e):t(n.apply(this.s,arguments))}},new T(e)}var U=function(){function e(){Object(s.a)(this,e),this.buildConnectionString=function(e){return"BlobEndpoint=".concat(e.storageUri,";")+"SharedAccessSignature=".concat(e.storageAccessToken)}}return Object(b.a)(e,[{key:"getContainers",value:function(e){var t=this.buildClient(e);return this.asyncToObservable(t.listContainers())}},{key:"listBlobsInContainer",value:function(e){var t=this.getContainerClient(e);return this.asyncToObservable(t.listBlobsFlat({includeMetadata:!0}))}},{key:"downloadBlobItem",value:function(e){var t=this.getBlockBlobClient(e);return Object(g.a)(t.download())}},{key:"deleteBlobItem",value:function(e){var t=this.getBlockBlobClient(e);return Object(g.a)(t.delete())}},{key:"uploadToBlobStorage",value:function(e,t){var n=this.getBlockBlobClient(t);return this.uploadFile(n,e)}},{key:"getBlockBlobClient",value:function(e){return this.getContainerClient(e).getBlockBlobClient(e.filename)}},{key:"getContainerClient",value:function(e){return this.buildClient(e).getContainerClient(e.containerName)}},{key:"buildClient",value:function(e){return R.a.fromConnectionString(this.buildConnectionString(e))}},{key:"uploadFile",value:function(e,t){var n=this,r="",a="";return console.log(t.type),"application/vnd.openxmlformats-officedocument.wordprocessingml.document"===t.type?(r="Bla",a="colorBlack"):(r="Validering velykket",a="colorGreen"),"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===t.type&&(r="Validering mislyktes",a="colorRed"),new F.a((function(o){e.uploadBrowserData(t,{onProgress:n.onProgress(o),blobHTTPHeaders:{blobContentType:t.type},metadata:{tag:r,color:a}}).then(n.onUploadComplete(o,t),n.onUploadError(o))})).pipe(Object(V.a)())}},{key:"onUploadError",value:function(e){return function(t){return e.error(t)}}},{key:"onUploadComplete",value:function(e,t){return function(){e.next(t.size),e.complete()}}},{key:"onProgress",value:function(e){return function(t){return e.next(t.loadedBytes)}}},{key:"asyncToObservable",value:function(e){return new F.a((function(t){Object(D.a)(B.a.mark((function n(){var r,a,o,l,c,i,u;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,r=!0,a=!1,n.prev=3,l=Q(e);case 5:return n.next=7,l.next();case 7:return c=n.sent,r=c.done,n.next=11,c.value;case 11:if(i=n.sent,r){n.next=20;break}if(u=i,!t.closed){n.next=16;break}return n.abrupt("return");case 16:t.next(u);case 17:r=!0,n.next=5;break;case 20:n.next=26;break;case 22:n.prev=22,n.t0=n.catch(3),a=!0,o=n.t0;case 26:if(n.prev=26,n.prev=27,r||null==l.return){n.next=31;break}return n.next=31,l.return();case 31:if(n.prev=31,!a){n.next=34;break}throw o;case 34:return n.finish(31);case 35:return n.finish(26);case 36:t.complete(),n.next=42;break;case 39:n.prev=39,n.t1=n.catch(0),t.error(n.t1);case 42:case"end":return n.stop()}}),n,null,[[0,39],[3,22,26,36],[27,,31,35]])})))()})).pipe(Object(k.a)((function(e,t){return[].concat(Object(x.a)(e),[t])}),[]),Object(O.a)([]))}}]),e}();function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var A=function(){function e(t,n){var r=this;Object(s.a)(this,e),this.blobStorage=t,this.blobState=n,this.uploadQueueInner$=new m.a,this.uploadedItems$=this.uploadQueue$.pipe(Object(p.a)((function(e){return r.uploadFile(e)})),this.blobState.scanEntries()),this.uploadFile=function(e){return r.blobState.getStorageOptionsWithContainer().pipe(Object(f.a)((function(t){return r.blobStorage.uploadToBlobStorage(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{filename:e.name})).pipe(r.mapUploadResponse(e,t),r.blobState.finaliseBlobChange(t.containerName))})))},this.mapUploadResponse=function(e,t){return function(n){return n.pipe(Object(d.a)((function(n){return{filename:e.name,containerName:t.containerName,progress:parseInt((n/e.size*100).toString(),10)}})),Object(O.a)({filename:e.name,containerName:t.containerName,progress:0}))}}}return Object(b.a)(e,[{key:"uploadQueue$",get:function(){return this.uploadQueueInner$.asObservable().pipe(Object(p.a)((function(e){return Object(g.a)(e)})))}}]),Object(b.a)(e,[{key:"uploadItems",value:function(e){this.uploadQueueInner$.next(e)}}]),e}(),J=n(120),W=function(){function e(){Object(s.a)(this,e)}return Object(b.a)(e,[{key:"getSasToken",value:function(){return J.Axios.get("https://testfunctiontokenreturn.azurewebsites.net/api/httptriggertoken").pipe(Object(d.a)((function(e){return e.data})))}}]),e}(),z=new U,G=new I(new W,z),M=new A(z,G),H=new v(z,G),K=new h(z,G),_=a.a.createContext(G),q=a.a.createContext(M),X=a.a.createContext(H),Y=a.a.createContext(K),Z=function(e){var t=Object(r.useContext)(_),n=Object(r.useState)([]),o=Object(c.a)(n,2),l=o[0],u=o[1],s=Object(r.useState)(!1),b=Object(c.a)(s,2),m=b[0],p=b[1],f=e.user;Object(r.useEffect)((function(){var e=t.containers$.pipe(Object(i.a)((function(e){return u(e)}))).subscribe();return function(){return e.unsubscribe()}}),[]),Object(r.useEffect)((function(){p("VENDOR"!==f)}),[f]);var d=function(e){t.getContainerItems(e)};return a.a.createElement("div",{className:"container-list"},a.a.createElement("div",{className:"splitContent"},a.a.createElement("img",{src:"../../forsvar.jpg",alt:"forvars logo",className:"logoImage"}),m?l.map((function(e,t){return a.a.createElement("div",{key:t},"upload"===e.name?a.a.createElement("button",{onClick:function(){return d(e.name)}},"Oppfrisk opplastinger"):"")})):a.a.createElement("div",null,a.a.createElement("h3",null,"Velkommen til Digimat U - Portal for opplasting av materielldata"),d("upload"))))},ee=function(){var e=Object(r.useContext)(q),t=Object(r.useRef)(null);return a.a.createElement("div",{className:"input-file"},a.a.createElement("input",{style:{display:"none"},ref:t,type:"file",multiple:!0,onChange:function(t){return(n=t.target.files)&&e.uploadItems(n);var n}}),a.a.createElement("button",{onClick:function(){return t.current&&t.current.click()}},"Trykk her for \xe5 last opp fil"))},te=function(){var e=Object(r.useContext)(Y),t=Object(r.useState)([]),n=Object(c.a)(t,2),o=n[0],l=n[1];return Object(r.useEffect)((function(){var t=e.deletedItems$.pipe(Object(i.a)((function(e){return l(e)}))).subscribe();return function(){return t.unsubscribe()}}),[]),a.a.createElement("div",{className:"items-deleted"},a.a.createElement("h3",null,"Slettet"),o.map((function(e,t){return a.a.createElement("pre",{key:t},JSON.stringify(e,void 0,2))})))},ne=function(){var e=Object(r.useContext)(X),t=Object(r.useState)([]),n=Object(c.a)(t,2),o=n[0],l=n[1];return Object(r.useEffect)((function(){var t=e.downloadedItems$.pipe(Object(i.a)((function(e){return l(e)}))).subscribe();return function(){return t.unsubscribe()}}),[]),a.a.createElement("div",{className:"items-downloaded"},a.a.createElement("h3",null,"Nedlastinger"),o.map((function(e,t){return a.a.createElement("div",{key:t},e.containerName,":",a.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.filename))})))},re=function(e){var t=Object(r.useContext)(_),n=Object(r.useContext)(X),o=Object(r.useContext)(Y),l=Object(r.useState)([]),u=Object(c.a)(l,2),s=u[0],b=u[1],m=e.user,p=Object(r.useState)(!1),f=Object(c.a)(p,2),d=f[0],O=f[1];Object(r.useEffect)((function(){O("VENDOR"!==m)}),[m]);return Object(r.useEffect)((function(){var e=t.itemsInContainer$.pipe(Object(i.a)((function(e){return b(e)}))).subscribe();return function(){return e.unsubscribe()}}),[]),a.a.createElement("div",{className:"items-list"},d?a.a.createElement(a.a.Fragment,null):a.a.createElement("h3",null,"Innsendte opplastinger:"),a.a.createElement("table",null,d?a.a.createElement("tr",null,a.a.createElement("th",null,"Filnavn"),a.a.createElement("td",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("th",null,"Innholdslengde"),a.a.createElement("td",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("th",null,"Aksjoner"),a.a.createElement("td",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("td",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("th",null,"Sist endret"),a.a.createElement("td",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("th",null,"Validering")):a.a.createElement("tr",null,a.a.createElement("th",null,"Filnavn"),a.a.createElement("td",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("th",null,"Lagring"),a.a.createElement("td",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("th",null,"Validering")),d?s.map((function(e,t){return a.a.createElement("tr",{key:t},a.a.createElement("td",null,e.name),a.a.createElement("td",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("td",{className:"tableCell"},a.a.createElement("span",null,e.properties.contentLength)),a.a.createElement("td",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return n.downloadItem(e.name)}},"Nedlastinger")),a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return o.deleteItem(e.name)}},"Slettet")),a.a.createElement("td",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("td",{className:"tableCell"},a.a.createElement("span",null,e.properties.lastModified.toISOString())),a.a.createElement("td",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("td",{className:"tableCell"},a.a.createElement("h4",{className:e.metadata.color},a.a.createElement("span",null,"Bla"===e.metadata.tag?"Validering p\xe5g\xe5r":e.metadata.tag))))})):s.map((function(e,t){return a.a.createElement("tr",{key:t},a.a.createElement("td",null,e.name),a.a.createElement("td",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("td",{className:"tableCell"},a.a.createElement("span",null,e.properties.contentLength)),a.a.createElement("td",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("td",null,a.a.createElement("h4",{className:e.metadata.color},a.a.createElement("span",null,"Bla"===e.metadata.tag?"Validering p\xe5g\xe5r":e.metadata.tag))))}))))},ae=function(){var e=Object(r.useContext)(q),t=Object(r.useState)([]),n=Object(c.a)(t,2),o=n[0],l=n[1];return Object(r.useEffect)((function(){var t=e.uploadedItems$.pipe(Object(i.a)((function(e){return l(e)}))).subscribe();return function(){return t.unsubscribe()}}),[]),a.a.createElement("div",{className:"items-list"},a.a.createElement("h3",null,"Nye opplastinger:"),a.a.createElement("table",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Filnavn"),a.a.createElement("th",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("th",null,"Lagring"),a.a.createElement("th",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("th",null,"Progresjon")),o.map((function(e,t){return a.a.createElement("tr",null,a.a.createElement("td",null,JSON.stringify(e.filename,void 0,2).replace(/\"/g,"")),a.a.createElement("td",null,"\xa0\xa0\xa0"),a.a.createElement("td",{className:"tableCell"},JSON.stringify(e.containerName,void 0,2).replace(/\"/g,"")),a.a.createElement("td",null,"\xa0\xa0\xa0\xa0"),a.a.createElement("td",{className:"tableCell"},JSON.stringify(e.progress,void 0,2)),a.a.createElement("pre",{key:t}))}))))},oe=n(123),le=function(e){var t=e.children,n=Object(oe.a)(e,["children"]),o=Object(r.useContext)(_),l=Object(r.useState)(""),u=Object(c.a)(l,2),s=u[0],b=u[1];return Object(r.useEffect)((function(){var e=o.selectedContainer$.pipe(Object(i.a)((function(e){return b(e)}))).subscribe();return function(){return e.unsubscribe()}}),[]),s?a.a.createElement("div",n,a.a.createElement("h2",null,"Kontainer filer: Opplasting"),t):a.a.createElement(a.a.Fragment,null)},ce=function(){return a.a.createElement("div",null)},ie=(n(162),function(){var e=Object(r.useState)({name:"VENDOR"}),t=Object(c.a)(e,2),n=t[0],o=t[1],l=a.a.createContext({name:n.name});return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"button-21",onClick:function(){"VENDOR"===n.name?(o({name:"FORVARSMATERIELL"}),console.log(n)):o({name:"VENDOR"})}},"VENDOR"===n.name?"Projekter":n.name),a.a.createElement(ce,null),a.a.createElement("hr",null),a.a.createElement(l.Provider,{value:n},a.a.createElement(Z,{user:n.name})),a.a.createElement("hr",null),a.a.createElement(le,{className:"container"},"VENDOR"!==n.name?a.a.createElement("div",null):a.a.createElement(ee,null),a.a.createElement(l.Provider,{value:n},"VENDOR"!==n.name?a.a.createElement(a.a.Fragment,null,a.a.createElement(re,{user:n.name}),a.a.createElement("div",{className:"item-details"},a.a.createElement(ne,null),a.a.createElement(te,null))):a.a.createElement("div",{className:"item-details-1"},a.a.createElement(ae,null),a.a.createElement(re,{user:n.name})))))});n(163),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t){},93:function(e,t){}},[[129,1,2]]]);
//# sourceMappingURL=main.b7044e64.chunk.js.map