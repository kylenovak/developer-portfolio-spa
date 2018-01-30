function scrollTo(id) {
  let element = null;

  if (id !== null && id !== '') {
    element = document.getElementById(id);
  }

  if (element !== null) {
    element.scrollIntoView({behavior: 'smooth'});
  }
}

module.exports = scrollTo;
