function scrollToHash(id) {
  let element = null;

  id = id.split('#').slice(1).join('#');
  
  if (id !== null && id !== '') {
    element = document.getElementById(id);
  } else {
    element = document.getElementById('header');
  }

  if (element !== null) {
    element.scrollIntoView({behavior: 'smooth'});
  }

  return id;
}

module.exports = scrollToHash;
