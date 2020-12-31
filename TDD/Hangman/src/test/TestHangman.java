package test;

import static org.junit.jupiter.api.Assertions.*;

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
    }
}
