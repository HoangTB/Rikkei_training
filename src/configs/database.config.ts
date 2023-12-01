import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_DATABASE || 'test',
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  autoLoadEntities: true,
  synchronize: true,
};

export default databaseConfig;