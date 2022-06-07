import { createApp, h } from "vue";
import { createInertiaApp, Head, Link } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import Layout from "@/Shared/Layout";

// noinspection JSIgnoredPromiseFromCall
createInertiaApp({
    resolve: async (name) => {
        let page = (await import(`./Pages/${name}`)).default;

        if (page.layout === undefined && !name.startsWith('Admin/')) {
            page.layout = Layout;
        }

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Head", Head)
            .component("Link", Link)
            .mount(el);
    },
    title: (title) => `${title} - iStore`,
});

InertiaProgress.init();
