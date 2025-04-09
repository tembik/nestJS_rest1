import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Produk } from './produk.model';
import { ProdukDto } from './dto/produk.dto';
import { Penjual } from '../penjual/penjual.model';

@Injectable()
export class ProdukService {
  constructor(
    @InjectModel(Produk)
    private produkModel: typeof Produk,
  ) {}

  async readAll() {
    try {
      const produk = await this.produkModel.findAll({
        attributes: ['id', 'nama', 'deskripsi'],
        order: [['createdAt', 'DESC']],
        include: [{ model: Penjual, attributes: ['nama', 'alamat'] }],
      });
      return produk;
    } catch (error) {
      return { message: error.message };
    }
  }

  async readOne(id: string) {
    try {
      const produk = await this.produkModel.findOne({
        attributes: ['id', 'nama', 'deskripsi'],
        where: { id: id },
        order: [['createdAt', 'DESC']],
        include: [{ model: Penjual, attributes: ['nama', 'alamat'] }],
      });
      if (produk) {
        return produk;
      } else {
        return { message: 'produk tidak ditemukan' };
      }
    } catch (error) {
      return { message: error.message };
    }
  }

  async create(data: Produk) {
    try {
      await this.produkModel.create(data);
      return { message: 'berhasil membuat produk baru' };
    } catch (error) {
      return { message: error.message };
    }
  }

  async update(id: string, data: Produk) {
    try {
      const produk = await this.produkModel.findOne({ where: { id: id } });
      if (produk) {
        await this.produkModel.update(
          { nama: data.nama, deskripsi: data.deskripsi },
          { where: { id: produk.id } },
        );
        return { message: 'produk berhasil di update' };
      } else {
        return { message: 'produk tidak ditemukan' };
      }
    } catch (error) {
      return { message: error.message };
    }
  }

  async delete(id: string) {
    try {
      const produk = await this.produkModel.findOne({ where: { id: id } });
      if (produk) {
        await this.produkModel.destroy({ where: { id: produk.id } });
        return { message: 'berhasil hapus produk' };
      } else {
        return { message: 'produk tidak ditemukan' };
      }
    } catch (error) {
      return { message: error.message };
    }
  }
}
