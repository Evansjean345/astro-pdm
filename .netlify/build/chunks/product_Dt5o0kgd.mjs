import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_Dw8rLEbH.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as data, N as Navbar, $ as $$Layout } from './navbar_C1K0qySZ.mjs';
/* empty css                         */
import { C as CardProduct, S as StoreNavigationDoubleColumn } from './storeDoubleColumn_BMuYvcrK.mjs';
import { P as ProductOverview, R as ReviewSummaryChart } from './reviewSummaryChart_COf9_4zi.mjs';

const $$Product = createComponent(($$result, $$props, $$slots) => {
  let productReviews = data.reviews.filter((x) => x.productID == "01");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Product Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Navbar", Navbar, {})} <div class="container mt-5"> ${renderComponent($$result2, "ProductOverviewGrid", ProductOverview, { "colors": data.products[0].colors, "images": data.products[0].images, "title": data.products[0].title, "full_description": data.products[0].full_description, "price": data.products[0].price, "highlights": data.products[0].highlights, "details": data.products[0].details, "rating": data.products[0].rating, "reviews": data.products[0].reviews, "sizes": data.products[0].sizes })} <div class="my-5"> ${renderComponent($$result2, "ReviewSummaryChart", ReviewSummaryChart, { "reviews": productReviews })} </div> <div class="row"> <h5 class="mb-4">Customers also purchased</h5> ${data.products.map(
    (product) => renderTemplate`<div class="col-md-6 col-lg-3"> ${renderComponent($$result2, "CardProduct", CardProduct, { "thumb_src": product.thumb_src, "thumb_alt": product.thumb_alt, "color": product.color, "title": product.title, "price": product.price, "position": "left" })} </div>`
  )} </div> <hr class="dark horizontal my-5"> ${renderComponent($$result2, "StoreDoubleColumn", StoreNavigationDoubleColumn, {})} </div> </main> ` })}`;
}, "C:/Users/Evans/Desktop/PDM/astro-ecommerce/src/pages/product.astro", void 0);

const $$file = "C:/Users/Evans/Desktop/PDM/astro-ecommerce/src/pages/product.astro";
const $$url = "/astro-ecommerce/product";

export { $$Product as default, $$file as file, $$url as url };
