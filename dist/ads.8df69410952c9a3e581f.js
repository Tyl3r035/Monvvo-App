googlefc={promptForConsent:function(t){},callbackQueue:[],showRevocationMessage:function(){}},document.getElementById("privacyButton").addEventListener("click",(function(){this.classList.add("hide")})),fetch("https://ipapi.co/json/").then((function(t){return t.json()})).then((function(t){t&&t.country_code&&["AT","BE","BG","CY","CZ","DE","DK","EE","ES","FI","FR","GR","HR","HU","IE","IT","LT","LU","LV","MT","NL","PL","PT","RO","SE","SI","SK"].includes(t.country_code)&&(document.getElementById("privacyButton").style.display="block",document.getElementById("privacyLink").style.display="block")})).catch((function(t){}));