import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from './astro/server_Dw8rLEbH.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as data, N as Navbar, $ as $$Layout } from './navbar_C1K0qySZ.mjs';
/* empty css                         */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { C as CardProduct, P as ProductOverview$3, F as Footer, a as TestimonialsFade, T as TestimonialsFade$1 } from './promoSectionLarge_CemSAq6K.mjs';
import { S as StoreNavigationDoubleColumn, P as ProductBadge, C as CardProduct$1 } from './storeDoubleColumn_BMuYvcrK.mjs';
import { a as ReviewComment, b as ProductGallery, c as ProductSizes, P as ProductOverview$2, R as ReviewSummaryChart } from './reviewSummaryChart_COf9_4zi.mjs';
import 'react';
import { R as ReviewRating } from './reviewRating_Dx3XaICf.mjs';
import { O as OrderSummary$4, S as ShoppingCart$1 } from './shoppingCart_D8HnUnr9.mjs';

const ComplexNavbar = () => {
  return /* @__PURE__ */ jsxs("nav", { className: "top-0 flex-wrap px-0 py-0 d-none d-lg-block navbar shadow navbar-expand-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "container py-2", children: [
      /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", children: /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx("span", { className: "text-dark px-3 text-lg font-weight-bold me-4", children: "Astro Ecommerce" }) }) }),
      /* @__PURE__ */ jsxs("ul", { className: "navbar-nav d-none d-lg-flex ms-12", children: [
        /* @__PURE__ */ jsx("li", { className: "nav-item px-3 py-3 border-radius-sm d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 nav-link", children: "Store" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item px-3 py-3 border-radius-sm d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 nav-link", children: "Designers" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item px-3 py-3 border-radius-sm d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 nav-link", children: "Fashion" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4", id: "navbar", children: /* @__PURE__ */ jsxs("ul", { className: "navbar-nav ms-md-auto  justify-content-end", children: [
        /* @__PURE__ */ jsx("li", { className: "nav-item d-xl-none ps-3 d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 nav-link", id: "", children: /* @__PURE__ */ jsxs("div", { className: "sidenav-toggler-inner", children: [
          /* @__PURE__ */ jsx("i", { className: "bg-white sidenav-toggler-line" }),
          /* @__PURE__ */ jsx("i", { className: "bg-white sidenav-toggler-line" }),
          /* @__PURE__ */ jsx("i", { className: "bg-white sidenav-toggler-line" })
        ] }) }) }),
        /* @__PURE__ */ jsx("li", { className: "px-3 nav-item d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 nav-link", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", className: "cursor-pointer fixed-plugin-button-nav", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", d: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z", "clip-rule": "evenodd" }) }) }) }),
        /* @__PURE__ */ jsxs("li", { className: "nav-item dropdown pe-2 d-flex align-items-center", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 nav-link", id: "dropdownMenuButton", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: /* @__PURE__ */ jsx("svg", { height: "16", width: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "cursor-pointers", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", d: "M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z", "clip-rule": "evenodd" }) }) }),
          /* @__PURE__ */ jsxs("ul", { className: "px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4", "aria-labelledby": "dropdownMenuButton", children: [
            /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsx("a", { className: "dropdown-item border-radius-md", href: "#", children: /* @__PURE__ */ jsxs("div", { className: "py-1 d-flex", children: [
              /* @__PURE__ */ jsx("div", { className: "my-auto", children: /* @__PURE__ */ jsx("img", { src: `${"/astro-ecommerce"}images/team-2.jpg`, className: "avatar avatar-sm  me-3 ", alt: "user image" }) }),
              /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column justify-content-center", children: [
                /* @__PURE__ */ jsxs("h6", { className: "mb-1 text-sm font-weight-normal", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-weight-bold", children: "New message" }),
                  " from Laur"
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "mb-0 text-xs text-secondary", children: [
                  /* @__PURE__ */ jsx("i", { className: "fa fa-clock me-1", "aria-hidden": "true" }),
                  "13 minutes ago"
                ] })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsx("a", { className: "dropdown-item border-radius-md", href: "#", children: /* @__PURE__ */ jsxs("div", { className: "py-1 d-flex", children: [
              /* @__PURE__ */ jsx("div", { className: "my-auto", children: /* @__PURE__ */ jsx("img", { src: `${"/astro-ecommerce"}logo/logo-spotify.svg`, className: "avatar avatar-sm bg-gradient-dark  me-3 ", alt: "logo spotify" }) }),
              /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column justify-content-center", children: [
                /* @__PURE__ */ jsxs("h6", { className: "mb-1 text-sm font-weight-normal", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-weight-bold", children: "New album" }),
                  " by Travis Scott"
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "mb-0 text-xs text-secondary", children: [
                  /* @__PURE__ */ jsx("i", { className: "fa fa-clock me-1", "aria-hidden": "true" }),
                  "1 day"
                ] })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "dropdown-item border-radius-md", href: "#", children: /* @__PURE__ */ jsxs("div", { className: "py-1 d-flex", children: [
              /* @__PURE__ */ jsx("div", { className: "avatar avatar-sm bg-gradient-secondary  me-3  my-auto", children: /* @__PURE__ */ jsxs("svg", { width: "12px", height: "12px", viewBox: "0 0 43 36", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: [
                /* @__PURE__ */ jsx("title", { children: "credit-card" }),
                /* @__PURE__ */ jsx("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd", children: /* @__PURE__ */ jsx("g", { transform: "translate(-2169.000000, -745.000000)", fill: "#FFFFFF", "fill-rule": "nonzero", children: /* @__PURE__ */ jsx("g", { transform: "translate(1716.000000, 291.000000)", children: /* @__PURE__ */ jsxs("g", { transform: "translate(453.000000, 454.000000)", children: [
                  /* @__PURE__ */ jsx("path", { className: "color-background", d: "M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z", opacity: "0.593633743" }),
                  /* @__PURE__ */ jsx("path", { className: "color-background", d: "M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z" })
                ] }) }) }) })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column justify-content-center", children: [
                /* @__PURE__ */ jsx("h6", { className: "mb-1 text-sm font-weight-normal", children: "Payment successfully completed" }),
                /* @__PURE__ */ jsxs("p", { className: "mb-0 text-xs text-secondary", children: [
                  /* @__PURE__ */ jsx("i", { className: "fa fa-clock me-1", "aria-hidden": "true" }),
                  "2 days"
                ] })
              ] })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "nav-item d-flex align-items-center ps-2", children: /* @__PURE__ */ jsx("a", { href: "#", className: "px-0 nav-link font-weight-bold" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item dropdown pe-2 d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "px-0 nav-link font-weight-bold", children: /* @__PURE__ */ jsx("div", { className: "avatar avatar-sm position-relative", children: /* @__PURE__ */ jsx("img", { src: `${"/astro-ecommerce"}images/team-1.jpg`, alt: "profile_image", className: "w-100 border-radius-md" }) }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-0 horizontal w-100 dark" }),
    /* @__PURE__ */ jsxs("div", { className: "container pt-3 pb-3", children: [
      /* @__PURE__ */ jsxs("ul", { className: "navbar-nav d-none d-lg-flex", children: [
        /* @__PURE__ */ jsxs("li", { className: "nav-item dropdown px-3 py-3 border-radius-sm d-flex align-items-center", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 dropdown-toggle nav-link", id: "dropdownProfile", "data-bs-toggle": "dropdown", "aria-expanded": "true", children: "Store" }),
          /* @__PURE__ */ jsx("ul", { className: "dropdown-menu dropdown-xxl", "aria-labelledby": "dropdownProfile", "data-bs-popper": "static", children: /* @__PURE__ */ jsx("div", { className: "row m-3", children: data.categories.slice(0, 3).map(
            (category) => /* @__PURE__ */ jsx("div", { className: "col-md-4", children: /* @__PURE__ */ jsx(
              CardProduct,
              {
                thumb_src: category.thumb_src,
                title: category.title,
                collection: category.collection
              }
            ) })
          ) }) })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "nav-item dropdown px-3 py-3 border-radius-sm d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 nav-link", children: "Messages" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item dropdown px-3 py-3 border-radius-sm d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 nav-link", children: "Pricing" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item dropdown px-3 py-3 border-radius-sm d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 nav-link", children: "Notifications" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-0 ms-md-auto d-flex align-items-center", children: /* @__PURE__ */ jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ jsx("span", { className: "input-group-text", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16px", height: "16px", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", className: "opacity-8", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" }) }) }),
        /* @__PURE__ */ jsx("input", { type: "text", className: "form-control max-width-200", placeholder: "Search", onfocus: "focused(this)", onfocusout: "defocused(this)" })
      ] }) })
    ] })
  ] });
};

const ComplexNavbarDark = () => {
  return /* @__PURE__ */ jsxs("nav", { className: "top-0 flex-wrap px-0 py-0 d-none d-lg-block navbar bg-slate-900 navbar-expand-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "container py-2", children: [
      /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", children: /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx("span", { className: "px-3 text-lg text-white font-weight-bold me-4", children: "Astro Ecommerce" }) }) }),
      /* @__PURE__ */ jsxs("ul", { className: "navbar-nav d-none d-lg-flex ms-12", children: [
        /* @__PURE__ */ jsx("li", { className: "nav-item px-3 py-3 border-radius-sm d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 text-white nav-link", children: "Store" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item px-3 py-3 border-radius-sm bg-slate-800 d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 text-white nav-link", children: "Designers" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item px-3 py-3 border-radius-sm d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 text-white nav-link", children: "Fashion" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4", id: "navbar", children: /* @__PURE__ */ jsxs("ul", { className: "navbar-nav ms-md-auto  justify-content-end", children: [
        /* @__PURE__ */ jsx("li", { className: "nav-item d-xl-none ps-3 d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 text-white nav-link", id: "", children: /* @__PURE__ */ jsxs("div", { className: "sidenav-toggler-inner", children: [
          /* @__PURE__ */ jsx("i", { className: "bg-white sidenav-toggler-line" }),
          /* @__PURE__ */ jsx("i", { className: "bg-white sidenav-toggler-line" }),
          /* @__PURE__ */ jsx("i", { className: "bg-white sidenav-toggler-line" })
        ] }) }) }),
        /* @__PURE__ */ jsx("li", { className: "px-3 nav-item d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 text-white nav-link", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", className: "cursor-pointer fixed-plugin-button-nav", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", d: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z", "clip-rule": "evenodd" }) }) }) }),
        /* @__PURE__ */ jsxs("li", { className: "nav-item dropdown pe-2 d-flex align-items-center", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 text-white nav-link", id: "dropdownMenuButton", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: /* @__PURE__ */ jsx("svg", { height: "16", width: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "cursor-pointers", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", d: "M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z", "clip-rule": "evenodd" }) }) }),
          /* @__PURE__ */ jsxs("ul", { className: "px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4", "aria-labelledby": "dropdownMenuButton", children: [
            /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsx("a", { className: "dropdown-item border-radius-md", href: "#", children: /* @__PURE__ */ jsxs("div", { className: "py-1 d-flex", children: [
              /* @__PURE__ */ jsx("div", { className: "my-auto", children: /* @__PURE__ */ jsx("img", { src: `${"/astro-ecommerce"}images/team-2.jpg`, className: "avatar avatar-sm  me-3 ", alt: "user image" }) }),
              /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column justify-content-center", children: [
                /* @__PURE__ */ jsxs("h6", { className: "mb-1 text-sm font-weight-normal", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-weight-bold", children: "New message" }),
                  " from Laur"
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "mb-0 text-xs text-secondary", children: [
                  /* @__PURE__ */ jsx("i", { className: "fa fa-clock me-1", "aria-hidden": "true" }),
                  "13 minutes ago"
                ] })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsx("a", { className: "dropdown-item border-radius-md", href: "#", children: /* @__PURE__ */ jsxs("div", { className: "py-1 d-flex", children: [
              /* @__PURE__ */ jsx("div", { className: "my-auto", children: /* @__PURE__ */ jsx("img", { src: `${"/astro-ecommerce"}logo/logo-spotify.svg`, className: "avatar avatar-sm bg-gradient-dark  me-3 ", alt: "logo spotify" }) }),
              /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column justify-content-center", children: [
                /* @__PURE__ */ jsxs("h6", { className: "mb-1 text-sm font-weight-normal", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-weight-bold", children: "New album" }),
                  " by Travis Scott"
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "mb-0 text-xs text-secondary", children: [
                  /* @__PURE__ */ jsx("i", { className: "fa fa-clock me-1", "aria-hidden": "true" }),
                  "1 day"
                ] })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "dropdown-item border-radius-md", href: "#", children: /* @__PURE__ */ jsxs("div", { className: "py-1 d-flex", children: [
              /* @__PURE__ */ jsx("div", { className: "avatar avatar-sm bg-gradient-secondary  me-3  my-auto", children: /* @__PURE__ */ jsxs("svg", { width: "12px", height: "12px", viewBox: "0 0 43 36", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: [
                /* @__PURE__ */ jsx("title", { children: "credit-card" }),
                /* @__PURE__ */ jsx("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd", children: /* @__PURE__ */ jsx("g", { transform: "translate(-2169.000000, -745.000000)", fill: "#FFFFFF", "fill-rule": "nonzero", children: /* @__PURE__ */ jsx("g", { transform: "translate(1716.000000, 291.000000)", children: /* @__PURE__ */ jsxs("g", { transform: "translate(453.000000, 454.000000)", children: [
                  /* @__PURE__ */ jsx("path", { className: "color-background", d: "M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z", opacity: "0.593633743" }),
                  /* @__PURE__ */ jsx("path", { className: "color-background", d: "M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z" })
                ] }) }) }) })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column justify-content-center", children: [
                /* @__PURE__ */ jsx("h6", { className: "mb-1 text-sm font-weight-normal", children: "Payment successfully completed" }),
                /* @__PURE__ */ jsxs("p", { className: "mb-0 text-xs text-secondary", children: [
                  /* @__PURE__ */ jsx("i", { className: "fa fa-clock me-1", "aria-hidden": "true" }),
                  "2 days"
                ] })
              ] })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "nav-item d-flex align-items-center ps-2", children: /* @__PURE__ */ jsx("a", { href: "#", className: "px-0 text-white nav-link font-weight-bold" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item dropdown pe-2 d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "px-0 text-white nav-link font-weight-bold", children: /* @__PURE__ */ jsx("div", { className: "avatar avatar-sm position-relative", children: /* @__PURE__ */ jsx("img", { src: `${"/astro-ecommerce"}images/team-1.jpg`, alt: "profile_image", className: "w-100 border-radius-md" }) }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-0 horizontal w-100 dark" }),
    /* @__PURE__ */ jsxs("div", { className: "container pt-3 pb-3", children: [
      /* @__PURE__ */ jsxs("ul", { className: "navbar-nav d-none d-lg-flex", children: [
        /* @__PURE__ */ jsxs("li", { className: "nav-item dropdown px-3 py-3 border-radius-sm bg-slate-800 d-flex align-items-center", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 text-white dropdown-toggle nav-link", id: "dropdownProfile", "data-bs-toggle": "dropdown", "aria-expanded": "true", children: "Store" }),
          /* @__PURE__ */ jsx("ul", { className: "dropdown-menu dropdown-xl", "aria-labelledby": "dropdownProfile", "data-bs-popper": "static", children: /* @__PURE__ */ jsx("div", { className: "row m-3", children: data.categories.slice(0, 2).map(
            (category) => /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsx(
              CardProduct,
              {
                thumb_src: category.thumb_src,
                title: category.title,
                collection: category.collection
              }
            ) })
          ) }) })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "nav-item dropdown px-3 py-3 border-radius-sm d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 text-white nav-link", children: "Messages" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item dropdown px-3 py-3 border-radius-sm d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 text-white nav-link", children: "Pricing" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item dropdown px-3 py-3 border-radius-sm d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "p-0 text-white nav-link", children: "Notifications" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-0 ms-md-auto d-flex align-items-center", children: /* @__PURE__ */ jsxs("div", { className: "input-group border-dark", children: [
        /* @__PURE__ */ jsx("span", { className: "text-white input-group-text border-dark bg-dark", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16px", height: "16px", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", className: "opacity-8", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" }) }) }),
        /* @__PURE__ */ jsx("input", { type: "text", className: "form-control max-width-200 border-dark bg-dark", placeholder: "Search", onfocus: "focused(this)", onfocusout: "defocused(this)" })
      ] }) })
    ] })
  ] });
};

function ComplexFooter() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-12 col-md-4", children: [
      /* @__PURE__ */ jsx("h5", { className: "mt-5", children: "Astro Ecommerce" }),
      /* @__PURE__ */ jsx("p", { className: "text-body text-sm pe-5", children: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "col-12 col-md-8", children: /* @__PURE__ */ jsx(StoreNavigationDoubleColumn, { title: data.products[1].title }) }),
    /* @__PURE__ */ jsx("div", { className: "col-12 mt-5 mb-lg-0 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "copyright text-center text-sm text-body", children: [
      "Copyright ©",
      /* @__PURE__ */ jsx("script", { children: "document.write(new Date().getFullYear())" }),
      " Astro Ecommerce by  ",
      /* @__PURE__ */ jsx("a", { href: "https://www.creative-tim.com", className: "text-dark", target: "_blank", children: "Creative Tim" }),
      "."
    ] }) })
  ] }) }) });
}

function ProductAccordion({
  data
}) {
  const accordion = [];
  Object.entries(data).map(([title, value], i2) => {
    if (i2 != 0) {
      accordion.push(
        /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
          /* @__PURE__ */ jsx("h5", { className: "accordion-header", id: "heading" + i2, children: /* @__PURE__ */ jsxs("button", { className: "accordion-button border-bottom font-weight-bold py-4", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapse" + i2, "aria-expanded": "false", "aria-controls": "collapse" + i2, children: [
            title,
            /* @__PURE__ */ jsx("i", { className: "collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("i", { className: "collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3", "aria-hidden": "true" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { id: "collapse" + i2, className: "accordion-collapse collapse", "aria-labelledby": "heading" + i2, "data-bs-parent": "#accordionEcommerce", children: /* @__PURE__ */ jsx("div", { className: "accordion-body text-body text-sm opacity-8", children: value }) })
        ] })
      );
    } else {
      accordion.push(
        /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
          /* @__PURE__ */ jsx("h5", { className: "accordion-header", id: "heading" + i2, children: /* @__PURE__ */ jsxs("button", { className: "accordion-button border-bottom font-weight-bold collapsed py-4", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapse" + i2, "aria-expanded": "true", "aria-controls": "collapse" + i2, children: [
            title,
            /* @__PURE__ */ jsx("i", { className: "collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("i", { className: "collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3", "aria-hidden": "true" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { id: "collapse" + i2, className: "accordion-collapse collapse show", "aria-labelledby": "heading" + i2, "data-bs-parent": "#accordionEcommerce", children: /* @__PURE__ */ jsx("div", { className: "accordion-body text-body text-sm opacity-8", children: value }) })
        ] })
      );
    }
  });
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "accordion mt-5", id: "accordionEcommerce", children: accordion }) });
}

function ProductImages({
  images
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6", children: [
    /* @__PURE__ */ jsx("img", { className: "w-90 rounded-2", src: images[0].src, alt: images[0].alt }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex mt-4", children: [
      /* @__PURE__ */ jsx("img", { className: "w-20 me-4 rounded-2", src: images[0].src, alt: images[0].alt }),
      /* @__PURE__ */ jsx("img", { className: "w-20 me-4 rounded-2", src: images[1].src, alt: images[1].alt }),
      /* @__PURE__ */ jsx("img", { className: "w-20 me-4 rounded-2", src: images[2].src, alt: images[2].alt }),
      /* @__PURE__ */ jsx("img", { className: "w-20 rounded-2", src: images[3].src, alt: images[3].alt })
    ] })
  ] }) });
}

function productOverviewGallery({
  title,
  price,
  images,
  colors,
  rating,
  full_description,
  reviews,
  data
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "card card-product card-plain", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    images.length != 0 && /* @__PURE__ */ jsx(ProductImages, { images }),
    /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6 mt-5 mt-lg-0", children: [
      title.length != 0 && /* @__PURE__ */ jsx("h2", { children: title }),
      price.length != 0 && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "d-flex mb-3", children: [
        /* @__PURE__ */ jsxs("h4", { className: "font-weight-normal", children: [
          "$",
          price.toLocaleString()
        ] }),
        /* @__PURE__ */ jsx("input", { className: "opacity-0", defaultValue: price })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-4", children: full_description }),
      rating != 0 && /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
        /* @__PURE__ */ jsx(ReviewRating, { rating, reviews }),
        /* @__PURE__ */ jsx("span", { className: "ms-2", children: "100 reviews" })
      ] }),
      colors.length != 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h6", { className: "mt-4", children: "Color:" }),
        colors && /* @__PURE__ */ jsx(ProductBadge, { colors })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center mt-4", children: [
        /* @__PURE__ */ jsx("button", { className: "btn btn-dark btn-lg mb-0 me-4", children: "Add to Cart" }),
        /* @__PURE__ */ jsx("a", { href: "#favorite", children: /* @__PURE__ */ jsx("i", { id: "heart1", className: "far fa-heart text-2xl" }) })
      ] }),
      /* @__PURE__ */ jsx(ProductAccordion, { data })
    ] })
  ] }) }) });
}

function CartItem({
  thumb_src,
  thumb_alt,
  title,
  color,
  size,
  price,
  stock
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "d-block d-md-flex mt-4", children: [
    /* @__PURE__ */ jsx("img", { className: "w-50 w-md-20 w-lg-10 rounded-3 m-4", src: `${"/astro-ecommerce"}${thumb_src}`, alt: thumb_alt }),
    /* @__PURE__ */ jsxs("div", { className: "w-100 w-md-50 pt-4 ps-md-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center mb-2", children: [
        /* @__PURE__ */ jsx("h6", { className: "text-lg mb-0", children: title }),
        /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center ms-3", children: stock ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("i", { className: "fas fa-check text-lg text-success" }),
          /* @__PURE__ */ jsx("p", { className: "mb-0 ms-2 text-sm", children: "In Stock" })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("i", { className: "fas fa-minus-circle text-lg" }),
          /* @__PURE__ */ jsx("p", { className: "mb-0 ms-2 text-sm", children: "Out of Stock" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-0", children: color }),
        /* @__PURE__ */ jsx("span", { className: "me-2", children: "," }),
        /* @__PURE__ */ jsx("p", { className: "mb-0", children: size })
      ] }),
      /* @__PURE__ */ jsxs("h6", { className: "mb-1 mt-5", children: [
        "$",
        price.toLocaleString()
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-40 w-md-5 pt-4 ms-auto me-4", children: /* @__PURE__ */ jsx("input", { type: "number", min: 0, className: "form-control mb-3", placeholder: "1", "aria-label": "amount" }) }),
    /* @__PURE__ */ jsx("div", { className: "w-5 pt-4 mt-1 text-end", children: /* @__PURE__ */ jsx("a", { className: "text-dark", href: "#", children: "Remove" }) })
  ] }) });
}

function ShoppingCart({
  products
}) {
  let subtotal = 0;
  products.map(
    (product) => subtotal += product.price
  );
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-3 text-center", children: "Shopping Cart" }),
    /* @__PURE__ */ jsx("h5", { className: "text-center mb-5", children: "You are eligible for Free Shipping." }),
    /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { className: "col-12", children: products.map(
        (product, i) => /* @__PURE__ */ jsxs(Fragment, { children: [
          i != 0 && /* @__PURE__ */ jsx("hr", { className: "horizontal dark my-4" }),
          /* @__PURE__ */ jsx(
            CartItem,
            {
              thumb_src: product.thumb_src,
              thumb_alt: product.thumb_alt,
              title: product.title,
              color: product.color,
              size: product.size,
              price: product.price,
              stock: product.stock
            }
          )
        ] })
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-7 col-md-8 mx-auto mt-4", children: [
        /* @__PURE__ */ jsx("div", { className: "card shadow-xs border bg-gray-100", children: /* @__PURE__ */ jsx("div", { className: "card-body p-lg-5", children: /* @__PURE__ */ jsx(
          OrderSummary$4,
          {
            subtotal
          }
        ) }) }),
        /* @__PURE__ */ jsxs("div", { className: "d-block d-md-flex", children: [
          /* @__PURE__ */ jsx("button", { className: "btn btn-white btn-lg w-100 mt-4 me-4", children: "Countinue Shopping" }),
          /* @__PURE__ */ jsx("button", { className: "btn btn-dark btn-lg w-100 mt-md-4", children: "Checkout" })
        ] })
      ] })
    ] })
  ] }) });
}

function ProductRating({
  rating,
  reviews
}) {
  const ratingStar = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStar.push(
        /* @__PURE__ */ jsx("svg", { className: "text-warning w-rem flex-shrink-0", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z", "clip-rule": "evenodd" }) })
      );
    } else {
      ratingStar.push(
        /* @__PURE__ */ jsx("svg", { className: "text-light w-rem flex-shrink-0", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z", "clip-rule": "evenodd" }) })
      );
    }
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
    /* @__PURE__ */ jsx("p", { className: "font-weight-bold mb-0 me-2", children: "4.5" }),
    ratingStar,
    /* @__PURE__ */ jsxs("a", { href: "#", className: "ms-3 text-sm font-weight-medium text-body", children: [
      "See all ",
      reviews,
      " reviews"
    ] })
  ] }) });
}

