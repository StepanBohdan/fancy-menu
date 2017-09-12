(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.text = text;
exports.createElement = createElement;
exports.div = div;
exports.i = i;
exports.nav = nav;
exports.ul = ul;
exports.li = li;
exports.section = section;
exports.article = article;
exports.h1 = h1;
exports.h3 = h3;
exports.p = p;
exports.span = span;
exports.footer = footer;
exports.button = button;
exports.img = img;
exports.addId = addId;
exports.addClass = addClass;
/**
 * Created by bodya on 05.09.17.
 */
function text(words) {
    return document.createTextNode(words);
}

function createElement(type) {
    var newElement = document.createElement(type);

    for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        children[_key - 1] = arguments[_key];
    }

    children.forEach(function (child) {
        return newElement.appendChild(child);
    });
    return newElement;
}

function div() {
    for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        children[_key2] = arguments[_key2];
    }

    return createElement.apply(undefined, ['div'].concat(children));
}

function i() {
    for (var _len3 = arguments.length, children = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        children[_key3] = arguments[_key3];
    }

    return createElement.apply(undefined, ['i'].concat(children));
}

function nav() {
    for (var _len4 = arguments.length, children = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        children[_key4] = arguments[_key4];
    }

    return createElement.apply(undefined, ['nav'].concat(children));
}

function ul() {
    for (var _len5 = arguments.length, children = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        children[_key5] = arguments[_key5];
    }

    return createElement.apply(undefined, ['ul'].concat(children));
}

function li() {
    for (var _len6 = arguments.length, children = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        children[_key6] = arguments[_key6];
    }

    return createElement.apply(undefined, ['li'].concat(children));
}

function section() {
    for (var _len7 = arguments.length, children = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        children[_key7] = arguments[_key7];
    }

    return createElement.apply(undefined, ['section'].concat(children));
}

function article() {
    for (var _len8 = arguments.length, children = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        children[_key8] = arguments[_key8];
    }

    return createElement.apply(undefined, ['article'].concat(children));
}

function h1() {
    for (var _len9 = arguments.length, children = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        children[_key9] = arguments[_key9];
    }

    return createElement.apply(undefined, ['h1'].concat(children));
}

function h3() {
    for (var _len10 = arguments.length, children = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        children[_key10] = arguments[_key10];
    }

    return createElement.apply(undefined, ['h3'].concat(children));
}

function p() {
    for (var _len11 = arguments.length, children = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        children[_key11] = arguments[_key11];
    }

    return createElement.apply(undefined, ['p'].concat(children));
}

function span() {
    for (var _len12 = arguments.length, children = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        children[_key12] = arguments[_key12];
    }

    return createElement.apply(undefined, ['span'].concat(children));
}

function footer() {
    for (var _len13 = arguments.length, children = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        children[_key13] = arguments[_key13];
    }

    return createElement.apply(undefined, ['footer'].concat(children));
}

function button() {
    for (var _len14 = arguments.length, children = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        children[_key14] = arguments[_key14];
    }

    return createElement.apply(undefined, ['button'].concat(children));
}
function img(source) {
    var image = createElement('img');
    image.src = source;
    return image;
}

function addId(element, id) {
    var newElement = element.cloneNode(true);
    return Object.assign(newElement, { id: id });
}

function addClass(element) {
    var newElement = element.cloneNode(true);

    for (var _len15 = arguments.length, klasses = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
        klasses[_key15 - 1] = arguments[_key15];
    }

    klasses.forEach(function (klass) {
        return newElement.classList.add(klass);
    });
    return newElement;
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = app;

var _builders = require('../builders');

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _hero = require('./hero');

var _hero2 = _interopRequireDefault(_hero);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _bottom = require('./bottom');

var _bottom2 = _interopRequireDefault(_bottom);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by bodya on 05.09.17.
 */
function app(store) {
    var modalEle = (0, _modal2.default)(store);
    var navbarEle = (0, _navbar2.default)();
    var heroEle = (0, _hero2.default)();
    var menuEle = (0, _menu2.default)(store);
    var bottomEle = (0, _bottom2.default)();
    var appEle = (0, _builders.addId)((0, _builders.div)(modalEle, navbarEle, heroEle, menuEle, bottomEle), 'app-container');

    return appEle;
}

},{"../builders":1,"./bottom":3,"./hero":4,"./menu":6,"./modal":9,"./navbar":11}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bottom;

var _builders = require('../builders');

