import { MatchData } from "./MatchData";
import { WinsAnaliser } from "./analysers/WinsAnalyser";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyser {
  run(matches: Array<MatchData>): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisPrintReport(team: string, reportName: string): Summary {
    return new Summary(
      new WinsAnaliser(team),
      new HtmlReport(reportName),
    );
  }

  constructor(
    public analyser: Analyser,
    public outputTarget: OutputTarget) { }

  buildAndPrintReport(matches: Array<MatchData>): void {
    const output = this.analyser.run(matches);
    this.outputTarget.print(output);
  }
}