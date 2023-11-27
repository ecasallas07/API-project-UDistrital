import { Table, Column ,Model ,DataType , PrimaryKey, ForeignKey, HasOne } from 'sequelize-typescript';
import { timeStamp } from "console";
import { Paciente } from './paciente.models'



@Table({
    timestamps : false,
    tableName: 'telefono',
})
export class Telefono extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    id_telefono!: number    

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    extension!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    numberTelefono!: number

    @HasOne(()=>Paciente)
    paciente!: Paciente
}