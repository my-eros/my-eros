const imgArray = document.getElementsByTagName('img');

for (let img of imgArray) {
  img.classList.add('s12', 'm12', 'l12', 'xl12');
  img.setAttribute('loading', 'lazy');
}

document.getElementById('grid').addEventListener('click', () => {
  for (let img of imgArray) {
    if (img.classList.contains('s4') || img.classList.contains('s6')) {
      img.classList.remove('offset-s3', 'offset-m3', 'offset-l3', 'offset-xl3', 'offset-s4', 'offset-m4', 'offset-l4', 'offset-xl4');
    }
  }
});

document.getElementById('compress').addEventListener('click', () => {
  for (let img of imgArray) {
    if (img.classList.contains('s4')) {
      return
    } else if (img.classList.contains('s10')) {
      img.classList.remove('s10', 'm10', 'l10', 'xl10', 'offset-s1', 'offset-m1', 'offset-l1', 'offset-xl1');
      img.classList.add('s8', 'm8', 'l8', 'xl8', 'offset-s2', 'offset-m2', 'offset-l2', 'offset-xl2');
    } else if (img.classList.contains('s8')) {
      img.classList.remove('s8', 'm8', 'l8', 'xl8', 'offset-s2', 'offset-m2', 'offset-l2', 'offset-xl2');
      img.classList.add('s6', 'm6', 'l6', 'xl6', 'offset-s3', 'offset-m3', 'offset-l3', 'offset-xl3');
    } else if (img.classList.contains('s6')) {
      img.classList.remove('s6', 'm6', 'l6', 'xl6', 'offset-s3', 'offset-m3', 'offset-l3', 'offset-xl3');
      img.classList.add('s4', 'm4', 'l4', 'xl4', 'offset-s4', 'offset-m4', 'offset-l4', 'offset-xl4');
    } else {
      img.classList.remove('s12', 'm12', 'l12', 'xl12');
      img.classList.add('col', 's10', 'm10', 'l10', 'xl10', 'offset-s1', 'offset-m1', 'offset-l1', 'offset-xl1');
    }
  }
});

document.getElementById('expand').addEventListener('click', () => {
  for (let img of imgArray) {
    if (img.classList.contains('s12')) {
      break;
    } else if (img.classList.contains('s10')) {
      img.classList.remove('col', 's10', 'm10', 'l10', 'xl10', 'offset-s1', 'offset-m1', 'offset-l1', 'offset-xl1');
      img.classList.add('s12', 'm12', 'l12', 'xl12');
    } else if (img.classList.contains('s8')) {
      img.classList.remove('s8', 'm8', 'l8', 'xl8', 'offset-s2', 'offset-m2', 'offset-l2', 'offset-xl2');
      img.classList.add('s10', 'm10', 'l10', 'xl10', 'offset-s1', 'offset-m1', 'offset-l1', 'offset-xl1');
    } else if (img.classList.contains('s6')) {
      img.classList.remove('s6', 'm6', 'l6', 'xl6', 'offset-s3', 'offset-m3', 'offset-l3', 'offset-xl3');
      img.classList.add('s8', 'm8', 'l8', 'xl8', 'offset-s2', 'offset-m2', 'offset-l2', 'offset-xl2');
    } else {
      img.classList.remove('s4', 'm4', 'l4', 'xl4', 'offset-s4', 'offset-m4', 'offset-l4', 'offset-xl4');
      img.classList.add('s6', 'm6', 'l6', 'xl6', 'offset-s3', 'offset-m3', 'offset-l3', 'offset-xl3');
    }
  }
});
