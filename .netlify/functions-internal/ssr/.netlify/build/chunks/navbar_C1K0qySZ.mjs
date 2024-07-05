import { c as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, a as addAttribute, b as createAstro } from './astro/server_Dw8rLEbH.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */
import { jsx, jsxs } from 'react/jsx-runtime';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Noto+Sans:300,400,500,600,700,800|PT+Mono:300,400,500,600,700" rel="stylesheet"><meta name="generator"', "><title>", '</title><link rel="canonical" href="https://www.creative-tim.com/astro/"><!-- Google Tag Manager --><!-- End Google Tag Manager -->', '</head> <body> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> ', ' <script src="https://kit.fontawesome.com/349ee9c857.js" crossOrigin="anonymous"></script> <!-- Bootstrap JavaScript Bundle with Popper --> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script> <!-- Product JavaScript -->  </body> </html>'])), addAttribute(`${"/astro-ecommerce"}favicon.svg`, "href"), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Evans/Desktop/PDM/astro-ecommerce/src/layouts/Layout.astro", void 0);

const products = [
	{
		id: "01",
		thumb_src: "/images/suit-3.jpg",
		thumb_alt: "watch-image",
		images: [
			{
				src: "https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
				alt: "first_image"
			},
			{
				src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
				alt: "second_image"
			},
			{
				src: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
				alt: "third_image"
			},
			{
				src: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
				alt: "fourth_image"
			}
		],
		color: "8 colors",
		colors: [
			"red",
			"blue",
			"green"
		],
		title: "Basic Starter Pack",
		price: 399,
		description: "That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
		full_description: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.",
		details: "There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn.",
		highlights: [
			"Oil is a primary source of energy for various sectors, including transportation, industries, and residential use.",
			"Oil is highly versatile and used in the production of a wide range of products. It serves as a raw material for manufacturing plastics",
			"Oil is a crucial source of petrochemicals, which are used in the production of plastics."
		],
		features: [
			"Multiple strap configuration",
			"Water Resistant",
			"Stainless strap loops",
			"Ultra-soft 100% cotton"
		],
		rating: 4,
		reviews: 117,
		size: "Small",
		sizes: {
			XS: 3,
			S: 0,
			M: 1,
			L: 1213,
			XL: 6
		},
		data: {
			Features: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you.",
			Care: "It really matters and then like it really doesn`t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn`t matter. Because it's about motivating the doers. Because I`m here to follow my dreams and inspire other people to follow their dreams, too.",
			Shipping: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?",
			Returns: "I always felt like I could do anything. That`s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can`t do anything, you won`t do anything. I was taught I could do everything."
		},
		featuresDetails: {
			Origin: "Oil is a primary source of energy for various sectors, including transportation, industries, and residential use.",
			Material: "Oil is highly versatile and used in the production of a wide range of products. It serves as a raw material for manufacturing plastics.",
			Dimensions: "Oil is a crucial source of petrochemicals, which are used in the production of plastics."
		},
		stock: true
	},
	{
		id: "02",
		thumb_src: "/images/suit-1.jpg",
		thumb_alt: "watch-image",
		images: [
			{
				src: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
				alt: "first_image"
			},
			{
				src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
				alt: "second_image"
			},
			{
				src: "https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
				alt: "third_image"
			},
			{
				src: "https://images.unsplash.com/photo-1522125123931-9304d91a42ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
				alt: "fourth_image"
			}
		],
		color: "Black",
		colors: [
			"black",
			"green",
			"white"
		],
		title: "Pink Blouse",
		price: 1490,
		rating: 5,
		reviews: 117,
		description: "That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
		full_description: "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming `Charcoal Gray` limited release.",
		features: [
			"Multiple strap configuration",
			"Water Resistant",
			"Stainless strap loops",
			"Ultra-soft 100% cotton"
		],
		size: "Medium",
		sizes: {
			XS: 3,
			S: 0,
			M: 1,
			L: 0,
			XL: 6
		},
		data: {
			Features: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you.",
			Care: "It really matters and then like it really doesn`t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn`t matter. Because it's about motivating the doers. Because I`m here to follow my dreams and inspire other people to follow their dreams, too.",
			Shipping: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?",
			Returns: "I always felt like I could do anything. That`s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can`t do anything, you won`t do anything. I was taught I could do everything."
		},
		featuresDetails: {
			Origin: "Designed by Good Goods, Inc.",
			Material: "Solid walnut base with rare earth magnets and powder coated steel card cover",
			Dimensions: "6.25 x 3.55' x 1.15'",
			Finish: "Hand sanded and finished with natural oil",
			Includes: "Wood card tray and 3 refill packs",
			Considerations: "Made from natural materials. Grain and color vary with each item."
		},
		stock: false
	},
	{
		id: "03",
		thumb_src: "/images/suit-2.jpg",
		thumb_alt: "iMac-image",
		images: [
			{
				src: "https://images.unsplash.com/photo-1567790350645-dbc1486a89c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
				alt: "first_image"
			},
			{
				src: "https://images.unsplash.com/photo-1593088177922-aa1c5055c7b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
				alt: "second_image"
			},
			{
				src: "https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
				alt: "third_image"
			},
			{
				src: "https://images.unsplash.com/photo-1593085260707-5377ba37f868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
				alt: "fourth_image"
			}
		],
		color: "Yellow",
		colors: [
			"SpaceGray"
		],
		title: "Premium Suit",
		description: "There’s nothing I really wanted to do in life that I wasn’t able to get good at.",
		price: 1399,
		size: "Large",
		sizes: {
			XS: 3,
			S: 0,
			M: 1,
			L: 0,
			XL: 6
		},
		data: {
			Design: "If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
			Material: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? People are so scared to lose that they don't even try.",
			Considerations: "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.",
			Included: "We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed."
		},
		stock: true
	},
	{
		id: "04",
		thumb_src: "/images/suit-5.jpg",
		thumb_alt: "iPhone_thumb",
		color: "Blue",
		title: "iPhone",
		description: "That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
		price: 1599,
		size: "Small",
		sizes: {
			XS: 3,
			S: 0,
			M: 1,
			L: 0,
			XL: 6
		},
		stock: false
	}
];
const categories = [
	{
		thumb_src: "/images/category1.jpg",
		title: "Silk Dresses",
		collection: "Pre-fall"
	},
	{
		thumb_src: "/images/category2.jpg",
		title: "Suits",
		collection: "Designers"
	},
	{
		thumb_src: "/images/category3.jpg",
		title: "Festival",
		collection: "Summer"
	},
	{
		thumb_src: "/images/category4.jpg",
		title: "Showroom",
		collection: "Sale"
	},
	{
		thumb_src: "/images/product10.jpg",
		title: "Living Sofas",
		collection: "Interior Design"
	},
	{
		thumb_src: "/images/category5.jpg",
		title: "Chairs by Designers",
		collection: "Sale"
	},
	{
		thumb_src: "/images/product9.jpg",
		title: "Home care",
		collection: "Products"
	}
];
const reviews = [
	{
		avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
		name: "Hector Gibbs",
		date: "July 17, 2023",
		rating: 5,
		comment: "As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. ",
		productID: "01"
	},
	{
		avatar: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
		name: "Willie Manson",
		date: "Aug 18, 2023",
		rating: 4,
		comment: "It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter.",
		productID: "01"
	},
	{
		avatar: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
		name: "Mary Doyle",
		date: "Nov 11, 2023",
		rating: 5,
		comment: "It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter.",
		productID: "01"
	},
	{
		avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
		name: "Joe Molly",
		date: "Mar 23, 2023",
		rating: 3,
		comment: "It’s like a little kid, a little boy, looking at colors, and no one told him what colors are good, before somebody tells you you shouldn’t like pink.",
		productID: "01"
	},
	{
		avatar: "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
		name: "Keisha Megan",
		date: "Jun 21, 2023",
		rating: 4,
		comment: "For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?",
		productID: "01"
	},
	{
		avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
		name: "Kevin Klein",
		date: "Dec 01, 2023",
		rating: 5,
		comment: "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out.",
		productID: "01"
	}
];
const orders = [
	{
		orderNumber: 23791,
		products: [
			{
				id: "01",
				status: "Processed",
				quantity: 1,
				dateModified: "March 23, 2023"
			},
			{
				id: "02",
				status: "Delivered",
				quantity: 3,
				dateModified: "June 28, 2023"
			}
		],
		payment: {
			cardNumber: "0042",
			expiringDate: "06/26"
		},
		date: "March 23, 2023",
		address: "362 Ridgewood, Alaska 99669, USA",
		email: "michael@email.com",
		phoneNumber: "(808) 791-6935"
	},
	{
		orderNumber: "WB2341",
		products: [
			{
				id: "03",
				status: "Order Placed",
				quantity: 1,
				dateModified: "March 23, 2023"
			}
		],
		payment: {
			cardNumber: "4119",
			expiringDate: "06/26"
		},
		date: "March 28, 2023",
		address: "362 Ridgewood Dr, Soldotna, Alaska 99669, USA",
		email: "john@email.com",
		phoneNumber: "(307) 612-7721"
	},
	{
		orderNumber: "010110",
		products: [
			{
				id: "04",
				status: "Order Placed",
				quantity: 1,
				dateModified: "Sep 09, 2023"
			},
			{
				id: "01",
				status: "Shipped",
				quantity: 1,
				dateModified: "Sep 12, 2023"
			},
			{
				id: "02",
				status: "Delivered",
				quantity: 1,
				dateModified: "Sep 13, 2023"
			}
		],
		payment: {
			cardNumber: "5290",
			expiringDate: "11/27"
		},
		date: "Sep 07, 2023",
		address: "362 Ridgewood, Alaska 99669, USA",
		email: "doe@email.com",
		phoneNumber: "(307) 682-8835"
	}
];
const shoppingCart = [
	"01",
	"02",
	"03"
];
const shoppingCart2 = [
	"02",
	"03",
	"04"
];
const data = {
	products: products,
	categories: categories,
	reviews: reviews,
	orders: orders,
	shoppingCart: shoppingCart,
	shoppingCart2: shoppingCart2
};