function ReviewSimple({
  reviews
}) {
  let CommentsList = [];
  reviews.map((review) => {
    CommentsList.push(
      /* @__PURE__ */ jsx(ReviewComment, { review })
    );
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto text-center w-md-60 mb-5", children: [
      /* @__PURE__ */ jsx("h3", { children: "Our Customer’s Opinion" }),
      /* @__PURE__ */ jsx("p", { children: "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. " })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-100 w-md-80 w-lg-60 mx-auto", children: CommentsList })
  ] });
}

function ProductQuickview$1({
  thumb_src,
  title,
  price,
  colors,
  rating,
  reviews,
  sizes,
  images
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { type: "button", className: "btn btn-dark", "data-bs-toggle": "modal", "data-bs-target": "#exampleModal", children: "Product Quickview" }),
    /* @__PURE__ */ jsx("div", { className: "modal fade", id: "exampleModal", role: "dialog", "aria-labelledby": "exampleModalLabel", "aria-hidden": "true", children: /* @__PURE__ */ jsx("div", { className: "modal-dialog modal-dialog-centered modal-xl", role: "document", children: /* @__PURE__ */ jsx("div", { className: "modal-content", children: /* @__PURE__ */ jsx("div", { className: "card card-product", children: /* @__PURE__ */ jsxs("div", { className: "card-body d-block d-lg-flex p-4", children: [
      /* @__PURE__ */ jsx("button", { type: "button", className: "btn-close text-dark position-absolute me-4 end-0", "data-bs-dismiss": "modal", "aria-label": "Close" }),
      thumb_src && /* @__PURE__ */ jsx(ProductGallery, { images }),
      /* @__PURE__ */ jsxs("div", { className: "w-100 w-lg-70 ps-lg-5 mt-4 mt-md-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
          title.length != 0 && /* @__PURE__ */ jsx("h3", { className: "me-4", children: title }),
          price && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
            /* @__PURE__ */ jsxs("h4", { className: "mb-0", children: [
              "$",
              price.toLocaleString()
            ] }),
            /* @__PURE__ */ jsx("input", { className: "opacity-0 d-none", defaultValue: price })
          ] }) })
        ] }),
        rating != 0 && /* @__PURE__ */ jsx(ProductRating, { rating, reviews }),
        /* @__PURE__ */ jsx("p", { className: "mt-4", children: "As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends." }),
        colors.length != 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h6", { className: "mt-4", children: "Color" }),
          colors && /* @__PURE__ */ jsx(ProductBadge, { colors })
        ] }),
        sizes.size != 0 && /* @__PURE__ */ jsx(ProductSizes, { sizes }),
        /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
          /* @__PURE__ */ jsx("button", { className: "btn btn-dark w-100", children: "Checkout" }),
          /* @__PURE__ */ jsx("button", { className: "btn btn-white w-100", children: "Continue Shopping" })
        ] })
      ] })
    ] }) }) }) }) })
  ] });
}

