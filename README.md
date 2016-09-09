# nativescript-numberpicker
A nativescript plugin for number picker

# install
tns plugin add nativescript-numberpicker

add this to your references.d.ts for typescript support
```
    /// <reference path="./node_modules/nativescript-numberpicker/numberpicker.d.ts" /> Needed for autocompletion and compilation.
```

# Usage in xml
add this to your namespace `xmlns:numberpicker="nativescript-numberpicker"`
then use like this `<numberpicker:NumberPicker value="3" minValue="2" maxValue="6" id="np"/>`

see the example below
```
    <Page 
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:numberpicker="nativescript-numberpicker" loaded="loaded">
    <StackLayout style.backgroundColor="green" id="Mycontainer">
        <Label text="Find numberpicker below" class="message" textWrap="true"/>
        <numberpicker:NumberPicker value="3" minValue="2" maxValue="6" id="np"/>
        <Label text="Find numberpicker below" class="message" textWrap="true"/>
    </StackLayout>
    </Page>

```
# usage in code
```
    import numberpicker = require("nativescript-numberpicker");
    let np = new numberpicker.NumberPicker();
    np.minValue = 0;
    np.maxValue = 10;
    np.value = 3;//this should be set after maxValue and minValue has been provided

    //add numberpicker to your layout
    let layout = page.getViewById("Mycontainer");
    layout.addChild(np);
```
# support
Works on android and ios.

**note**: ios not tested yet, but it should work fine ;) not all of us use a mac.. lol

# issues and features request
Just create an issue and i'll get back to you ASAP

# Pull request
yes, yes, yes, send them...keep them coming

# coming soon
styling support for ios and android

# liscence
MIT