import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordValueLength: number = 0;
  includeLetters: boolean = false;
  includeSymbols: boolean = false;
  includeNumbers: boolean = false;
  password: string = '';

  onChangeSize({ value }: any) {
    const length = parseInt(value, 10);
    if (!isNaN(length)) this.passwordValueLength = length;
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onButtonClick() {
    const {
      includeLetters,
      includeSymbols,
      includeNumbers,
      passwordValueLength,
    } = this;

    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()_+<>?:"|}{;/.,`~';

    let password = '';
    if (includeLetters) password += letters;
    if (includeSymbols) password += symbols;
    if (includeNumbers) password += numbers;

    let generatedPassword = '';
    for (let i = 0; i < passwordValueLength; i += 1) {
      const index = Math.floor(Math.random() * password.length);
      generatedPassword += password[index];
    }

    this.password = generatedPassword;
  }
}
