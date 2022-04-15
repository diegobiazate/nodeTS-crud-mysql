import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface ClientInstance extends Model {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    email: string;
    aboutYou: string;
}

export const Client = sequelize.define<ClientInstance>("Client", {
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    birthDate: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.STRING
    },
    aboutYou: {
        type: DataTypes.TEXT
    }
},{
    tableName: 'clientes',
    timestamps: false
});