function bottom() {
    var name = (0, _builders.p)((0, _builders.text)('Alex Sears'));
    var content = (0, _builders.addClass)((0, _builders.div)(name), 'content', 'is-centered');

    var container = (0, _builders.addClass)((0, _builders.div)(content), 'container');

    return (0, _builders.addClass)((0, _builders.footer)(container), 'footer');
} /**
   * Created by bodya on 06.09.17.
   */

},{"../builders":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hero;

var _builders = require('../builders');

function hero() {
    var logo = (0, _builders.addClass)((0, _builders.img)('static/fancybear_white.png'), 'logo');
    var the = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('The')), 'hero-text-light');
    var fancyBear = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Fancy Bear')), 'hero-text-bold');
    var eateries = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Eateries')), 'hero-text-light');

    var container = (0, _builders.addClass)((0, _builders.div)(logo, the, fancyBear, eateries), 'container');

    var heroContent = (0, _builders.addClass)((0, _builders.div)(container), 'hero-content');

    return (0, _builders.addClass)((0, _builders.section)(heroContent), 'hero', 'splash');
} /**
   * Created by bodya on 05.09.17.
   */

},{"../builders":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = leftMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function leftMenu() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var appetizers = (0, _menuList2.default)('Appetizers', (0, _helpers.filterByType)(items, 'appetizer'));
    var burgers = (0, _menuList2.default)('Burgers', (0, _helpers.filterByType)(items, 'burger'));

    return (0, _builders.addClass)((0, _builders.div)(appetizers, burgers), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = menu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _leftMenu = require('./leftMenu');

var _leftMenu2 = _interopRequireDefault(_leftMenu);

var _rightMenu = require('./rightMenu');

var _rightMenu2 = _interopRequireDefault(_rightMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * Created by bodya on 05.09.17.
                                                                                                                                                                                                     */


function menu(store) {
    var menuEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(), 'container'), 'menu');

    store.on('SET_ITEMS', function (_ref) {
        var items = _ref.items;

        var leftSide = (0, _leftMenu2.default)(items);
        var rightSide = (0, _rightMenu2.default)(items);
        var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
        (0, _helpers.$)('#menu').children(columns);
    });

    store.on('ITEM_ADDED', function (_ref2) {
        var cart = _ref2.cart;

        var cartArray = [].concat(_toConsumableArray(cart));
        var articles = cartArray.map(function (id) {
            return 'article[data-key=\'' + id + '\']';
        });
        var buttons = cartArray.map(function (id) {
            return 'article[data-key=\'' + id + '\'] button.add-to-cart';
        });

        (0, _helpers.$)(articles.join(', ')).addClass('in-cart');
        (0, _helpers.$)(buttons.join(', ')).attr('disabled', 'disabled');
    });

    store.on('ITEM_REMOVED', function (_ref3) {
        var cart = _ref3.cart;

        var onPageKeys = (0, _helpers.$)('article.in-cart').map(function (ele) {
            return parseInt(ele.dataset.key, 10);
        });
        var inCartKeys = [].concat(_toConsumableArray(cart));
        var keysToRemove = onPageKeys.filter(function (key) {
            return !inCartKeys.includes(key);
        });

        keysToRemove.forEach(function (key) {
            (0, _helpers.$)('article[data-key=\'' + key + '\']').removeClass('in-cart');
            (0, _helpers.$)('article[data-key=\'' + key + '\'] button.add-to-cart').attr('disabled', false);
        });
    });

    return menuEle;
}

},{"../builders":1,"../helpers":13,"./leftMenu":5,"./rightMenu":12}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = menuItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

/**
 * Created by bodya on 06.09.17.
 */
function menuItem() {
    var itemData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var name = (0, _builders.addClass)((0, _builders.h3)((0, _builders.text)(itemData.name)), 'name');
    var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)('$' + (0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
    var description = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)(itemData.description)), 'desc');
    var addToCart = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Add to Cart')), 'button', 'is-pulled-right', 'add-to-cart');

    var mediaContent = (0, _builders.addClass)((0, _builders.div)(name, price, description, addToCart), 'media-content');

    var item = (0, _builders.addClass)((0, _builders.article)(mediaContent), 'media', 'menu_item');
    item.dataset.key = itemData.id;

    return item;
}

},{"../builders":1,"../helpers":13}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = menuList;

var _builders = require('../builders');

var _menuItem = require('./menuItem');

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * Created by bodya on 05.09.17.
                                                                                                                                                                                                     */


