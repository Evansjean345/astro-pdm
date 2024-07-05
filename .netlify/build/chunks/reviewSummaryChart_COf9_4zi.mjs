import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { R as ReviewRating } from './reviewRating_Dx3XaICf.mjs';

function ProductGallery({
  images
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6 d-flex", children: [
    /* @__PURE__ */ jsxs("div", { className: "d-block", children: [
      /* @__PURE__ */ jsx("img", { className: "w-90 max-height-150 mb-4 rounded-2", src: images[0].src, alt: images[0].alt }),
      /* @__PURE__ */ jsx("img", { className: "w-90 max-height-150 mb-4 rounded-2", src: images[1].src, alt: images[1].alt }),
      /* @__PURE__ */ jsx("img", { className: "w-90 max-height-150 mb-4 rounded-2", src: images[2].src, alt: images[2].alt }),
      /* @__PURE__ */ jsx("img", { className: "w-90 max-height-150 rounded-2", src: images[3].src, alt: images[3].alt })
    ] }),
    /* @__PURE__ */ jsx("img", { className: "w-70 rounded-2", src: images[0].src, alt: images[0].alt })
  ] }) });
}

function ProductSizes({
  sizes
}) {
  const sizeID = Date.now();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "mt-4 d-flex justify-content-between align-items-center", children: [
      /* @__PURE__ */ jsx("h6", { className: "mb-0", children: "Size" }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "text-body mb-0", children: "Size guide" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "d-flex flex-wrap text-center my-4", children: Object.entries(sizes).map(
      ([size, amount], i) => /* @__PURE__ */ jsx("div", { className: "mb-3 me-3", children: /* @__PURE__ */ jsxs("div", { className: "form-check", children: [
        amount != 0 ? /* @__PURE__ */ jsx("input", { className: "form-check-input rounded-2", type: "radio", name: "flexRadioDefault", id: `input` + sizeID + i }) : /* @__PURE__ */ jsx("input", { className: "form-check-input rounded-2", disabled: true, type: "radio", name: "flexRadioDefault", id: `input` + sizeID + i }),
        /* @__PURE__ */ jsx("label", { className: "cursor-pointer", htmlFor: `input` + sizeID + i, children: size })
      ] }) })
    ) })
  ] });
}

function ProductOverview({
  title,
  colors,
  images,
  full_description,
  price,
  highlights,
  details,
  rating,
  reviews,
  sizes
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "card card-product card-plain", children: [
    /* @__PURE__ */ jsxs("div", { className: "row", children: [
      images.length != 0 && /* @__PURE__ */ jsx(ProductGallery, { images }),
      /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6 ps-lg-5", children: [
        title.length != 0 && /* @__PURE__ */ jsx("h2", { className: "mt-4", children: title }),
        full_description.length != 0 && /* @__PURE__ */ jsx("p", { className: "mb-5", children: full_description }),
        /* @__PURE__ */ jsxs("form", { action: "", method: "post", children: [
          price.length != 0 && /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
            /* @__PURE__ */ jsxs("h3", { className: "font-weight-normal", children: [
              "$",
              price.toLocaleString()
            ] }),
            /* @__PURE__ */ jsx("input", { className: "opacity-0", defaultValue: price })
          ] }),
          rating != 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "Reviews" }),
            /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ jsx(ReviewRating, { rating: 4 }),
              /* @__PURE__ */ jsxs("span", { className: "ms-3", children: [
                reviews,
                " reviews"
              ] })
            ] })
          ] }),
          sizes.size != 0 && /* @__PURE__ */ jsx(ProductSizes, { sizes }),
          /* @__PURE__ */ jsx("button", { className: "btn btn-dark btn-lg", type: "submit", children: "Add to cart" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "row mt-5", children: /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-6", children: [
      /* @__PURE__ */ jsx("h4", { children: "Product Description" }),
      /* @__PURE__ */ jsx("p", { children: "There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment." }),
      highlights.length != 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h6", { children: "Benefits" }),
        /* @__PURE__ */ jsx("ul", { className: "text-sm", children: highlights.map(
          (highlight) => /* @__PURE__ */ jsx("li", { className: "mb-2", children: highlight })
        ) })
      ] }),
      details.length != 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h6", { children: "More about product" }),
        /* @__PURE__ */ jsx("p", { children: details })
      ] })
    ] }) })
  ] }) });
}

