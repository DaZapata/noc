import { envs } from "../config/plugins/envs.plugins";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.implementation";
import { CronService } from "./cron/cron-service";
import { EmailSevice } from "./email/email.service";

const filesystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
);

//para el caso de uso
//const emailService = new EmailSevice();

export class Server {

    // static sirve para poder usarlo de esta manera Server.start();
    // si no fuera static habria que crear la instancia seria asi, const server = new Server()
    // server.start(); 
    public static start(){

        console.log('Server started...');
        
        // enviar el email
        // para el nopm run dev
        const emailService = new EmailSevice(filesystemLogRepository);
        emailService.sendEmailWithFileSystemLogs(
            ['davidzapata56@gmail.com', 'davidandreszapata@me.com']
        );

        // //para el caso de uso
        // new SendEmailLogs(
        //     emailService, filesystemLogRepository
        // ).execute(['davidzapata56@gmail.com', 'davidandreszapata@me.com'])

        // const emailService = new EmailSevice();
        // emailService.sendEmail({
        //     to: 'davidzapata56@gmail.com',
        //     subject: 'Logs',
        //     htmlBody: `
        //         <h3>Logs NOC</h3>
        //         <p>ssdfsdfsd</p>
        //         <p>Ver Logs</p>
        //     `
        // });
        
        
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