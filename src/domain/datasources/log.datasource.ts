import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

// abstract para que no se pueda instanciar esta clase
export abstract class LogDatasource {
    abstract saveLog(log: LogEntity): Promise<void>;
    abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}