function ProductQuickview({
  thumb_src,
  title,
  price,
  colors,
  rating,
  reviews,
  stock
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { type: "button", className: "btn btn-dark", "data-bs-toggle": "modal", "data-bs-target": "#exampleModal2", children: "Product Quickview 2" }),
    /* @__PURE__ */ jsx("div", { className: "modal fade", id: "exampleModal2", role: "dialog", "aria-labelledby": "exampleModalLabel", "aria-hidden": "true", children: /* @__PURE__ */ jsx("div", { className: "modal-dialog modal-dialog-centered modal-xl", role: "document", children: /* @__PURE__ */ jsx("div", { className: "modal-content", children: /* @__PURE__ */ jsx("div", { className: "card card-product", children: /* @__PURE__ */ jsxs("div", { className: "card-body d-block d-lg-flex p-4", children: [
      /* @__PURE__ */ jsx("button", { type: "button", className: "btn-close text-dark position-absolute end-0 me-4", "data-bs-dismiss": "modal", "aria-label": "Close" }),
      /* @__PURE__ */ jsxs("div", { className: "w-100 w-lg-50 text-center", children: [
        thumb_src && /* @__PURE__ */ jsx("img", { className: "w-100 rounded-3 mb-4 mt-5 mt-lg-0", src: `${"/astro-ecommerce"}${thumb_src}` }),
        /* @__PURE__ */ jsx("a", { className: "text-body", href: "#", children: "View details" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-100 w-lg-50 ps-4 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "d-flex justify-content-center", children: title.length != 0 && /* @__PURE__ */ jsx("h3", { className: "mt-md-5 mb-3 text-center", children: title }) }),
        price && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("h4", { className: "text-center", children: [
            "$",
            price.toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("input", { className: "opacity-0 d-none", defaultValue: price }),
          /* @__PURE__ */ jsx("div", { className: "d-flex justify-content-center mb-3", children: /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center justify-content-center", children: rating != 0 && /* @__PURE__ */ jsx(ProductRating, { rating, reviews }) }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-center px-5", children: "As we live, our hearts turn colder. Cause pain is what we go through as we become older." }),
        colors.length != 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h6", { className: "mt-4", children: "Color" }),
          colors && /* @__PURE__ */ jsx(ProductBadge, { colors })
        ] }),
        /* @__PURE__ */ jsx("h6", { className: "mt-4", children: "Size" }),
        /* @__PURE__ */ jsxs("div", { className: "row mb-2", children: [
          /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsxs("div", { className: "form-check", children: [
            /* @__PURE__ */ jsx("input", { className: "form-check-input rounded-2", type: "radio", name: "flexRadioDefault", id: "18l" }),
            /* @__PURE__ */ jsxs("label", { className: "cursor-pointer label-lg", htmlFor: "18l", children: [
              /* @__PURE__ */ jsx("h6", { children: "2 Places" }),
              /* @__PURE__ */ jsx("p", { className: "mb-0", children: "That’s what I do" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsxs("div", { className: "form-check", children: [
            /* @__PURE__ */ jsx("input", { className: "form-check-input rounded-2", type: "radio", name: "flexRadioDefault", id: "20l" }),
            /* @__PURE__ */ jsxs("label", { className: "cursor-pointer label-lg", htmlFor: "20l", children: [
              /* @__PURE__ */ jsx("h6", { children: "4 Places" }),
              /* @__PURE__ */ jsx("p", { className: "mb-0", children: "That’s what I’m here for" })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-md-7 mb-4", children: [
          "What should I buy? ",
          /* @__PURE__ */ jsx("span", { "data-bs-toggle": "tooltip", "data-bs-placement": "top", title: "More information related to sizes", "data-container": "body", "data-animation": "true", children: /* @__PURE__ */ jsx("i", { className: "fas fa-question-circle ms-1" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
          /* @__PURE__ */ jsx("button", { className: "btn btn-dark btn-lg w-100", children: "Add to Cart" }),
          /* @__PURE__ */ jsxs("p", { className: "mb-0 d-inline text-xl", children: [
            /* @__PURE__ */ jsx("i", { className: "fas fa-shield-alt me-2" }),
            "Premium Quality"
          ] })
        ] })
      ] })
    ] }) }) }) }) })
  ] });
}

function ProductOverview$1({
  title,
  full_description,
  data
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "card card-product card-plain", children: /* @__PURE__ */ jsx("div", { className: "row mt-5", children: /* @__PURE__ */ jsxs("div", { className: "col-12 ", children: [
    title.length != 0 && /* @__PURE__ */ jsx("h2", { className: "mb-3", children: title }),
    full_description.length != 0 && /* @__PURE__ */ jsx("p", { className: "mb-5 w-lg-70", children: full_description }),
    /* @__PURE__ */ jsx("div", { className: "nav-wrapper position-relative end-0 pb-4 border-bottom", children: /* @__PURE__ */ jsxs("ul", { className: "nav nav-pills nav-fill p-1 w-lg-50", role: "tablist", children: [
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link mb-0 px-0 py-1 active", "data-bs-toggle": "tab", href: "#first-tab", role: "tab", "aria-controls": "material", "aria-selected": "true", children: "Material" }) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link mb-0 px-0 py-1", "data-bs-toggle": "tab", href: "#second-tab", role: "tab", "aria-controls": "function", "aria-selected": "false", children: "Function" }) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link mb-0 px-0 py-1", "data-bs-toggle": "tab", href: "#third-tab", role: "tab", "aria-controls": "warranty", "aria-selected": "false", children: "Warranty" }) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link mb-0 px-0 py-1", "data-bs-toggle": "tab", href: "#fourth-tab", role: "tab", "aria-controls": "instructions", "aria-selected": "false", children: "Instructions" }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "tab-content tab-space", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "tab-pane active show",
          id: "first-tab",
          role: "tabpanel",
          "aria-labelledby": "#material",
          children: /* @__PURE__ */ jsxs("div", { className: "row mt-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6 mb-lg-0 mb-4 pe-lg-10", children: [
              /* @__PURE__ */ jsx("h5", { className: "mt-5 mb-4", children: "Material" }),
              /* @__PURE__ */ jsxs("p", { children: [
                "If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try.",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how."
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-6 mb-lg-0 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
              /* @__PURE__ */ jsx("div", { className: "col-6 mb-4", children: /* @__PURE__ */ jsx("img", { className: "w-100 rounded-3", src: `${"/astro-ecommerce"}/images/product10.jpg`, alt: "" }) }),
              /* @__PURE__ */ jsx("div", { className: "col-6 mb-4", children: /* @__PURE__ */ jsx("img", { className: "w-100 rounded-3", src: `${"/astro-ecommerce"}/images/product11.jpg`, alt: "" }) }),
              /* @__PURE__ */ jsx("div", { className: "col-6 mb-4", children: /* @__PURE__ */ jsx("img", { className: "w-100 rounded-3", src: `${"/astro-ecommerce"}/images/product12.jpg`, alt: "" }) }),
              /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsx("img", { className: "w-100 rounded-3", src: `${"/astro-ecommerce"}/images/product13.jpg`, alt: "" }) })
            ] }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "tab-pane",
          id: "second-tab",
          role: "tabpanel",
          "aria-labelledby": "#function",
          children: /* @__PURE__ */ jsxs("div", { className: "row mt-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6 mb-lg-0 mb-4", children: [
              /* @__PURE__ */ jsx("h5", { className: "mt-5 mb-4", children: "Function" }),
              /* @__PURE__ */ jsxs("p", { children: [
                "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you.",
                /* @__PURE__ */ jsx("br", {}),
                "Would you believe in what you believe in, if you were the only one who believed it? People are so scared to lose that they don't even try."
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-6 mb-lg-0 mb-4", children: /* @__PURE__ */ jsx("img", { className: "w-100 rounded-3", src: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", alt: "" }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "tab-pane",
          id: "third-tab",
          role: "tabpanel",
          "aria-labelledby": "#warranty",
          children: /* @__PURE__ */ jsxs("div", { className: "row mt-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6 mb-lg-0 mb-4", children: [
              /* @__PURE__ */ jsx("h5", { className: "mt-5 mb-4", children: "Warranty" }),
              /* @__PURE__ */ jsxs("p", { children: [
                "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves.",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything."
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-6 mb-lg-0 mb-4", children: /* @__PURE__ */ jsx("img", { className: "w-100 rounded-3", src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", alt: "" }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "tab-pane",
          id: "fourth-tab",
          role: "tabpanel",
          "aria-labelledby": "#instructions",
          children: /* @__PURE__ */ jsxs("div", { className: "row mt-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6 mb-lg-0 mb-4", children: [
              /* @__PURE__ */ jsx("h5", { className: "mt-5 mb-4", children: "Instructions" }),
              /* @__PURE__ */ jsxs("p", { children: [
                "We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams.",
                /* @__PURE__ */ jsx("br", {}),
                "If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed."
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-6 mb-lg-0 mb-4", children: /* @__PURE__ */ jsx("img", { className: "w-100 rounded-3", src: "https://images.unsplash.com/photo-1611849362103-5c99622adf18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", alt: "" }) })
          ] })
        }
      )
    ] })
  ] }) }) }) });
}

function ProductOverview({
  title
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "card card-product card-plain", children: [
    /* @__PURE__ */ jsxs("div", { className: "d-flex border-bottom pb-3", children: [
      title.length != 0 && /* @__PURE__ */ jsx("h2", { className: "mb-3", children: title }),
      /* @__PURE__ */ jsx("div", { className: "d-flex ms-auto align-items-center", children: /* @__PURE__ */ jsxs("div", { className: "dropdown", children: [
        /* @__PURE__ */ jsx("button", { className: "btn btn-link text-dark mb-0 dropdown-toggle", type: "button", id: "sortButton", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: "Sort" }),
        /* @__PURE__ */ jsxs("ul", { className: "dropdown-menu", "aria-labelledby": "sortButton", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "dropdown-item", href: "javascript:;", children: "Most Popular" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "dropdown-item", href: "javascript:;", children: "Best Rating" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "dropdown-item", href: "javascript:;", children: "Newest" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "dropdown-item", href: "javascript:;", children: "Price: Low to High" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "dropdown-item", href: "javascript:;", children: "Price: High to Low" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row mt-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-12 col-md-4", children: [
        /* @__PURE__ */ jsxs("ul", { className: "list-unstyled ms-3", children: [
          /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Man" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Woman" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Sales" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Permanent Collection" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsx("a", { href: "#", children: "New" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "accordion", id: "accordionArrivals", children: [
          /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
            /* @__PURE__ */ jsx("h5", { className: "accordion-header", id: "headingThree", children: /* @__PURE__ */ jsxs("button", { className: "accordion-button border-bottom border-top font-weight-bold py-4", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseThree", "aria-expanded": "false", "aria-controls": "collapseThree", children: [
              "Designers",
              /* @__PURE__ */ jsx("i", { className: "collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3", "aria-hidden": "true" }),
              /* @__PURE__ */ jsx("i", { className: "collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3", "aria-hidden": "true" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { id: "collapseThree", className: "accordion-collapse collapse", "aria-labelledby": "headingThree", "data-bs-parent": "#accordionArrivals", children: /* @__PURE__ */ jsxs("div", { className: "accordion-body text-sm opacity-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customCheck1" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "Marc Jacobs" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customCheck2" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "Burberry" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customCheck3", checked: true }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "Coco Chanel" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customCheck4" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "Tom Ford" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customCheck5" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "Alexander Wang" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customCheck6" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "Valentino" })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
            /* @__PURE__ */ jsx("h5", { className: "accordion-header", id: "headingFour", children: /* @__PURE__ */ jsxs("button", { className: "accordion-button border-bottom font-weight-bold py-4", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseFour", "aria-expanded": "false", "aria-controls": "collapseFour", children: [
              "Material",
              /* @__PURE__ */ jsx("i", { className: "collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3", "aria-hidden": "true" }),
              /* @__PURE__ */ jsx("i", { className: "collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3", "aria-hidden": "true" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { id: "collapseFour", className: "accordion-collapse collapse", "aria-labelledby": "headingFour", "data-bs-parent": "#accordionArrivals", children: /* @__PURE__ */ jsxs("div", { className: "accordion-body text-sm opacity-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customCheck7" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "Cotton" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customCheck8" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "Leather" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customCheck9", checked: true }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "Chiffon" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customCheck10" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "Crepe" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customCheck11" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "Denim" })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
            /* @__PURE__ */ jsx("h5", { className: "accordion-header", id: "headingFifth", children: /* @__PURE__ */ jsxs("button", { className: "accordion-button border-bottom font-weight-bold py-4", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseFifth", "aria-expanded": "false", "aria-controls": "collapseFifth", children: [
              "Size",
              /* @__PURE__ */ jsx("i", { className: "collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3", "aria-hidden": "true" }),
              /* @__PURE__ */ jsx("i", { className: "collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3", "aria-hidden": "true" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { id: "collapseFifth", className: "accordion-collapse collapse", "aria-labelledby": "headingFifth", "data-bs-parent": "#accordionArrivals", children: /* @__PURE__ */ jsxs("div", { className: "accordion-body text-sm opacity-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customSize1" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "XXS" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customSize2" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "XS" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customSize3" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "S" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customSize4" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "M" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customSize5" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "L" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customSize6" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "XL" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-check justify-content-start ", children: [
                /* @__PURE__ */ jsx("input", { className: "form-check-input me-2", type: "checkbox", value: "", id: "customSize7" }),
                /* @__PURE__ */ jsx("label", { className: "custom-control-label mb-0", children: "XXL" })
              ] })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-12 col-md-8", children: /* @__PURE__ */ jsx("div", { className: "d-flex h-100", children: /* @__PURE__ */ jsx("div", { className: "row", children: data.products.slice(0, 3).map(
        (product) => /* @__PURE__ */ jsx("div", { class: "col-md-6 col-lg-4", children: /* @__PURE__ */ jsx(
          CardProduct$1,
          {
            thumb_src: product.thumb_src,
            thumb_alt: product.thumb_alt,
            color: product.color,
            colors: product.colors,
            title: product.title,
            description: product.description,
            price: product.price,
            position: "center"
          }
        ) })
      ) }) }) })
    ] })
  ] }) });
}

function OrderSummary$3() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsx("label", { children: "Card Number" }),
      /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", placeholder: "Enter your card number" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { className: "col-8", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { children: "Expiration date (MM/YY)" }),
        /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", placeholder: "Enter the date" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-4", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { children: "CVC" }),
        /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", placeholder: "Enter the 3 digits" })
      ] }) })
    ] })
  ] });
}

function OrderSummary$2({}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsx("label", { children: "Address" }),
      /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", placeholder: "Street, no" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { className: "col-4", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { children: "City" }),
        /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", placeholder: "Enter city" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-4", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { children: "State" }),
        /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", placeholder: "Enter your country" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-4", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { children: "Postal Code" }),
        /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", placeholder: "Your postal code" })
      ] }) })
    ] })
  ] });
}

function OrderSummary$1({}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "form-check", children: [
    /* @__PURE__ */ jsx("input", { className: "form-check-input", type: "checkbox", value: "", checked: true }),
    /* @__PURE__ */ jsx("label", { className: "custom-control-label", children: "Same as shipping information" })
  ] }) });
}

function CheckoutSingleItem$1({
  thumb_src,
  thumb_alt,
  title,
  color,
  size,
  price
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "d-flex mb-4", children: [
    /* @__PURE__ */ jsx("img", { className: "w-20 rounded-3", src: `${"/astro-ecommerce"}${thumb_src}`, alt: thumb_alt }),
    /* @__PURE__ */ jsxs("div", { className: "w-60 w-md-70 pt-2 ps-3 ps-md-4", children: [
      /* @__PURE__ */ jsx("h6", { className: "text-lg text-white mb-1", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mb-0 text-white opacity-8", children: color }),
      /* @__PURE__ */ jsx("p", { className: "mb-0 text-sm text-white opacity-8", children: size })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-10 text-end", children: /* @__PURE__ */ jsxs("p", { className: "text-white mb-0 ", children: [
      "$",
      price.toLocaleString()
    ] }) })
  ] }) });
}

function CheckoutSummary$1({
  products,
  textColor
}) {
  let subtotalCheckout = 0;
  products.map(
    (product) => subtotalCheckout += product.price
  );
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6 p-3 p-md-5 bg-gray-100", children: [
      /* @__PURE__ */ jsx("h5", { className: "mb-4", children: "Contact information" }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { children: "Email address" }),
        /* @__PURE__ */ jsx("input", { type: "email", className: "form-control", placeholder: "Enter your email address" })
      ] }),
      /* @__PURE__ */ jsx("h5", { className: "mt-5 mb-4", children: "Shipping address" }),
      /* @__PURE__ */ jsx(OrderSummary$2, {}),
      /* @__PURE__ */ jsx("h5", { className: "mt-5 mb-4", children: "Payment details" }),
      /* @__PURE__ */ jsx(OrderSummary$3, {}),
      /* @__PURE__ */ jsx("h5", { className: "mt-5 mb-4", children: "Billing information" }),
      /* @__PURE__ */ jsx(OrderSummary$1, {}),
      /* @__PURE__ */ jsx("hr", { className: "dark horizontal" }),
      /* @__PURE__ */ jsxs("button", { className: "btn btn-dark float-end mt-2 mb-0", children: [
        /* @__PURE__ */ jsxs("svg", { className: "me-1", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsx("path", { d: "M2.80039 2.80005C2.02719 2.80005 1.40039 3.42685 1.40039 4.20005V4.90005H12.6004V4.20005C12.6004 3.42685 11.9736 2.80005 11.2004 2.80005H2.80039Z", fill: "white" }),
          /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12.6004 6.30005H1.40039V9.80005C1.40039 10.5733 2.02719 11.2 2.80039 11.2H11.2004C11.9736 11.2 12.6004 10.5733 12.6004 9.80005V6.30005ZM2.80039 9.10005C2.80039 8.71344 3.11379 8.40005 3.50039 8.40005H4.20039C4.58699 8.40005 4.90039 8.71344 4.90039 9.10005C4.90039 9.48666 4.58699 9.80005 4.20039 9.80005H3.50039C3.11379 9.80005 2.80039 9.48666 2.80039 9.10005ZM6.30039 8.40005C5.91379 8.40005 5.60039 8.71344 5.60039 9.10005C5.60039 9.48666 5.91379 9.80005 6.30039 9.80005H7.00039C7.387 9.80005 7.70039 9.48666 7.70039 9.10005C7.70039 8.71344 7.387 8.40005 7.00039 8.40005H6.30039Z", fill: "white" })
        ] }),
        "Proceed to payment"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6 p-3 p-md-5 bg-dark bg-gradient rounded-end", children: [
      /* @__PURE__ */ jsx("p", { className: "text-white opacity-6 mb-0 text-end", children: "Amount" }),
      /* @__PURE__ */ jsxs("h3", { className: "text-white mb-4 text-end", children: [
        "$",
        subtotalCheckout.toLocaleString()
      ] }),
      products.map(
        (product, i) => /* @__PURE__ */ jsx(
          CheckoutSingleItem$1,
          {
            thumb_src: product.thumb_src,
            thumb_alt: product.thumb_alt,
            title: product.title,
            color: product.color,
            size: product.size,
            price: product.price
          }
        )
      ),
      /* @__PURE__ */ jsx(OrderSummary$4, { subtotal: subtotalCheckout, textColor: "white" })
    ] })
  ] }) }) });
}

function CheckoutSingleItem({
  thumb_src,
  thumb_alt,
  title,
  color,
  size,
  price
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "card card-product card-plain d-flex mb-4", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx("div", { className: "col-4 col-md-2", children: /* @__PURE__ */ jsx("img", { className: "w-100 max-height-100 rounded-3", src: `${"/astro-ecommerce"}${thumb_src}`, alt: thumb_alt }) }),
    /* @__PURE__ */ jsxs("div", { className: "col-5 col-md-6", children: [
      /* @__PURE__ */ jsx("h5", { className: "text-base mb-1", children: title }),
      /* @__PURE__ */ jsxs("h6", { className: "text-sm font-weight-bold mb-0", children: [
        "$",
        price.toLocaleString()
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm mb-0 opacity-8", children: color }),
      /* @__PURE__ */ jsx("p", { className: "text-sm mb-0 opacity-8", children: size })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "col-2", children: /* @__PURE__ */ jsxs("div", { className: "d-block d-md-flex align-items-center", children: [
      /* @__PURE__ */ jsx("button", { className: "btn btn-link text-dark d-block d-md-none", children: /* @__PURE__ */ jsx("i", { className: "fas fa-pen" }) }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-dark btn-sm d-none d-md-block", children: "Edit" }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-link text-dark d-block d-md-none", children: /* @__PURE__ */ jsx("i", { className: "fas fa-trash" }) }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-link text-dark d-none d-md-block", children: "Remove" })
    ] }) })
  ] }) }) });
}

function CheckoutSummary({
  products
}) {
  let subtotalCheckout = 0;
  products.map(
    (product) => subtotalCheckout += product.price
  );
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "bg-gray-100 px-2", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6 p-3 p-md-5", children: [
      /* @__PURE__ */ jsxs("button", { className: "btn btn-white w-100", children: [
        /* @__PURE__ */ jsx("i", { className: "fab fa-apple me-2" }),
        "Apple Pay"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 mb-4 position-relative text-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3", children: "or" }) }),
      /* @__PURE__ */ jsx("h5", { className: "mb-4", children: "Contact information" }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { children: "Email address" }),
        /* @__PURE__ */ jsx("input", { type: "email", className: "form-control", placeholder: "Enter your email address" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { children: "Phone number" }),
        /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", placeholder: "Enter your phone number" })
      ] }),
      /* @__PURE__ */ jsx(OrderSummary$3, {}),
      /* @__PURE__ */ jsx(OrderSummary$2, {}),
      /* @__PURE__ */ jsx("button", { className: "btn btn-dark w-100 mt-4", children: "Continue" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6 p-lg-5", children: [
      /* @__PURE__ */ jsx("small", { className: "opacity-6", children: "Amount" }),
      /* @__PURE__ */ jsxs("h3", { className: "mb-5", children: [
        "$",
        subtotalCheckout.toLocaleString()
      ] }),
      products.map(
        (product, i) => /* @__PURE__ */ jsx(
          CheckoutSingleItem,
          {
            thumb_src: product.thumb_src,
            thumb_alt: product.thumb_alt,
            title: product.title,
            color: product.color,
            size: product.size,
            price: product.price
          }
        )
      ),
      /* @__PURE__ */ jsx(OrderSummary$4, { subtotal: subtotalCheckout })
    ] })
  ] }) }) });
}

