


export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high'
}


export class LogEntity {
    public level: LogSeverityLevel;
    public message: string;
    public createdAd: Date;

    constructor(message: string, level:LogSeverityLevel){
        this.message = message;
        this.level = level;
        this.createdAd = new Date();
    }

    static fromJson = (json: string): LogEntity => {
        const {message, level, createdAd} = JSON.parse(json);
        //if (!message) throw new Error('Message is required');
        //if (!level) throw new Error('Level is required');

        const log = new LogEntity(message, level);
        log.createdAd = new Date(createdAd);
        return log;
    }
}
