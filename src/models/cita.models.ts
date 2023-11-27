import { Table, Column ,Model ,DataType , PrimaryKey, ForeignKey, BelongsTo  } from 'sequelize-typescript';
import { timeStamp } from "console";
import { Doctor } from './doctores.models'
import { Paciente } from "./paciente.models";
import { Especializacion } from "./especializacion.models";
import { Consultorio } from "./consultorio.models";



//el arroba es una DIRECTIVA, abajo debe venir algo
@Table({
    timestamps : false,
    tableName: 'cita',
})
export class Cita extends Model {
    @Column({
        type: DataType.DATE,
        allowNull: false,
        primaryKey: true,
        
    })
    fecha_hora!: Date

    @ForeignKey( () => Doctor)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_profesional!: number


    @ForeignKey( () => Paciente)
    @PrimaryKey
    @Column({
         type: DataType.INTEGER,
         allowNull: false,
     })
     id_numeroCedula!: number

    @ForeignKey( () => Especializacion)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_especializacion!: number
    
    @ForeignKey( () => Consultorio)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,   
    })
    id_consultorio!: number

   
    @BelongsTo(()=> Doctor)
    doctor!: Doctor

    @BelongsTo(()=> Paciente)
    paciente!: Paciente

    @BelongsTo(()=> Especializacion)
    especializacion!: Especializacion

    @BelongsTo(()=> Consultorio)
    consultorio!: Consultorio
}