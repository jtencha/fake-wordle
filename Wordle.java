//WORDLE but terminal-based JAVA WINDOW
// project idea and original foundation credit to nifty.stanford.edu
import proj.WordleDictionary;
import proj.WordleGWindow;
import java.lang.Math;
import java.util.HashMap;

public class Wordle {
    // these must remain stored throughout the game
    static String theWord;
    static int currentRow = 0;
    static boolean proceed = true;

    public void run() {
        gw = new WordleGWindow();
        gw.addEnterListener((s) -> enterAction(s));
        int index = (int)(Math.random() * (WordleDictionary.words.length)) + 0;
        theWord = WordleDictionary.words[index];
        // theWord = "house";
    }

    public void dead() {}

    // user presses enter key
    public void enterAction(String c) {
        if (proceed == false) {}
        else {
        String s = c.toLowerCase();
        // sanity check
        boolean pass = false;
        for (String word: WordleDictionary.words) {
            if (word.equals(s)) {
                pass = true;
            }
        }

        if (pass) {
            HashMap<String, Integer> letters = new HashMap<String, Integer>();
            for (int i = 0; i < theWord.length(); i++) {
            String l = theWord.substring(i,i+1);
            if (!(letters.containsKey(l))) {
                letters.put(l, 1);
            } else {
                letters.put(l, letters.get(l) + 1);
            }
        }
            HashMap<String, Integer> input = new HashMap<String, Integer>();
            for (int i = 0; i < 5; i++) {
                if(!(input.containsKey(s.substring(i, i+1)))) {
                    // this accounts for matches
                    input.put(s.substring(i,i+1), 0);
                }
            }
            int correct = 0;
            // this MUST GO FIRST TO CONFIGURE PRESENT LETTERS
            for (int i = 0; i < 5; i++) {
                // this catches all of the immediate matches
                if (s.substring(i, i+1).equals(theWord.substring(i,i+1))) {
                    gw.setSquareColor(currentRow, i, WordleGWindow.CORRECT_COLOR);
                    append(input, s.substring(i, i+1));
                    gw.setKeyColor(s.substring(i, i+1).toUpperCase(), WordleGWindow.CORRECT_COLOR);
                    correct++;
                } 
            }

            for (int i = 0; i < 5; i++) {
                // matching cases are already resolved
                if (!(s.substring(i, i+1).equals(theWord.substring(i,i+1)))) {
                    int counter = 0;
                    for (int j = 0; j < 5; j++) {
                        if (s.substring(i, i+1).equals(theWord.substring(j,j+1))) {
                            if (i != j) {
                                if (compareTo(input, letters, s.substring(i,i+1))) {
                                    gw.setSquareColor(currentRow, i, WordleGWindow.PRESENT_COLOR);
                                    append(input, s.substring(i, i+1));
                                    gw.setKeyColor(s.substring(i, i+1).toUpperCase(), WordleGWindow.PRESENT_COLOR);
                                    counter++;
                                }
                            }
                            
                        }
                    }

                    // no mas
                    if (counter == 0) {
                        gw.setSquareColor(currentRow, i, WordleGWindow.MISSING_COLOR);
                        gw.setKeyColor(s.substring(i, i+1).toUpperCase(), WordleGWindow.MISSING_COLOR);
                    } 
                }
            }
                    
            currentRow++;
            if (correct >= 5) {
                gw.showMessage("Word guessed in " + (currentRow) + " tries.");
                proceed = false;
            } else if (currentRow > 5) {
                gw.showMessage("Failed to guess the word. The word was " + theWord.toLowerCase() + ".");
                proceed = false;
            } else {
                gw.setCurrentRow(currentRow);
            }    
        } else {
            gw.showMessage("This is not a valid word!");
            //clear junk
            for (int i = 0; i < 5; i++) {
                gw.setSquareLetter(currentRow, i, "");
                gw.setCurrentRow(currentRow);
            }
        }

    }
    }

    /* HASH METHODS -- must be static for simplicity*/ 

    // appends given value to HashMap, incrementing count if already present
    public static void append(HashMap<String, Integer> h, String w) {
        if (!(h.containsKey(w))) {
            h.put(w, 1);
        } else {
            h.put(w, (h.get(w)) + 1);
        }
    }


    // returns FALSE if not present / other freq > obj freq
    // returns TRUE if other freq < obj freq
    public static boolean compareTo(HashMap<String, Integer> org, HashMap<String, Integer> other, String value) {
        //if (org.containsKey(value) == false || other.containsKey(value) == false ) {
            //return false;
        /* } else */ if (org.get(value) >= other.get(value)) {
            return false;
        } else {
            return true;
        }
    }

    public static void main(String[] args) {
        new Wordle().run();
    }

/* Private instance variables */

    private WordleGWindow gw;

}
