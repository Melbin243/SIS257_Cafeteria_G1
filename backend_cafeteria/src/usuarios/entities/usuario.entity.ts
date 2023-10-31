import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Compra } from 'src/compras/entities/compra.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  usuario: string;

  @Column({ type: 'varchar', length: 35 })
  clave: string;

  @Column({length: 20})
  rol: string

  @CreateDateColumn({name: 'fecha_creacion'})
  fechaCreacion: Date

  @UpdateDateColumn({name: 'fecha_modicficacion'})
  fechaModificacion: Date

  @OneToOne(() => Cliente)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  cliente: Cliente;

  @OneToMany(() => Compra, (compra) => compra.usuarios)
  @JoinColumn({ name: 'id_compra', referencedColumnName: 'id' })
  compras: Compra[];
}
