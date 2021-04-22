import {getLetterCount} from './letterCount';
import {_} from 'lodash'

export const isAnagram = (string1, string2)=>{
    const letterCount1 = getLetterCount(string1.replace(/\s/g, '').toLowerCase());
    const letterCount2 = getLetterCount(string2.replace(/\s/g, '').toLowerCase());
    return _.isEqual(letterCount1,letterCount2);
}