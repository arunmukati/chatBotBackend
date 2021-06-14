(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\F\Major Project\major project final frontend\Chatbot-Frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "20cF":
/*!*****************************************************!*\
  !*** ./src/app/includes/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3tD2":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_chat_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chat-service.service */ "MmIP");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-service.service */ "ul72");
/* harmony import */ var src_app_services_loaderService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loaderService */ "eC7f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ChatComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Chats Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatComponent_div_5_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.newMsg);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function ChatComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.setUserActive(item_r3, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_div_5_span_5_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r1.userIndex == i_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("leftBrdr bg-", i_r4 % 5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("name-div bg-", i_r4 % 5, " bx-shadow-", i_r4 % 5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getFirstCharOfName(item_r3.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.newMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.name ? item_r3.name : "New User", " ");
} }
function ChatComponent_div_6_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, item_r10.timestamp, "shortTime"), " ");
} }
function ChatComponent_div_6_ng_container_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, item_r10.timestamp, "shortTime"), " ");
} }
function ChatComponent_div_6_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_6_ng_container_11_div_1_Template, 5, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_6_ng_container_11_div_2_Template, 6, 5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.fromUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r10.fromUser);
} }
const _c1 = function (a0) { return { "inputDisable": a0 }; };
function ChatComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Agent TakeOver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_div_6_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.users[ctx_r16.userIndex].agentTakeover = $event; })("change", function ChatComponent_div_6_Template_input_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.agentTakeOver(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ChatComponent_div_6_ng_container_11_Template, 3, 2, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_div_6_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.users[ctx_r19.userIndex].input = $event; })("keyup.enter", function ChatComponent_div_6_Template_input_keyup_enter_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_6_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.users[ctx_r2.userIndex].name ? ctx_r2.getFirstCharOfName(ctx_r2.users[ctx_r2.userIndex].name) : "0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.users[ctx_r2.userIndex].name ? ctx_r2.users[ctx_r2.userIndex].name : "New User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.users[ctx_r2.userIndex].agentTakeover);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r2.users[ctx_r2.userIndex].agentTakeover == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.users[ctx_r2.userIndex].input);
} }
class ChatComponent {
    constructor(chatService, apiService, loaderService) {
        this.chatService = chatService;
        this.apiService = apiService;
        this.loaderService = loaderService;
        this.messages = [];
        this.users = [];
        this.userIndex = null;
        this.previousDate = undefined;
        this.activeUserChatId = undefined;
    }
    sendMessage() {
        let msg = {
            timestamp: new Date().getTime(),
            userChatId: this.activeUserChatId,
            text: this.users[this.userIndex].input
        };
        this.messages.push(msg);
        this.chatService.sendMessage(msg);
        this.users[this.userIndex].input = '';
        // this.message = '';
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.getAllUsers();
        this.chatService
            .getMessages()
            .subscribe((message) => {
            if (message.name) {
                this.addNewUser(Object.assign(Object.assign({}, message.data), { name: message.name }));
                return;
            }
            let index = this.users.findIndex(el => el._id == message.userChatId);
            this.users[index].chats.push(message);
            if (index == this.userIndex) {
                // alert();
                this.setChatBodyAtBottom();
            }
            else {
                if (message.agentTakeover && message.fromUser) {
                    if (this.users[index].newMsg) {
                        this.users[index].newMsg += 1;
                    }
                    else {
                        this.users[index].newMsg = 1;
                    }
                }
            }
            console.clear();
            if (index != 0) {
                this.shiftUserToTop(index);
            }
        });
    }
    addNewUser(data) {
        data.newMsg = 1;
        this.users.unshift(data);
        if (this.userIndex != undefined) {
            ++this.userIndex;
        }
        else {
            if (this.users.length == 1) {
                this.users[0].agentTakeover = false;
            }
            this.setUserActive(data, 0);
        }
    }
    shiftUserToTop(index) {
        let user = this.users.splice(index, 1);
        this.users.unshift(user[0]);
        ++this.userIndex;
    }
    getAllUsers() {
        console.clear();
        this.loaderService.setLoaderValue(true);
        this.apiService.getAllUsers().subscribe(data => {
            // console.log(data)
            this.users = data['data'];
            if (this.users.length) {
                this.setUserActive(this.users[0], 0);
            }
            ;
            this.loaderService.setLoaderValue(false);
        });
    }
    getFirstCharOfName(fullName) {
        if (!fullName)
            return 0;
        return fullName.split(' ').map(n => n[0]).join('');
    }
    setUserActive(item, i) {
        this.messages = item.chats;
        this.userIndex = i;
        this.setChatBodyAtBottom();
        this.activeUserChatId = item._id;
        this.users[i].newMsg = 0;
    }
    setChatBodyAtBottom() {
        setTimeout(() => {
            let chatBody = document.getElementById('chats');
            chatBody.scrollTop = chatBody.clientHeight + chatBody.scrollHeight;
        }, 1);
    }
    agentTakeOver() {
        let data = this.users[this.userIndex];
        this.chatService.sendAgentTakeOver({ agentTakeover: data.agentTakeover, id: data._id, userId: data.userId });
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loaderService__WEBPACK_IMPORTED_MODULE_3__["loaderService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 7, vars: 3, consts: [[1, "chat-component"], [1, "user-div"], [1, "search-wrapper"], [1, "user-wrapper"], ["class", "no-avl", 4, "ngIf"], ["class", "user", "key", "{i}", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "chat-area", 4, "ngIf"], [1, "no-avl"], ["key", "{i}", 1, "user", 3, "ngClass", "click"], [1, "name-display-div"], [4, "ngIf"], [1, "user-chat-div"], [1, "chat-area"], [1, "user-detail"], [1, "name-div", "bg-0", "bx-shadow-0"], [1, "agentTakeover"], ["type", "checkbox", "id", "users[userIndex]._id", 3, "ngModel", "ngModelChange", "change"], ["id", "chats", 1, "chats"], [1, "chat-filler"], ["key", "{i}", 4, "ngFor", "ngForOf"], [1, "input-area", 3, "ngClass"], ["type", "text", "placeholder", "Type Message Here...", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "sendBtn", 3, "click"], ["src", "../../../assets/icons/send.png", "alt", "", "srcset", ""], ["key", "{i}"], ["class", "incomingMsg", 4, "ngIf"], ["class", "outgoingMsg", 4, "ngIf"], [1, "incomingMsg"], [1, "seen-info"], [1, "outgoingMsg"], [1, "ri-check-double-fill", "seen"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatComponent_p_4_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_div_5_Template, 9, 13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_div_6_Template, 16, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users && !ctx.users.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users[ctx.userIndex]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".chat-component[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n.chat-component[_ngcontent-%COMP%]   .user-div[_ngcontent-%COMP%] {\n  width: 28%;\n  height: 100%;\n}\n.chat-component[_ngcontent-%COMP%]   .user-div[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px 30px 10px 0;\n  box-shadow: 0 0px 20px #F5F5F5;\n  background-color: #F5F5F5;\n}\n.chat-component[_ngcontent-%COMP%]   .user-div[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n  padding-top: 25px;\n  padding-right: 4px;\n  height: calc(100% - 64px);\n}\n.chat-component[_ngcontent-%COMP%]   .user-div[_ngcontent-%COMP%]   .search-user[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 6px;\n  padding: 5px 15px;\n  background-color: #E4E4E4;\n}\n.chat-component[_ngcontent-%COMP%]   .user-div[_ngcontent-%COMP%]   .search-user[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 13px;\n  color: black;\n  background-color: transparent;\n  outline: none;\n  border: none;\n}\n.chat-component[_ngcontent-%COMP%]   .user-div[_ngcontent-%COMP%]   .leftBrdr[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 22px;\n}\n.chat-component[_ngcontent-%COMP%]   .user-div[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  padding: 12.5px 0;\n  display: flex;\n  margin-bottom: 15px;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 6px;\n}\n.chat-component[_ngcontent-%COMP%]   .user-div[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name-display-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.chat-component[_ngcontent-%COMP%]   .user-div[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-chat-div[_ngcontent-%COMP%] {\n  width: calc(100% - 55px);\n  padding-right: 15px;\n}\n.chat-component[_ngcontent-%COMP%]   .user-div[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-chat-div[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: black;\n  margin-bottom: 0px;\n  font-weight: 500;\n}\n.chat-component[_ngcontent-%COMP%]   .user-div[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-chat-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #595959;\n  margin-bottom: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chat-component[_ngcontent-%COMP%]   .user-div[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]:hover, .chat-component[_ngcontent-%COMP%]   .user-div[_ngcontent-%COMP%]   .user.active[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 8px -6px #6C7075;\n  transform: translateY(-5px);\n  transition: all 0.25s;\n}\n.chat-component[_ngcontent-%COMP%]   .name-div[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 10px;\n  position: relative;\n}\n.chat-component[_ngcontent-%COMP%]   .name-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #EC6060;\n  color: white;\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  right: -5px;\n  top: -5px;\n  border-radius: 50%;\n  font-size: 10px;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%] {\n  width: 72%;\n  height: 100%;\n  padding-top: 20px;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-bottom: 13px;\n  border-bottom: 1.7px solid #E2E2E2;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: black;\n  margin-bottom: 0px;\n  font-weight: 500;\n  margin-right: 20px;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin: 0px 10px 0px 0px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .agentTakeover[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 12px 16px;\n  height: 30px;\n  font-size: 14px;\n  font-weight: 500;\n  align-self: center;\n  display: flex;\n  align-items: center;\n  color: #0050B3;\n  background-color: white;\n  border-radius: 10px;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .agentTakeover[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-left: 10px;\n  cursor: pointer;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: auto;\n  overflow-y: scroll;\n  padding-right: 5px;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%]   .chat-filler[_ngcontent-%COMP%] {\n  min-height: 2px;\n  margin-top: auto;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%]   .date-show[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n  position: sticky;\n  top: 0;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%]   .date-show[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #827E7E;\n  font-weight: 500;\n  background-color: #EEEEEE;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 8px 20px;\n  min-width: 140px;\n  border-radius: 20px;\n  text-align: center;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%]   .incomingMsg[_ngcontent-%COMP%] {\n  max-width: 60%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 12px 12px 6px 12px;\n  background-color: #E5E5E5;\n  font-size: 13px;\n  border-radius: 0 10px 10px 10px;\n  margin: 10px 0;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%]   .outgoingMsg[_ngcontent-%COMP%] {\n  max-width: 60%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 12px 12px 6px 12px;\n  background-color: #A1CBFF;\n  font-size: 13px;\n  border-radius: 10px 0px 10px 10px;\n  margin: 10px 0;\n  margin-left: auto;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%]   .seen-info[_ngcontent-%COMP%] {\n  color: #505050;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  align-items: flex-end;\n  font-size: 9px;\n  margin-top: 4px;\n  font-weight: 500;\n  margin-left: auto;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%]   .seen-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1;\n  margin-left: 3px;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%]   .seen-info[_ngcontent-%COMP%]   .seen[_ngcontent-%COMP%] {\n  color: #0050B3;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 0;\n  margin-top: 20px;\n  display: flex;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: calc(100% - 50px);\n  border-radius: 10px 0 0 10px;\n  outline: none;\n  border: none;\n  padding: 10px 20px;\n  font-size: 13px;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .sendBtn[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 100%;\n  max-height: 50px;\n  border-radius: 0 10px 10px 0;\n  background-color: #0050B3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.chat-component[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .sendBtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40%;\n}\n.bx-shadow-0[_ngcontent-%COMP%] {\n  box-shadow: 0 0 5px #CD6CA0;\n}\n.bg-0[_ngcontent-%COMP%] {\n  background-color: #CD6CA0;\n}\n.bx-shadow-1[_ngcontent-%COMP%] {\n  box-shadow: 0 0 5px #608AE0;\n}\n.bg-1[_ngcontent-%COMP%] {\n  background-color: #608AE0;\n}\n.bx-shadow-2[_ngcontent-%COMP%] {\n  box-shadow: 0 0 5px #65C3B3;\n}\n.bg-2[_ngcontent-%COMP%] {\n  background-color: #65C3B3;\n}\n.bx-shadow-3[_ngcontent-%COMP%] {\n  box-shadow: 0 0 5px #6CCD73;\n}\n.bg-3[_ngcontent-%COMP%] {\n  background-color: #6CCD73;\n}\n.bx-shadow-4[_ngcontent-%COMP%] {\n  box-shadow: 0 0 5px #CB8831;\n}\n.bg-4[_ngcontent-%COMP%] {\n  background-color: #CB8831;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  width: 100%;\n  background-color: #E4E4E4;\n  border-radius: 4px;\n}\n.isSticky[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background-color: red;\n}\n.inputDisable[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7QUFBSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBRVI7QUFBUTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFFWjtBQUFRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRVo7QUFDUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EseUJBQUE7QUFEWjtBQUVZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUFoQjtBQUtZO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFIaEI7QUFLWTtFQUNJLFdBQUE7RUFDSixhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUhaO0FBS2dCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFIcEI7QUFLZ0I7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0FBSHBCO0FBSW9CO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRnhCO0FBSW9CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUZ4QjtBQU1ZO0VBR0ksbUNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBSmhCO0FBU0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUFI7QUFRUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU5aO0FBU0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFQUjtBQVFRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQU5aO0FBT1k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUxoQjtBQU9ZO0VBRUksd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQU5oQjtBQVFZO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTmhCO0FBT2dCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFMcEI7QUFTUTtFQUNJLFdBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFSWjtBQVNZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBUGhCO0FBU1k7RUFDSSxjQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtBQVRoQjtBQVVnQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUnBCO0FBV1k7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUFUaEI7QUFXWTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBVGhCO0FBV1k7RUFDRyxjQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBVGY7QUFVZTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFSaEI7QUFVZTtFQUNDLGNBQUE7QUFSaEI7QUFZUTtFQUNJLFdBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBWFo7QUFZWTtFQUNJLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVZoQjtBQVlZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFWaEI7QUFXZ0I7RUFDSSxXQUFBO0FBVHBCO0FBaUJBO0VBQ0ksMkJBQUE7QUFkSjtBQWdCQTtFQUNJLHlCQUFBO0FBYko7QUFlQTtFQUNJLDJCQUFBO0FBWko7QUFjQTtFQUNJLHlCQUFBO0FBWEo7QUFhQTtFQUNJLDJCQUFBO0FBVko7QUFZQTtFQUNJLHlCQUFBO0FBVEo7QUFXQTtFQUNJLDJCQUFBO0FBUko7QUFVQTtFQUNJLHlCQUFBO0FBUEo7QUFTQTtFQUNJLDJCQUFBO0FBTko7QUFRQTtFQUNJLHlCQUFBO0FBTEo7QUFPQTtFQUNJLFVBQUE7QUFKSjtBQU1BO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUhKO0FBS0E7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUFGSiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtY29tcG9uZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLnVzZXItZGl2e1xyXG4gICAgICAgIHdpZHRoOiAyOCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDBweCAwcHggMjBweCAwO1xyXG4gICAgICAgIC5zZWFyY2gtd3JhcHBlcntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzBweCAxMHB4IDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMHB4IDIwcHggI0Y1RjVGNTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVzZXItd3JhcHBlcntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6ICAyNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoLXVzZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNEU0O1xyXG4gICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAubGVmdEJyZHJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2Vye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEyLjVweCAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmFtZS1kaXNwbGF5LWRpdntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudXNlci1jaGF0LWRpdntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyOmhvdmVyLC51c2VyLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDhweCAtNnB4ICM2QzcwNzU7XHJcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA4cHggLTZweCAjNkM3MDc1O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDhweCAtNnB4ICM2QzcwNzU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICBcclxuICAgIH1cclxuICAgIC5uYW1lLWRpdntcclxuICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOjAgMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDNjA2MDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGF0LWFyZWF7XHJcbiAgICAgICAgd2lkdGg6IDcyJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAudXNlci1kZXRhaWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxLjdweCBzb2xpZCAjRTJFMkUyO1xyXG4gICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmljb25zPml7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWdlbnRUYWtlb3ZlcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDUwQjM7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGF0c3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogY2FsYygxMDAlIC0gNDVweCk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAuY2hhdC1maWxsZXJ7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kYXRlLXNob3d7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MjdFN0U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbmNvbWluZ01zZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxMnB4IDZweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3V0Z29pbmdNc2d7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTJweCA2cHggMTJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBMUNCRkY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWVuLWluZm97XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiAjNTA1MDUwO1xyXG4gICAgICAgICAgICAgICB3aWR0aDpmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuc2VlbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA1MEIzO1xyXG4gICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dC1hcmVhe1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlbmRCdG57XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTBCMztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYngtc2hhZG93LTB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNDRDZDQTA7XHJcbn1cclxuLmJnLTB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0Q2Q0EwO1xyXG59XHJcbi5ieC1zaGFkb3ctMXtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzYwOEFFMDtcclxufVxyXG4uYmctMXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDhBRTA7XHJcbn1cclxuLmJ4LXNoYWRvdy0ye1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjNjVDM0IzO1xyXG59XHJcbi5iZy0ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY1QzNCMztcclxufVxyXG4uYngtc2hhZG93LTN7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICM2Q0NENzM7XHJcbn1cclxuLmJnLTN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkNDRDczO1xyXG59XHJcbi5ieC1zaGFkb3ctNHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI0NCODgzMTtcclxufVxyXG4uYmctNHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQjg4MzE7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgIHdpZHRoOiA2cHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTRFNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmlzU3RpY2t5e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG4uaW5wdXREaXNhYmxle1xyXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.scss']
            }]
    }], function () { return [{ type: src_app_services_chat_service_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }, { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: src_app_services_loaderService__WEBPACK_IMPORTED_MODULE_3__["loaderService"] }]; }, null); })();


