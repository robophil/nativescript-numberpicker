import numberpicker = require("nativescript-numberpicker");
import page = require("ui/page");
export function loaded(params:any) {
    let page = <page.Page> params.object;
    let np =<numberpicker.NumberPicker> page.getViewById("np");
    console.log("value of numberpicker is ", np.value);
}