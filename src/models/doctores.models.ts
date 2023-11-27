import { Table, Column ,Model ,DataType , HasMany  } from 'sequelize-typescript';
import { timeStamp } from "console";
import { Cita } from './cita.models'


//el arroba es una DIRECTIVA, abajo debe venir algo
@Table({
    timestamps : false,
    tableName: 'doctores',
})
export class Doctor extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    })
    id_profesional!: number
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
        type: DataType.STRING,
        allowNull: false,
    })
    correo!: string
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    telefono!: string

    @HasMany(()=>Cita)
    cita!: Cita []

    

}