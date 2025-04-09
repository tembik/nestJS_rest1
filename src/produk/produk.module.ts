import { Module } from '@nestjs/common';
import { ProdukController } from './produk.controller';
import { ProdukService } from './produk.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Produk } from './produk.model';

@Module({
  imports: [SequelizeModule.forFeature([Produk])],
  controllers: [ProdukController],
  providers: [ProdukService],
})
export class ProdukModule {}
