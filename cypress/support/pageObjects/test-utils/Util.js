 
class Util {

    static randomLetters() {
        let charsArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let str = '';
        for (let i = 0; i < 10; i++) {
            str += charsArray.charAt(Math.floor(Math.random() * charsArray.length));
        }
        return str;
    }

    static randomPasswordWithLettersDigitsSymbols() {
        return this.randomLetters() + Math.random() + '!'
    }

    static randomEmailGeneration() {
        let domenArray = ['.de', '.com']
        let emailAddress = this.randomLetters() + "@gmail" + domenArray.reverse(domenArray)[0]
        return emailAddress
    }
}

export default Util;