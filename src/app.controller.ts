import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('block-by-hash/:hash')
  getBlockByHash(@Param('hash') hash: string) {
    return this.appService.getBlock(hash);
  }
  @Get('last-block/')
  getLastBlock(): any {
    return this.appService.getBlock(
      '0x2f52676c96b64fdcf27883620083634f02f1aae53223307a7b13551f52bbf172',
    );
  }
  @Get('total-supply/:address')
  getTotalSupply(@Param('address') address: string) {
    return this.appService.getTotalSupply(address);
  }
  @Get('allowance')
  getAllowance(
    @Query('address') address: string,
    @Query('owner') owner: string,
    @Query('spender') spender: string,
  ) {
    return this.appService.getTotalSupply(address, owner, spender);
  }
}
