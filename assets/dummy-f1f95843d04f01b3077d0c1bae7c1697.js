"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,l){Object.defineProperty(e,"__esModule",{value:!0})
const i=Ember.Application.extend({modulePrefix:l.default.modulePrefix,podModulePrefix:l.default.podModulePrefix,Resolver:t.default});(0,n.default)(i,l.default.modulePrefix),e.default=i}),define("dummy/components/sticky-element",["exports","ember-sticky-element/components/sticky-element"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/sticky-element/trigger",["exports","ember-sticky-element/components/sticky-element/trigger"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/sticky-debug",["exports"],function(e){function t(e){let[t]=e
switch(!0){case t.isStickyTop:return"Stick to top"
case t.isStickyBottom:return"Stick to bottom"
default:return"Not sticky"}}Object.defineProperty(e,"__esModule",{value:!0}),e.stickyDebug=t
var n=Ember.Helper.helper
e.default=n(t)}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize(){let e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var l,i=t.default.exportApplicationGlobal
l="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),n[l]||(n[l]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[l]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/initializers/viewport-config",["exports","ember-in-viewport/initializers/viewport-config"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/mixins/in-viewport",["exports","ember-in-viewport/mixins/in-viewport"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
const n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){}),e.default=n}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"cO0cAiHm",block:'{"symbols":[],"statements":[[6,"h2"],[9,"id","title"],[7],[0,"Welcome to Ember"],[8],[0,"\\n\\n"],[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"ePK5zBiI",block:'{"symbols":["sticky","sticky","sticky","sticky","sticky","sticky","sticky","sticky","sticky","sticky"],"statements":[[6,"h1"],[7],[0,"ember-sticky-element"],[8],[0,"\\n\\n"],[6,"div"],[9,"class","demo row"],[7],[0,"\\n  "],[6,"div"],[9,"class","col small"],[7],[0,"\\n"],[4,"sticky-element",null,[["class"],["sticky"]],{"statements":[[0,"      \\n      "],[6,"p"],[7],[0,"small, not sticky to bottom"],[8],[0,"\\n      "],[6,"p"],[9,"class","debug"],[7],[0,"\\n        "],[1,[25,"sticky-debug",[[19,10,[]]],null],false],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[10]},null],[0,"  "],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","col small bottom"],[7],[0,"\\n"],[4,"sticky-element",null,[["class","bottom"],["sticky",0]],{"statements":[[0,"      \\n      "],[6,"p"],[7],[0,"small, sticky to bottom"],[8],[0,"\\n      "],[6,"p"],[9,"class","debug"],[7],[0,"\\n        "],[1,[25,"sticky-debug",[[19,9,[]]],null],false],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[9]},null],[0,"  "],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","col small bottom"],[7],[0,"\\n"],[4,"sticky-element",null,[["top","class","bottom"],[50,"sticky",0]],{"statements":[[0,"      \\n      "],[6,"p"],[7],[0,"small, sticky to bottom, with offset"],[8],[0,"\\n      "],[6,"p"],[9,"class","debug"],[7],[0,"\\n        "],[1,[25,"sticky-debug",[[19,8,[]]],null],false],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[8]},null],[0,"  "],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","col large"],[7],[0,"\\n"],[4,"sticky-element",null,[["class"],["sticky"]],{"statements":[[0,"      \\n      "],[6,"p"],[7],[0,"large, not sticky to bottom"],[8],[0,"\\n      "],[6,"p"],[9,"class","debug"],[7],[0,"\\n        "],[1,[25,"sticky-debug",[[19,7,[]]],null],false],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[7]},null],[0,"  "],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","col large bottom"],[7],[0,"\\n"],[4,"sticky-element",null,[["class","bottom"],["sticky",0]],{"statements":[[0,"      \\n      "],[6,"p"],[7],[0,"large, sticky to bottom"],[8],[0,"\\n      "],[6,"p"],[9,"class","debug"],[7],[0,"\\n        "],[1,[25,"sticky-debug",[[19,6,[]]],null],false],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[6]},null],[0,"  "],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","col small off"],[7],[0,"\\n"],[4,"sticky-element",null,[["class"],["sticky"]],{"statements":[[0,"      \\n      "],[6,"p"],[7],[0,"small, not sticky to bottom, off view"],[8],[0,"\\n      "],[6,"p"],[9,"class","debug"],[7],[0,"\\n        "],[1,[25,"sticky-debug",[[19,5,[]]],null],false],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[5]},null],[0,"  "],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","col small bottom off"],[7],[0,"\\n"],[4,"sticky-element",null,[["class","bottom"],["sticky",0]],{"statements":[[0,"      \\n      "],[6,"p"],[7],[0,"small, sticky to bottom, off view"],[8],[0,"\\n      "],[6,"p"],[9,"class","debug"],[7],[0,"\\n        "],[1,[25,"sticky-debug",[[19,4,[]]],null],false],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[4]},null],[0,"  "],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","col small bottom off"],[7],[0,"\\n"],[4,"sticky-element",null,[["top","class","bottom"],[50,"sticky",0]],{"statements":[[0,"      \\n      "],[6,"p"],[7],[0,"small, sticky to bottom, with offset, off view"],[8],[0,"\\n      "],[6,"p"],[9,"class","debug"],[7],[0,"\\n        "],[1,[25,"sticky-debug",[[19,3,[]]],null],false],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[3]},null],[0,"  "],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","col large off"],[7],[0,"\\n"],[4,"sticky-element",null,[["class"],["sticky"]],{"statements":[[0,"      \\n      "],[6,"p"],[7],[0,"large, not sticky to bottom, off view"],[8],[0,"\\n      "],[6,"p"],[9,"class","debug"],[7],[0,"\\n        "],[1,[25,"sticky-debug",[[19,2,[]]],null],false],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[2]},null],[0,"  "],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","col large bottom off"],[7],[0,"\\n"],[4,"sticky-element",null,[["class","bottom"],["sticky",0]],{"statements":[[0,"      \\n      "],[6,"p"],[7],[0,"large, sticky to bottom, off view"],[8],[0,"\\n      "],[6,"p"],[9,"class","debug"],[7],[0,"\\n        "],[1,[25,"sticky-debug",[[19,1,[]]],null],false],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[8],[0,"\\n\\n"],[8],[0,"\\n\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
