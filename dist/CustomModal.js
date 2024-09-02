"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./CustomModal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CustomModal = _ref => {
  let {
    isOpen,
    onRequestClose,
    children
  } = _ref;
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, children, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-close-button",
    onClick: onRequestClose
  }, "Close")));
};
var _default = exports.default = CustomModal;