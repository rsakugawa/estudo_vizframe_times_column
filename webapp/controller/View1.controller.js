sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("estudovizframetimescolumn.controller.View1", {
			onInit: function () {

                var jsonData = new sap.ui.model.json.JSONModel("model/Data.json");
                var oVizFrame = this.getView().byId("idVizFrame");
                oVizFrame.setModel(jsonData);

                   
               var oVizFrameDataForTable = this.getView().byId("chartContainerContentTable");
                oVizFrameDataForTable.setModel(jsonData);


			}
		});
	});
