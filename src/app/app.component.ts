import { Component, OnInit } from '@angular/core';
import { EncrDecrService } from '@core/services/encr-decr.service';

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

  constructor(private encrDecrService: EncrDecrService) {}

  ngOnInit(): void {
    const msg = 'usmc';
    const salt1 = this.encrDecrService.getRandomSalt();
    // const salt2 = this.encrDecrService.getRandomSalt();
    const saltedHash1 = this.encrDecrService.hashPBKDF2(msg, salt1);
    // const saltedHash2 = this.encrDecrService.hashPBKDF2(msg, salt1);
    // const saltedHash3 = this.encrDecrService.hashPBKDF2(msg, salt2);

    console.log('message:', msg);
    console.log('encrypted hash1:', saltedHash1.toString());
    // console.log('encrypted hash1:', saltedHash1.toString());
    // console.log('encrypted hash2:', saltedHash2.toString());
    // console.log('encrypted hash2:', saltedHash2.toString());

    console.log('salt1:', salt1.toString());
    // console.log('salt2:', salt2.toString());

    // console.log('encoded with salt2');
    // console.log('encrypted hash3:', saltedHash3.toString());
    // console.log('encrypted hash3:', saltedHash3.toString());
  }
}
