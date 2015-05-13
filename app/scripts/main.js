/* jshint devel:true */
console.log('\'Allo \'Allo!');
if (Cookies.get('loc')) {
  console.log('Location is: ' + Cookies.get('loc'));
  window.location.replace(Cookies.get('loc') + '.html');
}
