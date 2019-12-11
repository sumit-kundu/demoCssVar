# demoCssVar
Demo use of CSS variables in freestyle SAPUI5 custom app

This app is a copy of the sample available in SAPUI5 demo kit documentation page (ui5.sap.com).
https://ui5.sap.com/#/entity/sap.ui.codeeditor.CodeEditor/sample/sap.ui.codeeditor.sample.CodeEditorIconTabHeader

The app is to get an understanding of usage of CSS variables in custom SAPUI5 app. 
Control sap.ui.codeeditor.CodeEditor (https://ui5.sap.com/#/api/sap.ui.codeeditor.CodeEditor) has its own property 'colorTheme' to set the color theme as desired. However for the sake of illustration of the topic of CSS variables, just imagine that this property does not exist. This control was chosen to make the example intersting.

# Coding explained
style.css file declares the 'myEditor' class and it extends the standard class '.ace_editor.ace-tomorrow' which is applied when a 'default' colorTheme is used for control sap.ui.codeeditor.CodeEditor.

The 'switch' for enabling/disabling the dark mode has an event handler function 'onChangeMode'(see file App.controller.js) that sets the necessary background color and text color accordingly.
