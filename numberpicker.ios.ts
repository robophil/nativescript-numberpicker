import common = require("./numberpicker.common"); 
import dependencyObservable = require("ui/core/dependency-observable");
import proxy = require("ui/core/proxy");
import utils = require("utils/utils");
import * as types from "utils/types";

declare var interop:any;//to stop vscode from shouting error :)

global.moduleMerge(common, exports);

export class NumberPicker extends common.NumberPicker {
    private _ios: UIStepper;
    public _changeHandler: NSObject;

    constructor() {
        super();
        this._ios = new UIStepper();
        this._changeHandler = NumberPickerChangeHandlerImpl.initWithOwner(new WeakRef(this));
        this._ios.addTargetActionForControlEvents(this._changeHandler, "valueChanged", UIControlEvents.UIControlEventValueChanged);
    }

    get ios(): UIStepper {
        return this._ios;
    }

    public _onValuePropertyChanged(data: dependencyObservable.PropertyChangeData){
        this._ios.value = data.newValue;
    }

    public _onMinValuePropertyChanged(data: dependencyObservable.PropertyChangeData){
        this._ios.minimumValue = data.newValue;
    }

    public _onMaxValuePropertyChanged(data: dependencyObservable.PropertyChangeData){
        this._ios.maximumValue = data.newValue;
    }
}

class NumberPickerChangeHandlerImpl extends NSObject{
    private _owner: WeakRef<NumberPicker>;

    public static initWithOwner(owner: WeakRef<NumberPicker>): NumberPickerChangeHandlerImpl {
        let impl = <NumberPickerChangeHandlerImpl>NumberPickerChangeHandlerImpl.new();
        impl._owner = owner;
        return impl;
    }

    public valueChanged(sender: UIStepper) {

        let owner = this._owner.get();
        if (!owner) {
            return;
        }
        
        if (owner) {
            owner._onPropertyChangedFromNative(common.NumberPicker.valueProperty, sender.value);
        }
    }

    public static ObjCExposedMethods = {
        'valueChanged': { returns: interop.types.void, params: [UIStepper] }
    };

}