function menuList(headline) {
    var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var menuItems = items.map(_menuItem2.default);

    var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)(headline)), 'title');

    return (0, _builders.addClass)(_builders.div.apply(undefined, [title].concat(_toConsumableArray(menuItems))), 'collection');
}

},{"../builders":1,"./menuItem":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = modal;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _modalItem = require('./modalItem');

var _modalItem2 = _interopRequireDefault(_modalItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * Created by bodya on 06.09.17.
                                                                                                                                                                                                     */


function modal(store) {
    var close = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'close'), 'close');
    var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)('Cart')), 'title');

    var cartContainer = (0, _builders.addId)((0, _builders.div)((0, _builders.p)((0, _builders.text)('Your cart is empty.'))), 'cart-items');

    var checkoutButton = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Checkout')), 'button', 'is-fullwidth');

    var modalContainer = (0, _builders.addClass)((0, _builders.div)(close, title, cartContainer, checkoutButton), 'modal-container');

    var modalEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.section)(modalContainer), 'modal'), 'modal');

    store.on('TOGGLE_SHOW_CART', function (_ref) {
        var cartVisible = _ref.cartVisible;

        var ele = (0, _helpers.$)('#modal');
        if (cartVisible) {
            ele.addClass('show');
        } else {
            ele.removeClass('show');
        }
    });

    store.on('ITEM_ADDED', function (_ref2) {
        var items = _ref2.items,
            cart = _ref2.cart;

        var cartArray = [].concat(_toConsumableArray(cart));
        var cartItems = cartArray.map(function (itemId) {
            return (0, _modalItem2.default)(items[itemId]);
        });
        var cartList = (0, _builders.addClass)(_builders.ul.apply(undefined, _toConsumableArray(cartItems)), 'menu');
        (0, _helpers.$)('#cart-items').children(cartList);
    });

    return modalEle;
}

},{"../builders":1,"../helpers":13,"./modalItem":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = modalItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

/**
 * Created by bodya on 06.09.17.
 */
function modalItem(itemData) {
    var name = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)(itemData.name)), 'name');
    var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)((0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
    var removeButton = (0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'remove');

    var item = (0, _builders.addClass)((0, _builders.li)(name, price, removeButton), 'menu-item');
    item.dataset.key = itemData.id;

    return item;
}

},{"../builders":1,"../helpers":13}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = navbar;

var _builders = require('../builders');

function navbar() {
    var navLeft = (0, _builders.addClass)((0, _builders.div)(), 'navbar-left');

    var cartIcon = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-shopping-cart'), 'cart-icon');
    var cartItems = (0, _builders.addClass)((0, _builders.span)(), 'cart-items');
    var navbarItem = (0, _builders.addClass)((0, _builders.div)(cartIcon, cartItems), 'navbar-item');
    var navRight = (0, _builders.addClass)((0, _builders.div)(navbarItem), 'navbar-right', 'cart');

    return (0, _builders.addClass)((0, _builders.nav)(navLeft, navRight), 'navbar');
} /**
   * Created by bodya on 05.09.17.
   */

},{"../builders":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rightMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rightMenu() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var soupSalad = (0, _menuList2.default)('Soups and Salads', (0, _helpers.filterByType)(items, 'soup_salad'));
    var desserts = (0, _menuList2.default)('Desserts', (0, _helpers.filterByType)(items, 'dessert'));

    return (0, _builders.addClass)((0, _builders.div)(soupSalad, desserts), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatPrice = formatPrice;
exports.filterByType = filterByType;
exports.$ = $;
/**
 * Created by bodya on 05.09.17.
 */
function formatPrice(price) {
    return parseFloat(price).toFixed(2);
}

function filterByType(map, type) {
    return Object.keys(map).filter(function (key) {
        return map[key].type === type;
    }).map(function (key) {
        return map[key];
    });
}

function $(query) {
    var elements = Array.prototype.slice.call(document.querySelectorAll(query));

    function on(event, cb) {
        elements.forEach(function (ele) {
            ele.addEventListener(event, cb);
        });
    }

    function children(toAdd) {
        elements.forEach(function (ele) {
            while (ele.firstChild) {
                ele.removeChild(ele.firstChild);
            }

            ele.appendChild(toAdd);
        });
    }

    function addClass(klass) {
        elements.forEach(function (ele) {
            ele.classList.add(klass);
        });
    }

    function removeClass(klass) {
        elements.forEach(function (ele) {
            ele.classList.remove(klass);
        });
    }

    function attr(attribute, value) {
        elements.forEach(function (ele) {
            if (value === false) {
                ele.removeAttribute(attribute);
            } else {
                ele.setAttribute(attribute, value);
            }
        });
    }

    function map(cb) {
        return elements.map(cb);
    }

    return {
        on: on,
        children: children,
        addClass: addClass,
        removeClass: removeClass,
        attr: attr,
        map: map
    };
}

},{}],14:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _state = require('./state');

var _setup_listeners = require('./setup_listeners');

var _setup_listeners2 = _interopRequireDefault(_setup_listeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, event, data) {
    switch (event) {
        case 'SET_ITEMS':
            return Object.assign({}, state, {
                items: data.items.reduce(function (total, item) {
                    return Object.assign({}, total, _defineProperty({}, item.id, item));
                }, {})
            });
        case 'ITEM_ADDED':
            return Object.assign({}, state, {
                cart: new Set(state.cart).add(data.item)
            });
        case 'ITEM_REMOVED':
            var newCart = new Set(state.cart);
            newCart.delete(data.item);
            return Object.assign({}, state, {
                cart: newCart
            });
        case 'TOGGLE_SHOW_CART':
            return Object.assign({}, state, {
                cartVisible: !state.cartVisible
            });
        default:
            return state;
    }
}

var store = (0, _state.createStore)(reducer);

