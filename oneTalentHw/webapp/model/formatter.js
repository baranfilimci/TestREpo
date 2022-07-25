sap.ui.define(function() {
	"use strict";

	let Formatter = {

		weightState :  function (fMeasure, sUnit) {
			
			// Boarder values for different status of weight
			let fMaxWeightSuccess = 1;
			let fMaxWeightWarning = 5;
			let fAdjustedMeasure = parseFloat(fMeasure);

			// if the value of fMeasure is not a number, no status will be set
			if (isNaN(fAdjustedMeasure)) {
				return "None";
			} else {

				if (sUnit === "G") {
					fAdjustedMeasure = fMeasure / 1000;
				}

				if (fAdjustedMeasure < 0) {
					return "None";
				} else if (fAdjustedMeasure < fMaxWeightSuccess) {
					return "Success";
				} else if (fAdjustedMeasure < fMaxWeightWarning) {
					return "Warning";
				} else {
					return "Error";
				}
			}
		}
	};

	return Formatter;

});