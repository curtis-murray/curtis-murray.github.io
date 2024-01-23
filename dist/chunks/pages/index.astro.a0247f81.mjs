/* empty css                           */import { _ as __astro_tag_component__, b as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../astro.4185f597.mjs';
import { g as getCollection, S as Sidebar, $ as $$Layout } from './blogs.astro.f4c3153e.mjs';
/* empty css                           */import PropTypes from 'prop-types';
import { jsxs, jsx } from 'react/jsx-runtime';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'react';
import '@fortawesome/react-fontawesome';

const SkillCard = ({
  skill
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: `flex gap-4 rounded-xl p-6 border-dark-border dark:border-2 ${skill.data.bgColor} dark:bg-transparent`,
    children: [/* @__PURE__ */ jsx("img", {
      className: "w-10 h-10 object-contain block",
      src: skill.data.img,
      alt: "icon"
    }), /* @__PURE__ */ jsxs("div", {
      className: "space-y-2",
      children: [/* @__PURE__ */ jsx("h3", {
        className: "dark:text-white text-[22px] font-semibold",
        children: skill.data.skill
      }), /* @__PURE__ */ jsx("p", {
        className: "leading-8 text-text-primary dark:text-main-text",
        children: skill.data.about
      })]
    })]
  });
};
SkillCard.propTypes = {
  skill: PropTypes.object
};
__astro_tag_component__(SkillCard, "@astrojs/react");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const personalInfo = await getCollection("personalInfo");
  const skills = await getCollection("skills");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About - Curtis Murray Data Science Statistics Research Clinical NLP Healthcare Text" }, { "default": ($$result2) => renderTemplate`
  
  ${maybeRenderHead()}<div class="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
    <!-- about page title -->
    <h2 class="relative inline-block text-[2.5rem] dark:text-white font-bold transform after:absolute after:md:w-[12rem] after:left-[14rem] after:h-0.5 after:bg-gradient-to-r after:from-btn-secondary after:to-btn-secondary after:content-[''] after:rounded-md after:top-2/4 after:transform">
      About Me
    </h2>
    <!-- personal info for mobile devices start -->
    <div class="lg:hidden">
      ${renderComponent($$result2, "Sidebar", Sidebar, { "personalInfo": personalInfo })}
    </div>
    <!-- personal info for mobile devices end -->

    <div class="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
      <div class="col-span-12 space-y-2.5">
        <div class="lg:mr-16">
          <p class="text-text-primary dark:text-main-text leading-7">${unescapeHTML(personalInfo[0].body)}</p>
        </div>
        <div></div>
      </div>
    </div>
  </div>

  
  <div class="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
    <h3 class="text-[35px] dark:text-white font-bold font-robotoSlab pb-5">
    Research Interests:
    </h3>
    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
      ${skills.map((item) => {
    return renderTemplate`${renderComponent($$result2, "SkillCard", SkillCard, { "skill": item })}`;
  })}
    </div>
  </div>

 
  
` })}`;
}, "/Users/curtismurray/Dropbox/Website/revamp/src/pages/index.astro", void 0);

const $$file = "/Users/curtismurray/Dropbox/Website/revamp/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
