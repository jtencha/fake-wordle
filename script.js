var balls= "urmom"; //yes eli, I kept this

//to-do: randomize word choice
var word = ["R", "E", "A", "C", "H"];

function winner() {
    //all this does is stop the next line from appearing
    return;
}

//because html is dumb and doesn't let you override definitions for IDs, I have to create six different functions
//that do the exact same thing
function test(event) {
    if (event.keyCode == 13) {
        var rawOne = document.getElementById("letter_one");
        var one = document.getElementById("letter_one").value;
        var rawTwo = document.getElementById("letter_two");
        var two = document.getElementById("letter_two").value;
        var rawThree = document.getElementById("letter_three");
        var three = document.getElementById("letter_three").value;
        var rawFour = document.getElementById("letter_four");
        var four = document.getElementById("letter_four").value;
        var rawFive = document.getElementById("letter_five");
        var five = document.getElementById("letter_five").value;

        var letters = [one, two, three, four, five];
        var raw = [rawOne, rawTwo, rawThree, rawFour, rawFive];

        //go through and check every letter
        var count = 0;
        for (let i = 0; i < letters.length; i++) {
            let input = document.getElementById(letters[i]);
            if (letters[i] == word[i]) {
                raw[i].style.backgroundColor = "green";
                count++;
            } else {
                for (let x = 0; x < 5; x++) {
                    if (letters[i] == word[x]) {
                        raw[i].style.backgroundColor = "yellow";
                        break;
                    }

                raw[i].style.backgroundColor = "gray";

                }
            }
        }

        document.getElementById('letter_one').readOnly = true;
        document.getElementById('letter_two').readOnly = true;
        document.getElementById('letter_three').readOnly = true;
        document.getElementById('letter_four').readOnly = true;
        document.getElementById('letter_five').readOnly = true;

        if (count == 5) {
            winner();
        } else {
            document.getElementById("guess1").className="appear";
        }

    }


}

function testOne(event) {
    if (event.keyCode == 13) {
        var rawOne = document.getElementById("letter_one1");
        var one = document.getElementById("letter_one1").value;
        var rawTwo = document.getElementById("letter_two1");
        var two = document.getElementById("letter_two1").value;
        var rawThree = document.getElementById("letter_three1");
        var three = document.getElementById("letter_three1").value;
        var rawFour = document.getElementById("letter_four1");
        var four = document.getElementById("letter_four1").value;
        var rawFive = document.getElementById("letter_five1");
        var five = document.getElementById("letter_five1").value;

        var letters = [one, two, three, four, five];
        var raw = [rawOne, rawTwo, rawThree, rawFour, rawFive];

        var count = 0;
        for (let i = 0; i < letters.length; i++) {
            let input = document.getElementById(letters[i]);
            if (letters[i] == word[i]) {
                raw[i].style.backgroundColor = "green";
                count++;
            } else {
                for (let x = 0; x < 5; x++) {
                    if (letters[i] == word[x]) {
                        raw[i].style.backgroundColor = "yellow";
                        break;
                    }

                raw[i].style.backgroundColor = "gray";

                }
            }
        }

        document.getElementById('letter_one1').readOnly = true;
        document.getElementById('letter_two1').readOnly = true;
        document.getElementById('letter_three1').readOnly = true;
        document.getElementById('letter_four1').readOnly = true;
        document.getElementById('letter_five1').readOnly = true;

        if (count == 5) {
            winner();
        } else {
            document.getElementById("guess2").className="appear";
        }
    }
}

function testTwo(event) {
    if (event.keyCode == 13) {
        var rawOne = document.getElementById("letter_one2");
        var one = document.getElementById("letter_one2").value;
        var rawTwo = document.getElementById("letter_two2");
        var two = document.getElementById("letter_two2").value;
        var rawThree = document.getElementById("letter_three2");
        var three = document.getElementById("letter_three2").value;
        var rawFour = document.getElementById("letter_four2");
        var four = document.getElementById("letter_four2").value;
        var rawFive = document.getElementById("letter_five2");
        var five = document.getElementById("letter_five2").value;

        var letters = [one, two, three, four, five];
        var raw = [rawOne, rawTwo, rawThree, rawFour, rawFive];

        var count = 0;
        for (let i = 0; i < letters.length; i++) {
            let input = document.getElementById(letters[i]);
            if (letters[i] == word[i]) {
                raw[i].style.backgroundColor = "green";
                count++;
            } else {
                for (let x = 0; x < 5; x++) {
                    if (letters[i] == word[x]) {
                        raw[i].style.backgroundColor = "yellow";
                        break;
                    }

                raw[i].style.backgroundColor = "gray";

                }
            }
        }

        document.getElementById('letter_one2').readOnly = true;
        document.getElementById('letter_two2').readOnly = true;
        document.getElementById('letter_three2').readOnly = true;
        document.getElementById('letter_four2').readOnly = true;
        document.getElementById('letter_five2').readOnly = true;

        if (count == 5) {
            winner();
        } else {
            document.getElementById("guess3").className="appear";
        }
    }

}

