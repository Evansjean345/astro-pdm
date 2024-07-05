import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { R as ReviewRating } from './reviewRating_Dx3XaICf.mjs';

function CardProduct({
  thumb_src,
  title,
  collection,
  classList,
  cta
}) {
  const classBody = cta != null ? "align-items-end d-flex" : "text-center w-100 pt-8";
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsxs("div", { className: `card card-background align-items-start mb-4 mb-lg-0 ${classList}`, children: [
    /* @__PURE__ */ jsx("div", { className: "full-background", style: { backgroundImage: `url(${`${"/astro-ecommerce"}${thumb_src}`})`, backgroundSize: "cover" } }),
    /* @__PURE__ */ jsx("div", { className: `card-body ${classBody}`, children: /* @__PURE__ */ jsxs("div", { className: "d-block mt-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-white font-weight-bold mb-1", children: collection }),
      /* @__PURE__ */ jsx("h4", { className: "text-white font-weight-bolder", children: title }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "text-white text-sm font-weight-semibold mb-0", children: "See products >" })
    ] }) })
  ] }) }) });
}

function ProductGallery({
  images
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "d-block d-md-flex", children: /* @__PURE__ */ jsx("img", { className: "w-100 max-height-200 rounded-3 mb-4 mb-md-0", src: `${"/astro-ecommerce"}images/product7.jpg`, alt: images[0].alt }) }),
    /* @__PURE__ */ jsxs("div", { className: "row mt-4", children: [
      /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsx("img", { className: "w-100 max-height-200 rounded-3", src: `${"/astro-ecommerce"}images/product8.jpg`, alt: images[2].alt }) }),
      /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsx("img", { className: "w-100 max-height-200 rounded-3", src: `${"/astro-ecommerce"}images/product9.jpg`, alt: images[3].alt }) })
    ] })
  ] });
}

function ProductAccordion({
  featuresDetails
}) {
  const prodFeatures = [];
  Object.entries(featuresDetails).map(([title, value]) => {
    prodFeatures.push(
      /* @__PURE__ */ jsx("div", { className: "col-12", children: /* @__PURE__ */ jsxs("div", { className: "d-flex mb-4", children: [
        /* @__PURE__ */ jsx("svg", { className: "me-2", width: "30", height: "30", viewBox: "0 0 20 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 23C14.4183 23 18 19.4183 18 15C18 10.5817 14.4183 7 10 7C5.58172 7 2 10.5817 2 15C2 19.4183 5.58172 23 10 23ZM13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929C13.3166 11.9024 12.6834 11.9024 12.2929 12.2929L9 15.5858L7.70711 14.2929C7.31658 13.9024 6.68342 13.9024 6.29289 14.2929C5.90237 14.6834 5.90237 15.3166 6.29289 15.7071L8.29289 17.7071C8.68342 18.0976 9.31658 18.0976 9.70711 17.7071L13.7071 13.7071Z", fill: "#111827" }) }),
        /* @__PURE__ */ jsx("p", { children: value })
      ] }) })
    );
  });
  return /* @__PURE__ */ jsx(Fragment, { children: prodFeatures });
}

function ProductOverview({
  title,
  images,
  full_description,
  featuresDetails
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "card card-product card-plain", children: [
    /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-7 mx-auto text-center", children: [
      title.length != 0 && /* @__PURE__ */ jsx("h2", { className: "mb-3", children: title }),
      full_description.length != 0 && /* @__PURE__ */ jsx("p", { className: "mb-5", children: full_description })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "row mt-5", children: [
      /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-6 pe-5", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-3", children: "Product Description" }),
        /* @__PURE__ */ jsx("p", { className: "mb-5", children: "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. It’s like a little kid, a little boy, looking at colors, and no one told him what colors are good, before somebody tells you you shouldn’t like pink because that’s for girls, or you’d instantly become a gay two-year-old." }),
        /* @__PURE__ */ jsx(ProductAccordion, { featuresDetails })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-6", children: /* @__PURE__ */ jsx(ProductGallery, { images }) })
    ] })
  ] }) });
}

function Footer() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("footer", { className: "footer pt-3  ", children: /* @__PURE__ */ jsxs("div", { className: "row align-items-center justify-content-lg-between", children: [
    /* @__PURE__ */ jsx("div", { className: "col-lg-6 mb-lg-0 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "copyright text-center text-sm text-muted text-lg-start", children: [
      "Copyright ©",
      " ",
      /* @__PURE__ */ jsx("script", { children: "document.write(new Date().getFullYear())" }),
      " Astro Ecommerce by",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.creative-tim.com",
          className: "text-dark ms-1",
          target: "_blank",
          children: "Creative Tim"
        }
      ),
      "."
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxs("ul", { className: "nav nav-footer justify-content-center justify-content-lg-end", children: [
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.creative-tim.com",
          className: "nav-link text-sm text-muted",
          target: "_blank",
          children: "Creative Tim"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.creative-tim.com/presentation",
          className: "nav-link text-sm text-muted",
          target: "_blank",
          children: "About Us"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.creative-tim.com/blog",
          className: "nav-link text-sm text-muted",
          target: "_blank",
          children: "Blog"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.creative-tim.com/license",
          className: "nav-link text-sm pe-0 text-muted",
          target: "_blank",
          children: "License"
        }
      ) })
    ] }) })
  ] }) }) });
}

