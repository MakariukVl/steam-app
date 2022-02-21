import { Injectable } from '@angular/core';
import { CoreModule } from '@core/core.module';
import * as CryptoJS from 'crypto-js';

@Injectable({
  // providedIn: 'root',
  providedIn: CoreModule,
})
export class EncrDecrService {
  constructor() {}

  //The set method is use for encrypt the value.
  encryptWithKey(keys: string, value: string): string {
    const key = CryptoJS.enc.Utf8.parse(keys);
    const iv = CryptoJS.enc.Utf8.parse(keys);
    const encrypted = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(value.toString()),
      key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    return encrypted.toString();
  }

  //The get method is use for decrypt the value.
  decryptWithKey(keys: string, value: string): string {
    const key = CryptoJS.enc.Utf8.parse(keys);
    const iv = CryptoJS.enc.Utf8.parse(keys);
    const decrypted = CryptoJS.AES.decrypt(value, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  getRandomSalt(): string {
    return CryptoJS.lib.WordArray.random(128 / 8).toString();
  }
  hashPBKDF2(value: string, salt: string): string {
    return CryptoJS.PBKDF2(value, salt, {
      keySize: 256 / 32,
    }).toString();
  }
}
