import * as dotEnv from 'dotenv'

dotEnv.config();

type ServiceEnviroments = {
    port: number;
    host: string;
    dbPort: number;
    dbName: string;
}

export const envConfig: ServiceEnviroments = {
    port: +(process.env.PORT || 3000),
    host: process.env.DB_HOST || 'localhost',
    dbPort: +(process.env.DB_PORT || 27017),
    dbName: process.env.DB_NAME || 'lazar',
}