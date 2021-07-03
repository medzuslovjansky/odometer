import {Multirator} from "../multirator/Multirator";
import {MultiratorRule} from "../multirator/MultiratorRule";

let ruleIndex = 0;
const custom = (partOfSpeech: string, match: string, replaceWith: string[]): MultiratorRule => {
  return {
    id: `${ruleIndex++}`,
    match,
    genesis: '',
    partOfSpeech,
    replaceWith,
  };
}

const all = (regex: string, replaceWith: string[]) => custom('', regex, replaceWith);
const adjective = (regex: string, replaceWith: string[]) => custom('adj.', regex, replaceWith);
const verb = (regex: string, replaceWith: string[]) => custom('v.', regex, replaceWith);

export const russian = new Multirator([
  all('^iz', ['iz', 'is', 'vy']),
  all('^råz', ['raz','ras']),
  all('^(o?be)z', ['$1z','$1s']),
  all('^vȯz', ['voz','vos']),
  all('^od', ['od', 'ot']),
  all('^sų', ['su', 'so']),
  all('morje', ['more']),
  all('prě', ['pre','pere']),
  all('([^ aåeěęėioȯuųy])(.)ě(?!$)', ['$1$2e','$1e$2e']),
  all('([^ aåeěęėioȯuųy])(.)å', ['$1$2a','$1o$2o']),
  all('([bmv])j', ['$1j', '$1lj']),
  verb('ti sę($|[\s\-])', ['ться$1']),
  verb('ti($|[\s\-])', ['ть$1']),
  all('a', ['а']),
  all('å', ['а','о']),
  all('b', ['б']),
  all('c', ['ц']),
  all('č', ['ч']),
  all('ć', ['ч','ц','щ']),
  all('d', ['д']),
  all('ď', ['д','дь']),
  all('đ', ['дж','жд','д','ж']),
  all('(^|[\s\-])e', ['$1э']),
  all('e', ['е']),
  all('ě', ['е']),
  all('ę', ['я','е','а']),
  all('ė', ['е']),
  all('f', ['ф']),
  all('g', ['г']),
  all('h', ['х']),
  all('i', ['и']),
  all('k', ['к']),
  all('l', ['л']),
  all('ľ', ['л','ль']),
  all('m', ['м']),
  all('n', ['н']),
  all('ń', ['н','нь']),
  all('o', ['о']),
  all('p', ['п']),
  all('r', ['р']),
  all('ŕ', ['р','рь']),
  all('s', ['с']),
  all('š', ['ш']),
  all('ś', ['с','сь']),
  all('t', ['т']),
  all('ť', ['ть']),
  all('u', ['у']),
  all('v', ['в']),
  all('y', ['ы']),
  all('z', ['з']),
  all('ų', ['о','у']),
  all('ź', ['з','зь']),
  all('ž', ['ж']),
  all('ȯ', ['о','е']),
  all('([аеийоуыэюяъь])j', ['$1й']),
  all('j', ['й','ь']),
  adjective('ы($|[\s\-])', ['ый$1', 'ий$1']),
  // adjective(/а($|[\s\-])/, ['ая$1']),
  // adjective(/о($|[\s\-])/, ['ое$1']),
  all('ке ', ['кие ']),
  all('ьа', ['я']),
  all('^йа', ['я']),
  all('^йа', ['я']),
  all('^йе', ['е','и']),
  all('^йи', ['и','е']),
  all('^йо', ['о','е']),
  all('^йу', ['у']),
  all('йа', ['я','ья','ъя']),
  all('йе', ['е','ье','ъе']),
  all('йи', ['и','ьи','ъи']),
  all('йо', ['е','ье','ъе']),
  all('йу', ['ю','ью','ъю']),
  all('йя', ['я']),
  all('йю', ['ю']),
  all('ч($|[\s\-])', ['чь$1']),
  verb('[кг]ть', ['чь']),
  all('ье($|[\s\-])', ['ье$1','ие$1']),
  all('ьи($|[\s\-])', ['ьи$1','ий$1']),
  all('([аеийоуыэюяъь])[ъь]', ['$1']),
  all('([^аеиоуыэюя])[й]', ['$1ь']),
  all('иа($|[\s\-])', ['ия$1']),
  all('шч', ['щ']),
  all('шщ', ['щ']),
  all('щаст', ['счаст']),
  all('([чн])ъ([еи])($|[\s\-])', ['$1ь$2$3']),
  all('чск', ['ческ']),
]);