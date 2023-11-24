import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const existeCliente = await this.clienteRepository.findOneBy({
      nombre: createClienteDto.nombre,
      apellidos: createClienteDto.apellidos,
      usuario: { id: createClienteDto.idUsuario }
    });

    if (existeCliente) {
      throw new ConflictException('El cliente ya existe');
    }

    return this.clienteRepository.save({
      nombre: createClienteDto.nombre.trim(),
      apellidos: createClienteDto.apellidos.trim(),
      direccion: createClienteDto.direccion.trim(),
      celular: createClienteDto.celular.trim(),
      usuario: { id: createClienteDto.idUsuario }
    });
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find({ relations: ['usuario'] });
  }

  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({
      where: { id },
      relations: ['usuario'],
    });
    if (!cliente) {
      throw new NotFoundException(`No existe el cliente ${id}`);
    }
    return cliente;
  }

  async update(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOneBy({ id });
    if (!cliente) {
      throw new NotFoundException(`No existe el cliente ${id}`);
    }
    const clienteUpdate = Object.assign(cliente, updateClienteDto);
    clienteUpdate.usuario = { id: updateClienteDto.idUsuario } as Usuario;
    return this.clienteRepository.save(clienteUpdate);
  }

  async remove(id: number) {
    const cliente = await this.clienteRepository.findOneBy({ id });
    if (!cliente) {
      throw new NotFoundException(`No existe el cliente ${id}`);
    }
    return this.clienteRepository.delete(id);
  }
}
