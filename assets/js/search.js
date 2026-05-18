const input = document.getElementById('searchInput');
const output = document.getElementById('searchResults');

const renderResults = (items) => {
  output.innerHTML = '';
  if (!items.length) {
    output.innerHTML = '<li class="entry-item">No matches found.</li>';
    return;
  }
  items.slice(0, 50).forEach((item) => {
    const li = document.createElement('li');
    li.className = 'entry-item';
    li.innerHTML = `<a href="${item.url}">${item.title}</a> <span class="meta-chip">${item.collection}</span>`;
    output.appendChild(li);
  });
};

input?.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase().trim();
  if (!query) {
    output.innerHTML = '';
    return;
  }
  const terms = query.split(/\s+/);
  const matches = docs.filter((doc) => {
    const text = `${doc.title} ${doc.text}`.toLowerCase();
    return terms.every((term) => text.includes(term));
  });
  renderResults(matches);
});
