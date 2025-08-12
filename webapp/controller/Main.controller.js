sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("sapips.training.odata.controller.Main", {
        onInit() {
            var oTable = this.byId("tabProducts");

            var oFilter = new Filter({
                path: "Discontinued",
                operator: FilterOperator.EQ,
                value1: true
            })
            
            // direct does not work::
            // oBinding = oTable.getBinding("items"); 
            // oBinding.filter(oFilter) 

            //reference: UI5 Demo kit -> OData V4 Tutorial -> Step 4
            //var oView = this.getView();
            //oView.byId("tabProducts").getBinding("items").filter(oFilter);

            //reference: UI5 Demo kit -> Get Started -> Worklist App Tutorial -> Step 4
            oTable.attachEventOnce("updateFinished", function () {
                const oBinding = oTable.getBinding("items");
                if (oBinding) {
                    oBinding.filter(oFilter);
                }
            });
    
        }
    });
});