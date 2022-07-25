sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "../model/formatter",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
], function (Controller, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.ProductsList", {
        formatter:formatter,
        
		onFilterProducts : function (oEvent) {

			// build filter array
			let aFilter = [];
			let sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
			}

			// filter binding
			let oList = this.byId("productsList");
			let oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
        
        onPress: function (oEvent) {
            let oItem = oEvent.getSource();
			let oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				productsPath: window.encodeURIComponent(oItem.getBindingContext("products").getPath().substr(1))
			});
		}
	});
});