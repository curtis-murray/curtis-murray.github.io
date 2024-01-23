import { j as createVNode, F as Fragment, s as spreadAttributes } from './astro.4185f597.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>I’m NLP Researcher and Mathematician from Melbourne Australia, working at RMIT. I undertook my PhD in Applied Mathematics at the University of Adelaide. <br> <br>\nMy research interests are NLP, and its applications in healthcare.</p>");

				const frontmatter = {"information":{"name":"Curtis Murray","pronouns":"(he/him)","profession":"NLP Researcher @ RMIT","husband":"Husband","father":"Father","email":"curtis@curtismurray.tech","location":"Melbourne, Australia","socialMedia":{"gitHub":"https://github.com/curtis-murray","twitter":"https://twitter.com/curtis_w_murray","linkedIn":"https://www.linkedin.com/in/curtiswmurray/","scholar":"https://scholar.google.com.au/citations?user=25fFcUUAAAAJ&hl=en&oi=ao"}}};
				const file = "/Users/curtismurray/Dropbox/Website/revamp/src/content/personalInfo/index.md";
				const url = undefined;
				function rawContent() {
					return "I'm NLP Researcher and Mathematician from Melbourne Australia, working at RMIT. I undertook my PhD in Applied Mathematics at the University of Adelaide. <br/> <br/>\nMy research interests are NLP, and its applications in healthcare.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
