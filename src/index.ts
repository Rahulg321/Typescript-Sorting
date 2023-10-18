import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const nums = new NumbersCollection([121, 32, 31233]);

nums.sort();
console.log(nums.data);

const characters = new CharactersCollection('fuck');
characters.sort();
console.log(characters.data);

const ll = new LinkedList();
ll.add(99);
ll.add(87);
ll.add(76);
ll.add(54);

ll.sort();

ll.print();
