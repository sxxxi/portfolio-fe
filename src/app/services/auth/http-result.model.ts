export abstract class HttpResult<T> {
  code: number;

  constructor(code: number) {
    this.code = code;
  }

  static Success = class<T> extends HttpResult<T> {
    payload: T
    constructor(payload: T) { 
      super(200);
      this.payload = payload 
    }
  }

  static Error = class<T> extends HttpResult<T> {
    reason: string;

    constructor(code: number, reason: string) {
      super(code);
      this.reason = reason;
    }
  }
}