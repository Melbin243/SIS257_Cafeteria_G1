import { Producto } from "src/productos/entities/producto.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('categorias')
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50, nullable: false})
    nombre: string;

    @Column({ default: true})
    estado: boolean;

    @CreateDateColumn({ name: 'fecha_creacion'})
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion'})
    fechaModificacion: Date;

    @OneToMany(() => Producto, (producto) => producto.categorias)
    @JoinColumn({ name: 'id_Producto', referencedColumnName: 'id'})
    productos: Producto[];
}
