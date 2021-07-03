export interface MultiratorRule {
  readonly id: string;
  readonly match: string;
  readonly genesis: string;
  readonly partOfSpeech: string;
  readonly replaceWith: string[];
}
