export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import '../chunks/astro.4185f597.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'react';
import 'react-dom/server';

const page = () => import('../chunks/pages/blogs.astro.f4c3153e.mjs').then(n => n.b);

export { page };
