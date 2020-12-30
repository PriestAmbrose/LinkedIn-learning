package test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.Test;

import main.Hangman;

class TestHangman {
    
    @Test
    void test_alphabetCountInAWord(){
        String word = "pizza";
        char alphabet = 'a';

        Hangman hangman = new Hangman();
        int count = hangman.countAlphabet(word,alphabet);

        assertEquals(1,count);
    }
}
