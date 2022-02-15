
class Util {

    static userRegistrationData = {
        "name": this.randomLetters(),
        "surname": this.randomLetters(),
        "email": this.randomEmailGeneration(),
        "password": this.randomPasswordWithLettersDigitsSymbols()
    }

    static getRandomCredentials() {
        return this.userRegistrationData
    }

    static updateRegistrationData() {
      this.userRegistrationData = {
            "name": this.randomLetters(),
            "surname": this.randomLetters(),
            "email": this.randomEmailGeneration(),
            "password": this.randomPasswordWithLettersDigitsSymbols()
        }
    }

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

    // static jsonStorageFunc() {
    //     const jsonStorage = {
    //         "name": this.randomLetters(),
    //         "surname": this.randomLetters(),
    //         "email": this.randomEmailGeneration(),
    //         "password": this.randomPasswordWithLettersDigitsSymbols()
    //     }
    //     let json = JSON.stringify(jsonStorage);
    //     console.log(json)
    //     return json
    // }

}

export default Util;