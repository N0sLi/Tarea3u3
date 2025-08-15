import { formatPost } from '../public/app.js';

describe('formatPost', () => {
  test('renders text and date', () => {
    const html = formatPost({ text: 'Hola <ESPE>', createdAt: '2025-01-01T00:00:00.000Z' });
    expect(html).toContain('Hola &lt;ESPE&gt;'); // escapado
    expect(html).toContain('class="meta"');
  });
});