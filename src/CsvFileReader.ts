import fs from 'fs';

export class CsvFileReader {
  data: Array<Array<string>> = [];

  constructor(public filename: string) { }

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
      .split('\n')
      .map((row: string): Array<string> => row.split(','));
  }
}