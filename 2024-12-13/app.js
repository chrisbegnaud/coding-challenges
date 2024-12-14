function removeUrlAnchor(url){
  return url.split('#').splice(0, 1).join('');
}