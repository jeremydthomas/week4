import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as tokenJson from './assets/MyToken.json';

export class PaymentOrderModel {
  id: number;
  secret: string;
  value: number;
}

@Injectable()
export class AppService {
  provider: ethers.providers.Provider;
  paymentOrders: PaymentOrderModel[];

  constructor() {
    this.provider = ethers.getDefaultProvider('goerli');
    this.paymentOrders = [];
  }
  getBlock(blockHashOrBlockTag: string) {
    return this.provider.getBlock(blockHashOrBlockTag);
  }

  async getTotalSupply(address: string) {
    const contract = new ethers.Contract(address, tokenJson.abi, this.provider);
    const bn = await contract.totalSupply();
    return ethers.utils.formatEther(bn);
  }

  async getAllowance(address: string, owner: string, spender: string) {
    const contract = new ethers.Contract(address, tokenJson.abi, this.provider);
    const bn = await contract.allowance(owner, spender, address);
    return ethers.utils.formatEther(bn);
  }

  getPaymentOrder(id: string) {
    // todo
  }
  createPaymentOrder(secret: string, value: number) {
    // todo
  }
  claimPaymentOrder(id: string, secret: string, address: string) {
    // todo
  }
}
