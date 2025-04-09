import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { PenjualModule } from './penjual/penjual.module';
import { Penjual } from './penjual/penjual.model';
import { Produk } from './produk/produk.model';
import { ProdukModule } from './produk/produk.module';

@Module({
  imports: [
    PenjualModule,
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      models: [Penjual, Produk],
    }),
    ProdukModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
