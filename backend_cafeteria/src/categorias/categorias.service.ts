import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const existeCategoria = await this.categoriaRepository.findOneBy({
      nombre: createCategoriaDto.nombre
    })

    if(existeCategoria){
      throw new ConflictException('La categoria ya existe');
    }
    return this.categoriaRepository.save({
      nombre: createCategoriaDto.nombre.trim(),
      estado: createCategoriaDto.estado
    });
  }

  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOneBy({id});
    if(!categoria){
      throw new NotFoundException(`No existe la categoria ${id}`);
    }
    return categoria;
  }

  async update(id: number, UpdateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOneBy({id});
    if(!categoria){
      throw new NotFoundException(`No existe la categoria ${id}`);
    }
    const categoriaUpdate = Object.assign(categoria, UpdateCategoriaDto);
    return this.categoriaRepository.save(categoriaUpdate);
  }

  async remove(id: number) {
    const categoria = await this.categoriaRepository.findOneBy({id});
    if(!categoria){
      throw new NotFoundException(`No existe la categoria ${id}`);
    }
    return this.categoriaRepository.delete(id);
  }
}
