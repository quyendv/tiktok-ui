// Layouts
import { HeaderOnly } from '~/components/Layout';

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
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    // { path: '/upload', component: Upload, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// phải đăng nhập mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