const Navbar = () => {
  return /* @__PURE__ */ jsx("nav", { className: "navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0", children: /* @__PURE__ */ jsxs("div", { className: "container px-1", children: [
    /* @__PURE__ */ jsx("a", { className: "navbar-brand font-weight-bolder ms-lg-0 ", href: "https://www.creative-tim.com/astro", children: "Astro Ecommerce" }),
    /* @__PURE__ */ jsx("button", { className: "navbar-toggler shadow-none ms-2", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navigation", "aria-controls": "navigation", "aria-expanded": "false", "aria-label": "Toggle navigation", children: /* @__PURE__ */ jsxs("span", { className: "navbar-toggler-icon mt-2", children: [
      /* @__PURE__ */ jsx("span", { className: "navbar-toggler-bar bar1" }),
      /* @__PURE__ */ jsx("span", { className: "navbar-toggler-bar bar2" }),
      /* @__PURE__ */ jsx("span", { className: "navbar-toggler-bar bar3" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "collapse navbar-collapse", id: "navigation", children: /* @__PURE__ */ jsxs("ul", { className: "navbar-nav ms-auto", children: [
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-dark font-weight-bold d-flex align-items-center me-2 ", "aria-current": "page", href: "/astro-ecommerce/", children: "All Components" }) }),
      /* @__PURE__ */ jsxs("li", { className: "nav-item dropdown", children: [
        /* @__PURE__ */ jsx("a", { className: "nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 ", "aria-current": "page", id: "pagesExample", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: "Pages" }),
        /* @__PURE__ */ jsxs("ul", { className: "dropdown-menu", "aria-labelledby": "pagesExample", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "dropdown-item", href: "/astro-ecommerce/landing/", children: "Landing Page" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "dropdown-item", href: "/astro-ecommerce/product/", children: "Product Page" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "dropdown-item", href: "/astro-ecommerce/shopping-cart/", children: "Shopping Cart" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-dark font-weight-bold d-flex align-items-center me-2 ", "aria-current": "page", href: "https://www.creative-tim.com/learning-lab/astro/overview/astro-ecommerce", children: "Documentation" }) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-dark font-weight-bold d-flex align-items-center me-2 ", "aria-current": "page", href: "https://github.com/creativetimofficial/astro-ecommerce", children: /* @__PURE__ */ jsx("i", { className: "fab text-lg fa-github" }) }) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-dark font-weight-bold d-flex align-items-center me-2 ", "aria-current": "page", href: "https://discord.com/invite/TGZqBvZB", rel: "nofollow", target: "_blank", children: /* @__PURE__ */ jsx("i", { className: "fab text-lg fa-discord" }) }) })
    ] }) })
  ] }) });
};

export { $$Layout as $, Navbar as N, data as d };
