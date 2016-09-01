import definition = require("interface/numberpicker");
import dependencyObservable = require("ui/core/dependency-observable");
import view = require("ui/core/view");
export declare class NumberPicker extends view.View implements definition.NumberPicker {
    static valueProperty: dependencyObservable.Property;
    minValue: number;
    maxValue: number;
    constructor();
    value: number;
}
