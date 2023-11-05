import { Categoria } from "src/categorias/entities/categoria.entity";
import { CompraDetalle } from "src/compra-detalles/entities/compra-detalle.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    nombre: string;

    @Column({ type: 'varchar', length: 200, nullable: false })
    descripcion: string;

    @Column('decimal',{ precision: 5, scale: 2, nullable: false })
    precio: number;

    @Column({ type: 'int', nullable: false})
    stock: number;

    @CreateDateColumn({ name: 'fecha_creacion'})
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion'})
    fechaModificacion: Date;

    @OneToMany(() => CompraDetalle, (compradetalle) => compradetalle.productos)
    compradetalle: CompraDetalle[];

    @ManyToOne(() => Categoria, (categoria) => categoria.productos )
    @JoinColumn({ name: 'id_categoria', referencedColumnName: 'id' })
    categorias: Categoria;
}