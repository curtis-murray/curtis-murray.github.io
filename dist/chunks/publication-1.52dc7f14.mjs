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

				const html = updateImageReferences("");

				const frontmatter = {"title":"Symptom extraction from the narratives of personal experiences with COVID-19 on Reddit","authors":["Curtis Murray","Lewis Mitchell","Jonathon Tuke","Mark Mackay"],"year":"2021","journal":"Workshop Proceedings of the 15th International AAAI Conference on Web and Social Media, Special Edition on Healthcare Social Analytics","doi":"https://doi.org/10.36190/2021.71","bgColor":"bg-edu-card-one"};
				const file = "/Users/curtismurray/Dropbox/Website/revamp/src/content/publications/publication-1.md";
				const url = undefined;
				function rawContent() {
					return "";
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
