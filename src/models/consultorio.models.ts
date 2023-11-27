import { Table, Column ,Model ,DataType , PrimaryKey, ForeignKey, HasMany } from 'sequelize-typescript';
import { timeStamp } from "console";
import { Cita } from './cita.models';

@Table({
    timestamps : false,
    tableName: 'consultorio',
})
export class Consultorio  extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        primaryKey:true
    })
    id_consultorio!: number

    @Column({
        type: DataType.STRING,
        allowNull:true,  
    })
    direccionConsultorio!:string

    @HasMany(() => Cita)
    cita!:Cita[]
    


}