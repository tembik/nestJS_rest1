import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { PenjualService } from './penjual.service';
import { Penjual } from './penjual.model';
import { PenjualDto } from './dto/penjual.dto';

@Controller('api')
export class PenjualController {
  constructor(private penjualService: PenjualService) {}

  @Get('user')
  async getAllUser() {
    return await this.penjualService.readAll();
  }

  @Get('user/:id')
  async getOneUser(@Param('id') id: string) {
    return await this.penjualService.readOne(id);
  }

  @Post('user')
  async createUser(@Body() user: Penjual) {
    return await this.penjualService.create(user);
  }

  @Put('user/:id')
  async updateUser(@Param('id') id: string, @Body() user: Penjual) {
    return await this.penjualService.update(id, user)
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: string) {
    return await this.penjualService.delete(id);
  }
}
