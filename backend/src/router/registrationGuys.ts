import { Router } from 'express';
import ControllerRegistrationGuys from "../controller/registration/registration.controller";
import BehavioralController from '../controller/registration/behavioral.controller';
import ControllerPsychosocial from '../controller/registration/psychosocial.controller';
import ControllerLabor from '../controller/registration/labor.controller';
import ControllerAffectious from '../controller/registration/affectious.controller';
import ControllerCardiometabolic from "../controller/registration/cardiometabolic.controller";

const registrationRouter = Router();

const controllerRegistrationGuys = new ControllerRegistrationGuys();
const behavioralController = new BehavioralController();
const controllerPsychosocial = new ControllerPsychosocial();
const controllerLabor = new ControllerLabor();
const controllerAffectious = new ControllerAffectious();
const controllerCardiometabolic = new ControllerCardiometabolic();



registrationRouter.post('/cardiometabolic', controllerCardiometabolic.newCardiometabolic);
registrationRouter.get('/cardiometabolic', controllerCardiometabolic.AllCardiometabolico);

registrationRouter.post('/Therapeutic', controllerAffectious.NewAffectious);
registrationRouter.get('/Therapeutic', controllerAffectious.AllAffectious);
registrationRouter.put('/Therapeutic/:id', controllerAffectious.affectiousUpdate);


registrationRouter.post('/behavioral', behavioralController.BehavioralNew);
//Psicossocial e suas associações ok
registrationRouter.post('/psychosocialCultural', controllerPsychosocial.PsychosocialNew);
// registrationRouter.get('/psychosocialCultural/:id', controllerPsychosocial.findByPsychosocial);
registrationRouter.get('/psychosocialCultural', controllerPsychosocial.updateOk);

registrationRouter.post('/factors', controllerLabor.NewLabor);
registrationRouter.put('/factors/:id', controllerLabor.laborUpdate);
registrationRouter.get('/factors', controllerLabor.laborAll);

registrationRouter.post('/', controllerRegistrationGuys.newRegister);
registrationRouter.get('/', controllerRegistrationGuys.AllRegistration);
registrationRouter.get('/:id', controllerRegistrationGuys.FindRegister);
registrationRouter.put('/:id', controllerRegistrationGuys.updateRegister);

export default registrationRouter;