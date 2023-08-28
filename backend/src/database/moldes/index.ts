import { Sequelize } from 'sequelize';
import * as config from '../config/database';
import DiagnosticoCardiometabolico from './cardiometabolic/diagnostico';
import FatoresCardiometabolico from './cardiometabolic/cardiometabolic';

const sequelize = new Sequelize(config)
// DiagnosticoCardiometabolico.associate({ FatoresCardiometabolico });
// FatoresCardiometabolico.associate({ DiagnosticoCardiometabolico });

export default sequelize;