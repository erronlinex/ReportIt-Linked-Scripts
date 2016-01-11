function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

$(document).ready(main);

function main(){
  var incident = getURLParameter('incident').toLowerCase();
  
  if(incident=== "hassestateparking"){
  // link to scripts for incident hassestateparking
    console.log(incident);
  }

}
