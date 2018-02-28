module.exports=__NEXT_REGISTER_PAGE("/terms",function(){var e=webpackJsonp([7],{358:function(e,t,n){"use strict";var i=n(0);var o=n.n(i);var a=n(292);var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}return function(t,n,i){if(n)e(t.prototype,n);if(i)e(t,i);return t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var u=function(e){c(t,e);function t(){s(this,t);return l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}r(t,[{key:"waypointEnter",value:function e(t,n){var i=n.previousPosition,o=n.currentPosition;if(!this.state.currentlyVisableSections)this.state.currentlyVisableSections=[];if(this.state.currentlyVisableSections.indexOf(t)<0){if("below"===i||!i)this.state.currentlyVisableSections.push(t);if("above"===i)this.state.currentlyVisableSections=[t].concat(this.state.currentlyVisableSections)}this.highlightSection()}},{key:"waypointExit",value:function e(t,n){var i=n.previousPosition,o=n.currentPosition;if(this.state.currentlyVisableSections.indexOf(t>=0))this.state.currentlyVisableSections.splice(this.state.currentlyVisableSections.indexOf(t),1);this.highlightSection()}},{key:"highlightSection",value:function e(){var t=Object.keys(this.state.sections);var n=0;var i=void 0;while(n<t.length){i=t[n];if(this.state.currentlyVisableSections.indexOf(i)>=0)return this.setState({currentSection:i});n++}}},{key:"section",value:function e(t,n){var i=this.state.sections[t];return o.a.createElement(a["a"],{waypointEnter:this.waypointEnter,waypointExit:this.waypointExit,currentSection:this.state.currentSection,id:t,parent:this,title:i},n)}}]);return t}(o.a.Component);t["a"]=u},570:function(e,t,n){e.exports=n(571)},571:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var i=n(0);var o=n.n(i);var a=n(358);var r=n(15);var s=n(291);var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}return function(t,n,i){if(n)e(t.prototype,n);if(i)e(t,i);return t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var p=function(e){h(t,e);function t(e){c(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={titleSection:{title:"Terms & Conditions"},sections:{web:"Terms and Conditions",privacy:"Privacy Policy",code:"Apache License (v2)"}};return n}l(t,[{key:"render",value:function e(){return o.a.createElement(s["a"],{sideNav:this.state.sections,titleSection:this.state.titleSection,currentSection:this.state.currentSection},o.a.createElement(r["l"],null,o.a.createElement(r["d"],{md:12},this.section("web",o.a.createElement("div",null,o.a.createElement("p",null,"These Terms and Conditions apply to the use of this website."),o.a.createElement("hr",null),o.a.createElement("h3",null,"1. Terms"),o.a.createElement("p",null,"By accessing the website at ",o.a.createElement("a",{href:"https://www.actionherojs.com"},"https://www.actionherojs.com"),", you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.  You must be above the age of majority, or have the express consent from a parent or guardian, to use our application and services."),o.a.createElement("h3",null,"2. Use License"),o.a.createElement("ol",{type:"a"},o.a.createElement("li",null,"Permission is granted to download one copy of the materials (information, app, site, or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",o.a.createElement("ol",{type:"i"},o.a.createElement("li",null,"modify or copy the materials;"),o.a.createElement("li",null,"use the materials for any commercial purpose, or for any public display (commercial or non-commercial);"),o.a.createElement("li",null,"attempt to decompile or reverse engineer any software contained on this website;"),o.a.createElement("li",null,"remove any copyright or other proprietary notations from the materials; or"),o.a.createElement("li",null,'transfer the materials to another person or "mirror" the materials on any other server.'))),o.a.createElement("li",null,"This license shall automatically terminate if you violate any of these restrictions and may be terminated at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.")),o.a.createElement("h3",null,"3. Disclaimer"),o.a.createElement("ol",{type:"a"},o.a.createElement("li",null,"The materials on this website are provided on an 'as is' basis. We makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."),o.a.createElement("li",null,"Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.")),o.a.createElement("h3",null,"4. Limitations"),o.a.createElement("p",null,"In no event shall we (or our suppliers) be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if we or a an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."),o.a.createElement("h3",null,"5. Accuracy of materials"),o.a.createElement("p",null,"The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on its website at any time without notice. However we do not make any commitment to update the materials."),o.a.createElement("h3",null,"6. Links"),o.a.createElement("p",null,"We have not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk."),o.a.createElement("h3",null,"7. Modifications"),o.a.createElement("p",null,"We may revise these terms of service for this website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service."),o.a.createElement("h3",null,"8. Governing Law"),o.a.createElement("p",null,"These terms and conditions are governed by and construed in accordance with the laws of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."))),this.section("privacy",o.a.createElement("div",null,o.a.createElement("p",null,"These Terms and Conditions apply to the use of this website."),o.a.createElement("hr",null),o.a.createElement("p",null,"Your privacy is important to us."),o.a.createElement("p",null,"It is our policy to respect your privacy regarding any information we may collect while operating our website. Accordingly, we have developed this privacy policy in order for you to understand how we collect, use, communicate, disclose and otherwise make use of personal information. We have outlined our privacy policy below."),o.a.createElement("ul",null,o.a.createElement("li",null,"We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.  This includes both 1st and 3d party cookies, tokens, other other means of personally identifying you."),o.a.createElement("li",null,"Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.  We may ask for enhanced permisions on your mobile device (geolocation access, camera access, etc), but we will inform you as to why."),o.a.createElement("li",null,"We will collect and use personal information solely for fulfilling those purposes specified by us and for other ancillary purposes, unless we obtain the consent of the individual concerned or as required by law."),o.a.createElement("li",null,"Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date."),o.a.createElement("li",null,"We will protect personal information by using reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification."),o.a.createElement("li",null,"We will make readily available to customers information about our policies and practices relating to the management of personal information."),o.a.createElement("li",null,"We will only retain personal information for as long as necessary for the fulfilment of those purposes.")),o.a.createElement("p",null,"We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. We may change this privacy policy from time to time at our sole discretion."))),this.section("code",o.a.createElement("div",null,o.a.createElement("p",null,"ActionHero's source code licence is ",o.a.createElement("a",{href:"https://github.com/actionhero/actionhero/blob/master/LICENSE.txt"},"The V2 Apache Licence, and is distributed with the code.")))))))}}]);return t}(a["a"]);t["default"]=p}},[570]);return{page:e.default}});