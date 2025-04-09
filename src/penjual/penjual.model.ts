import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { PenjualDto } from './dto/penjual.dto';
import { Produk } from '../produk/produk.model';

@Table({ tableName: 'penjual' })
export class Penjual extends Model<Penjual> {
  @Column
  nama: string;

  @Column
  alamat: string;

  @HasMany(() => Produk)
  produk: Produk[];
}
