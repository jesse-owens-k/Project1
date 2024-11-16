sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {
              // Create a new JSON model instance
    //   var oModel = new JSONModel();
      
    //   // Load the local JSON data from the file
    //   oModel.loadData("model/customerOrderData.json"); // Path to your local JSON file

    //   // Set the model to the view
    //   this.getView().setModel(oModel, "jsonModel");
        },
        onCustomerPress: function (oEvent) {
            var oSelectedItem = oEvent.getSource();
            var sCustomerId = oSelectedItem.getBindingContext("jsonModel").getProperty("customerId");
      
            // Navigate to the order details page and pass customerId
            this.getOwnerComponent().getRouter().navTo("View2", {
              customerId: sCustomerId
            });
          }
    });
});
