import common = require("./numberpicker.common"); 
import dependencyObservable = require("ui/core/dependency-observable");
import proxy = require("ui/core/proxy");
import utils = require("utils/utils");
import * as types from "utils/types";

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

    public _createUI() {
        this._android = new android.widget.NumberPicker(this._context);
        this._android.setOnValueChangedListener(this._listener);
        this._android.setDescendantFocusability(android.widget.NumberPicker.FOCUS_BLOCK_DESCENDANTS);
        this._android.setWrapSelectorWheel(true);
    }

    get android(): android.widget.NumberPicker {
        return this._android;
    }

    public _onValuePropertyChanged(data: dependencyObservable.PropertyChangeData){
        this._android.setValue(data.newValue);
    }

    public _onMinValuePropertyChanged(data: dependencyObservable.PropertyChangeData){
        this._android.setMinValue(data.newValue);
    }

    public _onMaxValuePropertyChanged(data: dependencyObservable.PropertyChangeData){
        this._android.setMaxValue(data.newValue);
    }
}