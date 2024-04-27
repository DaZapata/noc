


export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export interface LogEntityOptions {
    level: LogSeverityLevel;
    message: string;
    origin: string;
    createdAd?: Date;
}


export class LogEntity {
    public level: LogSeverityLevel;
    public message: string;
    public createdAd: Date;
    public origin: string;

    constructor(options: LogEntityOptions){
        const {message, level, origin, createdAd = new Date()} = options;
        this.message = message;
        this.level = level;
        this.createdAd = createdAd;
        this.origin = origin;
    }

    static fromJson = (json: string): LogEntity => {
        const {message, level, createdAd} = JSON.parse(json);
        //if (!message) throw new Error('Message is required');
        //if (!level) throw new Error('Level is required');

        const log = new LogEntity({
            message: message,
            level: level,
            createdAd: createdAd,
            origin: origin
        });
    
        return log;
    }
}
