(window.webpackJsonp=window.webpackJsonp||[]).push([[92,13,23],{198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(210),c=a(238),o=a(203);var i=function(e){var t=e.nextItem,a=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(o.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},s=a(218),m=a(239),u=a(234);t.default=function(e){var t=e.content,a=e.sidebar,n=t.frontMatter,o=t.metadata,d=o.title,f=o.description,v=o.nextItem,E=o.prevItem,_=o.editUrl,g=n.hide_table_of_contents;return r.a.createElement(l.a,{title:d,description:f,wrapperClassName:"blog-wrapper"},t&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:a})),r.a.createElement("main",{className:"col col--8"},r.a.createElement(c.a,{frontMatter:n,metadata:o,isBlogPostPage:!0},r.a.createElement(t,null)),r.a.createElement("div",null,_&&r.a.createElement("a",{href:_,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(u.a,null),"Edit this page")),(v||E)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(i,{nextItem:v,prevItem:E}))),!g&&t.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{toc:t.toc})))))}},211:function(e,t,a){"use strict";var n=a(3),r=a(7),l=a(0),c=a.n(l),o=a(201),i=a(203),s=a(202),m=a(17),u=a(60),d=a.n(u);function f(e){var t=e.to,a=e.href,l=e.label,o=e.prependBaseUrlToHref,s=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(m.a)(t),d=Object(m.a)(a,{forcePrependBaseUrl:!0});return c.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:o?d:a}:{to:u},s),l)}var v=function(e){var t=e.url,a=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:a,src:t,style:{background:"#fff",padding:"5px 10px"}})};t.a=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,l=t.logo,i=void 0===l?{}:l,u=Object(m.a)(i.src);return e?c.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},c.a.createElement("div",{className:"container"},r&&r.length>0&&c.a.createElement("div",{className:"row footer__links"},r.map((function(e,t){return c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(f,e))}))):null)}))),(i||a)&&c.a.createElement("div",{className:"footer__bottom text--center"},i&&i.src&&c.a.createElement("div",{className:"margin-bottom--sm"},i.href?c.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:d.a.footerLogoLink},c.a.createElement(v,{alt:i.alt,url:u})):c.a.createElement(v,{alt:i.alt,url:u})),a?c.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}},234:function(e,t,a){"use strict";var n=a(3),r=a(7),l=a(0),c=a.n(l),o=a(201),i=a(67),s=a.n(i);t.a=function(e){var t=e.className,a=Object(r.a)(e,["className"]);return c.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(o.a)(s.a.iconEdit,t)},a),c.a.createElement("g",null,c.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},239:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(201);var c=function(e,t,a){var r=Object(n.useState)(void 0),l=r[0],c=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,o=!1,i=document.getElementsByClassName(e);r<i.length&&!o;){var s=i[r],m=s.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),s.classList.add(t),c(s),o=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},o=a(66),i=a.n(o),s="table-of-contents__link";function m(e){var t=e.toc,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return c(s,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(i.a.tableOfContents,"thin-scrollbar")},r.a.createElement(m,{toc:t}))}}}]);