import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const existeUsuario = await this.usuarioRepository.findOneBy({
      usuario: createUsuarioDto.usuario,
      cliente: { id: createUsuarioDto.idCliente },
    });

    if (existeUsuario) {
      throw new ConflictException('El usuario ya existe');
    }

    return this.usuarioRepository.save({
      usuario: createUsuarioDto.usuario.trim(),
      clave: createUsuarioDto.clave.trim(),
      rol: createUsuarioDto.rol.trim(),
      cliente: { id: createUsuarioDto.idCliente },
    });
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find({ relations: ['cliente'] });
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
      relations: ['cliente'],
    });
    if (!usuario) {
      throw new NotFoundException(`No existe el usuario ${id}`);
    }
    return usuario;
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException(`No existe el usuario ${id}`);
    }
    const usuarioUpdate = Object.assign(usuario, updateUsuarioDto);
    usuarioUpdate.cliente = { id: updateUsuarioDto.idCliente } as Cliente;
    return this.usuarioRepository.save(usuarioUpdate);
  }

  async remove(id: number) {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException(`No existe el usuario ${id}`);
    }
    return this.usuarioRepository.delete(id);
  }
}
