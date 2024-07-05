import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_Dw8rLEbH.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as data, N as Navbar, $ as $$Layout } from './navbar_C1K0qySZ.mjs';
/* empty css                         */
import { C as CardProduct, S as StoreNavigationDoubleColumn } from './storeDoubleColumn_BMuYvcrK.mjs';
import { S as ShoppingCart } from './shoppingCart_D8HnUnr9.mjs';

const $$ShoppingCart = createComponent(($$result, $$props, $$slots) => {
  let cartItems = [];
  data.shoppingCart.map(
    (id) => data.products.filter((x) => x.id == id).map((x) => cartItems.push(x))
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Shopping Cart" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Navbar", Navbar, {})} ${renderComponent($$result2, "ShoppingCart", ShoppingCart, { "products": cartItems })} <div class="container mt-5"> <div class="row"> <h5 class="mb-4">You may also like...</h5> ${data.products.map(
    (product) => renderTemplate`<div class="col-md-6 col-lg-3"> ${renderComponent($$result2, "CardProduct", CardProduct, { "thumb_src": product.thumb_src, "thumb_alt": product.thumb_alt, "color": product.color, "title": product.title, "price": product.price, "position": "left" })} </div>`
  )} </div> <hr class="dark horizontal my-5"> ${renderComponent($$result2, "StoreDoubleColumn", StoreNavigationDoubleColumn, {})} </div> </main> ` })}`;
}, "C:/Users/Evans/Desktop/PDM/astro-ecommerce/src/pages/shopping-cart.astro", void 0);

const $$file = "C:/Users/Evans/Desktop/PDM/astro-ecommerce/src/pages/shopping-cart.astro";
const $$url = "/astro-ecommerce/shopping-cart";

export { $$ShoppingCart as default, $$file as file, $$url as url };
