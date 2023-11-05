import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('compras')
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'total_compra', type: 'double' })
  totalCompra: number;

  @CreateDateColumn({ name: 'fecha_compra' })
  fechaCompra: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.compras)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuarios: Usuario;


  @OneToMany(() => Compra, (compra) => compra.compras)
  compras: Compra[];
}
export { Usuario };
