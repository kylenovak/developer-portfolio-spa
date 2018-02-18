function scrollToHash(id, scrollOffset = 60) {
  let element = null;

  id = id.split('#').slice(1).join('#');

  if (id !== null && id !== '') {
    element = document.getElementById(id);
  } else {
    element = document.getElementById('header-static');
  }

  let width = window.innerWidth;
  if (scrollOffset === 60) {
    if (width < 900) {
      scrollOffset = 40;
    }
    else if (width >= 900 && width < 1200) {
      scrollOffset = 50;
    }
  }

  if (element !== null) {
    let app = document.getElementById('app');
    let count = element.offsetTop - app.scrollTop - scrollOffset;
    if (app.scrollBy) {
      app.scrollBy({top: count, left: 0, behavior: 'smooth'});
    }
    else {
      // MS Edge
      if (width < 900) {
        element = document.getElementById('banner');
      }
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  return id;
}

module.exports = scrollToHash;
