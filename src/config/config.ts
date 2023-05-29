import dotenv from 'dotenv';
dotenv.config();

const SERVER_PORT: number = Number(process.env.SERVER_PORT) || 1337;
const SERVER_TOKEN_EXPIRETIME: number =
  Number(process.env.SERVER_TOKEN_EXPIRETIME) || 3600;
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || 'sudoIssuer';
const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || 'sudoEncrypted';
const INFLUX_URL = process.env.INFLUX_URL || '';
const INFLUX_TOKEN = process.env.INFLUX_TOKEN || '';
const INFLUX_ORG = process.env.INFLUX_ORG || '';
const INFLUX_BUCKET = process.env.INFLUX_BUCKET || '';

export const config = {
  server: {
    port: SERVER_PORT,
    token: {
      expireTime: SERVER_TOKEN_EXPIRETIME,
      issuer: SERVER_TOKEN_ISSUER,
      secret: SERVER_TOKEN_SECRET,
    },
  },
  influx: {
    url: INFLUX_URL,
    token: INFLUX_TOKEN,
    org: INFLUX_ORG,
    bucket: INFLUX_BUCKET,
  },
};
