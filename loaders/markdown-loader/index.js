import frontMatter from 'front-matter'
import markdownIt from 'markdown-it'
import hljs from 'highlight.js'
import objectAssign from 'object-assign'

const highlight = (str, lang) => {
    if ((lang !== null) && hljs.getLanguage(lang)) {
        try {
            return hljs.highlight(lang, str).value
        } catch (_error) {
            console.error(_error)
        }
    }
    try {
        return hljs.highlightAuto(str).value
    } catch (_error) {
        console.error(_error)
    }
    return ''
}

const md = markdownIt({html: true, linkify: true, typographer: true, highlight})
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-deflist'))
    .use(require('markdown-it-abbr'))
    .use(require('markdown-it-attrs'))
    .enable('table');

module.exports = function(content) {
    this.cacheable();
    const meta   = frontMatter(content);
    const body   = md.render(meta.body)
        .replace(/<h1>/g, '<h3 class="title is-1">')
        .replace(/<h2>/g, '<h3 class="title is-2">')
        .replace(/<h3>/g, '<h3 class="title is-3">')
        .replace(/<h4>/g, '<h3 class="title is-4">')
        .replace(/<h5>/g, '<h3 class="title is-5">')
        .replace(/<h6>/g, '<h3 class="title is-6">');

    const result = objectAssign({}, meta.attributes, {body});
    this.value   = result;
    return `module.exports = ${JSON.stringify(result)}`
};
