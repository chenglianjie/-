console.log("dom start", document.querySelector(".deploy__price"));
const ASSET_POINT_UPSELL = "https://www.test.com";
const API_POINT_ASSET_POINT_UPSELL = "https://develop-lf-bundle-selling.lfszo.codefriend.top"; // 测试环境
let theme = window.current_theme || window.localStorage.getItem("current_theme"); // 当前的主题
if (!theme) {
  theme = document.querySelector("#appjs") ? document.querySelector("#appjs").getAttribute("currentTheme") : "vogue";
}
// 插入jq
// let script = document.createElement("script");
// script.type = "text/javascript";
// script.src = "https://www.test.com/jq-3.6.0.min.js";
// document.head.appendChild(script);
window.addEventListener("load", () => {
  console.log("dom vogue ", document.querySelector(".deploy__price"));
  console.log("jq是否加载成功", $);
  // basic 主题
  if (theme === "default") {
    $.getScript(`${ASSET_POINT_UPSELL}/defaultTheme.js`);
    return;
  }
  // vogue主题
  if (theme === "vogue") {
    console.log("dom vogue ", document.querySelector(".deploy__price"));
    $.getScript(`${ASSET_POINT_UPSELL}/vogueTheme.js`);
    return;
  }
  console.error("theme获取失败");
});
