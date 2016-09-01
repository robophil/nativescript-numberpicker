/**
 * Contains the DatePicker class.
 */
declare module "interface/numberpicker" {
    import view = require("ui/core/view");
    import dependencyObservable = require("ui/core/dependency-observable");

    /**
     * Represents an date picker.
     */
    export class NumberPicker extends view.View {

        public static value: dependencyObservable.Property;

        constructor();

        android: any;

        ios: any;

        minValue: number;

        maxValue: number;

    }
} 
