export enum AlertLevel {
  Error = 0,
  Warn = 1,
}

// loggers use the same args as `console.log` - i.e. [util.format](https://nodejs.org/docs/latest-v10.x/api/util.html#util_util_format_format_args)
export type UtilFormat = (message?: any, ...optionalParams: any[]) => void;
export type AlertUtilFormat = (level: AlertLevel, message?: any, ...optionalParams: any[]) => void;

export interface ILogger {
  net: UtilFormat;
  debug: UtilFormat;
  info: UtilFormat;
  warn: UtilFormat;
  error: UtilFormat;
  fatal: UtilFormat;
  alert: AlertUtilFormat;
}
