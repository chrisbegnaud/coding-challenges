function abbrevName(name){
  return name.split(' ').map(item => item[0]).join('.').toUpperCase();
}