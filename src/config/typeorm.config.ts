import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

export const TypeOrmConnection: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['**/*.entity{.ts,.js}'],
  migrations: ['**/migrations/*{.ts,.js}'],
  synchronize: process.env.NODE_ENV === 'development',
};

export default new DataSource(TypeOrmConnection);
