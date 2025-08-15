import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { addPost, listPosts } from './postsStore.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// API
app.get('/api/posts', (req, res) => {
  res.json(listPosts());
});

app.post('/api/posts', (req, res) => {
  try {
    const { text } = req.body || {};
    const post = addPost(text);
    res.status(201).json(post);
  } catch (e) {
    if (e.message === 'EMPTY') return res.status(400).json({ error: 'Text required' });
    if (e.message === 'TOO_LONG') return res.status(400).json({ error: 'Max 280 chars' });
    res.status(500).json({ error: 'Server error' });
  }
});

// Healthcheck (para monitoreo)
app.get('/health', (req, res) => res.json({ ok: true, ts: Date.now() }));

// Arranque
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Micro-Blog running on :${port}`));