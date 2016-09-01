import common = require("./numberpicker.common");
export declare class NumberPicker extends common.NumberPicker {
    private _android;
    _listener: android.widget.NumberPicker.OnValueChangeListener;
    constructor();
    android: android.widget.NumberPicker;
    _createUI(): void;
}
