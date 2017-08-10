
          window.__NEXT_REGISTER_PAGE('/docs/ops/testing', function() {
            var comp = module.exports=webpackJsonp([15],{1241:function(e,t,a){e.exports=a(1242)},1242:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(9),o=n(r),l=a(1),i=n(l),s=a(8),c=n(s),u=a(2),m=n(u),d=a(3),f=n(d),h="/home/ubuntu/www.actionherojs.com/pages/docs/ops/testing.js?entry",N=a(0),_=n(N),p=a(16),b=n(p),E=a(11),g=a(14),y=n(g),w=a(18),v=n(w),k=function(e){function t(e){(0,i.default)(this,t);var a=(0,m.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.state={titleSection:{title:"Operations: Testing",icon:"/static/images/ops-tools.svg"},sections:{overview:"Overview","get-started":"Getting Started",example:"Example Test","test-methods":"Test Methods",notes:"Notes"},links:[{link:"/docs/ops/production-notes",title:"» Operations: Production Notes"},{link:"/docs/ops/development-mode",title:"« Operations: Development Mode & REPL"}]},a}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return _.default.createElement(y.default,{sideNav:this.state.sections,titleSection:this.state.titleSection,links:this.state.links,currentSection:this.state.currentSection,__source:{fileName:h,lineNumber:126}},_.default.createElement(E.Row,{__source:{fileName:h,lineNumber:127}},_.default.createElement(E.Col,{md:12,__source:{fileName:h,lineNumber:128}},this.section("overview",_.default.createElement("div",{__source:{fileName:h,lineNumber:130}},_.default.createElement("p",{__source:{fileName:h,lineNumber:131}},"ActionHero provides test helpers so that you may try your actions and tasks within a headless environment. We do this by including a ",_.default.createElement("code",{__source:{fileName:h,lineNumber:131}},"specHelper")," initializer which creates a server, ",_.default.createElement("code",{__source:{fileName:h,lineNumber:131}},"testServer")," when running within the test environment.  Via the ",_.default.createElement("code",{__source:{fileName:h,lineNumber:131}},"testServer"),", you can easily call actions or tasks without making a real request."),_.default.createElement("p",{__source:{fileName:h,lineNumber:132}},"We have chosen ",_.default.createElement("a",{href:"http://mochajs.org/",__source:{fileName:h,lineNumber:132}},"mocha")," as our test framework and ",_.default.createElement("a",{href:"http://chaijs.com/",__source:{fileName:h,lineNumber:132}},"chai")," as our assertion tool which are included as dependencies within all new projects (",_.default.createElement("a",{href:"/docs/get-started",__source:{fileName:h,lineNumber:132}},"generated")," with ",_.default.createElement("code",{__source:{fileName:h,lineNumber:132}},"./node_modules/.bin/actionhero generate"),").  We also use ",_.default.createElement("code",{__source:{fileName:h,lineNumber:132}},"cross-env")," to set NODE_ENV in a way that works for all operating systems, including Windows. You do not need to use these testing tools, but an example will be provided which makes use of them."),_.default.createElement("p",{__source:{fileName:h,lineNumber:133}},"You also don't need to use these test helpers, and you may want to make a real http or websocket request to test something specific.  If this is the case, you can ",_.default.createElement("a",{href:"https://github.com/actionhero/actionhero/tree/master/test/servers",__source:{fileName:h,lineNumber:133}},"check out how ActionHero tests its own servers")," for examples."))),this.section("get-started",_.default.createElement("div",{__source:{fileName:h,lineNumber:138}},_.default.createElement(v.default,{__source:{fileName:h,lineNumber:139}},'// package.json from a new actionhero project with `mocha` and `chai` included\n{\n  "author"      : "YOU <YOU@example.com>",\n  "name"        : "my_actionhero_project",\n  "description" : "my actionhero project",\n  "version"     : "0.0.1",\n  "engines"     : {\n    "node": ">=0.10.0"\n  },\n  "dependencies" : {\n    "actionhero" : "12.3.0",\n    "ws"         : "latest"\n  },\n  "devDependencies" : {\n    "cross-env": "latest",\n    "mocha"  : "latest",\n    "chai" : "latest"\n  },\n  "scripts" : {\n    "help"         : "actionhero help",\n    "start"        : "actionhero start",\n    "actionhero"   : "actionhero",\n    "start cluster": "actionhero start cluster",\n    "test"         : "cross-env NODE_ENV=test mocha"\n  }\n}\n'),_.default.createElement("p",{__source:{fileName:h,lineNumber:140}},"To run a mocha test suite, you invoke the mocha binary, ",_.default.createElement("code",{__source:{fileName:h,lineNumber:140}},"./node_modules/.bin/mocha"),".  This will tell mocha to look in your ",_.default.createElement("code",{__source:{fileName:h,lineNumber:140}},"./test")," folder and run any tests that it can find.  There are ways to change the test folder location, only run specific tests, change the reporting format and more which you can learn about on ",_.default.createElement("a",{href:"http://mochajs.org/",__source:{fileName:h,lineNumber:140}},"Mocha's website"),".  We asume that you have ",_.default.createElement("code",{__source:{fileName:h,lineNumber:140}},"mocha")," (and ",_.default.createElement("code",{__source:{fileName:h,lineNumber:140}},"chai"),") installed to your project by listing it in your ",_.default.createElement("code",{__source:{fileName:h,lineNumber:140}},"package.json"),".  If you used ",_.default.createElement("code",{__source:{fileName:h,lineNumber:140}},"ActionHero generate")," to create your project, this should already be configured for your."),_.default.createElement("p",{__source:{fileName:h,lineNumber:141}},"The majority of the time, you'll be testing actions and other methods you have written, so you'll need to \"run\" an actionhero server as part of your test suite.  Many times you'll want to have ActionHero behave in a slightly unique way while testing (perhaps connect to a special database, don't log, etc).  To do this, you can change the behavior of the config files for the ",_.default.createElement("code",{__source:{fileName:h,lineNumber:141}},"test")," environment.  Here is how we tell ActionHero ",_.default.createElement("a",{href:"https://github.com/actionhero/actionhero/blob/master/config/logger.js#L48-L54",__source:{fileName:h,lineNumber:141}},"not to write any logs when testing"),". Note thest test-specific configuration overrides the defaults.  To ensure that ActionHero boots with the ",_.default.createElement("code",{__source:{fileName:h,lineNumber:141}},"test")," environment loaded, the test command you run should explicitly do this, AKA: ",_.default.createElement("code",{__source:{fileName:h,lineNumber:141}},"NODE_ENV=test ./node_modules/.bin/mocha"),".  You can log this in as the ",_.default.createElement("a",{href:"https://github.com/actionhero/actionhero/blob/master/package.json#L63",__source:{fileName:h,lineNumber:141}},_.default.createElement("code",{__source:{fileName:h,lineNumber:141}},"test")," script in your ",_.default.createElement("code",{__source:{fileName:h,lineNumber:141}},"package.json"))," so you can simplify the running of tests with just ",_.default.createElement("code",{__source:{fileName:h,lineNumber:141}},"npm test"),"."),_.default.createElement("p",{__source:{fileName:h,lineNumber:142}},"ActionHero comes with a ",_.default.createElement("code",{__source:{fileName:h,lineNumber:142}},"specHelper")," to make it easier to test tasks and actions.  This specHelper is a special ",_.default.createElement("a",{href:"/docs/core/#servers",__source:{fileName:h,lineNumber:142}},"server")," which can check things without needing to make an HTTP, websocket, etc request.  If you need to check the true behavior of a server (perhaps how the router works for an HTTP request), you should make a real HTTP request in your test suite, using something like the ",_.default.createElement("a",{href:"https://github.com/request/request",__source:{fileName:h,lineNumber:142}},"request")," library (",_.default.createElement("a",{href:"https://github.com/actionhero/actionhero/blob/master/test/servers/web.js#L178-L184",__source:{fileName:h,lineNumber:142}},"example"),")."))),this.section("example",_.default.createElement("div",{__source:{fileName:h,lineNumber:147}},_.default.createElement(v.default,{__source:{fileName:h,lineNumber:148}},"'use strict'\n\nlet path = require('path')\nvar expect = require('chai').expect\nvar ActionheroPrototype = require(path.join(__dirname, '/../../actionhero.js'))\nvar actionhero = new ActionheroPrototype()\nvar api\n\ndescribe('Action: RandomNumber', () => {\n  before((done) => {\n    actionhero.start((error, a) => {\n      expect(error).to.be.null()\n      api = a\n      done()\n    })\n  })\n\n  after((done) => {\n    actionhero.stop(() => {\n      done()\n    })\n  })\n\n  var firstNumber = null\n  it('generates random numbers', (done) => {\n    api.specHelper.runAction('randomNumber', (response) => {\n      expect(response.randomNumber).to.be.at.least(0)\n      expect(response.randomNumber).to.be.at.most(1)\n      firstNumber = response.randomNumber\n      done()\n    })\n  })\n\n  it('is unique / random', (done) => {\n    api.specHelper.runAction('randomNumber', (response) => {\n      expect(response.randomNumber).to.be.at.least(0)\n      expect(response.randomNumber).to.be.at.most(1)\n      expect(response.randomNumber).not.to.equal(firstNumber)\n      done()\n    })\n  })\n})"),_.default.createElement("p",{__source:{fileName:h,lineNumber:149}},"Say you had an action that was supposed to respond with a ",_.default.createElement("code",{__source:{fileName:h,lineNumber:149}},"randomNumber"),", and you wanted to write a test for it."),_.default.createElement("p",{__source:{fileName:h,lineNumber:150}},"More details on the specHelper methods are below."),_.default.createElement("p",{__source:{fileName:h,lineNumber:151}},"If you want to see fuller example of how to create an integration test within ActionHero, please ",_.default.createElement("a",{href:"https://github.com/actionhero/actionhero-tutorial#testing",__source:{fileName:h,lineNumber:151}},"check out the tutorial")))),this.section("test-methods",_.default.createElement("div",{__source:{fileName:h,lineNumber:156}},_.default.createElement("h3",{__source:{fileName:h,lineNumber:157}},_.default.createElement("code",{__source:{fileName:h,lineNumber:157}},"new api.specHelper.connection()")),_.default.createElement("ul",{__source:{fileName:h,lineNumber:158}},_.default.createElement("li",{__source:{fileName:h,lineNumber:159}},"generate a new connection object for the ",_.default.createElement("code",{__source:{fileName:h,lineNumber:159}},"testServer")),_.default.createElement("li",{__source:{fileName:h,lineNumber:160}},"this connection can run actions, chat, etc."),_.default.createElement("li",{__source:{fileName:h,lineNumber:161}},_.default.createElement("code",{__source:{fileName:h,lineNumber:161}},"connection.messages")," will contain all messages the connection has been sent (welcome messages, action responses, say messages, etc)")),_.default.createElement("h3",{__source:{fileName:h,lineNumber:164}},_.default.createElement("code",{__source:{fileName:h,lineNumber:164}},"api.specHelper.runAction(actionName, input, callback)")),_.default.createElement("ul",{__source:{fileName:h,lineNumber:165}},_.default.createElement("li",{__source:{fileName:h,lineNumber:166}},"use this method to run an action"),_.default.createElement("li",{__source:{fileName:h,lineNumber:167}},_.default.createElement("code",{__source:{fileName:h,lineNumber:167}},"input")," can be either a ",_.default.createElement("code",{__source:{fileName:h,lineNumber:167}},"api.specHelper.connection")," object, or simply a hash of params, IE: ",_.default.createElement("code",{__source:{fileName:h,lineNumber:167}},"{key: 'value'}")),_.default.createElement("li",{__source:{fileName:h,lineNumber:168}},"the callback returns ",_.default.createElement("code",{__source:{fileName:h,lineNumber:168}},"message")," and ",_.default.createElement("code",{__source:{fileName:h,lineNumber:168}},"connection"),"."),_.default.createElement("li",{__source:{fileName:h,lineNumber:169}},"example use:")),_.default.createElement(v.default,{__source:{fileName:h,lineNumber:171}},"api.specHelper.runAction('cacheTest', {key: 'key', value: 'value'}, function(message, connection){\n// message is the normal API response;\n// connection is a new connection object\n})\n"),_.default.createElement("h3",{__source:{fileName:h,lineNumber:173}},_.default.createElement("code",{__source:{fileName:h,lineNumber:173}},"api.specHelper.getStaticFile(file, callback)")),_.default.createElement("ul",{__source:{fileName:h,lineNumber:174}},_.default.createElement("li",{__source:{fileName:h,lineNumber:175}},"request a file in ",_.default.createElement("code",{__source:{fileName:h,lineNumber:175}},"/public")," from the server"),_.default.createElement("li",{__source:{fileName:h,lineNumber:176}},"the callback returns ",_.default.createElement("code",{__source:{fileName:h,lineNumber:176}},"message")," and ",_.default.createElement("code",{__source:{fileName:h,lineNumber:176}},"connection")," where ",_.default.createElement("code",{__source:{fileName:h,lineNumber:176}},"message")," is a hash:")),_.default.createElement(v.default,{__source:{fileName:h,lineNumber:178}},"var message = {\nerror    : error,    // null if everything is OK\ncontent  : (string), // string representation of the file's body\nmime     : mime,     // file mime\nlength   : length    // bytes\n}"),_.default.createElement("h3",{__source:{fileName:h,lineNumber:180}},_.default.createElement("code",{__source:{fileName:h,lineNumber:180}},"api.specHelper.runTask(taskName, params, callback)")),_.default.createElement("ul",{__source:{fileName:h,lineNumber:181}},_.default.createElement("li",{__source:{fileName:h,lineNumber:182}},"callback may or may not return anything depending on your task's makeup")),_.default.createElement(v.default,{__source:{fileName:h,lineNumber:184}},"api.specHelper.runTask('sendEmailTask', {message: 'hello' to: 'evan@test.com'}, function(response){\n// test it!\n// remember that the task really will be run, so be sure that the test environment is set properly\n})"))),this.section("notes",_.default.createElement("div",{__source:{fileName:h,lineNumber:189}},_.default.createElement("p",{__source:{fileName:h,lineNumber:190}},"Be sure to run your tests in the ",_.default.createElement("code",{__source:{fileName:h,lineNumber:190}},"test")," environment, setting the shell's env with ",_.default.createElement("code",{__source:{fileName:h,lineNumber:190}},"NODE_ENV=test"),".  You can alternatively set this explicitly in your tests with ",_.default.createElement("code",{__source:{fileName:h,lineNumber:190}},"process.env.NODE_ENV = 'test'")),_.default.createElement("p",{__source:{fileName:h,lineNumber:191}},"If you do not want the ",_.default.createElement("code",{__source:{fileName:h,lineNumber:191}},"specHelper")," actions to include metadata (",_.default.createElement("code",{__source:{fileName:h,lineNumber:191}},"data.response.serverInformation"),", ",_.default.createElement("code",{__source:{fileName:h,lineNumber:191}},"data.response.requesterInformation"),", and ",_.default.createElement("code",{__source:{fileName:h,lineNumber:191}},"data.response.messageCount"),") from the server, you can configure ",_.default.createElement("code",{__source:{fileName:h,lineNumber:191}},"api.specHelper.returnMetadata = false")," in your tests."))))))}}]),t}(b.default);t.default=k}},[1241]);
            return { page: comp.default }
          })
        