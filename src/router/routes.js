// Define your components
const HomeComponent = () => {
    return `<co-productes></co-productes>`;
};

const SearchComponent = () => {
    return `<co-search-input></co-search-input>`;
};

// Define your routes
const routes = [
    {path: "http://127.0.0.1:8080/", component: HomeComponent},
    {path: "http://127.0.0.1:8080/search", component: SearchComponent},
];

// Define a function to render the component based on the current route
const renderComponent = () => {
    // Get the current URL hash
    const href = window.location.href;

    // Find the matching route
    const route = routes.find((r) => r.path === href);

    // Render the component
    document.getElementById("app").innerHTML = route.component()
};

// Render the initial component
renderComponent();