/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "in/westerncoal/assetmanagementportal/model/models",
    "sap/ui/core/IconPool",
  ],
  function (UIComponent, Device, models, IconPool) {
    "use strict";

    return UIComponent.extend(
      "in.westerncoal.assetmanagementportal.Component",
      {
        metadata: {
          manifest: "json",
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
          // call the base component's init function
          UIComponent.prototype.init.apply(this, arguments);

        //   const aFonts = [
        //     {
        //       fontFamily: "SAP-icons-TNT",
        //       fontURI: sap.ui.require.toUrl("sap/tnt/themes/base/fonts/"),
        //     },
        //     {
        //       fontFamily: "BusinessSuiteInAppSymbols",
        //       fontURI: sap.ui.require.toUrl("sap/ushell/themes/base/fonts/"),
        //     },
        //   ];

        //   aFonts.forEach((oFont) => {
        //     IconPool.registerFont(oFont);
        //   });

          // enable routing
          this.getRouter().initialize();

          // set the device model
          this.setModel(models.createDeviceModel(), "device");
        },
      }
    );
  }
);
