import{r as e,R as t,a as n,b as r}from"./vendor.052f4752.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const o="7fa48de6bdb0c481e3ac5cac4998a9d20fca264559d55117198ad49159786c51",a="PAR_autolabonneboite_c45c92056249a4b422f3fd3101a6d533ca72d3f60a2389ac5a23b7c99a2216f6";function l(){const[r,l]=e.exports.useState(0);let c={method:"POST",url:"https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire",headers:{"content-type":"application/x-www-form-urlencoded"},data:{grant_type:"client_credentials",client_id:a,client_secret:o,scope:`application_${a}%20api_labonneboitev1`}};JSON.stringify({grant_type:"client_credentials",client_id:a,client_secret:o,scope:`application_${a}api_labonneboitev1`}),JSON.stringify({headers:{"Content-Type":"application/x-www-form-urlencoded"}});return t.createElement("div",{className:"App"},t.createElement("header",{className:"App-header"},t.createElement("img",{src:"/assets/logo.ecc203fb.svg",className:"App-logo",alt:"logo"}),t.createElement("p",null,"Hello Vite + React!"),t.createElement("p",null,t.createElement("button",{type:"button",onClick:()=>l((e=>e+1))},"count is: ",r),t.createElement("button",{type:"button",onClick:()=>n(c).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},"Requete")),t.createElement("p",null,"Edit ",t.createElement("code",null,"App.jsx")," and save to test HMR updates."),t.createElement("p",null,t.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")," | ",t.createElement("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs"))))}r.render(t.createElement(t.StrictMode,null,t.createElement(l,null)),document.getElementById("root"));
