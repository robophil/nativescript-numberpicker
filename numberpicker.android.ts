import common = require("./numberpicker.common");
import dependencyObservable = require("ui/core/dependency-observable");
import proxy = require("ui/core/proxy");
import utils = require("utils/utils")
import * as types from "utils/types";

function onValuePropertyChanged(data: dependencyObservable.PropertyChangeData) {
    let picker = <NumberPicker>data.object;
    picker.android.setValue(data.newValue);
}

(<proxy.PropertyMetadata>common.NumberPicker.valueProperty.metadata).onSetNativeValue = onValuePropertyChanged;

global.moduleMerge(common, exports);

export class NumberPicker extends common.NumberPicker {
    private _android: android.widget.NumberPicker;
    public _listener: android.widget.NumberPicker.OnValueChangeListener;

    constructor() {
        super();
        var that = new WeakRef(this);

        this._listener = new android.widget.NumberPicker.OnValueChangeListener(
            <utils.Owned & android.widget.NumberPicker.IOnValueChangeListener>{
                get owner() {
                    return that.get();
                },
                onValueChange: (picker: android.widget.NumberPicker, oldVal: number, newVal: number)=>{
                    let instance = that.get();
                    if(instance) {
                        instance._onPropertyChangedFromNative(NumberPicker.valueProperty, newVal);
                    }
                }
            }
        );
    }

    get android(): android.widget.NumberPicker {
        return this._android;
    }

    public _createUI() {
        this._android = new android.widget.NumberPicker(this._context);
        this._android.setOnValueChangedListener(this._listener);
    }
}