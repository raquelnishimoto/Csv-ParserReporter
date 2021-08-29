"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalyser_1 = require("./analysers/WinsAnalyser");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisPrintReport = function (team, reportName) {
        return new Summary(new WinsAnalyser_1.WinsAnaliser(team), new HtmlReport_1.HtmlReport(reportName));
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyser.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
