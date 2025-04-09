import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Penjual } from './penjual.model';
import { PenjualDto } from './dto/penjual.dto';

@Injectable()
export class PenjualService {
  constructor(
    @InjectModel(Penjual)
    private penjualModel: typeof Penjual,
  ) {}

  async readAll() {
    try {
      const penjual = await this.penjualModel.findAll({
        attributes: ['id', 'nama', 'alamat'],
        order: [['createdAt', 'DESC']],
      });
      return penjual;
    } catch (error) {
      return { message: error.message };
    }
  }

  async readOne(id: string) {
    try {
      const penjual = await this.penjualModel.findOne({
        attributes: ['id', 'nama', 'alamat'],
        where: { id: id },
        order: [['createdAt', 'DESC']],
      });
      if (penjual) {
        return penjual;
      } else {
        return { message: 'user tidak ditemukan' };
      }
    } catch (error) {
      return { message: error.message };
    }
  }

  async create(data: Penjual) {
    try {
      await this.penjualModel.create(data);
      return { message: 'berhasil membuat user baru' };
    } catch (error) {
      return { message: error.message };
    }
  }

  async update(id: string, data: Penjual) {
    try {
      const penjual = await this.penjualModel.findOne({ where: { id: id } });
      if (penjual) {
        await this.penjualModel.update(data, { where: { id: penjual.id } });
        return { message: 'berhasil update user' };
      } else {
        return { message: 'user tidak ditemukan' };
      }
    } catch (error) {
      return { message: error.message };
    }
  }

  async delete(id: string) {
    try {
      const penjual = await this.penjualModel.findOne({ where: { id: id } });
      if (penjual) {
        await this.penjualModel.destroy({ where: { id: penjual.id } });
        return { message: 'berhasil hapus user' };
      } else {
        return { message: 'user tidak ditemukan' };
      }
    } catch (error) {
      return { message: error.message };
    }
  }
}
