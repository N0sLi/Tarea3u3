// app.js
export function formatPost(p) {
  const d = new Date(p.createdAt);
  return `<div class="post">
    <div>${p.text.replace(/</g,'&lt;')}</div>
    <div class="meta">${d.toLocaleString()}</div>
  </div>`;
}

async function load() {
  const res = await fetch('/api/posts');
  const data = await res.json();
  const list = document.getElementById('list');
  list.innerHTML = data.map(formatPost).join('');
}

document.getElementById('postForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = document.getElementById('text').value;
  const error = document.getElementById('error');
  error.textContent = '';
  const res = await fetch('/api/posts', { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify({ text }) });
  if (!res.ok) {
    const { error: msg } = await res.json();
    error.textContent = msg || 'Error';
    return;
  }
  document.getElementById('text').value = '';
  await load();
});

load();