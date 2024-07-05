import { jsx, Fragment, jsxs } from 'react/jsx-runtime';

function ProductBadge({
  colors
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { children: colors.map((color) => badge(color)) }) });
}
function badge(color) {
  const badgeClass = "badge filter rounded-4 bg-" + color;
  const badge2 = /* @__PURE__ */ jsx("span", { className: badgeClass });
  return badge2;
}

function CardProduct({
  thumb_src,
  thumb_alt,
  title,
  description,
  price,
  color,
  colors,
  position
}) {
  const classList = "card-body text-" + position;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "card card-product border mb-5 shadow-xs border-radius-lg", children: /* @__PURE__ */ jsxs("a", { href: "#", children: [
    /* @__PURE__ */ jsx("div", { className: "height-350", children: /* @__PURE__ */ jsx("img", { className: "w-100 h-100 p-4 rounded-top", src: `${"/astro-ecommerce"}${thumb_src}`, alt: thumb_alt }) }),
    /* @__PURE__ */ jsxs("div", { className: classList, children: [
      color && /* @__PURE__ */ jsx("h6", { className: "text-md mb-1 text-body", children: color }),
      title && /* @__PURE__ */ jsx("h4", { className: "font-weight-bold", children: title }),
      description && /* @__PURE__ */ jsx("p", { className: "text-body", children: description }),
      colors && /* @__PURE__ */ jsx(ProductBadge, { colors }),
      price && /* @__PURE__ */ jsxs("h4", { className: "mb-0 text-lg mt-1 mb-3", children: [
        "$",
        price.toLocaleString()
      ] }),
      !(description || colors || color) && /* @__PURE__ */ jsx("a", { href: "#", className: "font-weight-normal text-body text-sm", children: "Shop Now" })
    ] })
  ] }) }) });
}

function StoreNavigationDoubleColumn() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "row mt-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6 mb-4 mb-lg-0", children: [
      /* @__PURE__ */ jsx("h6", { className: "w-100 pb-3 border-bottom", children: "Store" }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex pt-2", children: [
        /* @__PURE__ */ jsxs("ul", { className: "nav flex-column ms-n3", children: [
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Tops" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Designers" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Tops" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Collection" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Texture" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Sale" }) })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "nav flex-column ms-6 ms-md-11 ms-lg-10", children: [
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Prints" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Silk Edition" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Brands" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Demos" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Showroom" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6 mb-4 mb-lg-0", children: [
      /* @__PURE__ */ jsx("h6", { className: "w-100 pb-3 border-bottom", children: "Categories" }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex pt-2", children: [
        /* @__PURE__ */ jsxs("ul", { className: "nav flex-column ms-n3", children: [
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Tops" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Designers" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Tops" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Collection" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Texture" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Sale" }) })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "nav flex-column ms-6 ms-md-11 ms-lg-10", children: [
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Prints" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Silk Edition" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Brands" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Demos" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-body text-sm", href: "#", target: "_blank", children: "Showroom" }) })
        ] })
      ] })
    ] })
  ] }) });
}

export { CardProduct as C, ProductBadge as P, StoreNavigationDoubleColumn as S };
