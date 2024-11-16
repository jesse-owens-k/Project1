sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"
],
function (Controller, JSONModel, History) {
    "use strict";

    return Controller.extend("project1.controller.View2", {
        onInit: function () {
            // Get the customerId from the route parameter
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.getRoute("View2").attachPatternMatched(this._onPatternMatched, this);
    },

    _onPatternMatched: function (oEvent) {
      var sCustomerId = oEvent.getParameter("arguments").customerId;
      var oModel = this.getView().getModel("jsonModel");

      // Set the binding context for the selected customer
      this.getView().bindElement({
        path: "/customers/" + this._getCustomerIndex(sCustomerId),
        model: "jsonModel"
      });
    },
    _getCustomerIndex: function (sCustomerId) {
        var oModel = this.getView().getModel("jsonModel");
        var aCustomers = oModel.getProperty("/customers");
        var iIndex = aCustomers.findIndex(function (customer) {
          return customer.customerId === sCustomerId;
        });
        return iIndex;
      },
  
      // Navigate back to the master page
      onNavBack: function () {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();
  
        if (sPreviousHash === undefined) {
          this.getOwnerComponent().getRouter().navTo("View1", {}, true);
        } else {
          window.history.go(-1);
        }
      }
        
    });
});