function testThree(event) {
    if (event.keyCode == 13) {
        var rawOne = document.getElementById("letter_one3");
        var one = document.getElementById("letter_one3").value;
        var rawTwo = document.getElementById("letter_two3");
        var two = document.getElementById("letter_two3").value;
        var rawThree = document.getElementById("letter_three3");
        var three = document.getElementById("letter_three3").value;
        var rawFour = document.getElementById("letter_four3");
        var four = document.getElementById("letter_four3").value;
        var rawFive = document.getElementById("letter_five3");
        var five = document.getElementById("letter_five3").value;

        var letters = [one, two, three, four, five];
        var raw = [rawOne, rawTwo, rawThree, rawFour, rawFive];

        var count = 0;
        for (let i = 0; i < letters.length; i++) {
            let input = document.getElementById(letters[i]);
            if (letters[i] == word[i]) {
                raw[i].style.backgroundColor = "green";
                count++;
            } else {
                for (let x = 0; x < 5; x++) {
                    if (letters[i] == word[x]) {
                        raw[i].style.backgroundColor = "yellow";
                        break;
                    }

                raw[i].style.backgroundColor = "gray";

                }
            }
        }

        document.getElementById('letter_one3').readOnly = true;
        document.getElementById('letter_two3').readOnly = true;
        document.getElementById('letter_three3').readOnly = true;
        document.getElementById('letter_four3').readOnly = true;
        document.getElementById('letter_five3').readOnly = true;

        if (count == 5) {
            winner();
        } else {
            document.getElementById("guess4").className="appear";
        }
    }
}

function testFour(event) {
    if (event.keyCode == 13) {
        var rawOne = document.getElementById("letter_one4");
        var one = document.getElementById("letter_one4").value;
        var rawTwo = document.getElementById("letter_two4");
        var two = document.getElementById("letter_two4").value;
        var rawThree = document.getElementById("letter_three4");
        var three = document.getElementById("letter_three4").value;
        var rawFour = document.getElementById("letter_four4");
        var four = document.getElementById("letter_four4").value;
        var rawFive = document.getElementById("letter_five4");
        var five = document.getElementById("letter_five4").value;

        var letters = [one, two, three, four, five];
        var raw = [rawOne, rawTwo, rawThree, rawFour, rawFive];

        var count = 0;
        for (let i = 0; i < letters.length; i++) {
            let input = document.getElementById(letters[i]);
            if (letters[i] == word[i]) {
                raw[i].style.backgroundColor = "green";
                count++;
            } else {
                for (let x = 0; x < 5; x++) {
                    if (letters[i] == word[x]) {
                        raw[i].style.backgroundColor = "yellow";
                        break;
                    }

                raw[i].style.backgroundColor = "gray";

                }
            }
        }

        document.getElementById('letter_one4').readOnly = true;
        document.getElementById('letter_two4').readOnly = true;
        document.getElementById('letter_three4').readOnly = true;
        document.getElementById('letter_four4').readOnly = true;
        document.getElementById('letter_five4').readOnly = true;

        if (count == 5) {
            winner();
        } else {
            document.getElementById("guess5").className="appear";
        }
    }
}

function testFive(event) {
    if (event.keyCode == 13) {
        var rawOne = document.getElementById("letter_one5");
        var one = document.getElementById("letter_one5").value;
        var rawTwo = document.getElementById("letter_two5");
        var two = document.getElementById("letter_two5").value;
        var rawThree = document.getElementById("letter_three5");
        var three = document.getElementById("letter_three5").value;
        var rawFour = document.getElementById("letter_four5");
        var four = document.getElementById("letter_four5").value;
        var rawFive = document.getElementById("letter_five5");
        var five = document.getElementById("letter_five5").value;

        var letters = [one, two, three, four, five];
        var raw = [rawOne, rawTwo, rawThree, rawFour, rawFive];

        var count = 0;
        for (let i = 0; i < letters.length; i++) {
            let input = document.getElementById(letters[i]);
            if (letters[i] == word[i]) {
                raw[i].style.backgroundColor = "green";
                count++;
            } else {
                for (let x = 0; x < 5; x++) {
                    if (letters[i] == word[x]) {
                        raw[i].style.backgroundColor = "yellow";
                        break;
                    }

                raw[i].style.backgroundColor = "gray";

                }
            }
        }

        document.getElementById('letter_one5').readOnly = true;
        document.getElementById('letter_two5').readOnly = true;
        document.getElementById('letter_three5').readOnly = true;
        document.getElementById('letter_four5').readOnly = true;
        document.getElementById('letter_five5').readOnly = true;

        if (count == 5) {
            winner();
        }

    }
}

//function check() {

//}
