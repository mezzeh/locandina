
enum LogLevel {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR"
}

class UnknownLevel extends Error {}

class Logger {
    static messages: string[] = [];

    static log(level: LogLevel, message: string): void {
        if (!Object.values(LogLevel).includes(level))
            throw new UnknownLevel("Unknown level " + level);

        let formatted = `[${level}] ${message}`;
        console.log(formatted);
        Logger.messages.push(formatted);
    }

    static history(): void {
        for (const msg of Logger.messages) {
            console.log(msg);
        }
    }
}
