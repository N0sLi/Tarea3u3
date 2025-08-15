import { randomUUID } from 'node:crypto';

const posts = []; // { id, text, createdAt }

export function addPost(text) {
  const t = (text || '').trim();
  if (!t) throw new Error('EMPTY');
  if (t.length > 280) throw new Error('TOO_LONG');
  const post = { id: randomUUID(), text: t, createdAt: new Date().toISOString() };
  posts.unshift(post); // newest first
  return post;
}

export function listPosts() {
  return posts;
}