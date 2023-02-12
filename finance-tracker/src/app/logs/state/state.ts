export enum LogType {
  Spend = "Spend",
  Income = "Income",
}

export interface Log {
  title: string;
  date: string;
  amount: number;
  type: LogType;
  categoryId: number;
}

export interface LogState {
  logs: Log[],
  loading: {
    list: boolean;
    add: boolean;
  };
}

export const initialState: LogState = {
  logs: [],
  loading: {
    add: false,
    list: false,
  }
}
