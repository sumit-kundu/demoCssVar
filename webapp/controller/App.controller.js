sap.ui.define([
	"jquery.sap.global",
	"sap/m/Button",
	"sap/m/Dialog",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (jQuery, Button, Dialog, List, StandardListItem, Controller, JSONModel) {
	"use strict";
	var oEditor;
	var example1 = "function loadDoc() {\n\treturn 'bar';\n}";
	var example2 = "function myFunction(p1, p2) {\n\treturn 'foo';\n}";

	return Controller.extend("com.DemoCSSVar.controller.App", {
		onInit: function () {
			oEditor = this.byId("aCodeEditor");

			oEditor.setValue('// select tabs to see value of CodeEditor changing');
		},
		onSelectTab: function (oEvent) {
			var sFilterId = oEvent.getParameter("selectedKey");

			switch (sFilterId) {
			case "A":
				oEditor.setValue(example2);
				break;
			case "B":
				oEditor.setValue(example1);
				break;
			}
		},
		onChangeMode: function (oEvent) {
			
			var oRoot = document.documentElement;
			if (oEvent.getParameter("state")) {
				oRoot.style.setProperty("--bg", "black");
				oRoot.style.setProperty("--bg-text", "blue");
			} else {
				oRoot.style.setProperty("--bg", "white");
				oRoot.style.setProperty("--bg-text", "black");
			}

		}
	});
});