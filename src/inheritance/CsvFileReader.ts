import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: Array<T> = [];

  constructor(public filename: string) { }

  abstract mapRow(row: Array<string>): T;

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
      .split('\n')
      .map((row: string): Array<string> => row.split(','))
      .map(this.mapRow);
  }
}