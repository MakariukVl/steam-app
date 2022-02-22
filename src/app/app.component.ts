import { Component, OnInit } from '@angular/core';
// import { EncrDecrService } from '@core/services/encr-decr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // title = 'steam-app';

  // filterPrice = 0;
  // formInput: { name: string | null; email: string | null; age: string | null } =
  //   {
  //     name: '',
  //     email: '',
  //     age: '',
  //   };
  // user: { name: string | null; email: string | null; age: string | null } = {
  //   name: '',
  //   email: '',
  //   age: '',
  // };

  // isSubmit = false;

  // onSubmit() {
  //   this.isSubmit = true;
  //   this.user = { ...this.formInput };
  // }

  constructor(/* private encrDecrService: EncrDecrService */) {}

  ngOnInit(): void {
    // const msg = 'encrypt me';
    // const salt = this.encrDecrService.getRandomSalt();
    // const saltedHash = this.encrDecrService.hashPBKDF2(msg, salt);

    // console.log('message:', msg);
    // console.log('encrypted hash1:', saltedHash.toString());
    // console.log('salt1:', salt.toString());

    // const arr = [1, 2, 3];
    // console.log('arr-1',arr[-1]);
  }
}