function ReviewComment({
  review
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "d-block my-5", children: [
      /* @__PURE__ */ jsx(ReviewRating, { rating: review.rating }),
      /* @__PURE__ */ jsx("p", { className: "text-sm mt-4", children: review.comment }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "avatar avatar-lg rounded-circle min-width-50 min-height-50", children: /* @__PURE__ */ jsx("img", { alt: "Image placeholder", src: review.avatar }) }),
        /* @__PURE__ */ jsxs("div", { className: "ms-3", children: [
          /* @__PURE__ */ jsx("h6", { className: "mb-0", children: review.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm mb-2", children: review.date })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "dark horizontal" })
  ] });
}

function ReviewProgress({
  reviews
}) {
  let ratings = [0, 0, 0, 0, 0, 0];
  let ratingsPercentage = [0, 0, 0, 0, 0, 0];
  reviews.map((review) => {
    ratings[review.rating]++;
  });
  for (let i = 1; i < 6; i++) {
    ratingsPercentage[i] = Math.trunc(ratings[i] * 100 / reviews.length);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "progress-wrapper d-flex align-items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-0 font-weight-bold", children: "5" }),
        /* @__PURE__ */ jsx("svg", { className: "text-warning w-rem flex-shrink-0 mx-2", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z", "clip-rule": "evenodd" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "progress w-100 me-3", children: /* @__PURE__ */ jsx("div", { className: "progress-bar bg-warning", role: "progressbar", style: { width: ratingsPercentage[5] + "%" } }) }),
      /* @__PURE__ */ jsx("div", { className: "progress-info", children: /* @__PURE__ */ jsx("div", { className: "progress-percentage", children: /* @__PURE__ */ jsxs("span", { className: "text-sm font-weight-bold", children: [
        ratingsPercentage[5],
        "%"
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "progress-wrapper d-flex align-items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-0 font-weight-bold", children: "4" }),
        /* @__PURE__ */ jsx("svg", { className: "text-warning w-rem flex-shrink-0 mx-2", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z", "clip-rule": "evenodd" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "progress w-100 me-3", children: /* @__PURE__ */ jsx("div", { className: "progress-bar bg-warning", role: "progressbar", style: { width: ratingsPercentage[4] + "%" } }) }),
      /* @__PURE__ */ jsx("div", { className: "progress-info", children: /* @__PURE__ */ jsx("div", { className: "progress-percentage", children: /* @__PURE__ */ jsxs("span", { className: "text-sm font-weight-bold", children: [
        ratingsPercentage[4],
        "%"
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "progress-wrapper d-flex align-items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-0 font-weight-bold", children: "3" }),
        /* @__PURE__ */ jsx("svg", { className: "text-warning w-rem flex-shrink-0 mx-2", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z", "clip-rule": "evenodd" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "progress w-100 me-3", children: /* @__PURE__ */ jsx("div", { className: "progress-bar bg-warning", role: "progressbar", style: { width: ratingsPercentage[3] + "%" } }) }),
      /* @__PURE__ */ jsx("div", { className: "progress-info", children: /* @__PURE__ */ jsx("div", { className: "progress-percentage", children: /* @__PURE__ */ jsxs("span", { className: "text-sm font-weight-bold", children: [
        ratingsPercentage[3],
        "%"
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "progress-wrapper d-flex align-items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-0 font-weight-bold", children: "2" }),
        /* @__PURE__ */ jsx("svg", { className: "text-warning w-rem flex-shrink-0 mx-2", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z", "clip-rule": "evenodd" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "progress w-100 me-3", children: /* @__PURE__ */ jsx("div", { className: "progress-bar bg-warning", role: "progressbar", style: { width: ratingsPercentage[2] + "%" } }) }),
      /* @__PURE__ */ jsx("div", { className: "progress-info", children: /* @__PURE__ */ jsx("div", { className: "progress-percentage", children: /* @__PURE__ */ jsxs("span", { className: "text-sm font-weight-bold", children: [
        ratingsPercentage[2],
        "%"
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "progress-wrapper d-flex align-items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-0 font-weight-bold", children: "1" }),
        /* @__PURE__ */ jsx("svg", { className: "text-warning w-rem flex-shrink-0 mx-2", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z", "clip-rule": "evenodd" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "progress w-100 me-3", children: /* @__PURE__ */ jsx("div", { className: "progress-bar bg-warning", role: "progressbar", style: { width: ratingsPercentage[1] + "%" } }) }),
      /* @__PURE__ */ jsx("div", { className: "progress-info", children: /* @__PURE__ */ jsx("div", { className: "progress-percentage", children: /* @__PURE__ */ jsxs("span", { className: "text-sm font-weight-bold", children: [
        ratingsPercentage[1],
        "%"
      ] }) }) })
    ] })
  ] });
}

function ReviewSummaryChart({
  reviews
}) {
  let CommentsList = [];
  let rating = 0;
  reviews.map((review) => {
    rating += review.rating;
    CommentsList.push(
      /* @__PURE__ */ jsx(ReviewComment, { review })
    );
  });
  rating = Math.trunc(rating / reviews.length);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto text-center w-md-60 mb-5", children: [
      /* @__PURE__ */ jsx("h3", { children: "Our Customer’s Opinion" }),
      /* @__PURE__ */ jsx("p", { children: "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. " })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-5", children: /* @__PURE__ */ jsxs("div", { className: "p-4 mb-4", children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-3", children: "Client Reviews" }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ jsx("h6", { className: "mb-0 me-2", children: "4.7" }),
          /* @__PURE__ */ jsx(ReviewRating, { rating }),
          /* @__PURE__ */ jsxs("p", { className: "mb-0 ms-2", children: [
            "Based on ",
            /* @__PURE__ */ jsx("b", { children: reviews.length }),
            " reviews"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 mb-5", children: /* @__PURE__ */ jsx(ReviewProgress, { reviews }) }),
        /* @__PURE__ */ jsx("h5", { children: "We value your opinion" }),
        /* @__PURE__ */ jsx("p", { className: "mb-5", children: "The time is now for it to be okay to be great. People in this world shun people for being great. " }),
        /* @__PURE__ */ jsx("button", { className: "btn btn-dark w-100 mb-0", children: "Write a review" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-7 max-height-500 overflow-scroll rounded-3 pt-4", children: /* @__PURE__ */ jsx("div", { className: "card card-plain", children: /* @__PURE__ */ jsx("div", { className: "card-body", children: CommentsList }) }) })
    ] })
  ] });
}

export { ProductOverview as P, ReviewSummaryChart as R, ReviewComment as a, ProductGallery as b, ProductSizes as c };
