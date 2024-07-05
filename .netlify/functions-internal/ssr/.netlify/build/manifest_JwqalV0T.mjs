import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_Dw8rLEbH.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/astro-ecommerce/_astro/hoisted.Dh5fQiKa.js"}],"styles":[{"type":"external","src":"/astro-ecommerce/_astro/index.i_8DeIjQ.css"}],"routeData":{"route":"/landing","isIndex":false,"type":"page","pattern":"^\\/landing\\/?$","segments":[[{"content":"landing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing.astro","pathname":"/landing","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/astro-ecommerce/_astro/hoisted.Dh5fQiKa.js"}],"styles":[{"type":"external","src":"/astro-ecommerce/_astro/index.i_8DeIjQ.css"}],"routeData":{"route":"/product","isIndex":false,"type":"page","pattern":"^\\/product\\/?$","segments":[[{"content":"product","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/product.astro","pathname":"/product","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/astro-ecommerce/_astro/hoisted.Dh5fQiKa.js"}],"styles":[{"type":"external","src":"/astro-ecommerce/_astro/index.i_8DeIjQ.css"}],"routeData":{"route":"/shopping-cart","isIndex":false,"type":"page","pattern":"^\\/shopping-cart\\/?$","segments":[[{"content":"shopping-cart","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/shopping-cart.astro","pathname":"/shopping-cart","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/astro-ecommerce/_astro/hoisted.vwZIKrN-.js"}],"styles":[{"type":"external","src":"/astro-ecommerce/_astro/index.i_8DeIjQ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/astro-ecommerce","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Evans/Desktop/PDM/astro-ecommerce/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Evans/Desktop/PDM/astro-ecommerce/src/pages/landing.astro",{"propagation":"none","containsHead":true}],["C:/Users/Evans/Desktop/PDM/astro-ecommerce/src/pages/product.astro",{"propagation":"none","containsHead":true}],["C:/Users/Evans/Desktop/PDM/astro-ecommerce/src/pages/shopping-cart.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/landing@_@astro":"pages/landing.astro.mjs","\u0000@astro-page:src/pages/product@_@astro":"pages/product.astro.mjs","\u0000@astro-page:src/pages/shopping-cart@_@astro":"pages/shopping-cart.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_JwqalV0T.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_DPGiGzuk.mjs","/src/pages/landing.astro":"chunks/landing_DgbAUVUM.mjs","/src/pages/product.astro":"chunks/product_Dt5o0kgd.mjs","/src/pages/shopping-cart.astro":"chunks/shopping-cart_D4zEWhJ4.mjs","/src/pages/index.astro":"chunks/index_B5pLZaJn.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.vwZIKrN-.js","/astro/hoisted.js?q=1":"_astro/hoisted.Dh5fQiKa.js","@astrojs/react/client.js":"_astro/client.CwcGZGJy.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/astro-ecommerce/_astro/index.i_8DeIjQ.css","/astro-ecommerce/data.json","/astro-ecommerce/favicon.svg","/astro-ecommerce/header-blue-purple.jpg","/astro-ecommerce/images/bg1.jpg","/astro-ecommerce/images/bg2.jpg","/astro-ecommerce/images/category1.jpg","/astro-ecommerce/images/category2.jpg","/astro-ecommerce/images/category3.jpg","/astro-ecommerce/images/category4.jpg","/astro-ecommerce/images/category5.jpg","/astro-ecommerce/images/mirror.png","/astro-ecommerce/images/product1.jpg","/astro-ecommerce/images/product10.jpg","/astro-ecommerce/images/product11.jpg","/astro-ecommerce/images/product12.jpg","/astro-ecommerce/images/product13.jpg","/astro-ecommerce/images/product2.jpg","/astro-ecommerce/images/product3.jpg","/astro-ecommerce/images/product4.jpg","/astro-ecommerce/images/product5.jpg","/astro-ecommerce/images/product6.jpg","/astro-ecommerce/images/product7.jpg","/astro-ecommerce/images/product8.jpg","/astro-ecommerce/images/product9.jpg","/astro-ecommerce/images/suit-1.jpg","/astro-ecommerce/images/suit-2.jpg","/astro-ecommerce/images/suit-3.jpg","/astro-ecommerce/images/suit-4.jpg","/astro-ecommerce/images/suit-5.jpg","/astro-ecommerce/images/suit-6.jpg","/astro-ecommerce/images/team-1.jpg","/astro-ecommerce/images/team-2.jpg","/astro-ecommerce/logo/logo-spotify.svg","/astro-ecommerce/_astro/client.CwcGZGJy.js","/astro-ecommerce/_astro/hoisted.Dh5fQiKa.js","/astro-ecommerce/_astro/hoisted.vwZIKrN-.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
