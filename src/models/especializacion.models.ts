import { Table, Column ,Model ,DataType , HasMany , BelongsTo , PrimaryKey, ForeignKey  } from 'sequelize-typescript';
import { timeStamp } from "console";
import { Cita } from './cita.models'

@Table({
    timestamps: false,
    tableName: 'especializacion',
})
export class Especializacion extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id_especializacion!: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    especialidad!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    descripcion!: string

    @HasMany(()=>Cita)
    cita!: Cita []

}