fetch('food.json').then(function (res) {
    return res.json();
}).then(function (resBody) {
    var body = document.querySelector('body');
    body.insertBefore((0, _app2.default)(store), body.childNodes[0]);
    store.trigger('SET_ITEMS', { items: resBody });
    (0, _setup_listeners2.default)(store);
});

},{"./components/app":2,"./setup_listeners":15,"./state":16}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (store) {
    (0, _helpers.$)('#cart-icon, #close').on('click', function () {
        store.trigger('TOGGLE_SHOW_CART');
    });

    function getParentWithKey(element) {
        var parent = element.parentElement;

        while (parent && !parent.dataset.key) {
            parent = parent.parentElement;
        }

        return parent;
    }

    (0, _helpers.$)('.add-to-cart').on('click', function (e) {
        var parent = getParentWithKey(e.currentTarget);

        var key = parseInt(parent.dataset.key, 10);
        store.trigger('ITEM_ADDED', { item: key });
    });

    (0, _helpers.$)('body').on('click', function (e) {
        if (e.target.classList.contains('remove')) {
            var element = e.target;
            var parent = getParentWithKey(element);
            var key = parseInt(parent.dataset.key, 10);

            parent.parentElement.removeChild(parent);
            store.trigger('ITEM_REMOVED', { item: key });
        }
    });
};

var _helpers = require('./helpers');

},{"./helpers":13}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createStore = createStore;
/**
 * Created by bodya on 06.09.17.
 */
var defaultState = {
    items: {},
    cart: new Set(),
    cartVisible: false
};

