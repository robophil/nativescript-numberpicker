"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common = require("./numberpicker.common");
function onValuePropertyChanged(data) {
    var picker = data.object;
    picker.android.setValue(data.newValue);
}
common.NumberPicker.valueProperty.metadata.onSetNativeValue = onValuePropertyChanged;
global.moduleMerge(common, exports);
var NumberPicker = (function (_super) {
    __extends(NumberPicker, _super);
    function NumberPicker() {
        _super.call(this);
        var that = new WeakRef(this);
        this._listener = new android.widget.NumberPicker.OnValueChangeListener({
            get owner() {
                return that.get();
            },
            onValueChange: function (picker, oldVal, newVal) {
                var instance = that.get();
                if (instance) {
                    instance._onPropertyChangedFromNative(NumberPicker.valueProperty, newVal);
                }
                console.log("value has been changed");
            }
        });
    }
    Object.defineProperty(NumberPicker.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    NumberPicker.prototype._createUI = function () {
        this._android = new android.widget.NumberPicker(this._context);
        this._android.setOnValueChangedListener(this._listener);
        this._android.setMaxValue(100);
        this._android.setMinValue(0);
        this._android.setWrapSelectorWheel(true);
        this._android.setValue(1);
        console.log("view has been created");
    };
    return NumberPicker;
}(common.NumberPicker));
exports.NumberPicker = NumberPicker;
//# sourceMappingURL=numberpicker.android.js.map