import {expect} from 'chai'
import {isAnagram} from './anagrams';

describe('anagram - basic functionality', ()=>{
    it('checks if two strings listen and silent are anagrams', ()=>{
        const string1 = "listen";
        const string2 = "silent";
        const expected = true;
        const actual = isAnagram(string1, string2);
        expect(actual).to.deep.equal(expected);
    });

    it('checks if elbow and below are anagrams', ()=>{
        const string1 = "elbow";
        const string2 = "below";
        const expected = true;
        const actual = isAnagram(string1, string2);
        expect(actual).to.deep.equal(expected);
    });

    it('checks that elbows and elbow are not anagrams',()=>{
        const string1 = "elbow";
        const string2 = "elbows";
        const expected = false;
        const actual = isAnagram(string1, string2);
        expect(actual).to.deep.equal(expected);
    });

    it('checks that listens and listen are not anagrams',()=>{
        const string1 = "listens";
        const string2 = "listen";
        const expected = false;
        const actual = isAnagram(string1, string2);
        expect(actual).to.deep.equal(expected);
    });

    it('makes sure that spaces are ignored', ()=>{
        const string1 = "conversation";
        const string2 = "voices rant on";
        const expected = true;
        const actual = isAnagram(string1, string2);
        expect(actual).to.deep.equal(expected);
    });

    it('makes sure that cases are ignored', ()=>{
        const string1 = "STATE";
        const string2 = "taste";
        const expected = true;
        const actual = isAnagram(string1, string2);
        expect(actual).to.deep.equal(expected);
    })
})