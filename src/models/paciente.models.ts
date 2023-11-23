import { Table, Column ,Model ,DataType , HasMany , BelongsTo , ForeignKey } from 'sequelize-typescript';
import { timeStamp } from "console";
import { Cita } from './cita.models'
import { Telefono } from './telefono.models'


//TODO:el arroba es una DIRECTIVA, abajo debe venir algo
@Table({
    timestamps : false,
    tableName: 'paciente',
})
export class Paciente extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    })
    id_numeroCedula!: number
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nombre!: string
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    apellido!: string
    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    fechaNacimiento!: Date

    @ForeignKey( () => Telefono)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_telefono!: number


    
    @BelongsTo(()=> Telefono)
    telefono!: Telefono
    @HasMany(()=>Cita)
    cita!: Cita []


}