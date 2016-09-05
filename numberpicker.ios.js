"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common = require("./numberpicker.common");
global.moduleMerge(common, exports);
var NumberPicker = (function (_super) {
    __extends(NumberPicker, _super);
    function NumberPicker() {
        _super.call(this);
        this._ios = new UIStepper();
        this._changeHandler = NumberPickerChangeHandlerImpl.initWithOwner(new WeakRef(this));
        this._ios.addTargetActionForControlEvents(this._changeHandler, "valueChanged", UIControlEvents.UIControlEventValueChanged);
    }
    Object.defineProperty(NumberPicker.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    NumberPicker.prototype._onValuePropertyChanged = function (data) {
        this._ios.value = data.newValue;
    };
    NumberPicker.prototype._onMinValuePropertyChanged = function (data) {
        this._ios.minimumValue = data.newValue;
    };
    NumberPicker.prototype._onMaxValuePropertyChanged = function (data) {
        this._ios.maximumValue = data.newValue;
    };
    return NumberPicker;
}(common.NumberPicker));
exports.NumberPicker = NumberPicker;
var NumberPickerChangeHandlerImpl = (function (_super) {
    __extends(NumberPickerChangeHandlerImpl, _super);
    function NumberPickerChangeHandlerImpl() {
        _super.apply(this, arguments);
    }
    NumberPickerChangeHandlerImpl.initWithOwner = function (owner) {
        var impl = NumberPickerChangeHandlerImpl.new();
        impl._owner = owner;
        return impl;
    };
    NumberPickerChangeHandlerImpl.prototype.valueChanged = function (sender) {
        var owner = this._owner.get();
        if (!owner) {
            return;
        }
        if (owner) {
            owner._onPropertyChangedFromNative(common.NumberPicker.valueProperty, sender.value);
        }
    };
    NumberPickerChangeHandlerImpl.ObjCExposedMethods = {
        'valueChanged': { returns: interop.types.void, params: [UIStepper] }
    };
    return NumberPickerChangeHandlerImpl;
}(NSObject));
//# sourceMappingURL=numberpicker.ios.js.map