import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_Dw8rLEbH.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navbar, d as data, $ as $$Layout } from './navbar_C1K0qySZ.mjs';
/* empty css                         */
import { T as TestimonialsFade, C as CardProduct, P as ProductOverview, a as TestimonialsFade$1, F as Footer } from './promoSectionLarge_CemSAq6K.mjs';

const $$Landing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Landing Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Navbar", Navbar, {})} ${renderComponent($$result2, "PromoSectionLarge", TestimonialsFade, { "title": "Collection is here", "full_description": data.products[0].full_description, "pageHeaderBgImg": "../images/bg2.jpg", "pageHeaderMinVh": "90vh" })} <div class="container my-5"> <div class="d-block text-center mb-5"> <h3>Shop by category</h3> <a class="text-dark font-weight-bold" href="#">Browse all categories &#62;</a> </div> <div class="row mb-5"> ${data.categories.slice(0, 4).map(
    (category) => renderTemplate`<div class="col-md-6 col-lg-3"> ${renderComponent($$result2, "CardCategory", CardProduct, { "thumb_src": category.thumb_src, "collection": category.collection, "title": category.title })} </div>`
  )} </div> ${renderComponent($$result2, "PromoSectionLarge", TestimonialsFade, { "title": "Basic Starter Pack", "full_description": data.products[0].full_description, "pageHeaderBgImg": "../images/bg2.jpg", "pageHeaderMinVh": "50vh", "pageHeaderRadius": "1rem" })} <div class="my-5"> ${renderComponent($$result2, "ProductFeature", ProductOverview, { "title": "Product Features", "images": data.products[2].images, "full_description": "Society has put up so many boundaries, so many limitations on what\u2019s right and wrong that it\u2019s almost impossible", "featuresDetails": data.products[0].featuresDetails })} </div> <div class="mt-5 mb-10"> ${renderComponent($$result2, "TestimonialsFade", TestimonialsFade$1, { "pageHeaderBgImg": "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80", "pageHeaderMinVh": "50vh" })} </div> ${renderComponent($$result2, "Footer", Footer, {})} </div> </main> ` })}`;
}, "C:/Users/Evans/Desktop/PDM/astro-ecommerce/src/pages/landing.astro", void 0);

const $$file = "C:/Users/Evans/Desktop/PDM/astro-ecommerce/src/pages/landing.astro";
const $$url = "/astro-ecommerce/landing";

export { $$Landing as default, $$file as file, $$url as url };
