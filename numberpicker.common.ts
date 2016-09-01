import definition = require("interface/numberpicker");
import dependencyObservable = require("ui/core/dependency-observable");
import proxy = require("ui/core/proxy");
import view = require("ui/core/view");

export class NumberPicker extends view.View implements definition.NumberPicker {
    public static valueProperty = new dependencyObservable.Property("value", "NumberPicker", new proxy.PropertyMetadata(0, dependencyObservable.PropertyMetadataSettings.AffectsLayout));

    public minValue: number;
    public maxValue: number;
}