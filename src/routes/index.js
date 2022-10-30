import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

// không đăng nhập vẫn vào được
const publicRoutes = [
    // Bổ sung chú thích:
    // Layout: DefaultLayout if undefined / route.layout if layout=truthy / Fragment if null (not Layout)
    // Component: là children truyền vào của Layout đó (VD Home là children truyền vào của DefaultLayout )
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    // { path: '/upload', component: Upload, layout: null },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

// phải đăng nhập mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