function OrderCardProduct({
  product,
  status,
  address,
  email,
  quantity,
  phoneNumber
}) {
  let widthClass = "";
  switch (status) {
    case "Order Placed":
      widthClass = " w-5";
      break;
    case "Processed":
      widthClass = " w-40";
      break;
    case "Shipped":
      widthClass = " w-70";
      break;
    case "Delivered":
      widthClass = " w-100";
      break;
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "card shadow-xs border p-3 p-md-4 mb-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "row border-bottom pb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "col-12 col-md-6 col-lg-2", children: /* @__PURE__ */ jsx("img", { className: "w-100 rounded-3 mb-3 mb-md-0", src: `${"/astro-ecommerce"}${product.thumb_src}`, alt: product.thumb_alt }) }),
      /* @__PURE__ */ jsxs("div", { className: "col-12 col-md-6 col-lg-5", children: [
        /* @__PURE__ */ jsx("h5", { className: "text-base", children: product.title }),
        /* @__PURE__ */ jsxs("h6", { className: "text-sm font-weight-bold", children: [
          "$",
          product.price.toLocaleString()
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm mb-0 opacity-8", children: product.description }),
        /* @__PURE__ */ jsxs("p", { className: "text-dark text-sm mt-2", children: [
          /* @__PURE__ */ jsx("b", { children: "Quantity:" }),
          " ",
          quantity
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-12 col-md-6 col-lg-3 mt-md-4 mt-lg-0", children: [
        /* @__PURE__ */ jsx("h5", { className: "text-base", children: "Delivery Address" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm mb-0 opacity-8 pe-md-7", children: address })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-12 col-md-6 col-lg-2 mt-4 mt-lg-0", children: [
        /* @__PURE__ */ jsx("h5", { className: "text-base", children: "Shipping updates" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm mb-2 opacity-8", children: email }),
        /* @__PURE__ */ jsx("p", { className: "text-sm opacity-8", children: phoneNumber }),
        /* @__PURE__ */ jsx("a", { className: "btn btn-white btn-sm", href: "#", children: "Edit" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsx("h6", { className: "text-center", children: "Preparing to ship on March 24, 2021" }),
      /* @__PURE__ */ jsx("div", { className: "progress my-4", children: /* @__PURE__ */ jsx("div", { className: `progress-bar bg-dark` + widthClass, role: "progressbar" }) }),
      /* @__PURE__ */ jsxs("div", { className: "d-block d-md-flex justify-content-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z", fill: "white" }) }) }),
          /* @__PURE__ */ jsx("p", { className: "font-weight-semibold text-dark", children: "Order placed" })
        ] }),
        status == "Order Placed" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto", children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 20 20", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsx("path", { d: "M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z" }),
              /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z" })
            ] }) }),
            /* @__PURE__ */ jsx("p", { className: "font-weight-semibold", children: "Processed" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto", children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsx("path", { d: "M6.5 12.875C6.5 13.4963 5.99632 14 5.375 14C4.75368 14 4.25 13.4963 4.25 12.875C4.25 12.2537 4.75368 11.75 5.375 11.75C5.99632 11.75 6.5 12.2537 6.5 12.875Z", fill: "white" }),
              /* @__PURE__ */ jsx("path", { d: "M11.75 12.875C11.75 13.4963 11.2463 14 10.625 14C10.0037 14 9.5 13.4963 9.5 12.875C9.5 12.2537 10.0037 11.75 10.625 11.75C11.2463 11.75 11.75 12.2537 11.75 12.875Z", fill: "white" }),
              /* @__PURE__ */ jsx("path", { d: "M2.75 3.5C2.33579 3.5 2 3.83579 2 4.25V11.75C2 12.1642 2.33579 12.5 2.75 12.5H3.53751C3.71123 11.6442 4.46789 11 5.375 11C6.28211 11 7.03877 11.6442 7.21249 12.5H8C8.41423 12.5 8.75 12.1642 8.75 11.75V4.25C8.75 3.83579 8.41423 3.5 8 3.5H2.75Z", fill: "white" }),
              /* @__PURE__ */ jsx("path", { d: "M11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5V11.0375C10.3712 11.0129 10.4966 11 10.625 11C11.5321 11 12.2888 11.6442 12.4625 12.5H13.25C13.6642 12.5 14 12.1642 14 11.75V8C14 7.80108 13.9209 7.61032 13.7803 7.46967L12.2803 5.96967C12.1397 5.82902 11.9489 5.75 11.75 5.75H11Z", fill: "white" })
            ] }) }),
            /* @__PURE__ */ jsx("p", { className: "font-weight-semibold", children: "Shipped" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z", fill: "white" }) }) }),
            /* @__PURE__ */ jsx("p", { className: "font-weight-semibold", children: "Delivered" })
          ] })
        ] }),
        status == "Processed" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z", fill: "white" }) }) }),
            /* @__PURE__ */ jsx("p", { className: "font-weight-semibold text-dark", children: "Processed" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto", children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsx("path", { d: "M6.5 12.875C6.5 13.4963 5.99632 14 5.375 14C4.75368 14 4.25 13.4963 4.25 12.875C4.25 12.2537 4.75368 11.75 5.375 11.75C5.99632 11.75 6.5 12.2537 6.5 12.875Z", fill: "white" }),
              /* @__PURE__ */ jsx("path", { d: "M11.75 12.875C11.75 13.4963 11.2463 14 10.625 14C10.0037 14 9.5 13.4963 9.5 12.875C9.5 12.2537 10.0037 11.75 10.625 11.75C11.2463 11.75 11.75 12.2537 11.75 12.875Z", fill: "white" }),
              /* @__PURE__ */ jsx("path", { d: "M2.75 3.5C2.33579 3.5 2 3.83579 2 4.25V11.75C2 12.1642 2.33579 12.5 2.75 12.5H3.53751C3.71123 11.6442 4.46789 11 5.375 11C6.28211 11 7.03877 11.6442 7.21249 12.5H8C8.41423 12.5 8.75 12.1642 8.75 11.75V4.25C8.75 3.83579 8.41423 3.5 8 3.5H2.75Z", fill: "white" }),
              /* @__PURE__ */ jsx("path", { d: "M11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5V11.0375C10.3712 11.0129 10.4966 11 10.625 11C11.5321 11 12.2888 11.6442 12.4625 12.5H13.25C13.6642 12.5 14 12.1642 14 11.75V8C14 7.80108 13.9209 7.61032 13.7803 7.46967L12.2803 5.96967C12.1397 5.82902 11.9489 5.75 11.75 5.75H11Z", fill: "white" })
            ] }) }),
            /* @__PURE__ */ jsx("p", { className: "font-weight-semibold", children: "Shipped" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto", children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.99961 3.99998C3.99961 2.6745 5.07413 1.59998 6.39961 1.59998C7.0143 1.59998 7.575 1.83106 7.99961 2.2111C8.42425 1.83106 8.98489 1.59998 9.59961 1.59998C10.9251 1.59998 11.9996 2.6745 11.9996 3.99998C11.9996 4.28049 11.9514 4.54975 11.863 4.79998H12.7996C13.6833 4.79998 14.3996 5.51632 14.3996 6.39998C14.3996 7.28363 13.6833 7.99998 12.7996 7.99998H8.79961V7.19998C8.79961 6.75815 8.44145 6.39998 7.99961 6.39998C7.55779 6.39998 7.19961 6.75814 7.19961 7.19998V7.99998H3.19961C2.31595 7.99998 1.59961 7.28363 1.59961 6.39998C1.59961 5.51632 2.31595 4.79998 3.19961 4.79998H4.13618C4.04773 4.54975 3.99961 4.28049 3.99961 3.99998ZM7.19961 4.79998V3.99998C7.19961 3.55815 6.84143 3.19998 6.39961 3.19998C5.95779 3.19998 5.59961 3.55815 5.59961 3.99998C5.59961 4.4418 5.95779 4.79998 6.39961 4.79998H7.19961ZM9.59961 4.79998C10.0414 4.79998 10.3996 4.4418 10.3996 3.99998C10.3996 3.55815 10.0414 3.19998 9.59961 3.19998C9.15777 3.19998 8.79961 3.55815 8.79961 3.99998V4.79998H9.59961Z", fill: "white" }),
              /* @__PURE__ */ jsx("path", { d: "M7.20039 8.80005H2.40039V12.8C2.40039 13.6837 3.11673 14.4 4.00039 14.4H7.20039V8.80005Z", fill: "white" }),
              /* @__PURE__ */ jsx("path", { d: "M8.80078 14.4H12.0008C12.8845 14.4 13.6008 13.6837 13.6008 12.8V8.80005H8.80078V14.4Z", fill: "white" })
            ] }) }),
            /* @__PURE__ */ jsx("p", { className: "font-weight-semibold", children: "Delivered" })
          ] })
        ] }),
        status == "Shipped" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z", fill: "white" }) }) }),
            /* @__PURE__ */ jsx("p", { className: "font-weight-semibold text-dark", children: "Processed" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z", fill: "white" }) }) }),
            /* @__PURE__ */ jsx("p", { className: "font-weight-semibold text-dark", children: "Shipped" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto", children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.99961 3.99998C3.99961 2.6745 5.07413 1.59998 6.39961 1.59998C7.0143 1.59998 7.575 1.83106 7.99961 2.2111C8.42425 1.83106 8.98489 1.59998 9.59961 1.59998C10.9251 1.59998 11.9996 2.6745 11.9996 3.99998C11.9996 4.28049 11.9514 4.54975 11.863 4.79998H12.7996C13.6833 4.79998 14.3996 5.51632 14.3996 6.39998C14.3996 7.28363 13.6833 7.99998 12.7996 7.99998H8.79961V7.19998C8.79961 6.75815 8.44145 6.39998 7.99961 6.39998C7.55779 6.39998 7.19961 6.75814 7.19961 7.19998V7.99998H3.19961C2.31595 7.99998 1.59961 7.28363 1.59961 6.39998C1.59961 5.51632 2.31595 4.79998 3.19961 4.79998H4.13618C4.04773 4.54975 3.99961 4.28049 3.99961 3.99998ZM7.19961 4.79998V3.99998C7.19961 3.55815 6.84143 3.19998 6.39961 3.19998C5.95779 3.19998 5.59961 3.55815 5.59961 3.99998C5.59961 4.4418 5.95779 4.79998 6.39961 4.79998H7.19961ZM9.59961 4.79998C10.0414 4.79998 10.3996 4.4418 10.3996 3.99998C10.3996 3.55815 10.0414 3.19998 9.59961 3.19998C9.15777 3.19998 8.79961 3.55815 8.79961 3.99998V4.79998H9.59961Z", fill: "white" }),
              /* @__PURE__ */ jsx("path", { d: "M7.20039 8.80005H2.40039V12.8C2.40039 13.6837 3.11673 14.4 4.00039 14.4H7.20039V8.80005Z", fill: "white" }),
              /* @__PURE__ */ jsx("path", { d: "M8.80078 14.4H12.0008C12.8845 14.4 13.6008 13.6837 13.6008 12.8V8.80005H8.80078V14.4Z", fill: "white" })
            ] }) }),
            /* @__PURE__ */ jsx("p", { className: "font-weight-semibold", children: "Delivered" })
          ] })
        ] }),
        status == "Delivered" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z", fill: "white" }) }) }),
            /* @__PURE__ */ jsx("p", { className: "font-weight-semibold text-dark", children: "Processed" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z", fill: "white" }) }) }),
            /* @__PURE__ */ jsx("p", { className: "font-weight-semibold text-dark", children: "Shipped" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z", fill: "white" }) }) }),
            /* @__PURE__ */ jsx("p", { className: "font-weight-semibold text-dark", children: "Delivered" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}

function OrderSummaries({
  order,
  products
}) {
  let orderCards = [];
  products.map((product) => {
    let status = "";
    let orderQuantity = 0;
    order.products.map((productDetails) => {
      if (productDetails.id == product.id) {
        status = productDetails.status;
        orderQuantity = productDetails.quantity;
      }
    });
    orderCards.push(
      /* @__PURE__ */ jsx(
        OrderCardProduct,
        {
          product,
          status,
          quantity: orderQuantity,
          address: order.address,
          email: order.email,
          phoneNumber: order.phoneNumber
        }
      )
    );
  });
  let subtotal = 0;
  products.map(
    (product) => subtotal += product.price
  );
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "p-3 p-md-5 bg-gray-100 rounded-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "d-block d-md-flex justify-content-between align-items-center mb-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "d-block", children: [
        /* @__PURE__ */ jsxs("h3", { children: [
          "Order #",
          order.orderNumber
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-0 text-dark mt-4 mt-md-0", children: [
          "Order Placed ",
          /* @__PURE__ */ jsx("b", { children: order.date })
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-dark btn-sm", children: "View invoice" })
    ] }),
    orderCards,
    /* @__PURE__ */ jsx("div", { className: "card shadow-xs border p-3 p-md-4 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-3 mt-4 mt-md-0", children: [
        /* @__PURE__ */ jsx("h5", { className: "text-base", children: "Billing Address" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm mb-0 opacity-8 pe-md-7", children: order.address })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-3 mt-4 mt-lg-0", children: [
        /* @__PURE__ */ jsx("h5", { className: "text-base", children: "Payment information" }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
          /* @__PURE__ */ jsxs("svg", { width: "49", height: "32", viewBox: "0 0 49 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ jsxs("g", { "clip-path": "url(#clip0_152_7843)", children: [
              /* @__PURE__ */ jsx("path", { d: "M22.1996 20.8737H19.6074L21.2288 10.8484H23.8209L22.1996 20.8737Z", fill: "#00579F" }),
              /* @__PURE__ */ jsx("path", { d: "M31.5982 11.0936C31.0869 10.8907 30.276 10.6667 29.2732 10.6667C26.7133 10.6667 24.9106 12.0318 24.8996 13.9835C24.8783 15.4234 26.1902 16.2232 27.1714 16.7033C28.1743 17.1939 28.5153 17.5141 28.5153 17.9514C28.5051 18.623 27.7049 18.9326 26.9585 18.9326C25.9236 18.9326 25.3691 18.773 24.5263 18.3993L24.185 18.2392L23.8223 20.4896C24.4302 20.7666 25.5504 21.0124 26.7133 21.0232C29.4332 21.0232 31.204 19.6792 31.225 17.5994C31.2353 16.4582 30.5426 15.5837 29.0491 14.8691C28.1424 14.4104 27.5872 14.1011 27.5872 13.6318C27.5978 13.2051 28.0568 12.7681 29.0803 12.7681C29.923 12.7467 30.5422 12.9492 31.0112 13.1519L31.2457 13.2584L31.5982 11.0936Z", fill: "#00579F" }),
              /* @__PURE__ */ jsx("path", { d: "M35.0438 17.3221C35.2573 16.7461 36.0787 14.5171 36.0787 14.5171C36.068 14.5385 36.2918 13.9305 36.4198 13.5573L36.601 14.4211C36.601 14.4211 37.0918 16.8208 37.1984 17.3221C36.7933 17.3221 35.5558 17.3221 35.0438 17.3221ZM38.2436 10.8484H36.2385C35.6202 10.8484 35.1504 11.0295 34.8836 11.6802L31.0332 20.8735H33.7531C33.7531 20.8735 34.2009 19.6362 34.2972 19.3697C34.5956 19.3697 37.2415 19.3697 37.6254 19.3697C37.6998 19.7217 37.9347 20.8735 37.9347 20.8735H40.3348L38.2436 10.8484Z", fill: "#00579F" }),
              /* @__PURE__ */ jsx("path", { d: "M17.4429 10.8484L14.9043 17.6847L14.6269 16.2982C14.1575 14.6984 12.6856 12.9602 11.043 12.096L13.3683 20.863H16.1095L20.184 10.8484H17.4429Z", fill: "#00579F" }),
              /* @__PURE__ */ jsx("path", { d: "M12.5473 10.8484H8.37665L8.33398 11.051C11.5873 11.8829 13.742 13.8883 14.6272 16.2986L13.7206 11.6911C13.5713 11.0508 13.1126 10.8695 12.5473 10.8484Z", fill: "#FAA61A" })
            ] }),
            /* @__PURE__ */ jsx("rect", { x: "0.833984", y: "0.5", width: "47", height: "31", rx: "5.5", stroke: "#DDE0E5" }),
            /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_152_7843", children: /* @__PURE__ */ jsx("rect", { width: "32", height: "32", fill: "white", transform: "translate(8.33398)" }) }) })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm ms-3", children: [
            /* @__PURE__ */ jsxs("b", { children: [
              "Visa ",
              order.payment.cardNumber
            ] }),
            " ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsxs("small", { children: [
              "Expiry ",
              order.payment.expiringDate
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-6", children: /* @__PURE__ */ jsx(
        OrderSummary$4,
        {
          subtotal,
          textColor: ""
        }
      ) })
    ] }) })
  ] }) });
}

function OrderSummary({
  product,
  status,
  dateModified
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("tr", { children: [
    /* @__PURE__ */ jsxs("td", { scope: "row", className: "d-flex align-items-center text-sm text-body py-3", children: [
      /* @__PURE__ */ jsx("img", { className: "w-20 w-lg-10 rounded-3", src: `${"/astro-ecommerce"}${product.thumb_src}`, alt: product.thumb_alt }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-dark font-weight-bold mb-0 ms-3", children: product.title })
    ] }),
    /* @__PURE__ */ jsxs("td", { className: "text-sm text-body align-middle pt-3 w-20", children: [
      "$",
      product.price.toLocaleString()
    ] }),
    /* @__PURE__ */ jsx("td", { className: "text-sm text-body align-middle pt-3  w-20", children: status }),
    /* @__PURE__ */ jsx("td", { className: "text-sm text-body align-middle pt-3 w-20", children: dateModified }),
    /* @__PURE__ */ jsx("td", { className: "text-sm text-body align-middle pt-3 text-end", children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-dark font-weight-bold", children: "Download" }) })
  ] }) });
}

function OrderHistoryCard({
  products,
  order
}) {
  let orderHistoryCards = [];
  order.products.map((productDetails) => {
    let productStatus = "";
    let dateModified = "";
    products.map((product) => {
      if (productDetails.id == product.id) {
        productStatus = productDetails.status;
        dateModified = productDetails.dateModified;
        orderHistoryCards.push(
          /* @__PURE__ */ jsx(
            OrderSummary,
            {
              product,
              status: productStatus,
              dateModified
            }
          )
        );
      }
    });
  });
  return /* @__PURE__ */ jsxs("div", { className: "card shadow-xs border p-3 p-md-4 mb-4", children: [
    /* @__PURE__ */ jsx("div", { className: "shadow-xs border rounded-3 mb-5", children: /* @__PURE__ */ jsxs("div", { className: "d-block d-md-flex justify-content-between align-items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "d-block d-md-flex", children: [
        /* @__PURE__ */ jsxs("div", { className: "d-flex d-md-block justify-content-between p-4 me-md-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm mb-0", children: "Order Id" }),
          /* @__PURE__ */ jsx("h6", { children: order.orderNumber })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex d-md-block justify-content-between p-4 me-md-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm mb-0", children: "Date of placement" }),
          /* @__PURE__ */ jsx("h6", { children: order.date })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex d-md-block justify-content-between p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm mb-0", children: "Amount" }),
          /* @__PURE__ */ jsx("h6", { children: "$2,570" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-dark btn-sm mb-md-0 ms-4 md-md-0 me-4", "data-bs-toggle": "modal", "data-bs-target": "#invoiceModal1", children: "View invoice" }),
      /* @__PURE__ */ jsx("div", { className: "modal fade", id: "invoiceModal1", role: "dialog", "aria-labelledby": "invoiceModal1", "aria-hidden": "true", children: /* @__PURE__ */ jsx("div", { className: "modal-dialog modal-dialog-centered modal-lg", role: "document", children: /* @__PURE__ */ jsx("div", { className: "modal-content", children: /* @__PURE__ */ jsxs("div", { className: "card p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "card-header text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "row justify-content-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "col-md-4 text-start", children: [
              /* @__PURE__ */ jsx("img", { className: "mb-2 w-50 rounded-2", src: "https://s3.amazonaws.com/creativetim_bucket/new_logo.png", alt: "Logo" }),
              /* @__PURE__ */ jsx("h6", { children: "St. Independence Embankment, 050105 Bucharest, Romania" }),
              /* @__PURE__ */ jsx("small", { className: "d-block text-muted", children: "tel: +4 (074) 1090873" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-lg-4 col-md-5 text-end", children: [
              /* @__PURE__ */ jsx("button", { type: "button", className: "btn-close float-end", "data-bs-dismiss": "modal", "aria-label": "Close" }),
              /* @__PURE__ */ jsx("h4", { className: "mt-7 mb-1", children: "Billed to:" }),
              /* @__PURE__ */ jsx("span", { className: "d-block", children: "James Thompson" }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
                "Bld Mihail Kogalniceanu,",
                /* @__PURE__ */ jsx("br", {}),
                "7652 Bucharest,",
                /* @__PURE__ */ jsx("br", {}),
                "Romania"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "row justify-content-md-between", children: [
            /* @__PURE__ */ jsx("div", { className: "col-md-4", children: /* @__PURE__ */ jsxs("h4", { className: "mt-5 text-start", children: [
              "Invoice no. ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("small", { className: "mr-2", children: "#XK98321111" })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "col-lg-4 col-md-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center mt-5 ms-auto float-end", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm me-3 font-weight-bold", children: "Invoice date:" }),
                /* @__PURE__ */ jsx("div", { className: "text-end", children: "Jan 22, 2022" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center ms-auto float-end", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm me-3 font-weight-bold", children: "Due date:" }),
                /* @__PURE__ */ jsx("div", { className: "text-end", children: "Feb 22, 2022" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "card-body", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "col-12", children: /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table text-right", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-default", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { scope: "col", className: "text-right text-white", children: "Item" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "text-right text-white", children: "Qty" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "text-right text-white", children: "Rate" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "text-right text-white", children: "Amount" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: "Premium Support" }),
              /* @__PURE__ */ jsx("td", { children: "1" }),
              /* @__PURE__ */ jsx("td", { children: "$ 9.00" }),
              /* @__PURE__ */ jsx("td", { className: "text-end", children: "$ 9.00" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: "Argon Dashboard PRO" }),
              /* @__PURE__ */ jsx("td", { children: "3" }),
              /* @__PURE__ */ jsx("td", { children: "$ 100.00" }),
              /* @__PURE__ */ jsx("td", { className: "text-end", children: "$ 300.00" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: "Parts for service" }),
              /* @__PURE__ */ jsx("td", { children: "1" }),
              /* @__PURE__ */ jsx("td", { children: "$ 89.00" }),
              /* @__PURE__ */ jsx("td", { className: "text-end", children: "$ 89.00" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { colSpan: 3, className: "h4", children: "Total" }),
            /* @__PURE__ */ jsx("th", { className: "text-end h4", children: "$ 398.00" })
          ] }) })
        ] }) }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "card-footer text-right", children: /* @__PURE__ */ jsxs("div", { className: "col-md-5 ms-auto text-end", children: [
          /* @__PURE__ */ jsx("h5", { children: "Thank you!" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "If you encounter any issues related to the invoice you can contact us at:" }),
          /* @__PURE__ */ jsxs("h6", { className: "mb-0", children: [
            "email:",
            /* @__PURE__ */ jsx("small", { className: "text-muted", children: " support@cretive-tim.com" })
          ] })
        ] }) })
      ] }) }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", className: "text-secondary text-xs font-weight-bold border-light ps-2", children: "Product" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "text-secondary text-xs font-weight-bold border-light ps-2", children: "Price" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "text-secondary text-xs font-weight-bold border-light ps-2", children: "Status" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "text-secondary text-xs font-weight-bold border-light ps-2", children: "Date" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "text-secondary text-xs font-weight-bold border-light ps-2 text-end", children: "Details" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: orderHistoryCards })
    ] }) })
  ] });
}

function OrderHistory({
  orders,
  products
}) {
  let orderHistoryCards = [];
  orders.forEach((order) => {
    let orderProducts = [];
    order.products.forEach((productDetails) => {
      products.forEach((product) => {
        if (product.id == productDetails.id) {
          orderProducts.push(product);
        }
      });
    });
    orderHistoryCards.push(/* @__PURE__ */ jsx(OrderHistoryCard, { order, products: orderProducts }));
  });
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h3", { className: "mb-0", children: "Order history" }),
    /* @__PURE__ */ jsx("p", { className: "mb-5", children: "See your recent orders, download your invoices." }),
    orderHistoryCards
  ] }) });
}

function incentiveLarge({
  order
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: "What we have to offer" }),
    /* @__PURE__ */ jsx("p", { className: "pe-md-12 me-lg-12", children: "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out." }),
    /* @__PURE__ */ jsxs("div", { className: "row mt-5", children: [
      /* @__PURE__ */ jsx("div", { className: "col-12 col-md-4", children: /* @__PURE__ */ jsxs("div", { className: "card shadow-xs border p-3 p-md-4 mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "icon icon-shape bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3", children: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsx("path", { d: "M9.6 19.8C9.6 20.7941 8.79412 21.6 7.8 21.6C6.80588 21.6 6 20.7941 6 19.8C6 18.8059 6.80588 18 7.8 18C8.79412 18 9.6 18.8059 9.6 19.8Z", fill: "white" }),
          /* @__PURE__ */ jsx("path", { d: "M18.0004 19.8C18.0004 20.7941 17.1945 21.6 16.2004 21.6C15.2063 21.6 14.4004 20.7941 14.4004 19.8C14.4004 18.8059 15.2063 18 16.2004 18C17.1945 18 18.0004 18.8059 18.0004 19.8Z", fill: "#F9FAFB" }),
          /* @__PURE__ */ jsx("path", { d: "M3.60039 4.80005C2.93765 4.80005 2.40039 5.33731 2.40039 6.00005V18C2.40039 18.6628 2.93765 19.2 3.60039 19.2H4.8604C5.13836 17.8307 6.34901 16.8 7.80039 16.8C9.25177 16.8 10.4624 17.8307 10.7404 19.2H12.0004C12.6631 19.2 13.2004 18.6628 13.2004 18V6.00005C13.2004 5.33731 12.6631 4.80005 12.0004 4.80005H3.60039Z", fill: "#F9FAFB" }),
          /* @__PURE__ */ jsx("path", { d: "M16.7996 8.40002C16.1368 8.40002 15.5996 8.93729 15.5996 9.60002V16.86C15.7935 16.8207 15.9942 16.8 16.1996 16.8C17.651 16.8 18.8617 17.8307 19.1396 19.2H20.3996C21.0624 19.2 21.5996 18.6628 21.5996 18V12C21.5996 11.6818 21.4731 11.3765 21.2481 11.1515L18.8481 8.75149C18.6231 8.52646 18.3178 8.40002 17.9996 8.40002H16.7996Z", fill: "#F9FAFB" })
        ] }) }),
        /* @__PURE__ */ jsx("h5", { children: "Express shipping" }),
        /* @__PURE__ */ jsx("p", { className: "opacity-8", children: "The time is now for it to be okay to be great. People in this world shun people for being great. " })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-12 col-md-4 my-3 my-md-0", children: /* @__PURE__ */ jsxs("div", { className: "card shadow-xs border p-3 p-md-4 mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "icon icon-shape bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3", children: /* @__PURE__ */ jsx("svg", { width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.13359 2.40002C5.79633 2.40002 6.33359 2.93729 6.33359 3.60002V6.12152C7.8577 4.56589 9.98222 3.60002 12.3336 3.60002C15.9929 3.60002 19.1028 5.93921 20.2553 9.20012C20.4762 9.82499 20.1487 10.5106 19.5238 10.7314C18.8989 10.9523 18.2134 10.6248 17.9924 9.99992C17.1683 7.66792 14.9442 6.00002 12.3336 6.00002C10.3717 6.00002 8.62804 6.94205 7.53281 8.40002H11.1336C11.7963 8.40002 12.3336 8.93729 12.3336 9.60002C12.3336 10.2628 11.7963 10.8 11.1336 10.8H5.13359C4.47086 10.8 3.93359 10.2628 3.93359 9.60002V3.60002C3.93359 2.93729 4.47086 2.40002 5.13359 2.40002ZM5.1434 13.2687C5.76825 13.0477 6.45383 13.3752 6.67469 14.0002C7.49894 16.3321 9.72303 18 12.3336 18C14.2955 18 16.0392 17.058 17.1343 15.6H13.5336C12.8708 15.6 12.3336 15.0628 12.3336 14.4C12.3336 13.7373 12.8708 13.2 13.5336 13.2H19.5336C19.8518 13.2 20.1571 13.3265 20.3821 13.5515C20.6071 13.7765 20.7336 14.0818 20.7336 14.4V20.4C20.7336 21.0628 20.1964 21.6 19.5336 21.6C18.8708 21.6 18.3336 21.0628 18.3336 20.4V17.8785C16.8095 19.4341 14.685 20.4 12.3336 20.4C8.6743 20.4 5.56445 18.0609 4.41188 14.7999C4.19102 14.175 4.51853 13.4895 5.1434 13.2687Z", fill: "white" }) }) }),
        /* @__PURE__ */ jsx("h5", { children: "Free exchanges" }),
        /* @__PURE__ */ jsx("p", { className: "opacity-8", children: "The time is now for it to be okay to be great. People in this world shun people for being great. " })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-12 col-md-4", children: /* @__PURE__ */ jsxs("div", { className: "card shadow-xs border p-3 p-md-4 mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "icon icon-shape bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3", children: /* @__PURE__ */ jsx("svg", { width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.26574 5.99871C6.87565 5.94973 10.1647 4.57242 12.6664 2.33337C15.168 4.57242 18.4571 5.94973 22.0671 5.99871C22.1981 6.77964 22.2664 7.58187 22.2664 8.40006C22.2664 14.6699 18.2594 20.0038 12.6664 21.9807C7.07348 20.0038 3.06641 14.6699 3.06641 8.40006C3.06641 7.58187 3.13464 6.77964 3.26574 5.99871ZM17.1149 10.4486C17.5835 9.97992 17.5835 9.22013 17.1149 8.75149C16.6463 8.28287 15.8865 8.28287 15.4179 8.75149L11.4664 12.703L9.91494 11.1515C9.4463 10.6829 8.68651 10.6829 8.21787 11.1515C7.74925 11.6201 7.74925 12.3799 8.21787 12.8485L10.6179 15.2485C11.0865 15.7171 11.8463 15.7171 12.3149 15.2485L17.1149 10.4486Z", fill: "white" }) }) }),
        /* @__PURE__ */ jsx("h5", { children: "Extended warranty" }),
        /* @__PURE__ */ jsx("p", { className: "opacity-8", children: "The time is now for it to be okay to be great. People in this world shun people for being great. " })
      ] }) })
    ] })
  ] }) });
}