function TestimonialsFade$1({
  pageHeaderBgImg,
  pageHeaderMinVh
}) {
  const styles = {
    pageHeader: {
      backgroundImage: "url(" + pageHeaderBgImg + ")",
      minHeight: pageHeaderMinVh
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("div", { className: "page-header rounded-top", style: styles.pageHeader, children: [
      /* @__PURE__ */ jsx("div", { className: "faded opacity-10" }),
      /* @__PURE__ */ jsx("div", { className: "container z-index-2", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsxs("div", { className: "col-sm-9 text-center mx-auto pt-6", children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-4", children: "Exclusive Discounts for Members" }),
        /* @__PURE__ */ jsx("p", { className: "lead mb-sm-5 px-md-8", children: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you." }),
        /* @__PURE__ */ jsxs("button", { className: "btn btn-dark btn-lg d-flex align-items-center mx-auto", children: [
          /* @__PURE__ */ jsxs("svg", { className: "me-2", width: "15", height: "15", viewBox: "0 0 15 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4.00002 3.4999C4.00002 2.34011 4.94023 1.3999 6.10002 1.3999C6.63788 1.3999 7.12849 1.6021 7.50002 1.93463C7.87158 1.6021 8.36214 1.3999 8.90002 1.3999C10.0599 1.3999 11 2.34011 11 3.4999C11 3.74535 10.9579 3.98096 10.8805 4.1999H11.7C12.4732 4.1999 13.1 4.8267 13.1 5.5999C13.1 6.3731 12.4732 6.9999 11.7 6.9999H8.20002V6.2999C8.20002 5.91331 7.88663 5.5999 7.50002 5.5999C7.11343 5.5999 6.80002 5.9133 6.80002 6.2999V6.9999H3.30002C2.52683 6.9999 1.90002 6.3731 1.90002 5.5999C1.90002 4.8267 2.52683 4.1999 3.30002 4.1999H4.11952C4.04213 3.98096 4.00002 3.74535 4.00002 3.4999ZM6.80002 4.1999V3.4999C6.80002 3.11331 6.48662 2.7999 6.10002 2.7999C5.71343 2.7999 5.40002 3.11331 5.40002 3.4999C5.40002 3.8865 5.71343 4.1999 6.10002 4.1999H6.80002ZM8.90002 4.1999C9.28663 4.1999 9.60003 3.8865 9.60003 3.4999C9.60003 3.11331 9.28663 2.7999 8.90002 2.7999C8.51341 2.7999 8.20002 3.11331 8.20002 3.4999V4.1999H8.90002Z", fill: "white" }),
            /* @__PURE__ */ jsx("path", { d: "M6.79998 7.69995H2.59998V11.2C2.59998 11.9732 3.22678 12.6 3.99998 12.6H6.79998V7.69995Z", fill: "white" }),
            /* @__PURE__ */ jsx("path", { d: "M8.20001 12.6H11C11.7732 12.6 12.4 11.9732 12.4 11.2V7.69995H8.20001V12.6Z", fill: "white" })
          ] }),
          "Get your code"
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-weight-bolder mt-4 mb-2", children: "Our customer’s opinion" }),
      /* @__PURE__ */ jsx("p", { className: "mb-5 w-60", children: "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out." }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsx("div", { className: "card border shadow-xs mb-4", children: /* @__PURE__ */ jsxs("div", { className: "card-body text-start p-3 w-100", children: [
          /* @__PURE__ */ jsx(ReviewRating, { rating: "4" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4", children: "We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment." }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "avatar avatar-sm position-relative me-2", children: /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80", className: "rounded-circle" }) }),
            /* @__PURE__ */ jsx("h6", { className: "mb-0", children: "Alexa Liras" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsx("div", { className: "card border shadow-xs mb-4", children: /* @__PURE__ */ jsxs("div", { className: "card-body text-start p-3 w-100", children: [
          /* @__PURE__ */ jsx(ReviewRating, { rating: "5" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4", children: "There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment." }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "avatar avatar-sm position-relative me-2", children: /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80", className: "rounded-circle" }) }),
            /* @__PURE__ */ jsx("h6", { className: "mb-0", children: "Laurent Perrier" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "col-12 col-md-12 col-lg-4", children: /* @__PURE__ */ jsx("div", { className: "card border shadow-xs mb-4", children: /* @__PURE__ */ jsxs("div", { className: "card-body text-start p-3 w-100", children: [
          /* @__PURE__ */ jsx(ReviewRating, { rating: "4" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4", children: "It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams." }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "avatar avatar-sm position-relative me-2", children: /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80", className: "rounded-circle" }) }),
            /* @__PURE__ */ jsx("h6", { className: "mb-0", children: "Michael Levi" })
          ] })
        ] }) }) })
      ] })
    ] })
  ] }) });
}

function TestimonialsFade({
  title,
  full_description,
  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius
}) {
  const styles = {
    pageHeader: {
      backgroundImage: "url(" + pageHeaderBgImg + ")",
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "page-header py-5 py-md-0", style: styles.pageHeader, children: [
    /* @__PURE__ */ jsx("span", { className: "mask bg-black opacity-6" }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsxs("div", { className: "col-lg-8 col-sm-9 text-center mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-white mb-4", children: title }),
      /* @__PURE__ */ jsx("p", { className: "lead text-white mb-sm-6 mb-4", children: full_description }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-white btn-lg", children: "Explore New Collection" })
    ] }) }) })
  ] }) }) });
}

export { CardProduct as C, Footer as F, ProductOverview as P, TestimonialsFade as T, TestimonialsFade$1 as a };
