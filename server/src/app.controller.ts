import { Controller, Get, Post, Req } from '@nestjs/common'
import { AppService } from '@/app.service'
import { IItem } from '@/types/item'
import { Request } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/items')
  getItems(): IItem[] {
    return this.appService.getItems()
  }

  @Post('/checkout')
  getCheckout(@Req() request: Request) {
    return this.appService.getCheckout(request)
  }
}
