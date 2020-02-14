export interface IReport {
    level: "error" | "success"
    message: string
}

export interface IReportsManager{
    add(data: IReport): void;
}

export function isIReport(data: any): data is IReport{
    return data
    && (data.level === "success" || data.level === "error")
    && typeof data.message === "string"
}