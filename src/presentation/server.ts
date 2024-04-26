import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.implementation";
import { CronService } from "./cron/cron-service";

const filesystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
);

export class Server {

    // static sirve para poder usarlo de esta manera Server.start();
    // si no fuera static habria que crear la instancia seria asi, const server = new Server()
    // server.start(); 
    public static start(){
        console.log('Server started...');
        
        CronService.createJob(
            '*/5 * * * * *', // cada 3 segundos
            () => {
                const url = 'https://google.com';
            new CheckService(
                filesystemLogRepository,
                () => console.log(`${url} is ok`),
                (error) => console.log(error),                                
            ).execute(url)
            //new CheckService().execute('http://localhost:3000/')
            }, // onTick
        );
       
    }

}