function incentiveCols({
  order
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "row mt-5", children: [
    /* @__PURE__ */ jsx("div", { className: "col-12 col-md-4", children: /* @__PURE__ */ jsx("div", { className: "card shadow-xs border", children: /* @__PURE__ */ jsxs("div", { className: "card-body p-3 d-flex", children: [
      /* @__PURE__ */ jsx("div", { className: "icon icon-shape bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsx("path", { d: "M9.6 19.8C9.6 20.7941 8.79412 21.6 7.8 21.6C6.80588 21.6 6 20.7941 6 19.8C6 18.8059 6.80588 18 7.8 18C8.79412 18 9.6 18.8059 9.6 19.8Z", fill: "white" }),
        /* @__PURE__ */ jsx("path", { d: "M18.0004 19.8C18.0004 20.7941 17.1945 21.6 16.2004 21.6C15.2063 21.6 14.4004 20.7941 14.4004 19.8C14.4004 18.8059 15.2063 18 16.2004 18C17.1945 18 18.0004 18.8059 18.0004 19.8Z", fill: "#F9FAFB" }),
        /* @__PURE__ */ jsx("path", { d: "M3.60039 4.80005C2.93765 4.80005 2.40039 5.33731 2.40039 6.00005V18C2.40039 18.6628 2.93765 19.2 3.60039 19.2H4.8604C5.13836 17.8307 6.34901 16.8 7.80039 16.8C9.25177 16.8 10.4624 17.8307 10.7404 19.2H12.0004C12.6631 19.2 13.2004 18.6628 13.2004 18V6.00005C13.2004 5.33731 12.6631 4.80005 12.0004 4.80005H3.60039Z", fill: "#F9FAFB" }),
        /* @__PURE__ */ jsx("path", { d: "M16.7996 8.40002C16.1368 8.40002 15.5996 8.93729 15.5996 9.60002V16.86C15.7935 16.8207 15.9942 16.8 16.1996 16.8C17.651 16.8 18.8617 17.8307 19.1396 19.2H20.3996C21.0624 19.2 21.5996 18.6628 21.5996 18V12C21.5996 11.6818 21.4731 11.3765 21.2481 11.1515L18.8481 8.75149C18.6231 8.52646 18.3178 8.40002 17.9996 8.40002H16.7996Z", fill: "#F9FAFB" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "ms-3", children: [
        /* @__PURE__ */ jsx("h5", { className: "mb-0", children: "Express shipping" }),
        /* @__PURE__ */ jsx("p", { className: "mb-0 opacity-8", children: "Need it fast? No worries!" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "col-12 col-md-4 my-4 my-md-0", children: /* @__PURE__ */ jsx("div", { className: "card shadow-xs border", children: /* @__PURE__ */ jsxs("div", { className: "card-body p-3 d-flex", children: [
      /* @__PURE__ */ jsx("div", { className: "icon icon-shape bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("svg", { width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.13359 2.40002C5.79633 2.40002 6.33359 2.93729 6.33359 3.60002V6.12152C7.8577 4.56589 9.98222 3.60002 12.3336 3.60002C15.9929 3.60002 19.1028 5.93921 20.2553 9.20012C20.4762 9.82499 20.1487 10.5106 19.5238 10.7314C18.8989 10.9523 18.2134 10.6248 17.9924 9.99992C17.1683 7.66792 14.9442 6.00002 12.3336 6.00002C10.3717 6.00002 8.62804 6.94205 7.53281 8.40002H11.1336C11.7963 8.40002 12.3336 8.93729 12.3336 9.60002C12.3336 10.2628 11.7963 10.8 11.1336 10.8H5.13359C4.47086 10.8 3.93359 10.2628 3.93359 9.60002V3.60002C3.93359 2.93729 4.47086 2.40002 5.13359 2.40002ZM5.1434 13.2687C5.76825 13.0477 6.45383 13.3752 6.67469 14.0002C7.49894 16.3321 9.72303 18 12.3336 18C14.2955 18 16.0392 17.058 17.1343 15.6H13.5336C12.8708 15.6 12.3336 15.0628 12.3336 14.4C12.3336 13.7373 12.8708 13.2 13.5336 13.2H19.5336C19.8518 13.2 20.1571 13.3265 20.3821 13.5515C20.6071 13.7765 20.7336 14.0818 20.7336 14.4V20.4C20.7336 21.0628 20.1964 21.6 19.5336 21.6C18.8708 21.6 18.3336 21.0628 18.3336 20.4V17.8785C16.8095 19.4341 14.685 20.4 12.3336 20.4C8.6743 20.4 5.56445 18.0609 4.41188 14.7999C4.19102 14.175 4.51853 13.4895 5.1434 13.2687Z", fill: "white" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "ms-3", children: [
        /* @__PURE__ */ jsx("h5", { className: "mb-0", children: "Free exchanges" }),
        /* @__PURE__ */ jsx("p", { className: "mb-0 opacity-8", children: "We’ll replace it for free" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "col-12 col-md-4", children: /* @__PURE__ */ jsx("div", { className: "card shadow-xs border", children: /* @__PURE__ */ jsxs("div", { className: "card-body p-3 d-flex", children: [
      /* @__PURE__ */ jsx("div", { className: "icon icon-shape bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("svg", { width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.26574 5.99871C6.87565 5.94973 10.1647 4.57242 12.6664 2.33337C15.168 4.57242 18.4571 5.94973 22.0671 5.99871C22.1981 6.77964 22.2664 7.58187 22.2664 8.40006C22.2664 14.6699 18.2594 20.0038 12.6664 21.9807C7.07348 20.0038 3.06641 14.6699 3.06641 8.40006C3.06641 7.58187 3.13464 6.77964 3.26574 5.99871ZM17.1149 10.4486C17.5835 9.97992 17.5835 9.22013 17.1149 8.75149C16.6463 8.28287 15.8865 8.28287 15.4179 8.75149L11.4664 12.703L9.91494 11.1515C9.4463 10.6829 8.68651 10.6829 8.21787 11.1515C7.74925 11.6201 7.74925 12.3799 8.21787 12.8485L10.6179 15.2485C11.0865 15.7171 11.8463 15.7171 12.3149 15.2485L17.1149 10.4486Z", fill: "white" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "ms-3", children: [
        /* @__PURE__ */ jsx("h5", { className: "mb-0", children: "Extended warranty" }),
        /* @__PURE__ */ jsx("p", { className: "mb-0 opacity-8", children: "We want you to feel safe" })
      ] })
    ] }) }) })
  ] }) });
}

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let cartItems = [];
  data.shoppingCart.map(
    (id) => data.products.filter((x) => x.id == id).map((x) => cartItems.push(x))
  );
  let cartItems2 = [];
  data.shoppingCart2.map(
    (id) => data.products.filter((x) => x.id == id).map((x) => cartItems2.push(x))
  );
  let productReviews = data.reviews.filter((x) => x.productID == "01");
  let orderProducts = [];
  data.orders[0].products.forEach((productDetails) => {
    data.products.forEach((product) => {
      if (product.id == productDetails.id) {
        orderProducts.push(product);
      }
    });
  });
  let orderHistoryProducts = /* @__PURE__ */ new Set();
  data.orders.forEach((order) => {
    order.products.forEach((productDetails) => {
      data.products.forEach((product) => {
        if (product.id == productDetails.id) {
          orderHistoryProducts.add(product);
        }
      });
    });
  });
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": "Astro Ecommerce" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Navbar", Navbar, {})} <div class="container mt-5"> <h3>Product Lists</h3> <p>Components and blocks for Product Lists</p> <div class="row mt-5"> ${data.products.map(
    (product) => renderTemplate`<div class="col-md-6 col-lg-3"> ${renderComponent($$result2, "CardProduct", CardProduct$1, { "thumb_src": product.thumb_src, "thumb_alt": product.thumb_alt, "color": product.color, "colors": product.colors, "title": product.title, "description": product.description, "price": product.price, "position": "center" })} </div>`
  )} </div> <h3>Product Lists</h3> <p>Cards with full details</p> <div class="row"> ${data.products.map(
    (product) => renderTemplate`<div class="col-md-6 col-lg-3"> ${renderComponent($$result2, "CardProduct", CardProduct$1, { "thumb_src": product.thumb_src, "thumb_alt": product.thumb_alt, "color": product.color, "colors": product.colors, "title": product.title, "description": product.description, "price": product.price, "position": "left" })} </div>`
  )} </div> <div class="row mb-8"> <div class="d-block text-center mb-5"> <h3>Shop by category</h3> <a class="text-dark font-weight-bold" href="#">Browse all categories &#62;</a> </div> ${data.categories.slice(0, 4).map(
    (category) => renderTemplate`<div class="col-md-6 col-lg-3"> ${renderComponent($$result2, "CardCategory", CardProduct, { "thumb_src": category.thumb_src, "title": category.title, "collection": category.collection })} </div>`
  )} </div> <div class="row mb-5"> <div class="d-block text-center mb-5"> <h3>Shop by category</h3> <a class="text-dark font-weight-bold" href="#">Browse all categories &#62;</a> </div> <div class="col-md-6"> ${renderComponent($$result2, "CardCategory", CardProduct, { "classList": "h-100", "cta": "", "thumb_src": data.categories[4].thumb_src, "title": data.categories[4].title })} </div> <div class="col-md-6"> <div class="mb-4"> ${renderComponent($$result2, "CardCategory", CardProduct, { "classList": "", "cta": "", "thumb_src": data.categories[5].thumb_src, "title": data.categories[5].title })} </div> <div class=""> ${renderComponent($$result2, "CardCategory", CardProduct, { "classList": "", "cta": "", "thumb_src": data.categories[6].thumb_src, "title": data.categories[6].title })} </div> </div> </div> <div class="my-10"> <h3>Product Overview</h3> <p class="mb-5">With image grid</p> ${renderComponent($$result2, "ProductOverviewGrid", ProductOverview$2, { "colors": data.products[0].colors, "images": data.products[0].images, "title": data.products[0].title, "full_description": data.products[0].full_description, "price": data.products[0].price, "highlights": data.products[0].highlights, "details": data.products[0].details, "rating": data.products[0].rating, "reviews": data.products[0].reviews, "sizes": data.products[0].sizes })} </div> <div class="my-5"> <h3>Product Overview</h3> <p class="mb-5">Product Overviews with image gallery and expandable details</p> ${renderComponent($$result2, "ProductOverviewGallery", productOverviewGallery, { "colors": data.products[1].colors, "images": data.products[1].images, "title": data.products[1].title, "full_description": data.products[1].full_description, "price": data.products[1].price, "rating": data.products[1].rating, "reviews": data.products[1].reviews, "data": data.products[1].data })} </div> <div class="my-10"> ${renderComponent($$result2, "ShoppingCart", ShoppingCart$1, { "products": cartItems })} </div> <div class="my-10"> ${renderComponent($$result2, "ShoppingCart2", ShoppingCart, { "products": cartItems2 })} </div> <div class="my-10"> <h3>Category filters</h3> <p class="mb-5">With inline actions and expandable sidebar filters</p> ${renderComponent($$result2, "CategoryFilters", ProductOverview, { "title": "Our products" })} </div> <div class="my-10"> <h3>Product Quickviewers</h3> <p class="mb-5">With color selector, size selector, and details link</p> ${renderComponent($$result2, "ProductQuickview", ProductQuickview$1, { "colors": data.products[0].colors, "thumb_src": data.products[0].thumb_src, "title": data.products[0].title, "price": data.products[0].price, "rating": data.products[0].rating, "reviews": data.products[0].reviews, "sizes": data.products[0].sizes, "images": data.products[0].images })} <h3 class="mt-7">Product Quickviewers</h3> <p class="mb-5">With large size selector</p> ${renderComponent($$result2, "ProductQuickview2", ProductQuickview, { "colors": data.products[1].colors, "thumb_src": "/images/mirror.png", "title": "Sofa", "price": data.products[1].price, "rating": data.products[1].rating, "reviews": data.products[1].reviews })} </div> <div class="my-10"> ${renderComponent($$result2, "ProductFeature", ProductOverview$3, { "title": data.products[0].title, "images": data.products[2].images, "full_description": data.products[0].full_description, "featuresDetails": data.products[0].featuresDetails })} </div> <div class="my-10"> ${renderComponent($$result2, "ProductFeature2", ProductOverview$1, { "title": data.products[0].title, "full_description": data.products[0].full_description, "images": data.products[2].images, "data": data.products[2].data })} </div> <div class="my-10"> <h3 class="mt-5">Complex Navbar White</h3> <a class="text-dark font-weight-bold" href="#">Browse all categories &#62;</a> <br><br> ${renderComponent($$result2, "ComplexNavbar", ComplexNavbar, {})} <div class="row mt-4"> ${data.products.map(
    (product) => renderTemplate`<div class="col-12 col-md-6 col-lg-3"> ${renderComponent($$result2, "CardProduct", CardProduct$1, { "thumb_src": product.thumb_src, "thumb_alt": product.thumb_alt, "title": product.title, "price": product.price })} </div>`
  )} </div> <h3 class="mt-5">Complex Navbar Dark</h3> <a class="text-dark font-weight-bold" href="#">Browse all categories &#62;</a> <br><br> ${renderComponent($$result2, "ComplexNavbarDark", ComplexNavbarDark, {})} <div class="row mt-4"> ${data.products.map(
    (product) => renderTemplate`<div class="col-12 col-md-6 col-lg-3"> ${renderComponent($$result2, "CardProduct", CardProduct$1, { "thumb_src": product.thumb_src, "thumb_alt": product.thumb_alt, "title": product.title, "price": product.price })} </div>`
  )} </div> </div> <div class="my-10"> <h3>Simple Footer</h3> ${renderComponent($$result2, "Footer", Footer, {})} <h3 class="mt-8">Complex Footer</h3> ${renderComponent($$result2, "ComplexFooter", ComplexFooter, {})} </div> <div class="my-10"> <h3 class="mt-5">Promo Sections</h3> <p class="text-body">Full-width with background image and large content</p> ${renderComponent($$result2, "TestimonialsFade", TestimonialsFade, { "pageHeaderBgImg": "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2729&q=80", "pageHeaderMinVh": "50vh" })} </div> <div class="my-10"> <h3 class="mt-5">Promo Sections</h3> <p class="text-body">With fading background image and testimonials</p> ${renderComponent($$result2, "PromoSectionLarge", TestimonialsFade$1, { "title": data.products[0].title, "full_description": "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?", "pageHeaderBgImg": "https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80", "pageHeaderMinVh": "50vh", "pageHeaderRadius": "1rem" })} </div> <div class="my-10"> <h3>Checkout Forms</h3> <p>Split with order summary</p> ${renderComponent($$result2, "CheckoutOrderSummary", CheckoutSummary$1, { "products": cartItems })} </div> <div class="my-10"> <h3>Checkout Forms</h3> <p>SWith order summary sidebar</p> ${renderComponent($$result2, "CheckoutMultiStep", CheckoutSummary, { "products": cartItems2 })} </div> <div class="my-10"> <h3 class="mt-5">Product reviews</h3> <p class="text-body">Simple with avatars</p> ${renderComponent($$result2, "ReviewSimple", ReviewSimple, { "reviews": data.reviews })} </div> <div class="my-10"> <h3 class="mt-5">Product reviews</h3> <p class="text-body">With summary chart</p> ${renderComponent($$result2, "ReviewSummaryChart", ReviewSummaryChart, { "reviews": productReviews })} </div> <div class="my-10"> <h3 class="mt-5">Order Summaries</h3> <p class="text-body">With order summary sidebar</p> ${renderComponent($$result2, "OrderSummaries", OrderSummaries, { "order": data.orders[0], "products": orderProducts })} </div> <div class="my-10"> ${renderComponent($$result2, "OrderHistory", OrderHistory, { "orders": data.orders, "products": orderHistoryProducts })} </div> <div class="my-10"> ${renderComponent($$result2, "IncentiveLarge", incentiveLarge, {})} </div> <div class="my-10"> <h3 class="mt-5">Features</h3> <p class="text-body">3-column with illustrations and header</p> ${renderComponent($$result2, "IncentiveCols", incentiveCols, {})} </div> ${renderComponent($$result2, "Footer", Footer, {})} </div> </main> ` })}`;
}, "C:/Users/Evans/Desktop/PDM/astro-ecommerce/src/pages/index.astro", void 0);

const $$file = "C:/Users/Evans/Desktop/PDM/astro-ecommerce/src/pages/index.astro";
const $$url = "/astro-ecommerce";

export { $$Index as default, $$file as file, $$url as url };
