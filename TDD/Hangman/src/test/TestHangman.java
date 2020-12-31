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
        int count = hangman.countAlphabet(word,alphabet);

        assertEquals(1,count);
    }

    @Test
    
    public void test_lengthOfFetchedWord(){
        Hangman hangman = new Hangman();
        String word = hangman.fetchWord();

        assertTrue(word.length() == 5);

    }

    @Test
    public void test_lengthOfFetchedWordRandom(){
        Random random = new Random();
        int requestedLength = random.nextInt(6) +5;
        Hangman hangman = new Hangman();
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

        while (round<100) {
            requestedLength = random.nextInt(6)+5;
            word = hangman.fetchWord(requestedLength);
            round++;
            assertTrue(usedWordsSet.add(word));
        }
    }
}
