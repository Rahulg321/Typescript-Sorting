import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  data: string;

  constructor(data: string) {
    super();
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    // to swap two characters in a string
    // we need to first convert them to an array
    // then back to a string

    const charArray = this.data.split('');

    const tempString = charArray[leftIndex];
    charArray[leftIndex] = charArray[rightIndex];
    charArray[rightIndex] = tempString;

    this.data = charArray.join('');
  }
}
