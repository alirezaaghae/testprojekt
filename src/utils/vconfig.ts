import type { ConfigData } from "../types/fields";

type FieldValidationConfig = {
  [K in keyof ConfigData]?: {
    minLength?: number;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
  };
};

export const validationConfig: FieldValidationConfig = {
  name: {
    minLength: 3,
    maxLength: 20,
  },
  integer: {
    minValue: 1,
    maxValue: 100,
  },
  float: {
    minValue: 0.1,
    maxValue: 10.0,
  },
  date: {
    minValue: new Date("2024-01-01").getTime(),
    maxValue: new Date("2026-12-31").getTime(),
  },
  duration: {
    minValue: 60,
    maxValue: 86400,
  },
};