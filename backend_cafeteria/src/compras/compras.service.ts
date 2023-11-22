import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/compras/entities/compra.entity';
import { Repository } from 'typeorm';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { Compra } from './entities/compra.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Injectable()
export class ComprasService {
  constructor(
    @InjectRepository(Compra)
    private compraRepository: Repository<Compra>,
  ) {}

  async create(createCompraDto: CreateCompraDto): Promise<Compra> {
    const existeCompra = await this.compraRepository.findOneBy({
      totalCompra: createCompraDto.totalCompra,
      usuario: { id: createCompraDto.IdUsuario },
      cliente: {id:createCompraDto.idCliente }
    });

    if (existeCompra) {
      throw new ConflictException('La compra existe');
    }
    return this.compraRepository.save({
      totalCompra: createCompraDto.totalCompra,
      usuarios: { id: createCompraDto.IdUsuario },
      cliente: {id:createCompraDto.idCliente }
    });
  }

  async findAll(): Promise<Compra[]> {
    return this.compraRepository.find({ relations: ['usuario','cliente'] });
  }

  async findOne(id: number): Promise<Compra> {
    const compra = await this.compraRepository.findOne({
      where: { id },
      relations: ['usuario', 'cliente'],
    });
    if (!compra) {
      throw new NotFoundException(`No existe la compra ${id}`);
    }
    return compra;
  }

  async update(id: number, updateCompraDto: UpdateCompraDto): Promise<Compra> {
    const compra = await this.compraRepository.findOneBy({ id });
    if (!compra) {
      throw new NotFoundException(`No existe la compra ${id}`);
    }
    const compraUpdate = Object.assign(compra, updateCompraDto);
    compraUpdate.usuario = { id: updateCompraDto.IdUsuario } as Usuario;
    compraUpdate.cliente = { id: updateCompraDto.idCliente } as Cliente;
    return this.compraRepository.save(compraUpdate);
  }

  async remove(id: number) {
    const compra = await this.compraRepository.findOneBy({ id });
    if (!compra) {
      throw new NotFoundException(`No existe la compra ${id}`);
    }
    return this.compraRepository.delete(id);
  }
}
