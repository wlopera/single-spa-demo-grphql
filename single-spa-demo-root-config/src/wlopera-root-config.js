import { registerApplication, start } from "single-spa";
import * as isActive from "./wlopera-root-config";

registerApplication(
  "@wlopera/single-spa-demo-nav",
  () => System.import("@wlopera/single-spa-demo-nav"),
  isActive.nav,
  { domElement: document.getElementById("nav-container") }
);

registerApplication(
  "@wlopera/single-spa-demo-page-1",
  () => System.import("@wlopera/single-spa-demo-page-1"),
  isActive.page1,
  { domElement: document.getElementById("page-1-container") }
);

registerApplication(
  "@wlopera/single-spa-demo-page-2",
  () => System.import("@wlopera/single-spa-demo-page-2"),
  isActive.page2,
  { domElement: document.getElementById("page-2-container") }
);

start();

export function prefix(location, ...prefixes) {
  // console.log(11111, prefixes);
  return prefixes.some((prefix) => {
    // console.log(22222, `${location.origin}/${prefix}`);
    return location.href.indexOf(`${location.origin}/${prefix}`) !== -1;
  });
}

export function nav() {
  // The nav is always active
  return true;
}

export function page1(location) {
  return prefix(location, "page1");
}

export function page2(location) {
  return prefix(location, "page2");
}
