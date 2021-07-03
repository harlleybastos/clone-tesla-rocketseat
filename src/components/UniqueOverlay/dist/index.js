"use strict";
exports.__esModule = true;
var styles_1 = require("./styles");
function UniqueOverlay() {
    return (React.createElement(styles_1.Container, null,
        React.createElement(Header, null,
            React.createElement(Logo, null),
            React.createElement(Burguer, null)),
        React.createElement(Footer, null,
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "UI Clone"))))));
}
;
exports["default"] = UniqueOverlay;
