package test;

import static org.junit.jupiter.api.Assertions.*;

import java.util.*;

import org.junit.Test;

import main.Hangman;

public class TestHangman {
    
    @Test
    public void test_alphabetCountInAWord(){
        String word = "pizza";
        char alphabet = 'a';

        Hangman hangman = new Hangman();
        hangman.loadWords();
        int count = hangman.countAlphabet(word,alphabet);

        assertEquals(1,count);
    }

    
    

    @Test
    public void test_lengthOfFetchedWordRandom(){
        Random random = new Random();
        int requestedLength = random.nextInt(6) +5;
        Hangman hangman = new Hangman();
        hangman.loadWords();
        String word = hangman.fetchWord(requestedLength);

        assertTrue(requestedLength == word.length());
    }

    @Test 

    public void test_uniquenesssOfFetchWord() {
        Random random = new Random ();
        int requestedLength = 0;
        Set<String> usedWordsSet = new HashSet<>();
        int round =0;
        String word = null;
        Hangman hangman = new Hangman();
        hangman.loadWords();

        while (round<10) {
            requestedLength = random.nextInt(4)+4;
            word = hangman.fetchWord(requestedLength);
            round++;
            assertTrue(usedWordsSet.add(word));
        }
    }
}
