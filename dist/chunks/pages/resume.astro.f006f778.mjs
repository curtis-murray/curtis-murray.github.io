/* empty css                           */import { _ as __astro_tag_component__, b as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.4185f597.mjs';
import { G as GenIcon, g as getCollection, a as FaBriefcase, $ as $$Layout } from './blogs.astro.f4c3153e.mjs';
import PropTypes from 'prop-types';
import { jsxs, jsx } from 'react/jsx-runtime';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'react';
import '@fortawesome/react-fontawesome';

const Card = ({
  details
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: `${details.data.bgColor} dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-dark-border dark:border-2`,
    children: [/* @__PURE__ */ jsx("span", {
      className: "text-tiny text-text-primary dark:text-dark-text",
      children: details.data.year
    }), /* @__PURE__ */ jsx("h3", {
      className: "text-xl dark:text-white",
      children: details.data.title
    }), /* @__PURE__ */ jsx("p", {
      className: "dark:text-dark-text",
      children: details.data.subTitle
    })]
  });
};
Card.propTypes = {
  details: PropTypes.object
};
__astro_tag_component__(Card, "@astrojs/react");

const ProgressBar = ({
  details
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "mb-5",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex justify-between mb-1",
      children: [/* @__PURE__ */ jsx("span", {
        className: "font-semibold text-light-title dark:text-main-text",
        children: details.data.title
      }), /* @__PURE__ */ jsxs("span", {
        className: "font-semibold text-light-title dark:text-main-text",
        children: [details.data.percentage, "%"]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "w-full bg-light-bg-four rounded-full h-1 dark:bg-dark-bg-two",
      children: /* @__PURE__ */ jsx("div", {
        className: `${details.data.bgColor} h-1 rounded-full`,
        style: {
          width: `${details.data.percentage}%`
        }
      })
    })]
  });
};
ProgressBar.propTypes = {
  details: PropTypes.object
};
__astro_tag_component__(ProgressBar, "@astrojs/react");

const Tag = ({
  tagName
}) => {
  return /* @__PURE__ */ jsx("button", {
    className: "resume-btn cursor-default rounded-lg bg-light-bg-six pl-5 pr-5 pt-2 pb-2 text-text-primary dark:bg-dark-bg-two dark:text-main-text",
    children: tagName
  });
};
Tag.propTypes = {
  tagName: PropTypes.string
};
__astro_tag_component__(Tag, "@astrojs/react");

// THIS FILE IS AUTO GENERATED
function FaGraduationCap (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"}}]})(props);
}

const $$Astro = createAstro();
const $$Resume = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Resume;
  const progressBar = await getCollection("progressBar");
  const education = await getCollection("education");
  const experience = await getCollection("experience");
  const knowledges = await getCollection("knowledges");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resume - Curtis Murray Data Science Statistics Research Clinical NLP Healthcare Text" }, { "default": ($$result2) => renderTemplate`
  
  ${maybeRenderHead()}<div class="container mr-auto ml-auto sm:px-5 md:px-10 lg:px-14">
    <div class="py-12 px-4 md:px-0">
      <!-- resume page title -->
      <h2 class="relative inline-block text-[2.5rem] dark:text-white font-bold transform after:absolute after:md:w-[12rem] after:left-[12rem] after:h-0.5 after:bg-gradient-to-r after:from-btn-secondary after:to-btn-secondary after:content-[''] after:rounded-md after:top-2/4 after:transform">
        Resume
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
        <!-- eductation start -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <span class="text-6xl text-light-icon">
              ${renderComponent($$result2, "FaGraduationCap", FaGraduationCap, {})}
            </span>
            <h4 class="text-[1.625rem] dark:text-white font-medium">
              Education
            </h4>
          </div>
          ${education.map((details) => renderTemplate`${renderComponent($$result2, "Card", Card, { "details": details })}`)}
        </div>
        <!-- eductation end -->

        <!-- experience start -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <span class="text-6xl text-light-icon">
              ${renderComponent($$result2, "FaBriefcase", FaBriefcase, {})}
            </span>
            <h4 class="text-[1.625rem] dark:text-white font-medium">
              Experience
            </h4>
          </div>
          ${experience.map((details) => renderTemplate`${renderComponent($$result2, "Card", Card, { "details": details })}`)}
        </div>
        <!-- experience end -->
      </div>
    </div>
  </div>

  
  <div class="container mr-auto ml-auto bg-light-bg dark:bg-dark-bg py-12 px-2 sm:px-5 md:px-10 lg:px-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="col-span-1">
        <h4 class="text-[1.625rem] dark:text-white font-medium mb-6">
        Technical Skills
        </h4>
        ${progressBar.map((details) => renderTemplate`${renderComponent($$result2, "ProgressBar", ProgressBar, { "details": details })}`)}
      </div>

      <div class="col-span-1">
        <h4 class="text-[1.625rem] dark:text-white font-medium mb-8">
          Domains
        </h4>

        <div class="flex gap-y-5 gap-x-2.5 flex-wrap">
          ${knowledges[0].data.skill.map((item) => renderTemplate`${renderComponent($$result2, "Tag", Tag, { "tagName": item })}`)}
        </div>
      </div>
    </div>
  </div>
  
  
` })}`;
}, "/Users/curtismurray/Dropbox/Website/revamp/src/pages/resume.astro", void 0);

const $$file = "/Users/curtismurray/Dropbox/Website/revamp/src/pages/resume.astro";
const $$url = "/resume";

export { $$Resume as default, $$file as file, $$url as url };