/***/ }),

/***/ "5Phi":
/*!***********************************************************************!*\
  !*** ./src/app/components/intent-example/intent-example.component.ts ***!
  \***********************************************************************/
/*! exports provided: IntentExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntentExampleComponent", function() { return IntentExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class IntentExampleComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            // this.name = params['name'];
        });
    }
}
IntentExampleComponent.ɵfac = function IntentExampleComponent_Factory(t) { return new (t || IntentExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
IntentExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntentExampleComponent, selectors: [["app-intent-example"]], decls: 2, vars: 0, template: function IntentExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "intent-example works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlbnQtZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntentExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intent-example',
                templateUrl: './intent-example.component.html',
                styleUrls: ['./intent-example.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "6g8o":
/*!************************************!*\
  !*** ./src/app/authguard.guard.ts ***!
  \************************************/
/*! exports provided: AuthguardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function() { return AuthguardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api-service.service */ "ul72");




class AuthguardGuard {
    constructor(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    canActivate(route, state) {
        let apiKey = localStorage.getItem('apiKey');
        if (apiKey) {
            this.apiService.api = apiKey;
            return true;
        }
        this.router.navigateByUrl('/login');
    }
}
AuthguardGuard.ɵfac = function AuthguardGuard_Factory(t) { return new (t || AuthguardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
AuthguardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthguardGuard, factory: AuthguardGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthguardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "KxqT":
/*!*********************************************************!*\
  !*** ./src/app/components/setting/setting.component.ts ***!
  \*********************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api-service.service */ "ul72");
/* harmony import */ var src_app_services_loaderService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loaderService */ "eC7f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SettingComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copied!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SettingComponent {
    constructor(apiService, loaderService) {
        this.apiService = apiService;
        this.loaderService = loaderService;
        this.copied = false;
        this.baseUrl = apiService.url;
    }
    ngOnInit() {
        this.loaderService.setLoaderValue(true);
        this.apiService.getProfile().subscribe(data => {
            this.userId = data['userId'];
            // document.getElementById('h') = "hello"
            this.loaderService.setLoaderValue(false);
        });
    }
    copyScript() {
        this.copied = true;
        let scriptCode = document.getElementById('scriptCode').innerText;
        navigator.clipboard.writeText(scriptCode);
        setTimeout(() => {
            this.copied = false;
        }, 2000);
    }
    ngOnDestroy() {
        this.userId = '';
    }
}
SettingComponent.ɵfac = function SettingComponent_Factory(t) { return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loaderService__WEBPACK_IMPORTED_MODULE_2__["loaderService"])); };
SettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingComponent, selectors: [["app-setting"]], decls: 13, vars: 3, consts: [[2, "padding-top", "20px", "width", "100%"], [1, "setting"], [1, "script"], [3, "click"], [4, "ngIf"], ["id", "scriptCode"]], template: function SettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "To start using the Web chat, add the installation code o you website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add this code to bottom of the page, just before the start tag of </body> of your website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_Template_h3_click_7_listener() { return ctx.copyScript(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "copy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SettingComponent_span_9_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.copied);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.3/socket.io.js' id='ioscript'> </script>\n\n<script src=\"", ctx.baseUrl, "/chatBotScript.js\" id=\"bot-script\" botUserId='", ctx.userId, "'> </script>\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".setting[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  padding: 20px;\n  border-radius: 15px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.script[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n\npre[_ngcontent-%COMP%] {\n  font-variant-ligatures: inherit;\n  background: beige;\n  margin-bottom: 0;\n  border-radius: 10px;\n  padding: 10px 15px;\n  display: inline-block;\n}\n\ncode[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: 4px;\n  color: blue;\n  font-weight: 500;\n  float: right;\n  display: block;\n  cursor: pointer;\n  position: relative;\n  margin-right: 10px;\n  margin-left: auto;\n}\n\nh3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -151%;\n  left: 50%;\n  transform: translate(-50%, 0px);\n  color: white;\n  background: black;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBR0o7O0FBREE7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFEQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUtKOztBQWNLO0VBQ0csa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVpSIiwiZmlsZSI6InNldHRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnNjcmlwdHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5wcmV7XHJcbiAgZm9udC12YXJpYW50LWxpZ2F0dXJlczogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kOiBiZWlnZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gXHJcbn1cclxuY29kZXtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAvLyAmOmFmdGVyIHtcclxuICAgIC8vICAgICBjb250ZW50OiAnQ29weSB0byBDbGlwYm9hcmQnO1xyXG4gICAgLy8gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAvLyAgICAgdG9wOiA0MHB4O1xyXG4gICAgLy8gICAgIGxlZnQ6IC0zN3B4O1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMTRweDtcclxuICAgIC8vICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBcclxuICAgIC8vICAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8vICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAvLyAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICAvLyAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNzIpO1xyXG4gICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIC8vICAgfVxyXG4gICAgIHNwYW57XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTE1MSU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDBweCk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-setting',
                templateUrl: './setting.component.html',
                styleUrls: ['./setting.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: src_app_services_loaderService__WEBPACK_IMPORTED_MODULE_2__["loaderService"] }]; }, null); })();


/***/ }),

