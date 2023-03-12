sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend(
      "in.westerncoal.assetmanagementportal.controller.App",
      {
        onInit: function () {
          var nModel = new JSONModel();
          nModel.loadData("/model/Reqs.json",null,false);
          this.getView().setModel(nModel,"Reqs")
          console.log(this.getView().getModel('Reqs'));
        },
      }
    );
  }
);
