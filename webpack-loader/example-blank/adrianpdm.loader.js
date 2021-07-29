module.exports = function (source) {
  return `
    if ('undefined' !== typeof window) {
      const div = document.createElement('div');
      const h1 = document.createElement('h1');
      h1.innerText = '${source}';
      h1.style.setProperty('background-color', 'cyan');
      div.append(h1);
      document.documentElement.append(div);
    }
  `;
}
