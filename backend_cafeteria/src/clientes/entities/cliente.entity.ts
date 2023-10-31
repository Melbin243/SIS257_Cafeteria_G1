import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 40, nullable: false })
  nombre: string;

  @Column({ name: 'apellido_paterno', type: 'varchar', length: 40 })
  apellidoPaterno: string;

  @Column({ name: 'apellido_materno', type: 'varchar', length: 40 })
  apellidoMaterno: string;

  @Column({ type: 'varchar', length: 40 })
  direccion: string;

  @Column({ length: 8})
  celular: string;

  @CreateDateColumn({name: 'fecha_creacion'})
  fechaCreacion: Date

  @UpdateDateColumn({name: 'fecha_modicficacion'})
  fechaModificacion: Date
}
