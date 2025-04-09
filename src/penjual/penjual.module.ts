import { Module } from '@nestjs/common';
import { PenjualController } from './penjual.controller';
import { PenjualService } from './penjual.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Penjual } from './penjual.model';

@Module({
  imports: [SequelizeModule.forFeature([Penjual])],
  controllers: [PenjualController],
  providers: [PenjualService],
})
export class PenjualModule {}
