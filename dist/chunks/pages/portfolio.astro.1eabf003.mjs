/* empty css                           */import { b as createAstro, d as createComponent, r as renderTemplate, f as renderComponent } from '../astro.4185f597.mjs';
import { g as getCollection, $ as $$Layout } from './blogs.astro.f4c3153e.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'react';
import 'prop-types';
import 'react/jsx-runtime';
import '@fortawesome/react-fontawesome';

const $$Astro = createAstro();
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  const works = await getCollection("works");
  const filters = await getCollection("portfolioFilters");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio - Curtis Murray Data Science Statistics Research Clinical NLP Healthcare Text" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Portfolio", null, { "portfolio": works, "filters": filters, "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/curtismurray/Dropbox/Website/revamp/src/components/Portfolio", "client:component-export": "default" })}
` })}`;
}, "/Users/curtismurray/Dropbox/Website/revamp/src/pages/portfolio.astro", void 0);

const $$file = "/Users/curtismurray/Dropbox/Website/revamp/src/pages/portfolio.astro";
const $$url = "/portfolio";

export { $$Portfolio as default, $$file as file, $$url as url };
