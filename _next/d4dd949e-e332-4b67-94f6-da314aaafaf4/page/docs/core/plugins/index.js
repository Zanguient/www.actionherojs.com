
          window.__NEXT_REGISTER_PAGE('/docs/core/plugins', function() {
            var comp = module.exports=webpackJsonp([23],{1225:function(e,t,l){e.exports=l(1226)},1226:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=l(9),r=a(i),n=l(1),o=a(n),u=l(8),c=a(u),s=l(2),m=a(s),f=l(3),d=a(f),_="/home/ubuntu/www.actionherojs.com/pages/docs/core/plugins.js?entry",N=l(0),h=a(N),p=l(16),g=a(p),b=l(11),E=l(14),v=a(E),w=l(18),y=a(w),k=function(e){function t(e){(0,o.default)(this,t);var l=(0,m.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return l.state={titleSection:{title:"Core: Plugins",icon:"/static/images/ops-tools.svg"},sections:{overview:"Overview",creating:"Creating Plugins",methods:"Plugin Methods",examples:"Example Plugins",published:"Published Plugins"},links:[{link:"/docs/core/servers",title:"» Core: Servers"},{link:"/docs/core/logging",title:"« Core: Logging"}]},l}return(0,d.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return h.default.createElement(v.default,{sideNav:this.state.sections,titleSection:this.state.titleSection,links:this.state.links,currentSection:this.state.currentSection,__source:{fileName:_,lineNumber:45}},h.default.createElement(b.Row,{__source:{fileName:_,lineNumber:46}},h.default.createElement(b.Col,{md:12,__source:{fileName:_,lineNumber:47}},this.section("overview",h.default.createElement("div",{__source:{fileName:_,lineNumber:49}},h.default.createElement("p",{__source:{fileName:_,lineNumber:50}},"As of ActionHero version ",h.default.createElement("code",{__source:{fileName:_,lineNumber:50}},"v8.0.0"),", you can create and include plugins for you ActionHero project.  Plugins are collections of ",h.default.createElement("code",{__source:{fileName:_,lineNumber:50}},"tasks"),", ",h.default.createElement("code",{__source:{fileName:_,lineNumber:50}},"actions"),", ",h.default.createElement("code",{__source:{fileName:_,lineNumber:50}},"servers"),", and ",h.default.createElement("code",{__source:{fileName:_,lineNumber:50}},"initializers")," that are collected as a module.  You can install plugins via NPM or keep them in a local path."),h.default.createElement("p",{__source:{fileName:_,lineNumber:51}},"Plugins are loaded after all local ActionHero project files, but initializers follow the same priority scheme as all other initializers."))),this.section("creating",h.default.createElement("div",{__source:{fileName:_,lineNumber:56}},h.default.createElement(y.default,{language:"bash",__source:{fileName:_,lineNumber:57}},"/\n| - actions\n| - tasks\n| - servers\n| - initializers\n| - scripts\n| - config\n|\n| - package.json\n"),h.default.createElement("p",{__source:{fileName:_,lineNumber:58}},"To create a plugin, create a project with the following structure:"),h.default.createElement("p",{__source:{fileName:_,lineNumber:59}},"This structure will allow elements to be loaded into ActionHero (we search ",h.default.createElement("code",{__source:{fileName:_,lineNumber:59}},"/actions")," for actions, ",h.default.createElement("code",{__source:{fileName:_,lineNumber:59}},"/tasks")," for tasks, etc)"),h.default.createElement("p",{__source:{fileName:_,lineNumber:60}},"When developing your plugin locally, you can load it into an existing ActionHero project to test it out."),h.default.createElement("p",{__source:{fileName:_,lineNumber:61}},"First, add the path your plugin is in to ",h.default.createElement("code",{__source:{fileName:_,lineNumber:61}},"api.config.general.paths.plugin"),".  If your ActionHero app is in ",h.default.createElement("code",{__source:{fileName:_,lineNumber:61}},"/var/ah/actionhero")," and your plugin is in ",h.default.createElement("code",{__source:{fileName:_,lineNumber:61}},"/var/ah/my_plugin"),", add ",h.default.createElement("code",{__source:{fileName:_,lineNumber:61}},"/var/ah")," to ",h.default.createElement("code",{__source:{fileName:_,lineNumber:61}},"api.config.general.paths.plugin")),h.default.createElement("p",{__source:{fileName:_,lineNumber:62}},h.default.createElement("strong",{__source:{fileName:_,lineNumber:62}},"Please use the npm naming convention ",h.default.createElement("code",{__source:{fileName:_,lineNumber:62}},"ah-(name)-plugin")," when uploading your plugin to npm")))),this.section("methods",h.default.createElement("div",{__source:{fileName:_,lineNumber:67}},h.default.createElement("p",{__source:{fileName:_,lineNumber:68}},'When creating plugins, you may find yourself wanting to do things which could normally be accomplished easily with a "top level" ActionHero project, but might be difficult from within the ',h.default.createElement("code",{__source:{fileName:_,lineNumber:68}},"node_modules")," folder.  Here are some helpers:"),h.default.createElement("h3",{__source:{fileName:_,lineNumber:70}},"Routes:"),h.default.createElement("ul",{__source:{fileName:_,lineNumber:72}},h.default.createElement("li",{__source:{fileName:_,lineNumber:73}},h.default.createElement("code",{__source:{fileName:_,lineNumber:73}},"api.routes.registerRoute(method, path, action, apiVersion, matchTrailingPathParts)"),h.default.createElement("ul",{__source:{fileName:_,lineNumber:74}},h.default.createElement("li",{__source:{fileName:_,lineNumber:75}},"Add a route to the system.")))))),this.section("examples",h.default.createElement("div",{__source:{fileName:_,lineNumber:83}},h.default.createElement("p",{__source:{fileName:_,lineNumber:84}},h.default.createElement("a",{href:"https://github.com/actionhero/ah-sample-plugin",__source:{fileName:_,lineNumber:84}},"You can view a sample plugin here")))),this.section("published",h.default.createElement("div",{__source:{fileName:_,lineNumber:89}},h.default.createElement("p",{__source:{fileName:_,lineNumber:90}},"You can view a list of plugins maintained by ",h.default.createElement("a",{href:"https://github.com/l0oky",__source:{fileName:_,lineNumber:90}},"@l0oky")," via ",h.default.createElement("a",{href:"https://github.com/l0oky/awesome-actionhero",__source:{fileName:_,lineNumber:90}},h.default.createElement("img",{src:"https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg",alt:"Awesome",__source:{fileName:_,lineNumber:90}}))))))))}}]),t}(g.default);t.default=k}},[1225]);
            return { page: comp.default }
          })
        