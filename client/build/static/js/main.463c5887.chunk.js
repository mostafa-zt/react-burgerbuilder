(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,r){e.exports={OrderBox:"Order_OrderBox__3J9lL",SummaryItem:"Order_SummaryItem__1spJc",Summary_SubItem:"Order_Summary_SubItem__17NVQ",TotalPrice:"Order_TotalPrice__2I0Qk",Amount:"Order_Amount___gWqH",SummarySubItem:"Order_SummarySubItem__1ZKZt",Price:"Order_Price__2PhO_",Header:"Order_Header__3IVHX",Order_Info_Item:"Order_Order_Info_Item__s6FWC",Order_Info:"Order_Order_Info__1Z6ds",FullWidth:"Order_FullWidth__2Da_a"}},17:function(e,t,r){e.exports={ControlItem:"BuildControl_ControlItem__IZUB3",ControlLabel:"BuildControl_ControlLabel__2Mj9C",ControlButtons:"BuildControl_ControlButtons__2K2eH",ControlButton:"BuildControl_ControlButton__15cV1",ControlButtonLess:"BuildControl_ControlButtonLess__L9g4k",ControlButtonAdd:"BuildControl_ControlButtonAdd__yupEH",UnitPrice:"BuildControl_UnitPrice__2So5S",Ing_Value:"BuildControl_Ing_Value__28P6k"}},18:function(e,t,r){e.exports={Summary_SubItem:"OrderSummary_Summary_SubItem__2w-p1",SummaryItem:"OrderSummary_SummaryItem__2UF_I",Header:"OrderSummary_Header__3BffH",TotalPrice:"OrderSummary_TotalPrice__3YH39",Button:"OrderSummary_Button__3AlXa",ButtonSucces:"OrderSummary_ButtonSucces__2ACDj",ButtonCancel:"OrderSummary_ButtonCancel__3dwrv",ButtonSection:"OrderSummary_ButtonSection__1ega5"}},19:function(e,t,r){e.exports={Summary_SubItem:"CheckoutSummary_Summary_SubItem__1AofD",SummaryItem:"CheckoutSummary_SummaryItem__3mFhA",Header:"CheckoutSummary_Header__2jXja",TotalPrice:"CheckoutSummary_TotalPrice__1Xk6v",Button:"CheckoutSummary_Button__x5sQl",ButtonSucces:"CheckoutSummary_ButtonSucces__1vCOI",ButtonCancel:"CheckoutSummary_ButtonCancel__w1wOE",ButtonSection:"CheckoutSummary_ButtonSection__28ySv"}},20:function(e,t,r){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__3rhzj",BreadTop:"BurgerIngredients_BreadTop__2lLl4",Seeds1:"BurgerIngredients_Seeds1__2kTJv",Seeds2:"BurgerIngredients_Seeds2__2LnYA",Meat:"BurgerIngredients_Meat__29qD2",Cheese:"BurgerIngredients_Cheese__1_eR3",Salad:"BurgerIngredients_Salad__22YOn",Bacon:"BurgerIngredients_Bacon__YTM3d"}},21:function(e,t,r){e.exports={SideDrawer:"SideDrawer_SideDrawer__1tiKS",Open:"SideDrawer_Open__2B_ht",Close:"SideDrawer_Close__1b1YQ",MobileOnly:"SideDrawer_MobileOnly__l5MSd",DesktopOnly:"SideDrawer_DesktopOnly__3I6EC"}},23:function(e,t,r){e.exports={Toolbar:"Toolbar_Toolbar__14Dns",ToggleWrap:"Toolbar_ToggleWrap__1P0Re",ToggleBar:"Toolbar_ToggleBar__33y2a",active:"Toolbar_active___gjwD",MobileOnly:"Toolbar_MobileOnly__1Kx8r",DesktopOnly:"Toolbar_DesktopOnly__3Pcvp"}},29:function(e,t,r){e.exports={NavigationItem:"NavigationItem_NavigationItem__1ADK3",Active:"NavigationItem_Active__2zMMV"}},30:function(e,t,r){e.exports={BuildControl:"BuildControls_BuildControl__3hEIu",TotalPrice:"BuildControls_TotalPrice__3uxiC",OrderButton:"BuildControls_OrderButton__3X6oQ",enable:"BuildControls_enable__1HdkU"}},31:function(e,t,r){e.exports={Modal:"Modal_Modal__XaTdM",active:"Modal_active__-b9RH",hide:"Modal_hide__22kTv"}},50:function(e,t,r){e.exports={content:"Layout_content__3nWHT"}},51:function(e,t,r){e.exports={NavigationItems:"NavigationItems_NavigationItems__3817I"}},52:function(e,t,r){e.exports={Logo:"Logo_Logo__2hz3u",DesktopOnly:"Logo_DesktopOnly__1hsbN"}},53:function(e,t,r){e.exports={Backdrop:"Backdrop_Backdrop__2ZjN4"}},54:function(e,t,r){e.exports={Burger:"Burger_Burger__2in2R"}},55:function(e,t,r){e.exports={Checkout:"Checkout_Checkout__iegkv"}},89:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),o=r(28),c=r.n(o),i=r(25),s=r(16),l=r(22),d=r(49),u=r(4),p=r(5),m=r(7),h=r(6),j=function(e){return e.children},b=r(50),_=r.n(b),O=r(29),g=r.n(O),f=function(e){return Object(n.jsx)("li",{className:"".concat(g.a.NavigationItem," ").concat(e.isActive?g.a.Active:""),children:Object(n.jsx)(i.b,{onClick:e.onSideDrawerClosed,exact:!0,to:e.link,activeClassName:g.a.Active,children:e.children})})},v=r(51),x=r.n(v),C=function(e){return Object(n.jsx)("ul",{className:x.a.NavigationItems,children:Object(n.jsx)(f,{onSideDrawerClosed:e.onSideDrawerClosed,link:"/",children:"Burger Builder"})})},y=r(52),B=r.n(y),S=r.p+"static/media/burger-logo.ec69c7f6.png",N=function(e){return Object(n.jsx)("div",{className:B.a.Logo,style:{height:e.height},children:Object(n.jsx)("img",{src:S,alt:"LogoBurger"})})},I=r(23),k=r.n(I),w=function(e){return Object(n.jsxs)("header",{className:k.a.Toolbar,children:[Object(n.jsx)("div",{onClick:e.clicked,className:"".concat(k.a.ToggleWrap," ").concat(e.showSideDrawer?k.a.active:""," ").concat(k.a.MobileOnly),children:Object(n.jsx)("span",{className:"".concat(k.a.ToggleBar)})}),Object(n.jsx)(N,{}),Object(n.jsx)("nav",{className:k.a.DesktopOnly,children:Object(n.jsx)(C,{})})]})},D=r(21),T=r.n(D),P=r(53),F=r.n(P),H=function(e){return e.show?Object(n.jsx)("div",{onClick:e.clicked,className:"".concat(F.a.Backdrop," ").concat(e.className?e.className:"")}):null},R=function(e){var t=[T.a.SideDrawer,T.a.Close,T.a.MobileOnly];return e.open&&(t=[T.a.SideDrawer,T.a.Open,T.a.MobileOnly]),Object(n.jsxs)(j,{children:[Object(n.jsx)(H,{className:T.a.MobileOnly,clicked:e.closed,show:e.open}),Object(n.jsx)("div",{className:t.join(" "),children:Object(n.jsx)(C,{onSideDrawerClosed:e.closed})})]})},M=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerHnadler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(p.a)(r,[{key:"render",value:function(){return Object(n.jsxs)(j,{children:[Object(n.jsx)(w,{clicked:this.sideDrawerHnadler,showSideDrawer:this.state.showSideDrawer}),Object(n.jsx)(R,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),Object(n.jsx)("main",{className:"container  ".concat(_.a.content),children:this.props.children})]})}}]),r}(a.Component),E=r(3),A=r(56),U=r(20),L=r.n(U),V=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(n.jsx)("div",{className:L.a.BreadBottom});break;case"bread-top":e=Object(n.jsxs)("div",{className:L.a.BreadTop,children:[Object(n.jsx)("div",{className:L.a.Seeds1}),Object(n.jsx)("div",{className:L.a.Seeds2})]});break;case"meat":e=Object(n.jsx)("div",{className:L.a.Meat});break;case"cheese":e=Object(n.jsx)("div",{className:L.a.Cheese});break;case"bacon":e=Object(n.jsx)("div",{className:L.a.Bacon});break;case"salad":e=Object(n.jsx)("div",{className:L.a.Salad});break;default:e=null}return e}}]),r}(a.Component),W=r(54),z=r.n(W),G=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(A.a)(Array(e.ingredients[t].amount)).map((function(e,r){return Object(n.jsx)(V,{type:t},t+r)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(n.jsx)("div",{children:"Add some gredient!"})),Object(n.jsxs)("div",{className:z.a.Burger,children:[Object(n.jsx)(V,{type:"bread-top"}),t,Object(n.jsx)(V,{type:"bread-bottom"})]})},q=r(17),X=r.n(q),Y=function(e){return Object(n.jsxs)("div",{className:X.a.ControlItem,children:[Object(n.jsxs)("div",{className:X.a.ControlLabel,children:[e.label,Object(n.jsxs)("div",{className:X.a.UnitPrice,children:["($",e.ingsPrice,")"]})]}),Object(n.jsxs)("div",{className:X.a.ControlButtons,children:[Object(n.jsx)("button",{className:"".concat(X.a.ControlButton," ").concat(X.a.ControlButtonLess),onClick:e.less,disabled:e.disabledInfo,children:"Less"}),Object(n.jsx)("span",{className:X.a.Ing_Value,children:e.ingsAmount}),Object(n.jsx)("button",{className:"".concat(X.a.ControlButton," ").concat(X.a.ControlButtonAdd),onClick:e.add,children:"More"})]})]})},Z=r(30),Q=r.n(Z),J=[{label:"Meat",type:"meat"},{label:"Bacon",type:"bacon"},{label:"Salad",type:"salad"},{label:"Cheese",type:"cheese"}],K=function(e){return Object(n.jsxs)("div",{className:Q.a.BuildControl,children:[Object(n.jsx)("p",{className:Q.a.TotalPrice,children:parseFloat(e.price).toFixed(2)}),J.map((function(t){return Object(n.jsx)(Y,{label:t.label,add:function(){return e.add(t.type)},less:function(){return e.less(t.type)},disabledInfo:e.disabledInfo[t.type],purchasable:e.purchasable,ingsAmount:e.ingredients[t.type].amount,ingsTotalPrice:e.ingredients[t.type].price,ingsPrice:e.ingredients[t.type].priceUnit,price:e.price},t.label)})),Object(n.jsx)("button",{onClick:e.showModal,className:Q.a.OrderButton,disabled:!e.purchasable,children:"Purchase"})]})},$=r(31),ee=r.n($),te=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show}},{key:"render",value:function(){return Object(n.jsxs)(j,{children:[Object(n.jsx)(H,{show:this.props.show,clicked:this.props.clicked}),Object(n.jsx)("div",{className:"".concat(ee.a.Modal," ").concat(this.props.show?ee.a.active:ee.a.hide),children:this.props.children})]})}}]),r}(a.Component),re=r(18),ne=r.n(re),ae=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(n.jsxs)("li",{className:ne.a.SummaryItem,children:[Object(n.jsxs)("span",{className:ne.a.Summary_SubItem,children:[t,": "]})," ",Object(n.jsx)("span",{children:e.props.ingredients[t].amount})]},t)}));return Object(n.jsxs)(j,{children:[Object(n.jsx)("h3",{className:ne.a.Header,children:"Order Summary"}),Object(n.jsx)("ul",{children:t}),Object(n.jsxs)("p",{className:ne.a.TotalPrice,children:["Total Price: ",Object(n.jsxs)("span",{children:["$",parseFloat(this.props.totalPrice).toFixed(2)]})]}),Object(n.jsxs)("div",{className:ne.a.ButtonSection,children:[Object(n.jsx)("button",{className:"".concat(ne.a.Button," ").concat(ne.a.ButtonSucces),onClick:this.props.orderConfirmed,children:"Order"}),Object(n.jsx)("button",{className:"".concat(ne.a.Button," ").concat(ne.a.ButtonCancel),onClick:this.props.orderCancelled,children:"Cancel"})]})]})}}]),r}(a.Component),oe="ADD_INGREDIENT",ce="REMOVE_INGREDIENT",ie="CLEAR_BURGER_BUILDER_STATE",se="PURCHASE_BURGER_START",le="PURCHASE_BURGER_SUCCESS",de="PURCHASE_BURGER_FAIL",ue=r(37),pe=r.n(ue),me=function(e,t){return{type:le,order:e}},he=function(e){return function(t){pe.a.post("/api/order",e).then((function(e){t(me(e.data))})).catch((function(e){t(function(e){return{type:de,error:e}}(e))}))}},je=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1},e.showModalHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.orderConfirmHandler=function(){e.props.clearState(),e.props.history.push("/checkout")},e}return Object(p.a)(r,[{key:"purchasable",value:function(e){return Object.keys(e).map((function(t){return e[t].amount})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(E.a)({},this.props.ings);for(var t in e)e[t]=parseFloat(e[t].price)<=0;return Object(n.jsxs)(j,{children:[Object(n.jsx)(te,{show:this.state.purchasing,clicked:this.purchaseCancelHandler,children:Object(n.jsx)(ae,{ingredients:this.props.ings,orderCancelled:this.purchaseCancelHandler,orderConfirmed:this.orderConfirmHandler,totalPrice:this.props.price})}),Object(n.jsx)(G,{ingredients:this.props.ings}),Object(n.jsx)(K,{add:this.props.onIngredientAdded,less:this.props.onIngredientRemoved,disabledInfo:e,amount:this.props.amount,ingredients:this.props.ings,price:this.props.price,purchasable:this.purchasable(this.props.ings),showModal:this.showModalHandler})]})}}]),r}(a.Component),be=Object(s.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,amount:e.burgerBuilder.amount}}),(function(e){return{onIngredientAdded:function(t){return e({type:oe,ingredientName:t})},onIngredientRemoved:function(t){return e({type:ce,ingredientName:t})},clearState:function(){return e({type:se})}}}))(je),_e=r(55),Oe=r.n(_e),ge=r(19),fe=r.n(ge),ve=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var e=[];for(var t in this.props.ingredients)e.push({name:t,amount:this.props.ingredients[t].amount});var r=e.map((function(e){return Object(n.jsxs)("li",{className:fe.a.SummaryItem,children:[Object(n.jsxs)("span",{className:fe.a.Summary_SubItem,children:[e.name," :"]})," ",Object(n.jsx)("span",{children:e.amount})]},e.name)}));return Object(n.jsxs)(j,{children:[Object(n.jsx)("h3",{className:fe.a.Header,children:"Checkout Summary"}),Object(n.jsx)("ul",{children:r}),Object(n.jsxs)("p",{className:fe.a.TotalPrice,children:["Total Price: ",Object(n.jsxs)("span",{children:["$",parseFloat(this.props.totalPrice).toFixed(2)]})]}),Object(n.jsxs)("div",{className:fe.a.ButtonSection,children:[Object(n.jsx)("button",{className:"".concat(fe.a.Button," ").concat(fe.a.ButtonSucces),onClick:this.props.checkoutContinued,children:"Continue"}),Object(n.jsx)("button",{className:"".concat(fe.a.Button," ").concat(fe.a.ButtonCancel),onClick:this.props.checkoutCancelled,children:"Cancel"})]})]})}}]),r}(a.Component),xe=r(9),Ce=r.n(xe),ye=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{require:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{require:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:"",validation:{require:!0,minLength:1,maxLength:10},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{require:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{require:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"express",displayValue:"Express(Fastest)"},{value:"normal",displayValue:"Normal"}],placeholder:"Delivery Method"},value:"express",validation:{},valid:!0,touched:!1}},loading:!1},e.orderHandler=function(t){t.preventDefault();var r={};for(var n in e.state.orderForm)r[n]=e.state.orderForm[n].value;var a=Object.keys(e.props.ings).map((function(t){return{item:{ingredient:t,amount:e.props.ings[t].amount,priceUnit:e.props.ings[t].priceUnit},price:parseFloat(e.props.ings[t].price).toFixed(2)}})),o={fullname:r.name,street:r.street,zipcode:r.zipCode,country:r.country,email:r.email,orderItems:a,totalPrice:parseFloat(e.props.price).toFixed(2),success:!0,deliveryMethod:r.deliveryMethod};e.props.onOrderBurger(o)},e.checkValidaty=function(e,t){var r=!0;return t.require&&(r=""!==e.trim()&&r),t.minLength&&(r=e.length>=t.minLength&&r),t.maxLength&&(r=e.length<=t.maxLength&&r),r},e.inputChangeHandler=function(t,r){var n=Object(E.a)({},e.state.orderForm),a=Object(E.a)({},n[r]);a.value=t.target.value,a.valid=e.checkValidaty(a.value,a.validation),a.touched=!0,n[r]=a,e.setState({orderForm:n})},e.redirect=function(){setTimeout((function(){e.props.history.push("/order/".concat(e.props.orderResult.order._id))}),2e3)},e}return Object(p.a)(r,[{key:"render",value:function(){var e=this,t=[];for(var r in this.state.orderForm)t.push({id:r,config:this.state.orderForm[r]});var a=null;return this.props.orderResult&&(a=this.props.orderResult.success?Object(n.jsxs)("div",{className:"".concat(Ce.a.MessageBox," ").concat(Ce.a.Green),children:[this.props.orderResult.message,this.redirect()]}):Object(n.jsx)("div",{className:"".concat(Ce.a.MessageBox," ").concat(Ce.a.Red),children:this.props.orderResult.messages.map((function(e,t){return Object(n.jsxs)("div",{className:Ce.a.ErrorItem,children:[Object(n.jsxs)("span",{className:Ce.a.ErrorParam,children:[e.param,": "]}),Object(n.jsx)("span",{className:Ce.a.MessageText,children:e.msg})]},t)}))})),Object(n.jsxs)("div",{className:Ce.a.ContactForm,children:[Object(n.jsx)("h4",{className:Ce.a.HeaderForm,children:"Contact Form"}),a,Object(n.jsxs)("form",{children:[t.map((function(t){var r=null,a=[Ce.a.InputElement];switch(!t.valid&&t.touched&&a.push(Ce.a.Invalid),t.config.elementType){case"input":r=Object(n.jsx)("input",{className:"".concat(Ce.a.InputElement," ").concat(!e.state.orderForm[t.id].valid&&e.state.orderForm[t.id].validation&&e.state.orderForm[t.id].touched?Ce.a.Invalid:""),value:t.config.value,placeholder:t.config.elementConfig.placeholder,touched:t.touched,type:t.config.elementConfig.type,onChange:function(r){return e.inputChangeHandler(r,t.id)}},t.id);break;case"select":r=Object(n.jsx)("select",{className:"".concat(Ce.a.InputElement," ").concat(!e.state.orderForm[t.id].valid&&e.state.orderForm[t.id].validation&&e.state.orderForm[t.id].touched?Ce.a.Invalid:""),onChange:function(r){return e.inputChangeHandler(r,t.id)},value:t.config.value,children:t.config.elementConfig.options.map((function(e,t){return Object(n.jsx)("option",{value:e.value,children:e.displayValue},t)}))},t.id)}return r})),Object(n.jsx)("div",{className:Ce.a.ButtonSection,children:Object(n.jsx)("button",{onClick:this.orderHandler,className:"".concat(Ce.a.Button," ").concat(Ce.a.ButtonSucces),children:"Order"})})]})]})}}]),r}(a.Component),Be=Object(s.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,orderResult:e.order.order}}),(function(e){return{onOrderBurger:function(t){return e(he(t))}}}))(ye),Se=r(8),Ne=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(p.a)(r,[{key:"render",value:function(){return Object(n.jsxs)(j,{children:[Object(n.jsx)(G,{ingredients:this.props.ings}),Object(n.jsxs)("div",{className:Oe.a.Checkout,children:[Object(n.jsx)(ve,{ingredients:this.props.ings,totalPrice:this.props.price,checkoutContinued:this.checkoutContinuedHandler,checkoutCancelled:this.checkoutCancelledHandler}),Object(n.jsx)(Se.a,{path:this.props.match.path+"/contact-data",component:Be})]})]})}}]),r}(a.Component),Ie=Object(s.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice}}))(Ne),ke=r(10),we=r.n(ke),De=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){this.props.onStartInitialize(this.props.match.params.id),this.props.onClearBurgerBuilderState()}},{key:"render",value:function(){var e=null;return this.props.orderResult&&this.props.orderResult.order&&(e=this.props.orderResult.order.orderItems.map((function(e){return Object(n.jsxs)("li",{className:we.a.SummaryItem,children:[Object(n.jsxs)("div",{className:we.a.SummarySubItem,children:[Object(n.jsx)("span",{className:we.a.Summary_SubItem,children:e.item.ingredient}),Object(n.jsxs)("span",{children:["(",e.item.priceUnit,"):"]})]}),Object(n.jsx)("span",{className:we.a.Amount,children:e.item.amount}),Object(n.jsx)("span",{className:we.a.Price,children:e.price})]},e.item.ingredient)}))),this.props.orderResult&&this.props.orderResult.order?Object(n.jsxs)("div",{className:we.a.OrderBox,children:[Object(n.jsx)("h3",{className:we.a.Header,children:"Your Order"}),Object(n.jsxs)("div",{className:we.a.Order_Info,children:[Object(n.jsxs)("div",{className:"".concat(we.a.Order_Info_Item),children:["Country: ",this.props.orderResult.order.country]}),Object(n.jsxs)("div",{className:we.a.Order_Info_Item,children:["delivery Method: ",this.props.orderResult.order.deliveryMethod]}),Object(n.jsxs)("div",{className:we.a.Order_Info_Item,children:["email: ",this.props.orderResult.order.email]}),Object(n.jsxs)("div",{className:we.a.Order_Info_Item,children:["fullname: ",this.props.orderResult.order.fullname]}),Object(n.jsxs)("div",{className:we.a.Order_Info_Item,children:["zipcode: ",this.props.orderResult.order.zipcode]}),Object(n.jsxs)("div",{className:"".concat(we.a.Order_Info_Item," ").concat(we.a.FullWidth),children:["street: ",this.props.orderResult.order.street]})]}),Object(n.jsx)("ul",{children:e}),Object(n.jsxs)("p",{className:we.a.TotalPrice,children:["Total Price: ",Object(n.jsxs)("span",{children:["$",parseFloat(this.props.orderResult.order.totalPrice).toFixed(2)]})]})]}):null}}]),r}(a.Component),Te=Object(s.b)((function(e){return{orderResult:e.order.order,burgerbuilder:e.burgerBuilder}}),(function(e){return{onStartInitialize:function(t){return e(function(e){return function(t){pe.a.get("/api/getorder/?orderId=".concat(e)).then((function(e){t(me(e.data))}))}}(t))},onClearBurgerBuilderState:function(){return e({type:ie})}}}))(De),Pe=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Orders..."}),Object(n.jsx)(Te,{}),Object(n.jsx)(Te,{})]})}}]),r}(a.Component),Fe=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(M,{children:Object(n.jsxs)(Se.c,{children:[Object(n.jsx)(Se.a,{path:"/checkout",component:Ie}),Object(n.jsx)(Se.a,{path:"/orders",exact:!0,component:Pe}),Object(n.jsx)(Se.a,{path:"/order/:id",exact:!0,component:Te}),Object(n.jsx)(Se.a,{path:"/",exact:!0,component:be})]})})})}}]),r}(a.Component),He=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Re(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Me=r(27),Ee={ingredients:{salad:{price:0,amount:0,priceUnit:.47},bacon:{price:0,amount:0,priceUnit:.87},cheese:{price:0,amount:0,priceUnit:.34},meat:{price:0,amount:0,priceUnit:1.12}},totalPrice:4},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(E.a)(Object(E.a)({},e),{},{ingredients:Object(E.a)(Object(E.a)({},e.ingredients),{},Object(Me.a)({},t.ingredientName,{amount:e.ingredients[t.ingredientName].amount+1,price:parseFloat(e.ingredients[t.ingredientName].price)+e.ingredients[t.ingredientName].priceUnit,priceUnit:e.ingredients[t.ingredientName].priceUnit})),totalPrice:parseFloat(e.totalPrice)+e.ingredients[t.ingredientName].priceUnit});case ce:return Object(E.a)(Object(E.a)({},e),{},{ingredients:Object(E.a)(Object(E.a)({},e.ingredients),{},Object(Me.a)({},t.ingredientName,{amount:e.ingredients[t.ingredientName].amount-1,price:parseFloat(e.ingredients[t.ingredientName].price)>0?parseFloat(e.ingredients[t.ingredientName].price).toFixed(2)-e.ingredients[t.ingredientName].priceUnit:0,priceUnit:e.ingredients[t.ingredientName].priceUnit})),totalPrice:parseFloat(e.totalPrice)-e.ingredients[t.ingredientName].priceUnit});case ie:return Object(E.a)(Object(E.a)({},e),Ee);default:return e}},Ue={loading:!1},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(E.a)(Object(E.a)({},e),{},{order:null});case le:return Object(E.a)(Object(E.a)({},e),{},{order:t.order});case de:return Object(E.a)(Object(E.a)({},e),{},{loading:!1});default:return e}},Ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,We=Object(l.c)({burgerBuilder:Ae,order:Le}),ze=Object(l.e)(We,Ve(Object(l.a)(d.a))),Ge=Object(n.jsx)(s.a,{store:ze,children:Object(n.jsx)(i.a,{children:Object(n.jsx)(Fe,{})})});c.a.render(Ge,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");He?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Re(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Re(e)}))}}()},9:function(e,t,r){e.exports={InputElement:"ContactData_InputElement__2wrFb",Invalid:"ContactData_Invalid__aEbV4",ContactForm:"ContactData_ContactForm__2pVy7",HeaderForm:"ContactData_HeaderForm__1HkmI",Button:"ContactData_Button__113LT",ButtonSucces:"ContactData_ButtonSucces__1UUEb",ButtonCancel:"ContactData_ButtonCancel__2I2PB",ButtonSection:"ContactData_ButtonSection__2gPGf",MessageBox:"ContactData_MessageBox__3ibSa",Red:"ContactData_Red__3uHHz",Green:"ContactData_Green__1PiPq",ErrorParam:"ContactData_ErrorParam__2Oz6a",ErrorItem:"ContactData_ErrorItem__5Zj-X",MessageText:"ContactData_MessageText__3l1ct"}}},[[89,1,2]]]);
//# sourceMappingURL=main.463c5887.chunk.js.map