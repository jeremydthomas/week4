import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';
import * as tokenJson from './assets/MyToken.json';

const TOKENIZED_VOTES_ADDRESS = '0x18785Bd1006D5D6Bb2D3930b421cB3EB7ebd77e5';

@Injectable()
export class AppService {
  provider: ethers.providers.Provider;

  constructor(private configService: ConfigService) {
    this.provider = ethers.getDefaultProvider('goerli');
  }

  getTokenAddress() {
    return { result: TOKENIZED_VOTES_ADDRESS };
  }

  // async claimTokens(address: string) {
  claimTokens(address: string) {
    // todo: build contract object
    // todo: pick the signer using the .env keys
    // todo: connect the contract object to the signer
    // todo: make the transaction to mint tokens
    // todo: await the transaction, get the receipt, return the hash
    return { result: `transaction hash for tokens minted for ${address}` };
  }
}
