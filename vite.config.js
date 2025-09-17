import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"calendarioos":{"outputDir":"./calendarioos","lang":"en","title":"","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/calendarioos/"},{"rel":"alternate","hreflang":"en","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/calendarioos/"}]},"fluxoosrealizarvizita":{"outputDir":"./fluxoosrealizarvizita","lang":"en","title":"","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/fluxoosrealizarvizita/"},{"rel":"alternate","hreflang":"en","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/fluxoosrealizarvizita/"}]},"recuperar-senha":{"outputDir":"./recuperar-senha","lang":"en","title":"","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/recuperar-senha/"},{"rel":"alternate","hreflang":"en","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/recuperar-senha/"}]},"recuperar-senha-copy":{"outputDir":"./recuperar-senha-copy","lang":"en","title":"","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/recuperar-senha-copy/"},{"rel":"alternate","hreflang":"en","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/recuperar-senha-copy/"}]},"fluxooshistorico":{"outputDir":"./fluxooshistorico","lang":"en","title":"","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/fluxooshistorico/"},{"rel":"alternate","hreflang":"en","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/fluxooshistorico/"}]},"ordemdeservicoinicio":{"outputDir":"./ordemdeservicoinicio","lang":"en","title":"","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/ordemdeservicoinicio/"},{"rel":"alternate","hreflang":"en","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/ordemdeservicoinicio/"}]},"ordemdeservicoos1":{"outputDir":"./ordemdeservicoos1","lang":"en","title":"","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/ordemdeservicoos1/"},{"rel":"alternate","hreflang":"en","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/ordemdeservicoos1/"}]},"ordemservicotipo":{"outputDir":"./ordemservicotipo","lang":"en","title":"","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/ordemservicotipo/"},{"rel":"alternate","hreflang":"en","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/ordemservicotipo/"}]},"ordemservicoatribuiros":{"outputDir":"./ordemservicoatribuiros","lang":"en","title":"","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/ordemservicoatribuiros/"},{"rel":"alternate","hreflang":"en","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/ordemservicoatribuiros/"}]},"ordemdeservicofollowup":{"outputDir":"./ordemdeservicofollowup","lang":"en","title":"","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/ordemdeservicofollowup/"},{"rel":"alternate","hreflang":"en","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/ordemdeservicofollowup/"}]},"kanban":{"outputDir":"./kanban","lang":"en","title":"","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/kanban/"},{"rel":"alternate","hreflang":"en","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/kanban/"}]},"index":{"outputDir":"./","lang":"en","title":"","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://60211d07-9b7e-4fc8-b161-61b94c653ca8.weweb-preview.io/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
