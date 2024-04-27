import { envs } from "../config/plugins/envs.plugins";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.implementation";
import { CronService } from "./cron/cron-service";
import { EmailSevice } from "./email/email.service";

const filesystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
);

export class Server {

    // static sirve para poder usarlo de esta manera Server.start();
    // si no fuera static habria que crear la instancia seria asi, const server = new Server()
    // server.start(); 
    public static start(){

        console.log('Server started...');
        
        // enviar el email
        const emailService = new EmailSevice();

        emailService.sendEmail({
            to: 'davidzapata56@gmail.com',
            subject: 'Logs de sistema',
            htmlBody: `
                <h3>Logs de sistema - NOC</h3>
                <p>Loren ipsum non veliant tampo druse tyu drinsns pewiun permua drenndo parfa deb fir ejhbhdek huhe fde </p>
                <p>Ver logs adjuntos</p>
            `
        })
        // CronService.createJob(
        //     '*/5 * * * * *', // cada 3 segundos
        //     () => {
        //         const url = 'https://google.com';
        //     new CheckService(
        //         filesystemLogRepository,
        //         () => console.log(`${url} is ok`),
        //         (error) => console.log(error),                                
        //     ).execute(url)
        //     //new CheckService().execute('http://localhost:3000/')
        //     }, // onTick
        // );
       
    }

}