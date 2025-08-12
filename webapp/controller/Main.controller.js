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
            
            oTable.attachEventOnce("updateFinished", function () {
                const oBinding = oTable.getBinding("items");
                if (oBinding) {
                    oBinding.filter(oFilter);
                }
            });
    
        }
    });
});