function createStore(reducer) {
    var listeners = {};
    var state = Object.assign({}, defaultState);

    function on(event, cb) {
        if (!listeners[event]) {
            listeners[event] = [];
        }

        listeners[event].push(cb);
    }

    function trigger(event) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        state = reducer(state, event, data);

        if (listeners[event]) {
            listeners[event].forEach(function (cb) {
                cb(state);
            });
        }
    }

    return {
        on: on,
        trigger: trigger
    };
}

},{}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9ib3R0b20uanMiLCJzcmMvanMvY29tcG9uZW50cy9oZXJvLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbGVmdE1lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWVudUl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51TGlzdC5qcyIsInNyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWxJdGVtLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvcmlnaHRNZW51LmpzIiwic3JjL2pzL2hlbHBlcnMuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvc2V0dXBfbGlzdGVuZXJzLmpzIiwic3JjL2pzL3N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7UUNHZ0IsSSxHQUFBLEk7UUFJQSxhLEdBQUEsYTtRQU1BLEcsR0FBQSxHO1FBSUEsQyxHQUFBLEM7UUFJQSxHLEdBQUEsRztRQUlBLEUsR0FBQSxFO1FBSUEsRSxHQUFBLEU7UUFJQSxPLEdBQUEsTztRQUlBLE8sR0FBQSxPO1FBSUEsRSxHQUFBLEU7UUFJQSxFLEdBQUEsRTtRQUlBLEMsR0FBQSxDO1FBSUEsSSxHQUFBLEk7UUFJQSxNLEdBQUEsTTtRQUlBLE0sR0FBQSxNO1FBR0EsRyxHQUFBLEc7UUFNQSxLLEdBQUEsSztRQUtBLFEsR0FBQSxRO0FBM0VoQjs7O0FBR08sU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUN4QixXQUFPLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFQO0FBQ0g7O0FBRU0sU0FBUyxhQUFULENBQXVCLElBQXZC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QixtQkFBRyxLQUFIO0FBQ0gsYUFGRDtBQUdIO0FBQ0o7O0FBRUQsV0FBTztBQUNILGNBREc7QUFFSDtBQUZHLEtBQVA7QUFJSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENyZWF0ZWQgYnkgYm9keWEgb24gMDUuMDkuMTcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0KHdvcmRzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHdvcmRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgLi4uY2hpbGRyZW4pIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdiguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2knLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXYoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbmF2JywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdWwoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgndWwnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaSguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb24oLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGUoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGgxKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2gxJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaDMoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaDMnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3AnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFuKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb290ZXIoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnV0dG9uKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIC4uLmNoaWxkcmVuKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbWcoc291cmNlKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSBzb3VyY2U7XG4gICAgcmV0dXJuIGltYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSWQoZWxlbWVudCwgaWQpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3RWxlbWVudCwgeyBpZCB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLmtsYXNzZXMpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAga2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChrbGFzcykpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufSIsIi8qKlxuICogQ3JlYXRlZCBieSBib2R5YSBvbiAwNS4wOS4xNy5cbiAqL1xuaW1wb3J0IHsgZGl2LCBhZGRJZCB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCBuYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xuaW1wb3J0IGhlcm8gZnJvbSAnLi9oZXJvJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgYm90dG9tIGZyb20gJy4vYm90dG9tJztcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKHN0b3JlKSB7XG4gICAgY29uc3QgbW9kYWxFbGUgPSBtb2RhbChzdG9yZSk7XG4gICAgY29uc3QgbmF2YmFyRWxlID0gbmF2YmFyKCk7XG4gICAgY29uc3QgaGVyb0VsZSA9IGhlcm8oKTtcbiAgICBjb25zdCBtZW51RWxlID0gbWVudShzdG9yZSk7XG4gICAgY29uc3QgYm90dG9tRWxlID0gYm90dG9tKCk7XG4gICAgY29uc3QgYXBwRWxlID0gYWRkSWQoZGl2KG1vZGFsRWxlLCBuYXZiYXJFbGUsIGhlcm9FbGUsIG1lbnVFbGUsIGJvdHRvbUVsZSksICdhcHAtY29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4gYXBwRWxlO1xufSIsIi8qKlxuICogQ3JlYXRlZCBieSBib2R5YSBvbiAwNi4wOS4xNy5cbiAqL1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgZm9vdGVyLCB0ZXh0LCBwIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib3R0b20oKSB7XG4gICAgY29uc3QgbmFtZSA9IHAodGV4dCgnQWxleCBTZWFycycpKTtcbiAgICBjb25zdCBjb250ZW50ID0gYWRkQ2xhc3MoZGl2KG5hbWUpLCAnY29udGVudCcsICdpcy1jZW50ZXJlZCcpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNvbnRlbnQpLCAnY29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3MoZm9vdGVyKGNvbnRhaW5lciksICdmb290ZXInKTtcbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgYm9keWEgb24gMDUuMDkuMTcuXG4gKi9cbmltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGltZywgcCwgc2VjdGlvbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVybygpIHtcbiAgICBjb25zdCBsb2dvID0gYWRkQ2xhc3MoaW1nKCdzdGF0aWMvZmFuY3liZWFyX3doaXRlLnBuZycpLCAnbG9nbycpO1xuICAgIGNvbnN0IHRoZSA9IGFkZENsYXNzKHAodGV4dCgnVGhlJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XG4gICAgY29uc3QgZmFuY3lCZWFyID0gYWRkQ2xhc3MocCh0ZXh0KCdGYW5jeSBCZWFyJykpLCAnaGVyby10ZXh0LWJvbGQnKTtcbiAgICBjb25zdCBlYXRlcmllcyA9IGFkZENsYXNzKHAodGV4dCgnRWF0ZXJpZXMnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGFkZENsYXNzKGRpdihsb2dvLCB0aGUsIGZhbmN5QmVhciwgZWF0ZXJpZXMpLCAnY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBoZXJvQ29udGVudCA9IGFkZENsYXNzKGRpdihjb250YWluZXIpLCAnaGVyby1jb250ZW50Jyk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3Moc2VjdGlvbihoZXJvQ29udGVudCksICdoZXJvJywgJ3NwbGFzaCcpO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGVmdE1lbnUoaXRlbXMgPSBbXSkge1xuICAgIGNvbnN0IGFwcGV0aXplcnMgPSBtZW51TGlzdCgnQXBwZXRpemVycycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2FwcGV0aXplcicpKTtcbiAgICBjb25zdCBidXJnZXJzID0gbWVudUxpc3QoJ0J1cmdlcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdidXJnZXInKSk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3MoZGl2KGFwcGV0aXplcnMsIGJ1cmdlcnMpLCAnY29sdW1uJywgJ2lzLTYnKTtcbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgYm9keWEgb24gMDUuMDkuMTcuXG4gKi9cbmltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgZGl2LCBzZWN0aW9uIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgJCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vbGVmdE1lbnUnO1xuaW1wb3J0IHJpZ2h0TWVudSBmcm9tICcuL3JpZ2h0TWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoc3RvcmUpIHtcbiAgICBjb25zdCBtZW51RWxlID0gYWRkSWQoYWRkQ2xhc3MoZGl2KCksICdjb250YWluZXInKSwgJ21lbnUnKTtcblxuICAgIHN0b3JlLm9uKCdTRVRfSVRFTVMnLCAoeyBpdGVtcyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGxlZnRTaWRlID0gbGVmdE1lbnUoaXRlbXMpO1xuICAgICAgICBjb25zdCByaWdodFNpZGUgPSByaWdodE1lbnUoaXRlbXMpO1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gYWRkQ2xhc3Moc2VjdGlvbihsZWZ0U2lkZSwgcmlnaHRTaWRlKSwgJ2NvbHVtbnMnKTtcbiAgICAgICAgJCgnI21lbnUnKS5jaGlsZHJlbihjb2x1bW5zKTtcbiAgICB9KTtcblxuICAgIHN0b3JlLm9uKCdJVEVNX0FEREVEJywgKHsgY2FydCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcnRBcnJheSA9IFsuLi5jYXJ0XTtcbiAgICAgICAgY29uc3QgYXJ0aWNsZXMgPSBjYXJ0QXJyYXkubWFwKGlkID0+IGBhcnRpY2xlW2RhdGEta2V5PScke2lkfSddYCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBjYXJ0QXJyYXkubWFwKGlkID0+IGBhcnRpY2xlW2RhdGEta2V5PScke2lkfSddIGJ1dHRvbi5hZGQtdG8tY2FydGApO1xuXG4gICAgICAgICQoYXJ0aWNsZXMuam9pbignLCAnKSkuYWRkQ2xhc3MoJ2luLWNhcnQnKTtcbiAgICAgICAgJChidXR0b25zLmpvaW4oJywgJykpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgfSk7XG5cbiAgICBzdG9yZS5vbignSVRFTV9SRU1PVkVEJywgKHsgY2FydCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG9uUGFnZUtleXMgPSAkKCdhcnRpY2xlLmluLWNhcnQnKS5tYXAoZWxlID0+IHBhcnNlSW50KGVsZS5kYXRhc2V0LmtleSwgMTApKTtcbiAgICAgICAgY29uc3QgaW5DYXJ0S2V5cyA9IFsuLi5jYXJ0XTtcbiAgICAgICAgY29uc3Qga2V5c1RvUmVtb3ZlID0gb25QYWdlS2V5cy5maWx0ZXIoa2V5ID0+ICFpbkNhcnRLZXlzLmluY2x1ZGVzKGtleSkpO1xuXG4gICAgICAgIGtleXNUb1JlbW92ZS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAkKGBhcnRpY2xlW2RhdGEta2V5PScke2tleX0nXWApLnJlbW92ZUNsYXNzKCdpbi1jYXJ0Jyk7XG4gICAgICAgICAgICAkKGBhcnRpY2xlW2RhdGEta2V5PScke2tleX0nXSBidXR0b24uYWRkLXRvLWNhcnRgKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudUVsZTtcbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgYm9keWEgb24gMDYuMDkuMTcuXG4gKi9cbmltcG9ydCB7IGFkZENsYXNzLCBhcnRpY2xlLCBidXR0b24sIGRpdiwgaDMsIHAsIHNwYW4sIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51SXRlbShpdGVtRGF0YSA9IHt9KSB7XG4gICAgY29uc3QgbmFtZSA9IGFkZENsYXNzKGgzKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xuICAgIGNvbnN0IHByaWNlID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGAkJHtmb3JtYXRQcmljZShpdGVtRGF0YS5wcmljZSl9YCkpLCAncHJpY2UnLCAnaXMtcHVsbGVkLXJpZ2h0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBhZGRDbGFzcyhwKHRleHQoaXRlbURhdGEuZGVzY3JpcHRpb24pKSwgJ2Rlc2MnKTtcbiAgICBjb25zdCBhZGRUb0NhcnQgPSBhZGRDbGFzcyhidXR0b24odGV4dCgnQWRkIHRvIENhcnQnKSksICdidXR0b24nLCAnaXMtcHVsbGVkLXJpZ2h0JywgJ2FkZC10by1jYXJ0Jyk7XG5cbiAgICBjb25zdCBtZWRpYUNvbnRlbnQgPSBhZGRDbGFzcyhkaXYobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBhZGRUb0NhcnQpLCAnbWVkaWEtY29udGVudCcpO1xuXG4gICAgY29uc3QgaXRlbSA9IGFkZENsYXNzKGFydGljbGUobWVkaWFDb250ZW50KSwgJ21lZGlhJywgJ21lbnVfaXRlbScpO1xuICAgIGl0ZW0uZGF0YXNldC5rZXkgPSBpdGVtRGF0YS5pZDtcblxuICAgIHJldHVybiBpdGVtO1xufSIsIi8qKlxuICogQ3JlYXRlZCBieSBib2R5YSBvbiAwNS4wOS4xNy5cbiAqL1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgaDEsIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgbWVudUl0ZW0gZnJvbSAnLi9tZW51SXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVMaXN0KGhlYWRsaW5lLCBpdGVtcyA9IFtdKSB7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gaXRlbXMubWFwKG1lbnVJdGVtKTtcblxuICAgIGNvbnN0IHRpdGxlID0gYWRkQ2xhc3MoaDEodGV4dChoZWFkbGluZSkpLCAndGl0bGUnKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYodGl0bGUsIC4uLm1lbnVJdGVtcyksICdjb2xsZWN0aW9uJyk7XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGJvZHlhIG9uIDA2LjA5LjE3LlxuICovXG5pbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGJ1dHRvbiwgZGl2LCBoMSwgaSwgcCwgc2VjdGlvbiwgdGV4dCwgdWwgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbW9kYWxJdGVtIGZyb20gJy4vbW9kYWxJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoc3RvcmUpIHtcbiAgICBjb25zdCBjbG9zZSA9IGFkZElkKGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXRpbWVzJywgJ2Nsb3NlJyksICdjbG9zZScpO1xuICAgIGNvbnN0IHRpdGxlID0gYWRkQ2xhc3MoaDEodGV4dCgnQ2FydCcpKSwgJ3RpdGxlJyk7XG5cbiAgICBjb25zdCBjYXJ0Q29udGFpbmVyID0gYWRkSWQoZGl2KHAodGV4dCgnWW91ciBjYXJ0IGlzIGVtcHR5LicpKSksICdjYXJ0LWl0ZW1zJyk7XG5cbiAgICBjb25zdCBjaGVja291dEJ1dHRvbiA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdDaGVja291dCcpKSwgJ2J1dHRvbicsICdpcy1mdWxsd2lkdGgnKTtcblxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNsb3NlLCB0aXRsZSwgY2FydENvbnRhaW5lciwgY2hlY2tvdXRCdXR0b24pLCAnbW9kYWwtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtb2RhbEVsZSA9IGFkZElkKGFkZENsYXNzKHNlY3Rpb24obW9kYWxDb250YWluZXIpLCAnbW9kYWwnKSwgJ21vZGFsJyk7XG5cbiAgICBzdG9yZS5vbignVE9HR0xFX1NIT1dfQ0FSVCcsICh7IGNhcnRWaXNpYmxlIH0pID0+IHtcbiAgICAgICAgY29uc3QgZWxlID0gJCgnI21vZGFsJyk7XG4gICAgICAgIGlmIChjYXJ0VmlzaWJsZSkge1xuICAgICAgICAgICAgZWxlLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3RvcmUub24oJ0lURU1fQURERUQnLCAoeyBpdGVtcywgY2FydCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcnRBcnJheSA9IFsuLi5jYXJ0XTtcbiAgICAgICAgY29uc3QgY2FydEl0ZW1zID0gY2FydEFycmF5Lm1hcChpdGVtSWQgPT4gbW9kYWxJdGVtKGl0ZW1zW2l0ZW1JZF0pKTtcbiAgICAgICAgY29uc3QgY2FydExpc3QgPSBhZGRDbGFzcyh1bCguLi5jYXJ0SXRlbXMpLCAnbWVudScpO1xuICAgICAgICAkKCcjY2FydC1pdGVtcycpLmNoaWxkcmVuKGNhcnRMaXN0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtb2RhbEVsZTtcbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgYm9keWEgb24gMDYuMDkuMTcuXG4gKi9cbmltcG9ydCB7IGFkZENsYXNzLCBpLCBsaSwgc3BhbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsSXRlbShpdGVtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBhZGRDbGFzcyhzcGFuKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xuICAgIGNvbnN0IHByaWNlID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGZvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKSkpLCAncHJpY2UnLCAnaXMtcHVsbGVkLXJpZ2h0Jyk7XG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAncmVtb3ZlJyk7XG5cbiAgICBjb25zdCBpdGVtID0gYWRkQ2xhc3MobGkobmFtZSwgcHJpY2UsIHJlbW92ZUJ1dHRvbiksICdtZW51LWl0ZW0nKTtcbiAgICBpdGVtLmRhdGFzZXQua2V5ID0gaXRlbURhdGEuaWQ7XG5cbiAgICByZXR1cm4gaXRlbTtcbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgYm9keWEgb24gMDUuMDkuMTcuXG4gKi9cbmltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgZGl2LCBpLCBuYXYsIHNwYW4gfSBmcm9tICcuLi9idWlsZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcbiAgICBjb25zdCBuYXZMZWZ0ID0gYWRkQ2xhc3MoZGl2KCksICduYXZiYXItbGVmdCcpO1xuXG4gICAgY29uc3QgY2FydEljb24gPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS1zaG9wcGluZy1jYXJ0JyksICdjYXJ0LWljb24nKTtcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSBhZGRDbGFzcyhzcGFuKCksICdjYXJ0LWl0ZW1zJyk7XG4gICAgY29uc3QgbmF2YmFySXRlbSA9IGFkZENsYXNzKGRpdihjYXJ0SWNvbiwgY2FydEl0ZW1zKSwgJ25hdmJhci1pdGVtJyk7XG4gICAgY29uc3QgbmF2UmlnaHQgPSBhZGRDbGFzcyhkaXYobmF2YmFySXRlbSksICduYXZiYXItcmlnaHQnLCAnY2FydCcpO1xuXG4gICAgcmV0dXJuIGFkZENsYXNzKG5hdihuYXZMZWZ0LCBuYXZSaWdodCksICduYXZiYXInKTtcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbWVudUxpc3QgZnJvbSAnLi9tZW51TGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJpZ2h0TWVudShpdGVtcyA9IFtdKSB7XG4gICAgY29uc3Qgc291cFNhbGFkID0gbWVudUxpc3QoJ1NvdXBzIGFuZCBTYWxhZHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdzb3VwX3NhbGFkJykpO1xuICAgIGNvbnN0IGRlc3NlcnRzID0gbWVudUxpc3QoJ0Rlc3NlcnRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnZGVzc2VydCcpKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYoc291cFNhbGFkLCBkZXNzZXJ0cyksICdjb2x1bW4nLCAnaXMtNicpO1xufSIsIi8qKlxuICogQ3JlYXRlZCBieSBib2R5YSBvbiAwNS4wOS4xNy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaWNlKHByaWNlKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeVR5cGUobWFwLCB0eXBlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcClcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gbWFwW2tleV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgLm1hcChrZXkgPT4gbWFwW2tleV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gJChxdWVyeSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpO1xuXG4gICAgZnVuY3Rpb24gb24oZXZlbnQsIGNiKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoaWxkcmVuKHRvQWRkKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChlbGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGVsZS5yZW1vdmVDaGlsZChlbGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZS5hcHBlbmRDaGlsZCh0b0FkZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZENsYXNzKGtsYXNzKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGtsYXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3Moa2xhc3MpIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoa2xhc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdHRyKGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGVsZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIG1hcChjYikge1xuICAgICAgICByZXR1cm4gZWxlbWVudHMubWFwKGNiKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvbixcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGFkZENsYXNzLFxuICAgICAgICByZW1vdmVDbGFzcyxcbiAgICAgICAgYXR0cixcbiAgICAgICAgbWFwLFxuICAgIH07XG5cbn0iLCJpbXBvcnQgYXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCBzZXR1cExpc3RlbmVycyBmcm9tICcuL3NldHVwX2xpc3RlbmVycyc7XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGV2ZW50LCBkYXRhKSB7XG4gICAgc3dpdGNoIChldmVudCkge1xuICAgICAgICBjYXNlICdTRVRfSVRFTVMnOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRvdGFsLCB7IFtpdGVtLmlkXTogaXRlbSB9KVxuICAgICAgICAgICAgICAgICAgICAsIHt9KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlICdJVEVNX0FEREVEJzpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGNhcnQ6IChuZXcgU2V0KHN0YXRlLmNhcnQpKS5hZGQoZGF0YS5pdGVtKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlICdJVEVNX1JFTU9WRUQnOlxuICAgICAgICAgICAgY29uc3QgbmV3Q2FydCA9IChuZXcgU2V0KHN0YXRlLmNhcnQpKTtcbiAgICAgICAgICAgIG5ld0NhcnQuZGVsZXRlKGRhdGEuaXRlbSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBjYXJ0OiBuZXdDYXJ0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ1RPR0dMRV9TSE9XX0NBUlQnOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgY2FydFZpc2libGU6ICFzdGF0ZS5jYXJ0VmlzaWJsZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcblxuZmV0Y2goJ2Zvb2QuanNvbicpXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4ocmVzQm9keSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGFwcChzdG9yZSksIGJvZHkuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIHN0b3JlLnRyaWdnZXIoJ1NFVF9JVEVNUycsIHsgaXRlbXM6IHJlc0JvZHkgfSk7XG4gICAgICAgIHNldHVwTGlzdGVuZXJzKHN0b3JlKTtcbiAgICB9KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgYm9keWEgb24gMDYuMDkuMTcuXG4gKi9cbmltcG9ydCB7ICQgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAkKCcjY2FydC1pY29uLCAjY2xvc2UnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN0b3JlLnRyaWdnZXIoJ1RPR0dMRV9TSE9XX0NBUlQnKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdldFBhcmVudFdpdGhLZXkoZWxlbWVudCkge1xuICAgICAgICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIHdoaWxlIChwYXJlbnQgJiYgIXBhcmVudC5kYXRhc2V0LmtleSkge1xuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgICQoJy5hZGQtdG8tY2FydCcpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRQYXJlbnRXaXRoS2V5KGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgY29uc3Qga2V5ID0gcGFyc2VJbnQocGFyZW50LmRhdGFzZXQua2V5LCAxMCk7XG4gICAgICAgIHN0b3JlLnRyaWdnZXIoJ0lURU1fQURERUQnLCB7IGl0ZW06IGtleSB9KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVtb3ZlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGdldFBhcmVudFdpdGhLZXkoZWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBwYXJzZUludChwYXJlbnQuZGF0YXNldC5rZXksIDEwKTtcblxuICAgICAgICAgICAgcGFyZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocGFyZW50KTtcbiAgICAgICAgICAgIHN0b3JlLnRyaWdnZXIoJ0lURU1fUkVNT1ZFRCcsIHsgaXRlbToga2V5IH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGJvZHlhIG9uIDA2LjA5LjE3LlxuICovXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gICAgaXRlbXM6IHt9LFxuICAgIGNhcnQ6IChuZXcgU2V0KCkpLFxuICAgIGNhcnRWaXNpYmxlOiBmYWxzZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB7fTtcbiAgICBsZXQgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3RhdGUpO1xuXG4gICAgZnVuY3Rpb24gb24oZXZlbnQsIGNiKSB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyKGV2ZW50LCBkYXRhID0ge30pIHtcbiAgICAgICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBldmVudCwgZGF0YSk7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tldmVudF0uZm9yRWFjaChjYiA9PiB7XG4gICAgICAgICAgICAgICAgY2Ioc3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvbixcbiAgICAgICAgdHJpZ2dlclxuICAgIH07XG59Il19
