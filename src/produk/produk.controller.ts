import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ProdukService } from './produk.service';
import { Produk } from './produk.model';
import { ProdukDto } from './dto/produk.dto';

@Controller('api')
export class ProdukController {
  constructor(private produkService: ProdukService) {}

  @Get('produk')
  async getAllProduk() {
    return await this.produkService.readAll();
  }

  @Get('produk/:id')
  async getOneProduk(@Param('id') id: string) {
    return await this.produkService.readOne(id);
  }

  @Post('produk')
  async createProduk(@Body() produk: Produk) {
    return await this.produkService.create(produk);
  }

  @Put('produk/:id')
  async updateProduk(@Param('id') id: string, @Body() produk: Produk) {
    return await this.produkService.update(id, produk);
  }

  @Delete('produk/:id')
  async deleteProduk(@Param('id') id: string) {
    return await this.produkService.delete(id);
  }
}
