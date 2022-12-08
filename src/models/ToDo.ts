import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/pg';

export interface ToDoInstance extends Model {
    id: number;
    title: string;
    done: boolean;
}

export const ToDo = sequelize.define<ToDoInstance>('ToDo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }, 
}, 
{
    tableName: 'tb_todos',
    timestamps: false
});