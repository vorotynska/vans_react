# vans_react

1. Mirage.js
2. React-router-dom.
3. Nested Routes.
4. Shared UI.
5. Query Parameters:
      a. Represent a change in the UI : sorting, filtering, pagination.
6. Used as a "single source of truth" for certain application state.
7. Loaders and Error:
     a. Export a loader function from the page that fetches the data that page will need.
     b. Pass a loader prop to the Router that renders that page and pass in the loader function.
     c. Use the useLoaderData hook in the component to get the data.