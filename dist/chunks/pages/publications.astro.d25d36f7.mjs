/* empty css                           */import { _ as __astro_tag_component__, b as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.4185f597.mjs';
import { g as getCollection, F as FaNewspaper, $ as $$Layout } from './blogs.astro.f4c3153e.mjs';
import PropTypes from 'prop-types';
import { jsxs, jsx } from 'react/jsx-runtime';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'react';
import '@fortawesome/react-fontawesome';

const CardPub = ({
  details
}) => {
  return /* @__PURE__ */ jsxs("a", {
    href: details.data.doi,
    className: `${details.data.bgColor} dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-dark-border dark:border-2 block`,
    target: "_blank",
    rel: "noopener noreferrer",
    children: [/* @__PURE__ */ jsx("span", {
      className: "text-tiny text-text-primary dark:text-dark-text",
      children: details.data.year
    }), /* @__PURE__ */ jsx("h3", {
      className: "text-xl dark:text-white",
      children: details.data.title
    }), /* @__PURE__ */ jsx("p", {
      className: "dark:text-dark-text",
      children: details.data.authors.join(", ")
    }), " ", /* @__PURE__ */ jsx("p", {
      className: "dark:text-dark-text",
      children: details.data.journal
    }), /* @__PURE__ */ jsxs("span", {
      className: "text-tiny text-text-secondary dark:text-dark-text",
      children: ["DOI: ", details.data.doi]
    })]
  });
};
CardPub.propTypes = {
  details: PropTypes.shape({
    data: PropTypes.shape({
      bgColor: PropTypes.string,
      year: PropTypes.string,
      title: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      journal: PropTypes.string,
      doi: PropTypes.string
    })
  })
};
__astro_tag_component__(CardPub, "@astrojs/react");

const $$Astro = createAstro();
const $$Publications = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Publications;
  const publications = await getCollection("publications");
  const preprints = await getCollection("preprints");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resume - Curtis Murray Data Science Statistics Research Clinical NLP Healthcare Text" }, { "default": ($$result2) => renderTemplate`
  
  ${maybeRenderHead()}<div class="container mr-auto ml-auto sm:px-5 md:px-10 lg:px-14">
    <div class="py-12 px-4 md:px-0">
      <!-- resume page title -->
      <h2 class="relative inline-block text-[2.5rem] dark:text-white font-bold transform after:absolute after:md:w-[12rem] after:left-[12rem] after:h-0.5 after:bg-gradient-to-r after:from-btn-secondary after:to-btn-secondary after:content-[''] after:rounded-md after:top-2/4 after:transform">
        Papers
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-6 mt-[30px]">
        <!-- publication start -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <span class="text-6xl text-light-icon">
              <i class="fa-solid fa-box-archive"></i>
              </span>
            <h4 class="text-[1.625rem] dark:text-white font-medium">
              Preprints
            </h4>
          </div>
          ${preprints.map((details) => renderTemplate`${renderComponent($$result2, "CardPub", CardPub, { "details": details })}`)}
        </div>
        <!-- publication end -->  
        <!-- Preprints start -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <span class="text-6xl text-light-icon">
              ${renderComponent($$result2, "FaNewspaper", FaNewspaper, {})}
            </span>
            <h4 class="text-[1.625rem] dark:text-white font-medium">
              Published articles
            </h4>
          </div>
          ${publications.map((details) => renderTemplate`${renderComponent($$result2, "CardPub", CardPub, { "details": details })}`)}
        </div>
        <!-- publication end -->

        </div>
    </div>
  </div>
  
` })}`;
}, "/Users/curtismurray/Dropbox/Website/revamp/src/pages/publications.astro", void 0);

const $$file = "/Users/curtismurray/Dropbox/Website/revamp/src/pages/publications.astro";
const $$url = "/publications";

export { $$Publications as default, $$file as file, $$url as url };
