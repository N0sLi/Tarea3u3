import request from 'supertest';
import express from 'express';
import { addPost, listPosts } from '../src/postsStore.js';

const app = express();
app.use(express.json());
app.get('/api/posts', (req, res) => res.json(listPosts()));
app.post('/api/posts', (req, res) => {
  try { res.status(201).json(addPost((req.body||{}).text)); }
  catch (e) { return res.status(400).json({ error: 'Bad request' }); }
});

describe('API /api/posts', () => {
  test('creates a post', async () => {
    const res = await request(app).post('/api/posts').send({ text: 'Hola ESPE' });
    expect(res.statusCode).toBe(201);
    expect(res.body.text).toBe('Hola ESPE');
  });

  test('lists posts newest-first', async () => {
    await request(app).post('/api/posts').send({ text: 'Primero' });
    await request(app).post('/api/posts').send({ text: 'Segundo' });
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toBe(200);
    expect(res.body[0].text).toBe('Segundo');
  });
});