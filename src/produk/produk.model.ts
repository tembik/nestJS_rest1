import {
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Penjual } from '../penjual/penjual.model';

@Table({ tableName: 'produk' })
export class Produk extends Model<Produk> {
  @Column
  nama: string;

  @Column
  deskripsi: string;

  @ForeignKey(() => Penjual)
  @Column
  penjualId: number;

  @BelongsTo(() => Penjual)
  penjual: Penjual;
}
