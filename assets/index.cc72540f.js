import{u as e,R as t,r as n,a,b as r,A as l}from"./vendor.fa0d9d19.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const o="7fa48de6bdb0c481e3ac5cac4998a9d20fca264559d55117198ad49159786c51",c="PAR_autolabonneboite_c45c92056249a4b422f3fd3101a6d533ca72d3f60a2389ac5a23b7c99a2216f6",i=()=>{const{loginWithPopup:n}=e();return console.log(n),t.createElement("button",{onClick:()=>n()},"Log In")},s=()=>{const{logout:n}=e();return t.createElement("button",{onClick:()=>n({returnTo:window.location.origin})},"Log Out")},u=()=>{const{user:a,isAuthenticated:r,getAccessTokenSilently:l}=e(),[o,c]=n.exports.useState(null);return n.exports.useEffect((()=>{(async()=>{const e="autolabonneboitetest.eu.auth0.com";try{const t=await l({audience:`https://${e}/api/v2/`,scope:"read:current_user"}),n=`https://${e}/api/v2/users/${a.sub}`,r=await fetch(n,{headers:{Authorization:`Bearer ${t}`}}),{user_metadata:o}=await r.json();c(o)}catch(t){console.log(t.message)}})()}),[l,null==a?void 0:a.sub]),r&&t.createElement("div",null,t.createElement("img",{src:a.picture,alt:a.name}),t.createElement("h2",null,a.name),t.createElement("p",null,a.email),t.createElement("h3",null,"User Metadata"),o?t.createElement("pre",null,JSON.stringify(o,null,2)):"No user metadata defined")};function p(){const[e,r]=n.exports.useState(0);new URLSearchParams({data:{grant_type:"client_credentials",client_id:c,client_secret:o,scope:`application_${c}%20api_labonneboitev1`}}).toString();let l=`grant_type=client_credentials&client_id=${c}&client_secret=${o}&scope=application_${c}%20api_labonneboitev1`;console.log(l);let p={method:"post",url:"https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fclient",data:l};JSON.stringify({grant_type:"client_credentials",client_id:c,client_secret:o,scope:`application_${c}%20api_labonneboitev1`});return t.createElement("div",{className:"App"},t.createElement("header",{className:"App-header"},t.createElement("p",null,"Hello Vite + React!"),t.createElement("p",null,t.createElement("button",{type:"button",onClick:()=>r((e=>e+1))},"count is: ",e),t.createElement("button",{type:"button",onClick:()=>a(p).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},"Requete")),t.createElement("p",null,"Edit ",t.createElement("code",null,"App.jsx")," and save to test HMR updates."),t.createElement("p",null,t.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")," | ",t.createElement("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs")),t.createElement(u,null),t.createElement(i,null),t.createElement(s,null)))}r.render(t.createElement(t.StrictMode,null,t.createElement(l,{domain:"https://entreprise.pole-emploi.fr/connexion/oauth2/access_token",clientId:"PAR_autolabonneboite_c45c92056249a4b422f3fd3101a6d533ca72d3f60a2389ac5a23b7c99a2216f6"},t.createElement(p,null))),document.getElementById("root"));
