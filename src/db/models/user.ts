import {DataTypes, Model, Optional} from "sequelize";
import {sequelizeConnection as connection} from "../../config/db";

interface UserAttributes {
    id?: number,
    fullName?: string | null,
    country?: string | null,
    createdAt?: Date,
    updatedAt?: Date
}

export type UserInput = Optional<UserAttributes, "id">

export type UserOutput = Required<UserAttributes>

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number;
    public fullName!: string;
    public country!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },

}, {
    timestamps: true,
    sequelize: connection,
    underscored: false
});

export default User;
