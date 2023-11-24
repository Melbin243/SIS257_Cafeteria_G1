import { Compra, Usuario } from 'src/compras/entities/compra.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 40, nullable: false })
  nombre: string;

  @Column({ name: 'apellidos', type: 'varchar', length: 80 })
  apellidos: string;

  @Column({ type: 'varchar', length: 40 })
  direccion: string;

  @Column({ length: 15})
  celular: string;

  @CreateDateColumn({name: 'fecha_creacion'})
  fechaCreacion: Date

  @UpdateDateColumn({name: 'fecha_modicficacion'})
  fechaModificacion: Date

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuario: Usuario;

  @OneToMany(() => Compra, (venta) => venta.cliente)
  compra: Compra[];
}
