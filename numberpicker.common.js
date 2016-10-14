"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dependencyObservable = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");
var view = require("ui/core/view");
function onValuePropertyChanged(data) {
    var picker = data.object;
    picker._onValuePropertyChanged(data);
}
function onMinValuePropertyChanged(data) {
    var picker = data.object;
    picker._onMinValuePropertyChanged(data);
}
function onMaxValuePropertyChanged(data) {
    var picker = data.object;
    picker._onMaxValuePropertyChanged(data);
}
var NumberPicker = (function (_super) {
    __extends(NumberPicker, _super);
    function NumberPicker() {
        _super.call(this);
    }
    Object.defineProperty(NumberPicker.prototype, "value", {
        get: function () {
            return this._getValue(NumberPicker.valueProperty);
        },
        set: function (value) {
            this._setValue(NumberPicker.valueProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberPicker.prototype, "minValue", {
        get: function () {
            return this._getValue(NumberPicker.minValueProperty);
        },
        set: function (value) {
            this._setValue(NumberPicker.minValueProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberPicker.prototype, "maxValue", {
        get: function () {
            return this._getValue(NumberPicker.maxValueProperty);
        },
        set: function (value) {
            this._setValue(NumberPicker.maxValueProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    NumberPicker.prototype._onValuePropertyChanged = function (data) {
    };
    NumberPicker.prototype._onMinValuePropertyChanged = function (data) {
    };
    NumberPicker.prototype._onMaxValuePropertyChanged = function (data) {
    };
    NumberPicker.minValueProperty = new dependencyObservable.Property("minValue", "NumberPicker", new proxy.PropertyMetadata(0, dependencyObservable.PropertyMetadataSettings.AffectsLayout));
    NumberPicker.maxValueProperty = new dependencyObservable.Property("maxValue", "NumberPicker", new proxy.PropertyMetadata(0, dependencyObservable.PropertyMetadataSettings.AffectsLayout));
    NumberPicker.valueProperty = new dependencyObservable.Property("value", "NumberPicker", new proxy.PropertyMetadata(0, dependencyObservable.PropertyMetadataSettings.AffectsLayout));
    return NumberPicker;
}(view.View));
exports.NumberPicker = NumberPicker;
NumberPicker.minValueProperty.metadata.onSetNativeValue = onMinValuePropertyChanged;
NumberPicker.maxValueProperty.metadata.onSetNativeValue = onMaxValuePropertyChanged;
NumberPicker.valueProperty.metadata.onSetNativeValue = onValuePropertyChanged;
//# sourceMappingURL=numberpicker.common.js.map