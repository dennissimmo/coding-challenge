import Dasboard from "./views/Dasboard";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();   
}

const router = async () => {
    const routes = [
        {
            path: "/",
            view: () => Dasboard
        },
        // {
        //     path: "/posts",
        //     view: () => console.log('Viewing Posts')
        // },
        // {
        //     path: "/settings",
        //     view: () => console.log('Viewing Settings')
        // }
    ];

    // Test each route for potentional match
    const pathName = window.location.pathname;
    let matchingRoute = routes.find(route => route.path === pathName);

    let view;
    if (matchingRoute) {
        // Execute view
        view = new matchingRoute.view();
    } else {
        // default root page | create 404 page
        matchingRoute = routes[0];
        view = new matchingRoute.view();
    }

    document.querySelector("#app").innerHTML = await view.getHTML();
};

window.addEventListener("popstate", router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});