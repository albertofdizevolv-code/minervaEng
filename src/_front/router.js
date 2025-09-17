import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"60211d07-9b7e-4fc8-b161-61b94c653ca8","homePageId":"120d4a89-42a4-4723-bfae-fa073a730f0c","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"3fe865c4-6889-4dca-9f28-aeaad4403e78","linkId":"3fe865c4-6889-4dca-9f28-aeaad4403e78","name":"CalendarioOS","folder":"Kanban/","paths":{"en":"calendarioos","default":"calendarioos"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"0172e428-ec10-4e38-aabb-8c9f71b1fd92","sectionTitle":"Root Container","linkId":"6ee95fd9-0394-4f80-aab6-237699754d2f"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ed6ebb26-f374-49f6-85f1-552d11ff4bb4","linkId":"ed6ebb26-f374-49f6-85f1-552d11ff4bb4","name":"FluxoOsRealizarVizita","folder":null,"paths":{"en":"fluxoosrealizarvizita","default":"fluxoosrealizarvizita"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"bf00ec47-d410-41be-a60b-e75baa6882be","sectionTitle":"Root Container","linkId":"148a3d6a-2fd0-42af-ba18-a766aa38c95f"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"db302df0-5642-40d5-845f-2e15549430fe","linkId":"db302df0-5642-40d5-845f-2e15549430fe","name":"Recuperar Senha","folder":"auth/","paths":{"en":"recuperar-senha","default":"recuperar-senha"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"264c14ab-d3a5-40bd-968f-c9d63284e11a","sectionTitle":"Root Container","linkId":"cf512dad-25ff-4fe4-8178-bc207d602cbe"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"cc18daa4-380a-4551-aa56-083e99e0f54b","linkId":"cc18daa4-380a-4551-aa56-083e99e0f54b","name":"Recuperar Senha Editar","folder":"auth/","paths":{"en":"recuperar-senha-copy","default":"recuperar-senha-copy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"ccd79d60-a87c-4c3f-ab12-1e90cef8bbbd","sectionTitle":"Root Container","linkId":"01ca3571-eb73-4882-bebd-2da7cd078d3d"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"1328ca16-cf50-4313-adb9-6c005bfda86b","linkId":"1328ca16-cf50-4313-adb9-6c005bfda86b","name":"fluxoOsHistorico","folder":"Kanban/","paths":{"en":"fluxooshistorico","default":"fluxooshistorico"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"886a8488-361c-4574-91e9-0afc9b31b19a","sectionTitle":"Root Container","linkId":"ec1ca6dd-0e33-474a-8e8e-369fd9eb9936"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"61f55d99-30b4-4ccb-831a-9baf44296036","linkId":"61f55d99-30b4-4ccb-831a-9baf44296036","name":"OrdemDeServicoInicio","folder":"OS/","paths":{"en":"ordemdeservicoinicio","default":"ordemdeservicoinicio"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a3abd7be-2158-4b7b-9686-e9452a7ff4b4","sectionTitle":"Root Container","linkId":"a92d9c43-083c-469a-873e-ab3beccaa7ef"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"520776de-236a-477d-968c-2a7beca47717","linkId":"520776de-236a-477d-968c-2a7beca47717","name":"OrdemDeServicoOS1","folder":"OS/","paths":{"en":"ordemdeservicoos1","default":"ordemdeservicoos1"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"bbb9c39d-a243-4b7a-96f4-9f4e66d3ebf0","sectionTitle":"Root Container","linkId":"6a45c1a2-e706-4377-b046-c5e44bc75a7a"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"83741df1-317d-4f9e-948c-4c86859a40d0","linkId":"83741df1-317d-4f9e-948c-4c86859a40d0","name":"OrdemServicoTipo","folder":"OS/","paths":{"en":"ordemservicotipo","default":"ordemservicotipo"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"bc8d4f8e-129e-4b46-bba3-ee00b3a616fe","sectionTitle":"Root Container","linkId":"a4cc8e8c-903f-45c7-becc-137046923820"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"56a54266-43ae-4a52-8f46-f89fb00efd74","linkId":"56a54266-43ae-4a52-8f46-f89fb00efd74","name":"OrdemServicoAtribuirOs","folder":"OS/","paths":{"en":"ordemservicoatribuiros","default":"ordemservicoatribuiros"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"46046c8d-bd10-4756-ba79-c63766091766","sectionTitle":"Root Container","linkId":"7af99ef8-a476-4e6e-b502-2803e15fd1d4"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"824ee45a-67c0-4ec9-bda1-52050d98c761","linkId":"824ee45a-67c0-4ec9-bda1-52050d98c761","name":"OrdemDeServicoFollowUp","folder":null,"paths":{"en":"ordemdeservicofollowup","default":"ordemdeservicofollowup"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"b511c879-9a1c-41c7-b860-ec86743d3dd7","sectionTitle":"Root Container","linkId":"4a5d01be-90b3-499c-9ba5-cd64aeb64c52"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"27e65fe5-d544-4430-a529-1e96240973de","linkId":"27e65fe5-d544-4430-a529-1e96240973de","name":"kanban","folder":"Kanban/","paths":{"en":"kanban","default":"kanban"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2b290eca-aab5-41c2-b374-46022e1b1f54","sectionTitle":"Root Container","linkId":"32285cf9-3b08-48cc-a07b-95239dd750dd"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"120d4a89-42a4-4723-bfae-fa073a730f0c","linkId":"120d4a89-42a4-4723-bfae-fa073a730f0c","name":"LoginPage","folder":"auth/","paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"df353724-09e1-4e0e-9796-a22dfbcff577","sectionTitle":"Root Container","linkId":"6b6a1a74-b75b-4388-859d-fe247f42292b"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 4;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
