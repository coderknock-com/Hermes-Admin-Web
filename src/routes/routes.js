import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
    {
        path: "/",
        component: DashboardLayout,
        redirect: "/dashboard",
        children: [
            {
                icon: "dashboard",
                path: "dashboard",
                name: "routes.dashboard",
                component: Dashboard,
            },
            {
                icon: "person",
                path: "user",
                name: "routes.userProfile",
                component: UserProfile,
            },
            {
                icon: "content_paste",
                path: "table",
                name: "routes.tableList",
                component: TableList,
            },
            {
                icon: "library_books",
                path: "typography",
                name: "routes.typography",
                component: Typography,
            },
            {
                icon: "bubble_chart",
                path: "icons",
                name: "routes.icons",
                component: Icons,
            },
            {
                icon: "location_on",
                path: "maps",
                name: "routes.maps",
                meta: {
                    hideFooter: true,
                },
                component: Maps,
            },
            {
                icon: "notifications",
                path: "notifications",
                name: "routes.notifications",
                component: Notifications,
            },
            {
                icon: "unarchive",
                path: "upgrade",
                name: "routes.upgrade",
                component: UpgradeToPRO,
            },
        ],
    },
];

export default routes;
