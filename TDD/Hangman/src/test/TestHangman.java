package test;

import static org.junit.jupiter.api.Assertions.*;

import java.util.*;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import main.Hangman;

public class TestHangman {

    static Random random;
    static Hangman hangman;
    static int requestedLength;

    @BeforeClass
    public static void setUpClass() {
        random = new Random();
        hangman = new Hangman();
        hangman.loadWords();
    }

    @Before
    public void setupTest(){
        requestedLength = random.nextInt(4)+4;
    }

    @Test
    public void test_alphabetCountInAWord(){
        String word = "pizza";
        char alphabet = 'a';
        int count = hangman.countAlphabet(word,alphabet);
        assertEquals(1,count, "wrong count");
    }

    
    

    @Test
    public void test_lengthOfFetchedWordRandom(){
        
      
      
        String word = hangman.fetchWord(requestedLength);

        assertTrue(requestedLength == word.length());
    }

    @Test 

    public void test_uniquenesssOfFetchWord() {
        
        
        Set<String> usedWordsSet = new HashSet<>();
        int round =0;
        String word = null;
        

        while (round<10) {
            requestedLength = random.nextInt(4)+4;
            word = hangman.fetchWord(requestedLength);
            round++;
            assertTrue(usedWordsSet.add(word));
        }
    }


    @Test

    public void test_returnClueBeforeGuess(){
        
    
        String word = hangman.fetchWord(requestedLength);
        String clue = "";
        for (int i=0; i<word.length();i++) clue+="-";
        assertEquals(clue, hangman.getClue(word), "wrong clue");
    }

    @Test
    public void test_returnClueIfGuessedCorrectly(){
        
        String clue = hangman.getClue("pizza");
        String newClue = hangman.getClue("pizza",clue,'z');
        assertEquals("--zz-", newClue);
    }

    @Test
    public void test_returnClueIfGuessedInCorrectly(){
        
        String clue = hangman.getClue("pizza");
        String newClue = hangman.getClue("pizza",clue,'x');
        assertEquals("-----", newClue);
    }
}