/***/ "Lquv":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MmIP":
/*!**************************************************!*\
  !*** ./src/app/services/chat-service.service.ts ***!
  \**************************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);




class ChatService {
    constructor() {
        this.url = 'https://chat-bot-backend-arun.herokuapp.com/';
        this.userId = '5ff8392940b8e10cb497f44e';
        this.getMessages = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
                this.socket.on('message', (message) => {
                    console.log("dd", message);
                    observer.next(message);
                });
            });
        };
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])(this.url, { transports: ["websocket"] });
        this.socket.emit('joinchannel', 'agent-' + this.userId);
    }
    sendMessage(message) {
        this.socket.emit('response', Object.assign(Object.assign({}, message), { userId: this.userId }));
    }
    sendAgentTakeOver(data) {
        this.socket.emit('agentTakeover', data);
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NyUc":
/*!*************************************************************!*\
  !*** ./src/app/components/responses/responses.component.ts ***!
  \*************************************************************/
/*! exports provided: ResponsesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsesComponent", function() { return ResponsesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api-service.service */ "ul72");
/* harmony import */ var src_app_services_loaderService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loaderService */ "eC7f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function ResponsesComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResponsesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResponsesComponent_div_10_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const response_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteResponse(response_r2._id, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResponsesComponent_div_10_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const response_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setEditResponseValue(response_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const response_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](response_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](response_r2.text);
} }
class ResponsesComponent {
    constructor(apiService, loaderService) {
        this.apiService = apiService;
        this.loaderService = loaderService;
        this.addResponseValue = {
            name: '',
            text: ''
        };
        this.editResponse = false;
    }
    ngOnInit() {
        this.getResponseList();
    }
    getResponseList() {
        this.loaderService.setLoaderValue(true);
        this.apiService.getResponses().subscribe(data => {
            this.responseList = data['data'];
            this.loaderService.setLoaderValue(false);
        });
    }
    setSelectedIntentId(intentId, index, responseId = false) {
        // this.selectedIntentId = intentId;
        // this.selectedIntentIndex = index;
        // if(responseId){
        //   this.selectedResponseId = responseId;
        // }
    }
    addResponseToIntent() {
        // if(!this.selectedResponseId) return;
        // this.apiService.addResponseToIntent(this.selectedIntentId,this.selectedResponseId).subscribe(data=>{
        //   let res = this.responseList.findIndex(el=> el._id == this.selectedResponseId);
        //   this.intentsList[this.selectedIntentIndex].responseId = [
        //     this.responseList[res]
        //   ]
        //   this.selectedResponseId= null;
        //   document.getElementById('closeAddResponse').click();
        // })
    }
    addResponse() {
        this.apiService.addResponse(this.addResponseValue).subscribe(data => {
            this.responseList.push(data['data']);
            document.getElementById('closeAddResponse').click();
        });
    }
    deleteResponse(responseId, index) {
        this.apiService.deleteResponse(responseId).subscribe(data => {
            this.responseList.splice(index, 1);
        });
    }
    setEditResponseValue(response) {
        this.selectedResponseId = response._id;
        this.editResponse = true;
        this.addResponseValue = {
            name: response.name,
            text: response.text
        };
    }
    editResponseData() {
        this.apiService.updateResponse(Object.assign({ responseId: this.selectedResponseId }, this.addResponseValue)).subscribe(data => {
            let index = this.responseList.findIndex(d => d._id === this.selectedResponseId);
            this.responseList[index].name = this.addResponseValue.name;
            this.responseList[index].text = this.addResponseValue.text;
            this.selectedResponseId = null;
            document.getElementById('closeAddResponse').click();
        });
    }
    deleteIntent(intentId, i) {
        // this.apiService.deleteIntent(intentId).subscribe(data=>{
        //   this.intentsList.splice(i,1);
        // })
    }
    resetEditResponseValue() {
        this.addResponseValue = {
            name: '',
            text: ''
        };
    }
}
ResponsesComponent.ɵfac = function ResponsesComponent_Factory(t) { return new (t || ResponsesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loaderService__WEBPACK_IMPORTED_MODULE_2__["loaderService"])); };
ResponsesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResponsesComponent, selectors: [["app-responses"]], decls: 25, vars: 5, consts: [[1, "intent", "overflow-y"], ["class", "no-avl", 4, "ngIf"], [1, "search"], [1, "srch"], ["data-toggle", "modal", "data-target", "#addResponse", 1, "addbtn", 3, "click"], ["class", "rowIntent", "key", "{i}", 4, "ngFor", "ngForOf"], ["id", "addResponse", "tabindex", "-1", "role", "dialog", "aria-labelledby", "addResponseLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], ["type", "button", "id", "closeAddResponse", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-head"], [1, "modal-main-area"], ["type", "text", "placeholder", "Response Name", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "", "id", "", "placeholder", "Message", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "save-btn", "btn", "btn-primary", 3, "click"], [1, "no-avl"], ["key", "{i}", 1, "rowIntent"], [1, "intentlist"], [1, "lftborder"], [1, "icons"], [1, "ri-delete-bin-4-fill", 3, "click"], ["data-toggle", "modal", "data-target", "#addResponse", 1, "ri-edit-line", 3, "click"], [1, "intentnam"], [1, "intnm"], [1, "intnm", "mt-2"]], template: function ResponsesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResponsesComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Responses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResponsesComponent_Template_div_click_7_listener() { ctx.editResponse = false; return ctx.resetEditResponseValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResponsesComponent_div_10_Template, 17, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResponsesComponent_Template_input_ngModelChange_21_listener($event) { return ctx.addResponseValue.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResponsesComponent_Template_input_ngModelChange_22_listener($event) { return ctx.addResponseValue.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResponsesComponent_Template_button_click_23_listener() { return ctx.editResponse ? ctx.editResponseData() : ctx.addResponse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.responseList && !ctx.responseList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.responseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.editResponse ? "Edit" : "Add", " Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addResponseValue.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addResponseValue.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".intent[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.rowIntent[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  background-color: #F5F5F5;\n  margin-top: 15px;\n}\n\n.intentlist[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border-radius: 10px;\n  background-color: #FFFFFF;\n}\n\n.addResponse[_ngcontent-%COMP%] {\n  width: 48.5%;\n  padding: 8px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.addResponse[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #B6B6B6;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n\n.addResponse[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background-color: #949494;\n  border-radius: 50%;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n}\n\n.intnm[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 20px;\n}\n\n.icons[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.icons[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin: 0px 10px 0px 0px;\n  font-size: 13px;\n  cursor: pointer;\n}\n\n.intentnam[_ngcontent-%COMP%] {\n  \n  \n}\n\n.lftborder[_ngcontent-%COMP%] {\n  float: left;\n  transform: translate(-8px, 25%);\n  left: -8px;\n  \n  \n  width: 3px;\n  height: 25px;\n  background-color: #666666;\n}\n\nsmall[_ngcontent-%COMP%] {\n  color: #B6B6B6;\n  font-weight: 600;\n  display: block;\n}\n\n.intnm[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #3D3D3D;\n  font-size: 0.9rem;\n  width: 99%;\n}\n\n.close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  outline: none;\n}\n\n.modal-head[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n\n.save-btn[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-top: 10px;\n}\n\nng-select[_ngcontent-%COMP%] {\n  border-bottom: 1.2px solid #B6B6B6;\n  outline: none;\n}\n\n.modal-main-area[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.modal-main-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  width: 100%;\n  margin-bottom: 10px;\n  border-bottom: 1.2px solid #B6B6B6;\n}\n\n[_nghost-%COMP%]     .modal-main-area .ng-dropdown-panel {\n  margin-top: 10px;\n  background-color: #f5f5f5;\n  border: 1.2px solid #B6B6B6;\n  border-radius: 4px;\n}\n\n[_nghost-%COMP%]     .modal-main-area .ng-value-container {\n  padding-left: 0;\n}\n\n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  border: none;\n  outline: none;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXNwb25zZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBS0o7O0FBSEE7RUFJSSxZQUFBO0FBR0o7O0FBQUE7RUFFSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFFSSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFFSSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFFQSxnQkFBQTtFQUVBLGNBQUE7QUFGSjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxhQUFBO0FBSEo7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0E7RUFDSSxrQ0FBQTtFQUNBLGFBQUE7QUFBSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFBSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUFFUjs7QUFHUTtFQUNHLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBQVg7O0FBRVE7RUFDSSxlQUFBO0FBQVo7O0FBR0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBRFIiLCJmaWxlIjoicmVzcG9uc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5yb3dJbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uaW50ZW50bGlzdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uYWRkUmVzcG9uc2V7XHJcbiAgICB3aWR0aDogNDguNSU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYWRkUmVzcG9uc2UgaDV7XHJcbiAgICBjb2xvcjogI0I2QjZCNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbn1cclxuLmFkZFJlc3BvbnNlIGl7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDk0OTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5pbnRubXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5pY29uc3tcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG59XHJcbi5pY29ucz5pe1xyXG4gICAgXHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbnRlbnRuYW17XHJcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgLyogbWFyZ2luLXRvcDogMjBweDsgKi9cclxuICAgIFxyXG59XHJcbi5sZnRib3JkZXJ7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxLjVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLThweCwyNSUpO1xyXG4gICAgbGVmdDogLThweDtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogMjVweDsgKi9cclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAtOHB4OyAqL1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY2NjY7XHJcbn1cclxuXHJcbnNtYWxse1xyXG4gICAgY29sb3I6I0I2QjZCNiA7XHJcbiAgICAvLyBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbi5pbnRubSBoNXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzNEM0QzRDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgd2lkdGg6IDk5JTtcclxufVxyXG5cclxuLmNsb3Nle1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5tb2RhbC1oZWFke1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNhdmUtYnRue1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbm5nLXNlbGVjdHtcclxuICAgIGJvcmRlci1ib3R0b206IDEuMnB4IHNvbGlkICNCNkI2QjY7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5tb2RhbC1tYWluLWFyZWF7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxLjJweCBzb2xpZCAjQjZCNkI2O1xyXG4gICAgfVxyXG59XHJcbjpob3N0IDo6bmctZGVlcHtcclxuICAgIC5tb2RhbC1tYWluLWFyZWF7XHJcbiAgICAgICAgLm5nLWRyb3Bkb3duLXBhbmVse1xyXG4gICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICAgICBib3JkZXI6IDEuMnB4IHNvbGlkICNCNkI2QjY7XHJcbiAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmctdmFsdWUtY29udGFpbmVye1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcntcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResponsesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-responses',
                templateUrl: './responses.component.html',
                styleUrls: ['./responses.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: src_app_services_loaderService__WEBPACK_IMPORTED_MODULE_2__["loaderService"] }]; }, null); })();


/***/ }),

/***/ "ReeX":
/*!*****************************************************!*\
  !*** ./src/app/includes/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Chatbot-Frontend';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #F5F5F5;\n  background: radial-gradient(100% 225% at 100% 0%, #FF0000 0%, #000000 100%), linear-gradient(236deg, #00C2FF 0%, #000000 100%), linear-gradient(135deg, #CDFFEB 0%, #CDFFEB 36%, #009F9D 36%, #009F9D 60%, #07456F 60%, #07456F 67%, #0F0A3C 67%, #0F0A3C 100%);\n  background-blend-mode: overlay, hard-light, normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLCtQQUFBO0VBQ0Ysa0RBQUE7QUFDQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTAwJSAyMjUlIGF0IDEwMCUgMCUsICNGRjAwMDAgMCUsICMwMDAwMDAgMTAwJSksIGxpbmVhci1ncmFkaWVudCgyMzZkZWcsICMwMEMyRkYgMCUsICMwMDAwMDAgMTAwJSksIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNDREZGRUIgMCUsICNDREZGRUIgMzYlLCAjMDA5RjlEIDM2JSwgIzAwOUY5RCA2MCUsICMwNzQ1NkYgNjAlLCAjMDc0NTZGIDY3JSwgIzBGMEEzQyA2NyUsICMwRjBBM0MgMTAwJSk7XHJcbmJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheSwgaGFyZC1saWdodCwgbm9ybWFsO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-service.service */ "ul72");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoginComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_9_div_1_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
} }
function LoginComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_14_div_1_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
} }
function LoginComponent_img_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return ["/register"]; };
class LoginComponent {
    constructor(formBuilder, route, router, apiService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // reset login status
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        this.apiService.login(this.loginForm.value).subscribe(data => {
            localStorage.setItem('apiKey', data['data']['apiKey']);
            localStorage.setItem('userData', JSON.stringify(data['data']['userData']));
            this.router.navigateByUrl('/chats');
        }, err => {
            alert(err.error.message);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 13, consts: [[1, "wrap1"], [1, "login"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "form-group", "last"], [1, "btn", "btn-primary", 3, "disabled"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==", 4, "ngIf"], [1, "btn", "btn-link", 3, "routerLink"], [1, "invalid-feedback"], [4, "ngIf"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_img_18_Template, 1, 0, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".wrap1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Montserrat\";\n}\n\n.login[_ngcontent-%COMP%] {\n  min-width: 30%;\n  background-color: white;\n  padding: 10px;\n  border-radius: 10px;\n  padding: 10px 30px;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  font-size: 26px;\n  margin: 15px;\n  font-family: \"Montserrat\";\n  margin-bottom: 40px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #495057;\n}\n\ninput[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  border-bottom: 2px solid gray;\n  border-radius: 0;\n  font-size: 15px;\n  font-weight: 400;\n  color: black;\n  height: calc(1em + .75rem + 2px);\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  box-shadow: none;\n  border: none;\n  border-bottom: 2px solid black;\n  color: black;\n}\n\n.last[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.last[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQUtKOztBQUVBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUlBLG1CQUFBO0FBREo7O0FBRkk7RUFDSSxjQUFBO0FBSVIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcDF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG59XHJcbi5sb2dpbntcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxufVxyXG5oMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5pbnB1dHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDFlbSArIC43NXJlbSArIDJweClcclxufVxyXG4vLyBpbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbi8vICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgLy8gY29sb3I6IHJlZDtcclxuLy8gfVxyXG5pbnB1dDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAgYmxhY2s7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmxhc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1pbi13aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-service.service */ "ul72");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function RegisterComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Firstname is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_11_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.firstname.errors.required);
} }
function RegisterComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_16_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
} }
function RegisterComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_21_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);
} }
function RegisterComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mobile is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_31_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.mobile.errors.required);
} }
function RegisterComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password Mismatch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_36_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.cnfpassword.errors.required);
} }
function RegisterComponent_img_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return ["/login"]; };
class RegisterComponent {
    constructor(formBuilder, route, router, apiService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastname: [''],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cnfpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        // reset login status
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        let obj = this.registerForm.value;
        if (obj['password'] != obj['cnfpassword']) {
            alert("Password Mismatch");
        }
        delete obj['cnfpassword'];
        this.apiService.register(this.registerForm.value).subscribe(data => {
            this.router.navigateByUrl('/login');
        }, err => {
            alert(err.error.message);
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 43, vars: 28, consts: [[1, "wrap1"], [1, "login"], [3, "formGroup", "ngSubmit"], [2, "display", "flex"], [2, "margin-right", "30px"], [1, "form-group"], ["for", "firstname"], ["type", "text", "formControlName", "firstname", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "email"], ["type", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["for", "lastname"], ["type", "text", "formControlName", "lastname", 1, "form-control", 3, "ngClass"], ["for", "mobile"], ["type", "tel", "formControlName", "mobile", 1, "form-control", 3, "ngClass"], ["for", "cnfpassword"], ["type", "password", "formControlName", "cnfpassword", 1, "form-control", 3, "ngClass"], [1, "form-group", "last"], [1, "btn", "btn-primary", 3, "disabled"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==", 4, "ngIf"], [1, "btn", "btn-link", 3, "routerLink"], [1, "invalid-feedback"], [4, "ngIf"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Firstname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegisterComponent_div_11_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterComponent_div_16_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegisterComponent_div_21_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lastname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegisterComponent_div_31_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegisterComponent_div_36_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RegisterComponent_img_40_Template, 1, 0, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.firstname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstname.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.lastname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.submitted && ctx.f.mobile.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.mobile.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.submitted && ctx.f.cnfpassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.cnfpassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".wrap1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Montserrat\";\n}\n\n.login[_ngcontent-%COMP%] {\n  min-width: 30%;\n  background-color: white;\n  padding: 10px;\n  border-radius: 10px;\n  padding: 10px 30px;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  font-size: 26px;\n  margin: 15px;\n  font-family: \"Montserrat\";\n  margin-bottom: 40px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #495057;\n}\n\ninput[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  border-bottom: 2px solid gray;\n  border-radius: 0;\n  font-size: 15px;\n  font-weight: 400;\n  color: black;\n  height: calc(1em + .75rem + 2px);\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  box-shadow: none;\n  border: none;\n  border-bottom: 2px solid black;\n  color: black;\n}\n\n.last[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  max-width: 300px;\n  margin: 0px auto;\n  margin-bottom: 1rem;\n  align-items: center;\n}\n\n.last[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQUtKOztBQUVBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUlBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBTEk7RUFDSSxjQUFBO0FBT1IiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcDF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG59XHJcbi5sb2dpbntcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxufVxyXG5oMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5pbnB1dHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDFlbSArIC43NXJlbSArIDJweClcclxufVxyXG4vLyBpbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbi8vICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgLy8gY29sb3I6IHJlZDtcclxuLy8gfVxyXG5pbnB1dDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAgYmxhY2s7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmxhc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1pbi13aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_intents_intents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/intents/intents.component */ "dh8L");
/* harmony import */ var _components_responses_responses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/responses/responses.component */ "NyUc");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_response_list_response_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/response-list/response-list.component */ "jZCA");
/* harmony import */ var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./includes/footer/footer.component */ "20cF");
/* harmony import */ var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./includes/header/header.component */ "ReeX");
/* harmony import */ var _includes_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./includes/sidenav/sidenav.component */ "lUSS");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");
/* harmony import */ var _services_chat_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/chat-service.service */ "MmIP");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_intent_example_intent_example_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/intent-example/intent-example.component */ "5Phi");
/* harmony import */ var _includes_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./includes/loader/loader.component */ "fK45");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_unlisted_intents_unlisted_intents_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/unlisted-intents/unlisted-intents.component */ "uJoS");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/setting/setting.component */ "KxqT");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_chat_service_service__WEBPACK_IMPORTED_MODULE_16__["ChatService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            angular_svg_icon__WEBPACK_IMPORTED_MODULE_11__["AngularSvgIconModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_intents_intents_component__WEBPACK_IMPORTED_MODULE_4__["IntentsComponent"],
        _components_responses_responses_component__WEBPACK_IMPORTED_MODULE_5__["ResponsesComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        _components_response_list_response_list_component__WEBPACK_IMPORTED_MODULE_7__["ResponseListComponent"],
        _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _includes_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _includes_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_10__["SidenavComponent"],
        _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_15__["ChatComponent"],
        _components_intent_example_intent_example_component__WEBPACK_IMPORTED_MODULE_18__["IntentExampleComponent"],
        _includes_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__["LoaderComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
        _components_unlisted_intents_unlisted_intents_component__WEBPACK_IMPORTED_MODULE_22__["UnlistedIntentsComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_23__["LayoutComponent"],
        _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_24__["SettingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_11__["AngularSvgIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_intents_intents_component__WEBPACK_IMPORTED_MODULE_4__["IntentsComponent"],
                    _components_responses_responses_component__WEBPACK_IMPORTED_MODULE_5__["ResponsesComponent"],
                    _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                    _components_response_list_response_list_component__WEBPACK_IMPORTED_MODULE_7__["ResponseListComponent"],
                    _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _includes_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _includes_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_10__["SidenavComponent"],
                    _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_15__["ChatComponent"],
                    _components_intent_example_intent_example_component__WEBPACK_IMPORTED_MODULE_18__["IntentExampleComponent"],
                    _includes_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__["LoaderComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
                    _components_unlisted_intents_unlisted_intents_component__WEBPACK_IMPORTED_MODULE_22__["UnlistedIntentsComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_23__["LayoutComponent"],
                    _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_24__["SettingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    angular_svg_icon__WEBPACK_IMPORTED_MODULE_11__["AngularSvgIconModule"].forRoot(),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
                ],
                providers: [_services_chat_service_service__WEBPACK_IMPORTED_MODULE_16__["ChatService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dh8L":
/*!*********************************************************!*\
  !*** ./src/app/components/intents/intents.component.ts ***!
  \*********************************************************/
/*! exports provided: IntentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntentsComponent", function() { return IntentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api-service.service */ "ul72");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_loaderService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loaderService */ "eC7f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function IntentsComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IntentsComponent_div_10_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const example_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](example_r8.exampleName);
} }
function IntentsComponent_div_10_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntentsComponent_div_10_div_23_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const intent_r3 = ctx_r10.$implicit; const i_r4 = ctx_r10.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteResponseToIntent(intent_r3._id, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntentsComponent_div_10_div_23_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const intent_r3 = ctx_r13.$implicit; const i_r4 = ctx_r13.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.setSelectedIntentId(intent_r3._id, i_r4, intent_r3.responseId._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bot Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const intent_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](intent_r3.responseId.name);
} }
function IntentsComponent_div_10_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntentsComponent_div_10_div_24_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const intent_r3 = ctx_r16.$implicit; const i_r4 = ctx_r16.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.setSelectedIntentId(intent_r3._id, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "show": a0 }; };
function IntentsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntentsComponent_div_10_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r4 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.viewExampleIndex != i_r4 ? ctx_r18.viewExampleIndex = i_r4 : ctx_r18.viewExampleIndex = undefined; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntentsComponent_div_10_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const intent_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.deleteIntent(intent_r3._id, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntentsComponent_div_10_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const intent_r3 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.setEditIntentValue(intent_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "User Intent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Examples");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, IntentsComponent_div_10_div_18_Template, 3, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntentsComponent_div_10_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const intent_r3 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.addExampleValue.intentId = intent_r3._id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add Example");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, IntentsComponent_div_10_div_23_Template, 9, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, IntentsComponent_div_10_div_24_Template, 4, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const intent_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](intent_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.viewExampleIndex == i_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", intent_r3.examples);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", intent_r3.responseId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !intent_r3.responseId);
} }
function IntentsComponent_ng_select_35_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IntentsComponent_ng_select_35_Template_ng_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.addIntentValue.responseId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r2.responseList)("searchable", true)("ngModel", ctx_r2.addIntentValue.responseId);
} }
class IntentsComponent {
    constructor(apiService, router, loaderService) {
        this.apiService = apiService;
        this.router = router;
        this.loaderService = loaderService;
        this.intentsList = [];
        this.viewExampleIndex = undefined;
        this.addIntentValue = {
            name: '',
            responseId: null
        };
        this.addExampleValue = {
            name: '',
            intentId: null
        };
        this.editIntent = false;
    }
    ngOnInit() {
        this.getIntentList();
        this.getResponseList();
    }
    getIntentList() {
        this.loaderService.setLoaderValue(true);
        this.apiService.getIntents().subscribe(data => {
            this.intentsList = data['data'];
            console.log(this.intentsList);
            this.loaderService.setLoaderValue(false);
        });
    }
    getResponseList() {
        this.apiService.getResponses().subscribe(data => {
            this.responseList = data['data'];
        });
    }
    setSelectedIntentId(intentId, index, responseId = false) {
        this.selectedIntentId = intentId;
        this.selectedIntentIndex = index;
        if (responseId) {
            this.selectedResponseId = responseId;
        }
    }
    addResponseToIntent() {
        if (!this.selectedResponseId)
            return;
        this.apiService.addResponseToIntent(this.selectedIntentId, this.selectedResponseId).subscribe(data => {
            let res = this.responseList.findIndex(el => el._id == this.selectedResponseId);
            this.intentsList[this.selectedIntentIndex].responseId = this.responseList[res];
            this.selectedResponseId = null;
            document.getElementById('closeAddResponse').click();
        });
    }
    addIntent() {
        this.apiService.addIntent(this.addIntentValue).subscribe(data => {
            this.intentsList.push(data['data']);
            this.selectedResponseId = null;
            document.getElementById('closeAddIntent').click();
        });
    }
    deleteResponseToIntent(intentId, index) {
        this.apiService.removeIntentResponse({ intentId: intentId }).subscribe(data => {
            this.intentsList[index].responseId = null;
        });
    }
    setEditIntentValue(intent) {
        this.selectedIntentId = intent._id;
        this.editIntent = true;
        this.addIntentValue = {
            name: intent.name
        };
    }
    editIntentData() {
        this.apiService.updateIntent({ intentId: this.selectedIntentId, name: this.addIntentValue.name }).subscribe(data => {
            let index = this.intentsList.findIndex(d => d._id === this.selectedIntentId);
            this.intentsList[index].name = this.addIntentValue.name;
            // if(this.addIntentValue.responseId){
            //   let res = this.responseList.findIndex(el=> el._id == this.addIntentValue.responseId);
            //    this.intentsList[index].responseId = [
            //   this.responseList[res]
            // ]
            // }
            // this.selectedResponseId= null;
            document.getElementById('closeAddIntent').click();
        });
    }
    deleteIntent(intentId, i) {
        this.apiService.deleteIntent(intentId).subscribe(data => {
            this.intentsList.splice(i, 1);
        });
    }
    resetEditIntentValue() {
        this.addIntentValue = {
            name: '',
            responseId: null
        };
    }
    viewIntentExample(i) {
        this.viewExampleIndex == i ? this.viewExampleIndex = undefined : i;
        // let a = document.getElementsByClassName('collapse show');
        // console.log(a);
        // console.log(intent);
        // this.router.navigate(['/heroes', { id: heroId }]);
    }
    addExample() {
        if (this.addExampleValue.name != "") {
            this.apiService.addExample(this.addExampleValue).subscribe(data => {
                data = data['data'];
                let index = this.intentsList.findIndex(el => el._id == data['_id']);
                let length = data['examples'].length;
                let addedExample = data['examples'][length - 1];
                this.intentsList[index].examples.push(addedExample);
                document.getElementById('closeAddExample').click();
            });
        }
    }
    deleteExample(intentId, exampleId, index) {
        this.apiService.deleteExample({ intentId: intentId, exampleId: exampleId }).subscribe(data => {
            this.intentsList[index].examples.splice(index, 1);
        });
    }
}
IntentsComponent.ɵfac = function IntentsComponent_Factory(t) { return new (t || IntentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loaderService__WEBPACK_IMPORTED_MODULE_3__["loaderService"])); };
IntentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntentsComponent, selectors: [["app-intents"]], decls: 51, vars: 9, consts: [[1, "intent", "overflow-y"], ["class", "no-avl", 4, "ngIf"], [1, "search"], [1, "srch"], ["data-toggle", "modal", "data-target", "#addIntent", 1, "addbtn", 3, "click"], ["class", "rowIntent", "key", "{i}", 4, "ngFor", "ngForOf"], ["id", "chooseResponse", "tabindex", "-1", "role", "dialog", "aria-labelledby", "chooseResponseLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], ["type", "button", "id", "closeAddResponse", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-head"], [1, "modal-main-area"], ["bindLabel", "name", "bindValue", "_id", "dropdownPosition", "bottom", "placeholder", "Select Response", "aria-label", "searchBox", "labelForId", "name", 3, "items", "searchable", "ngModel", "ngModelChange"], ["type", "button", 1, "save-btn", "btn", "btn-primary", 3, "click"], ["id", "addIntent", "tabindex", "-1", "role", "dialog", "aria-labelledby", "addIntentLabel", "aria-hidden", "true", 1, "modal", "fade"], ["type", "button", "id", "closeAddIntent", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["type", "text", "placeholder", "Intent Name", 3, "ngModel", "ngModelChange"], ["bindLabel", "name", "bindValue", "_id", "dropdownPosition", "bottom", "placeholder", "Select Response", "aria-label", "searchBox", "labelForId", "name", 3, "items", "searchable", "ngModel", "ngModelChange", 4, "ngIf"], ["id", "addExample", "tabindex", "-1", "role", "dialog", "aria-labelledby", "addExampleLabel", "aria-hidden", "true", 1, "modal", "fade"], ["type", "button", "id", "closeAddExample", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["type", "text", "placeholder", "Example Name", 3, "ngModel", "ngModelChange"], [1, "no-avl"], ["key", "{i}", 1, "rowIntent"], [1, "intentlist"], [1, "lftborder"], [1, "icons"], [1, "ri-eye-fill", 3, "click"], [1, "ri-delete-bin-4-fill", 3, "click"], ["data-toggle", "modal", "data-target", "#addIntent", 1, "ri-edit-line", 3, "click"], [1, "intentnam"], [1, "intnm"], [1, "intentCollapse", 3, "ngClass"], [1, "exampleList"], [4, "ngFor", "ngForOf"], ["data-toggle", "modal", "data-target", "#addExample", 1, "addExample", 3, "click"], [1, "ri-add-line"], ["class", "intentlist", "style", "height: fit-content;", 4, "ngIf"], ["class", "addResponse", "data-toggle", "modal", "data-target", "#chooseResponse", 3, "click", 4, "ngIf"], [1, "intentlist", 2, "height", "fit-content"], ["data-toggle", "modal", "data-target", "#chooseResponse", 1, "ri-edit-line", 3, "click"], ["data-toggle", "modal", "data-target", "#chooseResponse", 1, "addResponse", 3, "click"]], template: function IntentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IntentsComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Intents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntentsComponent_Template_div_click_7_listener() { ctx.editIntent = false; return ctx.resetEditIntentValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IntentsComponent_div_10_Template, 25, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Choose Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IntentsComponent_Template_ng_select_ngModelChange_21_listener($event) { return ctx.selectedResponseId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntentsComponent_Template_button_click_22_listener() { return ctx.addResponseToIntent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IntentsComponent_Template_input_ngModelChange_34_listener($event) { return ctx.addIntentValue.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, IntentsComponent_ng_select_35_Template, 1, 3, "ng-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntentsComponent_Template_button_click_36_listener() { return ctx.editIntent ? ctx.editIntentData() : ctx.addIntent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Add Example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IntentsComponent_Template_input_ngModelChange_48_listener($event) { return ctx.addExampleValue.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntentsComponent_Template_button_click_49_listener() { return ctx.addExample(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.intentsList && !ctx.intentsList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.intentsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.responseList)("searchable", true)("ngModel", ctx.selectedResponseId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.editIntent ? "Edit" : "Add", " Intent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addIntentValue.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editIntent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addExampleValue.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".intent[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.rowIntent[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  background-color: #F5F5F5;\n  margin-top: 15px;\n}\n\n.intentlist[_ngcontent-%COMP%] {\n  width: 48.5%;\n  padding: 8px;\n  border-radius: 10px;\n  background-color: #FFFFFF;\n}\n\n.addResponse[_ngcontent-%COMP%] {\n  width: 48.5%;\n  padding: 8px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.addResponse[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #B6B6B6;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n\n.addResponse[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background-color: #949494;\n  border-radius: 50%;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n}\n\n.intnm[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 20px;\n}\n\n.icons[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.icons[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin: 0px 10px 0px 0px;\n  font-size: 13px;\n  cursor: pointer;\n}\n\n.intentnam[_ngcontent-%COMP%] {\n  \n  \n}\n\n.lftborder[_ngcontent-%COMP%] {\n  float: left;\n  transform: translate(-8px, 25%);\n  left: -8px;\n  \n  \n  width: 3px;\n  height: 25px;\n  background-color: #666666;\n}\n\nsmall[_ngcontent-%COMP%] {\n  color: #B6B6B6;\n  font-weight: 600;\n  display: block;\n}\n\n.intnm[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #3D3D3D;\n  font-size: 0.9rem;\n  width: 99%;\n}\n\n.close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  outline: none;\n}\n\n.modal-head[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n\n.save-btn[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-top: 10px;\n}\n\nng-select[_ngcontent-%COMP%] {\n  border-bottom: 1.2px solid #B6B6B6;\n  outline: none;\n}\n\n.modal-main-area[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.modal-main-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  width: 100%;\n  margin-bottom: 10px;\n  border-bottom: 1.2px solid #B6B6B6;\n}\n\n[_nghost-%COMP%]     .modal-main-area .ng-dropdown-panel {\n  margin-top: 10px;\n  background-color: #f5f5f5;\n  border: 1.2px solid #B6B6B6;\n  border-radius: 4px;\n}\n\n[_nghost-%COMP%]     .modal-main-area .ng-value-container {\n  padding-left: 0;\n}\n\n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  border: none;\n  outline: none;\n  box-shadow: none !important;\n}\n\n.intentCollapse[_ngcontent-%COMP%] {\n  transition: all 1s linear;\n  overflow: hidden;\n  max-height: 0px;\n}\n\n.intentCollapse.show[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  height: auto;\n}\n\n.intentCollapse[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n}\n\n.intentCollapse[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #B6B6B6;\n  font-weight: 600;\n  margin-bottom: 8px;\n  display: block;\n  font-size: 10px;\n}\n\n.intentCollapse[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .exampleList[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.intentCollapse[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .exampleList[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 600;\n  display: block;\n  font-size: 11px;\n  width: calc(100%- 20px);\n}\n\n.intentCollapse[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .exampleList[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 11px;\n  cursor: pointer;\n}\n\n.addExample[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.addExample[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #0050B3;\n  font-weight: 600;\n  font-size: 0.6rem;\n}\n\n.addExample[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  font-size: 10px;\n  background-color: #0050B3;\n  border-radius: 50%;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnRlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUhBO0VBSUksWUFBQTtBQUdKOztBQUFBO0VBRUksd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBRUksbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBRUksV0FBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBRUEsZ0JBQUE7RUFFQSxjQUFBO0FBRko7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFISjs7QUFNQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsYUFBQTtBQUhKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdBO0VBQ0ksa0NBQUE7RUFDQSxhQUFBO0FBQUo7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBQUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBRVI7O0FBR1E7RUFDRyxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUFYOztBQUVRO0VBQ0ksZUFBQTtBQUFaOztBQUdJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQURSOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFJQTtFQUtJLGlCQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVVBO0VBQ0ksa0JBQUE7QUFQSjs7QUFRSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFOUjs7QUFTUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBUFo7O0FBUVk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBTmhCOztBQVFZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQU5oQjs7QUFZQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFUSjs7QUFVSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUlI7O0FBVUk7RUFDSSxXQUFBO0VBQ0osWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFSSiIsImZpbGUiOiJpbnRlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5yb3dJbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uaW50ZW50bGlzdHtcclxuICAgIHdpZHRoOiA0OC41JTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmFkZFJlc3BvbnNle1xyXG4gICAgd2lkdGg6IDQ4LjUlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFkZFJlc3BvbnNlIGg1e1xyXG4gICAgY29sb3I6ICNCNkI2QjY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG59XHJcbi5hZGRSZXNwb25zZSBpe1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uaW50bm17XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4uaWNvbnN7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxufVxyXG4uaWNvbnM+aXtcclxuICAgIFxyXG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW50ZW50bmFte1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cclxuICAgIC8qIG1hcmdpbi10b3A6IDIwcHg7ICovXHJcbiAgICBcclxufVxyXG4ubGZ0Ym9yZGVye1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMS41cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC04cHgsMjUlKTtcclxuICAgIGxlZnQ6IC04cHg7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDI1cHg7ICovXHJcbiAgICAvKiBtYXJnaW4tbGVmdDogLThweDsgKi9cclxuICAgIHdpZHRoOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xyXG59XHJcblxyXG5zbWFsbHtcclxuICAgIGNvbG9yOiNCNkI2QjYgO1xyXG4gICAgLy8gZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4uaW50bm0gaDV7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMzRDNEM0Q7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIHdpZHRoOiA5OSU7XHJcbn1cclxuXHJcbi5jbG9zZXtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubW9kYWwtaGVhZHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zYXZlLWJ0bntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5uZy1zZWxlY3R7XHJcbiAgICBib3JkZXItYm90dG9tOiAxLjJweCBzb2xpZCAjQjZCNkI2O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubW9kYWwtbWFpbi1hcmVhe1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGlucHV0e1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMS4ycHggc29saWQgI0I2QjZCNjtcclxuICAgIH1cclxufVxyXG46aG9zdCA6Om5nLWRlZXB7XHJcbiAgICAubW9kYWwtbWFpbi1hcmVhe1xyXG4gICAgICAgIC5uZy1kcm9wZG93bi1wYW5lbHtcclxuICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgICAgYm9yZGVyOiAxLjJweCBzb2xpZCAjQjZCNkI2O1xyXG4gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5nLXZhbHVlLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXJ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmludGVudENvbGxhcHNle1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjsgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWF4LWhlaWdodDogMHB4OyAgXHJcbn1cclxuLmludGVudENvbGxhcHNlLnNob3d7XHJcbiAgICAvLyAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcclxuICAgIC8vIC1tcy10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAvLyAtbW96LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcclxuICAgIC8vIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDsgXHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4vLyAuaW50ZW50Q29sbGFwc2U6bm90KCl7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbi8vIH1cclxuLmludGVudENvbGxhcHNlPmRpdntcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGg0e1xyXG4gICAgICAgIGNvbG9yOiAjQjZCNkI2O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIC5leGFtcGxlTGlzdHtcclxuICAgICAgICA+ZGl2e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS0gMjBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZGRFeGFtcGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoNXtcclxuICAgICAgICBjb2xvcjogIzAwNTBCMztcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgfVxyXG4gICAgaXtcclxuICAgICAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDUwQjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intents',
                templateUrl: './intents.component.html',
                styleUrls: ['./intents.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_loaderService__WEBPACK_IMPORTED_MODULE_3__["loaderService"] }]; }, null); })();


/***/ }),

/***/ "eC7f":
/*!*******************************************!*\
  !*** ./src/app/services/loaderService.ts ***!
  \*******************************************/
/*! exports provided: loaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loaderService", function() { return loaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class loaderService {
    constructor() {
        this.showLoader = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    isLoader() {
        return this.showLoader;
    }
    setLoaderValue(val) {
        this.showLoader.next(val);
    }
}
loaderService.ɵfac = function loaderService_Factory(t) { return new (t || loaderService)(); };
loaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: loaderService, factory: loaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](loaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "fK45":
/*!*****************************************************!*\
  !*** ./src/app/includes/loader/loader.component.ts ***!
  \*****************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 2, vars: 0, consts: [["src", "../../../assets/icons/spinner.svg", "alt", "", "srcset", ""]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0FBRUoiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jZCA":
/*!*********************************************************************!*\
  !*** ./src/app/components/response-list/response-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResponseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseListComponent", function() { return ResponseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");



class ResponseListComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResponseListComponent.ɵfac = function ResponseListComponent_Factory(t) { return new (t || ResponseListComponent)(); };
ResponseListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResponseListComponent, selectors: [["app-response-list"]], decls: 5, vars: 0, template: function ResponseListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hello22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__["ɵr"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNwb25zZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResponseListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-response-list',
                templateUrl: './response-list.component.html',
                styleUrls: ['./response-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lUSS":
/*!*******************************************************!*\
  !*** ./src/app/includes/sidenav/sidenav.component.ts ***!
  \*******************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api-service.service */ "ul72");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");






const _c0 = function (a0) { return { "training": a0 }; };
const _c1 = function () { return ["/chats"]; };
const _c2 = function () { return ["/intents"]; };
const _c3 = function () { return ["/responses"]; };
const _c4 = function () { return ["/unlistedintent"]; };
const _c5 = function () { return ["/setting"]; };
class SidenavComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.isTraining = false;
    }
    ngOnInit() {
        let decoDiv = document.getElementById('navDecoration');
        let a = document.getElementById(window.location.pathname);
        if (a) {
            decoDiv.style.top = a.offsetTop + 'px';
        }
        this.userData = JSON.parse(localStorage.getItem('userData'));
    }
    changePlace(event) {
        let a = event.target;
        console.log(event);
        let decoDiv = document.getElementById('navDecoration');
        while (a.className != 'links' || a.className == 'nav') {
            a = a.parentElement;
        }
        if (a.className == 'links') {
            decoDiv.style.width = 5 + 'px';
            setTimeout(() => {
                decoDiv.style.top = a.offsetTop + 'px';
            }, 100);
            setTimeout(() => {
                decoDiv.style.width = '65px';
            }, 200);
        }
    }
    trainBot() {
        this.isTraining = true;
        this.apiService.trainBot().subscribe(data => {
            this.isTraining = false;
        });
    }
    logout() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 40, vars: 15, consts: [[1, "sidenav"], [1, "profile"], [1, "det"], [1, "pic"], ["src", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"], [3, "ngClass", "disabled", "click"], [1, "nav", 3, "click"], ["id", "navDecoration"], ["routerLinkActive", "is-active2", "id", "/chats", 3, "routerLink"], [1, "links"], ["src", "../../assets/icons/chat.svg"], ["routerLinkActive", "is-active", "id", "/intents", 3, "routerLink"], ["src", "../../assets/icons/intent.svg"], ["routerLinkActive", "is-active", "id", "/responses", 3, "routerLink"], ["src", "../../assets/icons/response.svg"], ["routerLinkActive", "is-active", "id", "/unlistedintent", 3, "routerLink"], ["routerLinkActive", "is-active2", "id", "/setting", 3, "routerLink"], ["src", "../../assets/icons/setting.svg"], [1, "logout", 3, "click"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_7_listener() { return ctx.trainBot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Train Bot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_div_click_9_listener($event) { return ctx.changePlace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Bot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "svg-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "svg-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Intents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "svg-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Responses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "svg-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Unlisted Intent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "svg-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_h1_click_38_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userData ? ctx.userData.firstname : "Amanda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isTraining == true))("disabled", ctx.isTraining);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c5));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__["SvgIconComponent"]], styles: [".sidenav[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: column;\n}\n\n.sidenav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n\n.sidenav[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  width: 0;\n}\n\n.profile[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 30px 20px;\n  margin: 0 auto;\n  position: sticky;\n  background-color: white;\n  top: 0;\n}\n\n.profile[_ngcontent-%COMP%]   .det[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.pic[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.pic[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.det[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: calc(100% - 30px);\n  height: 35px;\n  border-radius: 30px;\n  color: white;\n  background-color: #0050B3;\n  font-size: 0.8rem;\n  font-weight: 500;\n  display: block;\n  margin: 0 auto;\n  margin-top: 35px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n}\n\n.nav[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px 10px 0px 40px;\n  position: relative;\n  display: block;\n}\n\n.nav[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  outline: none !important;\n}\n\n.nav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  color: #CBCBCB;\n  font-weight: 600;\n  margin: 20px 0 10px 0;\n}\n\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #343438;\n  display: flex;\n  align-items: center;\n  height: 35px;\n  cursor: pointer;\n}\n\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 1.7rem;\n}\n\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]:link {\n  text-decoration: none;\n}\n\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   svg-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  position: fixed;\n  z-index: 1000;\n  display: flex;\n}\n\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.is-nonactive2[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #343438;\n  stroke-width: 1px;\n}\n\n.is-nonactive[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #343438;\n  stroke-width: 0px;\n}\n\n.is-active2[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #0050B3;\n  stroke-width: 1px;\n}\n\n.is-active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #0050B3;\n  stroke-width: 0px;\n}\n\n.nav[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .is-active2[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  color: #0050B3;\n}\n\n#navDecoration[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  \n  border-left: 5px solid #0050B3;\n  width: 65px;\n  background-image: linear-gradient(to right, rgba(0, 80, 179, 0.3), rgba(245, 245, 245, 0.8));\n  \n  height: 35px;\n  border-radius: 0 20px 20px 0;\n  transition: all 0.1s ease;\n  \n  \n  transition-timing-function: linear;\n}\n\n.training[_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n  opacity: 0.5;\n}\n\n.logout[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-top: auto;\n  margin-bottom: 30px;\n  font-size: 15px;\n  color: white;\n  background: black;\n  padding: 8px 33px;\n  border-radius: 35px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxRQUFBO0FBRUo7O0FBQ0U7RUFDSSxRQUFBO0FBRU47O0FBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQU9KOztBQUxBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5BO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBU0o7O0FBUkk7RUFDSSx3QkFBQTtBQVVSOztBQVBBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBVUo7O0FBUkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVdKOztBQVRBO0VBQ0ksb0JBQUE7QUFZSjs7QUFWQTtFQUNJLHFCQUFBO0FBYUo7O0FBWEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQWNKOztBQVpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFlSjs7QUFiQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQWlCSjs7QUFmQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFtQko7O0FBakJBO0VBQ0ksY0FBQTtBQW9CSjs7QUFsQkE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLDRGQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQXFCSjs7QUFuQkE7RUFDSSw4QkFBQTtFQUNBLFlBQUE7QUFzQko7O0FBcEJBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUF1QkoiLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5zaWRlbmF2Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbiAgIFxyXG4gIC5zaWRlbmF2Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuLnByb2ZpbGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcbi5wcm9maWxlIC5kZXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnBpY3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5waWM+aW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmRldD5oMXtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5idXR0b257XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTBCMztcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmF2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgPmRpdntcclxuICAgICAgICBvdXRsaW5lOiBub25lICAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5uYXYgaDF7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogI0NCQ0JDQjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDIwcHggMCAxMHB4ICAwO1xyXG59XHJcbi5uYXYgLmxpbmtze1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzM0MzQzODtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uYXYgLmxpbmtzIHNwYW57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuN3JlbTtcclxufVxyXG4ubmF2IC5saW5rczpsaW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5uYXYgLmxpbmtzIHN2Zy1pY29ue1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubmF2IC5saW5rcyBzdmd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uaXMtbm9uYWN0aXZlMiBzdmcgcGF0aHtcclxuICAgIHN0cm9rZTogIzM0MzQzODtcclxuICAgIHN0cm9rZS13aWR0aDogMXB4O1xyXG59XHJcbi5pcy1ub25hY3RpdmUgc3ZnIHBhdGh7XHJcbiAgICBmaWxsOiAjMzQzNDM4O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuLmlzLWFjdGl2ZTIgc3ZnIHBhdGh7XHJcbiAgICBzdHJva2U6ICMwMDUwQjM7XHJcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcclxufVxyXG4uaXMtYWN0aXZlIHN2ZyBwYXRoe1xyXG4gICAgZmlsbDogIzAwNTBCMztcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcbi5uYXYgIC5pcy1hY3RpdmUgLmxpbmtzICwubmF2IC5pcy1hY3RpdmUyIC5saW5rc3tcclxuICAgIGNvbG9yOiAjMDA1MEIzO1xyXG59XHJcbiNuYXZEZWNvcmF0aW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7ICovXHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMwMDUwQjM7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIHJnYmEoMCw4MCwxNzksMC4zKSAsIHJnYmEoMjQ1LDI0NSwyNDUsMC44KSk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MEIzOyAqL1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XHJcbiAgICAvKiB0cmFuc2l0aW9uLWRlbGF5OjBzLCAwLjVzICwxczsgKi9cclxuICAgIC8qIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyAqL1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxufVxyXG4udHJhaW5pbmd7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5sb2dvdXR7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMzNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "uJoS":
/*!***************************************************************************!*\
  !*** ./src/app/components/unlisted-intents/unlisted-intents.component.ts ***!
  \***************************************************************************/
/*! exports provided: UnlistedIntentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnlistedIntentsComponent", function() { return UnlistedIntentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UnlistedIntentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnlistedIntentsComponent.ɵfac = function UnlistedIntentsComponent_Factory(t) { return new (t || UnlistedIntentsComponent)(); };
UnlistedIntentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnlistedIntentsComponent, selectors: [["app-unlisted-intents"]], decls: 2, vars: 0, template: function UnlistedIntentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "unlisted-intents works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmxpc3RlZC1pbnRlbnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnlistedIntentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unlisted-intents',
                templateUrl: './unlisted-intents.component.html',
                styleUrls: ['./unlisted-intents.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ul72":
/*!*************************************************!*\
  !*** ./src/app/services/api-service.service.ts ***!
  \*************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class ApiService {
    // url = "http://localhost:3001"
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'https://chat-bot-backend-arun.herokuapp.com';
    }
    login(obj) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.url + '/auth/login', obj, { headers: reqHeader }).pipe();
    }
    register(obj) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.url + '/auth/registerUser', obj, { headers: reqHeader }).pipe();
    }
    getProfile() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.get(this.url + '/api/profile', { headers: reqHeader }).pipe();
    }
    getIntents() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.get(this.url + '/api/intents', { headers: reqHeader }).pipe();
    }
    getResponses() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.get(this.url + '/api/response', { headers: reqHeader }).pipe();
    }
    addResponseToIntent(intentId, responseId) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.post(this.url + '/api/updateIntent', { intentId: intentId, responseId: responseId }, { headers: reqHeader }).pipe();
    }
    addIntent(data) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.post(this.url + '/api/addIntent', data, { headers: reqHeader }).pipe();
    }
    removeIntentResponse(data) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.post(this.url + '/api/removeIntentResponse', data, { headers: reqHeader }).pipe();
    }
    updateIntent(data) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.post(this.url + '/api/updateIntent', data, { headers: reqHeader }).pipe();
    }
    deleteIntent(intentId) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.delete(this.url + `/intent/${intentId}`, { headers: reqHeader }).pipe();
    }
    addResponse(data) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.post(this.url + '/api/addResponse', data, { headers: reqHeader }).pipe();
    }
    deleteResponse(responseId) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.delete(this.url + `/response/${responseId}`, { headers: reqHeader }).pipe();
    }
    updateResponse(data) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.post(this.url + '/api/updateResponse', data, { headers: reqHeader }).pipe();
    }
    trainBot() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.get(this.url + '/api/train', { headers: reqHeader }).pipe();
    }
    getAllUsers() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.get(this.url + '/api/allUser', { headers: reqHeader }).pipe();
    }
    getMessages() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.get(this.url + '/api/messages/:id', { headers: reqHeader }).pipe();
    }
    addExample(data) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.post(this.url + '/api/intent/example', data, { headers: reqHeader }).pipe();
    }
    deleteExample(data) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.api
        });
        return this.http.post(this.url + '/api/intent/deleteExample', data, { headers: reqHeader }).pipe();
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "uswQ":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_loaderService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/loaderService */ "eC7f");
/* harmony import */ var _includes_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../includes/sidenav/sidenav.component */ "lUSS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _includes_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../includes/loader/loader.component */ "fK45");







function LayoutComponent_app_loader_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader", 8);
} }
class LayoutComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.showLoader = false;
    }
    ngOnInit() {
        this.loaderService.showLoader.subscribe(val => {
            this.showLoader = val;
        });
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loaderService__WEBPACK_IMPORTED_MODULE_1__["loaderService"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 10, vars: 1, consts: [[1, "App"], [1, "sideNav"], [1, "mainContent"], ["class", "loader", 4, "ngIf"], [1, "outlet"], [1, "feedBack"], [1, "feedText"], ["src", "../assets/image/feedback.png"], [1, "loader"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LayoutComponent_app_loader_4_Template, 1, 0, "app-loader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoader);
    } }, directives: [_includes_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _includes_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"]], styles: [".App[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  background-color: #F5F5F5;\n}\n\n.sideNav[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 100%;\n  background-color: red;\n}\n\n.mainContent[_ngcontent-%COMP%] {\n  width: calc(100% - 220px);\n  height: 100%;\n  position: relative;\n}\n\n.outlet[_ngcontent-%COMP%] {\n  width: calc(100% - 30px);\n  height: 100%;\n  background-color: #F5F5F5;\n  padding: 20px 25px;\n  padding-top: 0;\n}\n\n.overflow-y[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\n.overflow-y[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n\n.overflow-y[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  width: 0;\n}\n\n.feedBack[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.feedText[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.feedText[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-left: 10%;\n  cursor: pointer;\n}\n\n.loader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFJQSxrQkFBQTtBQUFKOztBQUVFO0VBRUUsd0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxRQUFBO0FBRUo7O0FBQ0U7RUFDSSxRQUFBO0FBRU47O0FBQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBR0o7O0FBREU7RUFDRSxXQUFBO0FBSUo7O0FBRkU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBS0o7O0FBSEU7RUFDRSxXQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUFLSiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQXBwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICB9XHJcbiAgLnNpZGVOYXZ7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIC5tYWluQ29udGVudHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMjBweCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgLy8gICBwYWRkaW5nOiAyMHB4IDI1cHg7XHJcbiAgICAvLyAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAub3V0bGV0e1xyXG4gICAgLy8gd2lkdGg6IDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcbiAgLm92ZXJmbG93LXl7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG4gIC5vdmVyZmxvdy15Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbiAgIFxyXG4gIC5vdmVyZmxvdy15Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuICAuZmVlZEJhY2t7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5mZWVkVGV4dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZmVlZFRleHQgaW1ne1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5sb2FkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgLy8gb3BhY2l0eTogMC42O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return [{ type: _services_loaderService__WEBPACK_IMPORTED_MODULE_1__["loaderService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authguard_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authguard.guard */ "6g8o");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_intent_example_intent_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/intent-example/intent-example.component */ "5Phi");
/* harmony import */ var _components_intents_intents_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/intents/intents.component */ "dh8L");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_responses_responses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/responses/responses.component */ "NyUc");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/setting/setting.component */ "KxqT");
/* harmony import */ var _components_unlisted_intents_unlisted_intents_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/unlisted-intents/unlisted-intents.component */ "uJoS");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");















const routes = [
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
    },
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
        canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]],
        children: [
            {
                path: 'dashboard',
                component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            },
            {
                path: 'intents',
                component: _components_intents_intents_component__WEBPACK_IMPORTED_MODULE_6__["IntentsComponent"]
            },
            {
                path: 'responses',
                component: _components_responses_responses_component__WEBPACK_IMPORTED_MODULE_9__["ResponsesComponent"]
            },
            {
                path: 'chats',
                component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]
            }, {
                path: 'example/:intentId',
                component: _components_intent_example_intent_example_component__WEBPACK_IMPORTED_MODULE_5__["IntentExampleComponent"]
            }, {
                path: 'setting',
                component: _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_10__["SettingComponent"]
            }, {
                path: 'unlistedintent',
                component: _components_unlisted_intents_unlisted_intents_component__WEBPACK_IMPORTED_MODULE_11__["UnlistedIntentsComponent"]
            },
            {
                path: '**',
                redirectTo: 'chats'
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map