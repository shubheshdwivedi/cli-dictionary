import {buildWordFormat, showMessage} from "../../defaults/appConsts";
import inquirer from 'inquirer';
import {wordApi} from "../../api/Api";
import anagrams from 'english-anagrams';

class Play {
    constructor() {
        this.word = '';
        this.hints = [];
        this.wordDictionary = '';
        this.choice = '';
    }

    userInput() {
        return inquirer
            .prompt([
                {

                    name: 'response',
                    message: 'Guess the word: ',
                    validate: value => (value === '') ? 'Empty input, you can do better buddy' :
                        true
                },
            ])
    }

    gameMenu() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: 'Enter a choice',
                    choices: ['Try again', 'Get a hint', 'Quit'],
                },
            ]);
    }

    gameAction() {
        switch (this.choice) {
            case 'Try again':
                this.gameLoop();
                break;
            case 'Get a hint':
                const hint = (this.hints.length) ? this.hints.shift() : 'No more hints available!';
                showMessage(hint);
                this.gameLoop();
                break;
            case 'Quit':
                showMessage('The word was: ' + this.word + '\nHere\'s some trivia about it.');
                const {word, def, ex, ant, syn} = this.wordDictionary;
                showMessage(buildWordFormat(word, def, ex, ant, syn));
                break;
            default:
                showMessage('Choose something...')
        }
    }

    gameLoop() {
        this.userInput().then(answers => {
            if (answers.response === this.word)
                return showMessage('You win buddy! The word was: ' + this.word);
            else {
                this.gameMenu().then(answers => {
                    this.choice = answers.choice;
                    this.gameAction();
                });
            }
        });
    }

    async init() {
        try {
            this.wordDictionary = await wordApi();
            this.word = this.wordDictionary.word;
            const wordAnagrams = anagrams(this.word);
            this.hints = [...this.wordDictionary.def, ...wordAnagrams,
                ...this.wordDictionary.syn];
        } catch (e) {
            showMessage(e);
        }
        this.gameLoop();
    }
}

const play = new Play();
export default play;