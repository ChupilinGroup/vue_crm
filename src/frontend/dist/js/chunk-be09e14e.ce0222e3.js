(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be09e14e"],{"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var a=i("71d9"),n=i("80d2"),r=Object(n["i"])("v-toolbar__title"),s=Object(n["i"])("v-toolbar__items");a["a"]},"4bd4":function(t,e,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var a=i("5530"),n=i("58df"),r=i("7e2b"),s=i("3206");e["a"]=Object(n["a"])(r["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5311:function(t,e,i){"use strict";var a=i("5607"),n=i("2b0e");e["a"]=n["a"].extend({name:"rippleable",directives:{ripple:a["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}})},"6ca7":function(t,e,i){},8547:function(t,e,i){"use strict";var a=i("2b0e"),n=i("80d2");e["a"]=a["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["j"]}}})},"87bd":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"container fill-height",attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-card",{staticClass:"elevation-12"},[i("v-toolbar",{staticClass:"title primary white--text",attrs:{flat:""}},[i("v-toolbar-title",[t._v("Регистрация")]),i("v-spacer"),i("v-btn",{staticClass:"primary white--text",attrs:{to:"/"}},[t._v("X")])],1),i("v-card-text",[i("v-form",{ref:"form",attrs:{"lazy-validation":t.lazy},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{attrs:{required:"",rules:t.emailRules,label:"E-mail",name:"email","prepend-icon":"mdi-email",type:"text"},model:{value:t.email,callback:function(e){t.email="string"===typeof e?e.trim():e},expression:"email"}}),i("v-text-field",{attrs:{required:"",rules:t.passwordRules,counter:"","append-icon":t.passwordShow?"mdi-eye":"mdi-eye-off",type:t.passwordShow?"text":"password",label:"Password",name:"password","prepend-icon":"mdi-lock"},on:{"click:append":function(e){t.passwordShow=!t.passwordShow}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("v-text-field",{attrs:{required:"",rules:t.userNameRules,counter:"",label:"Имя пользователя",name:"userName","prepend-icon":"mdi-account"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),i("v-checkbox",{attrs:{rules:t.checkboxRules,label:"Вы согласны с правилами?",required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"primary white--text",attrs:{block:"",disabled:!t.valid},on:{click:t.onRegister}},[t._v(" Регистрация ")])],1),t.message?i("v-layout",{attrs:{"justify-center":""}},[i("v-card-actions",{staticClass:"message"},[t._v(" "+t._s(t.message)+" ")])],1):t._e(),i("v-card-actions",[i("p",{staticClass:"card_register"},[t._v(" Есть аккаунт? "),i("v-btn",{attrs:{text:"",to:"/Login"}},[t._v(" Войти ")])],1)])],1)],1)],1)],1)},n=[],r=(i("96cf"),i("1da1")),s=i("5530"),o=i("2b0e"),c=i("2f62"),u=i("8c2e"),l=o["a"].extend({name:"RegisterPage",data:function(){return{valid:!0,lazy:!1,email:"",emailRules:[function(t){return!!t||"E-mail нужно заполнить"},function(t){return/.+@.+\..+/.test(t)||"E-mail должен быть правильным"}],userName:"",userNameRules:[function(t){return!!t||"Имя пользователя нужно заполнить"},function(t){return/^[\t-\r a-z\xA0\u017F\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u212A\u3000\uFEFF]+$/i.test(t)||"Должны быть только английские буквы"},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return t&&t.length>=e||"Длинна имени должна быть больше ".concat(e," символов")}],password:"",passwordShow:!1,passwordRules:[function(t){return!!t||"Password нужно заполнить"},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return t&&t.length>=e||"Длинна пароля должна быть больше ".concat(e," символов")}],checkbox:!1,checkboxRules:[function(t){return!!t||"Просто согласись с неизбежностью!"}],message:"",messages:u["a"]}},computed:Object(s["a"])({},Object(c["c"])(["errorNotificationGetter"])),mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.checkAvailabilityData();case 1:case"end":return e.stop()}}),e)})))()},watch:{errorNotificationGetter:function(t){if(t){var e=this.messages,i=t.code,a=e[i];this.message=a}else this.message="",this.clearErrorNotificationMutation}},methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(c["b"])(["registerAction"])),Object(c["d"])(["clearErrorNotificationMutation"])),{},{onRegister:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i={email:t.email,password:t.password,name:t.userName},e.next=4,t.registerAction(i);case 4:t.clearErrorNotificationMutation,t.$router.push("/"),e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},checkAvailabilityData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,!t.$store.getters.uidGetter;case 2:if(!e.sent){e.next=5;break}return e.next=5,t.$store.dispatch("fetchInfoAction");case 5:case"end":return e.stop()}}),e)})))()}})}),d=l,h=(i("9f2a"),i("2877")),f=i("6544"),p=i.n(f),v=i("8336"),m=i("b0af"),b=i("99d9"),g=(i("d3b7"),i("25f0"),i("6ca7"),i("ec29"),i("9d26")),w=i("c37a"),x=i("fe09"),y=x["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},w["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(g["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(s["a"])(Object(s["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),k=i("62ad"),V=i("a523"),C=i("4bd4"),j=i("a722"),O=i("0fd9"),_=i("2fa4"),A=i("8654"),I=i("71d9"),S=i("2a7f"),$=Object(h["a"])(d,a,n,!1,null,"293128ca",null);e["default"]=$.exports;p()($,{VBtn:v["a"],VCard:m["a"],VCardActions:b["a"],VCardText:b["b"],VCheckbox:y,VCol:k["a"],VContainer:V["a"],VForm:C["a"],VLayout:j["a"],VRow:O["a"],VSpacer:_["a"],VTextField:A["a"],VToolbar:I["a"],VToolbarTitle:S["a"]})},"9f2a":function(t,e,i){"use strict";var a=i("a8ec"),n=i.n(a);n.a},a523:function(t,e,i){"use strict";i("99af"),i("4de4"),i("b64b"),i("2ca0"),i("20f6"),i("4b85");var a=i("e8f2"),n=i("d9f7");e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,a=e.props,r=e.data,s=e.children,o=r.attrs;return o&&(r.attrs={},i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),t(a.tag,Object(n["a"])(r,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(i||[])}),s)}})},a722:function(t,e,i){"use strict";i("20f6");var a=i("e8f2");e["a"]=Object(a["a"])("layout")},a8ec:function(t,e,i){},e8f2:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i("99af"),i("4de4"),i("a15b"),i("b64b"),i("2ca0"),i("498a");var a=i("2b0e");function n(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var a=i.props,n=i.data,r=i.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var s=n.attrs;if(s){n.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),e(a.tag,n,r)}})}},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i("4de4"),i("45fc"),i("d3b7"),i("25f0");var a=i("c37a"),n=i("5311"),r=i("8547"),s=i("58df");e["a"]=Object(s["a"])(a["a"],n["a"],r["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=a["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-be09e14e.ce0222e3.js.map