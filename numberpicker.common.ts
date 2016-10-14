import definition = require("nativescript-numberpicker"); 
import dependencyObservable = require("ui/core/dependency-observable");
import proxy = require("ui/core/proxy");
import view = require("ui/core/view");

/*  When you set the `value` property
    Function called to pass changes to nativeside(android/ios) from nativescript
 */
function onValuePropertyChanged(data: dependencyObservable.PropertyChangeData) {
    let picker = <NumberPicker>data.object;
    
    //calls platform specific code
    picker._onValuePropertyChanged(data);
}
/*  When you set the `minValue` property
    Function called to pass changes to nativeside(android/ios) from nativescript
 */
function onMinValuePropertyChanged(data: dependencyObservable.PropertyChangeData) {
    let picker = <NumberPicker>data.object;
    picker._onMinValuePropertyChanged(data);
}
/*  When you set the `maxValue` property
    Function called to pass changes to nativeside(android/ios) from nativescript
 */
function onMaxValuePropertyChanged(data: dependencyObservable.PropertyChangeData) {
    let picker = <NumberPicker>data.object;
    picker._onMaxValuePropertyChanged(data);
}


export class NumberPicker extends view.View implements definition.NumberPicker {
    public static minValueProperty = new dependencyObservable.Property("minValue", "NumberPicker", new proxy.PropertyMetadata(0, dependencyObservable.PropertyMetadataSettings.AffectsLayout));
    public static maxValueProperty = new dependencyObservable.Property("maxValue", "NumberPicker", new proxy.PropertyMetadata(0, dependencyObservable.PropertyMetadataSettings.AffectsLayout));
    public static valueProperty = new dependencyObservable.Property("value", "NumberPicker", new proxy.PropertyMetadata(0, dependencyObservable.PropertyMetadataSettings.AffectsLayout));

    constructor() {
        super();
    }

    get value(): number {
        return this._getValue(NumberPicker.valueProperty);
    }

    set value(value: number) {
        this._setValue(NumberPicker.valueProperty, value);
    }

    get minValue(): number {
        return this._getValue(NumberPicker.minValueProperty);
    }

    set minValue(value: number){
        this._setValue(NumberPicker.minValueProperty, value);
    }

    get maxValue(): number {
        return this._getValue(NumberPicker.maxValueProperty);
    }

    set maxValue(value: number){
        this._setValue(NumberPicker.maxValueProperty, value);
    }

    public _onValuePropertyChanged(data: dependencyObservable.PropertyChangeData){
        //would be overidden in their platform specific
    }

    public _onMinValuePropertyChanged(data: dependencyObservable.PropertyChangeData){
        //would be overidden in their platform specific
    }

    public _onMaxValuePropertyChanged(data: dependencyObservable.PropertyChangeData){
        //would be overidden in their platform specific
    }
}

//function to be called to apply changes to native side
(<proxy.PropertyMetadata>NumberPicker.minValueProperty.metadata).onSetNativeValue = onMinValuePropertyChanged;
(<proxy.PropertyMetadata>NumberPicker.maxValueProperty.metadata).onSetNativeValue = onMaxValuePropertyChanged;
(<proxy.PropertyMetadata>NumberPicker.valueProperty.metadata).onSetNativeValue = onValuePropertyChanged;