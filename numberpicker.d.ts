/**
 * Contains the DatePicker class.
 */
declare module "nativescript-numberpicker" { 
    import view = require("ui/core/view");
    import dependencyObservable = require("ui/core/dependency-observable");

    /**
     * Represents an date picker.
     */
    export class NumberPicker extends view.View {

        public static value: dependencyObservable.Property;
        public static minValue: dependencyObservable.Property;
        public static maxValue: dependencyObservable.Property;

        constructor();

        android: any;//calls get and set method implementation

        ios: any;//calls get and set method implementation

        value: number;//calls get and set method implementation

        minValue: number;//calls get and set method implementation

        maxValue: number;//calls get and set method implementation

        //@private
        _onValuePropertyChanged(data: dependencyObservable.PropertyChangeData): void;
        _onMinValuePropertyChanged(data: dependencyObservable.PropertyChangeData): void;
        _onMaxValuePropertyChanged(data: dependencyObservable.PropertyChangeData): void;
        //@endprivate

    }
} 
