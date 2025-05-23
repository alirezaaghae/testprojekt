import type { ConfigData } from "../types/fields";

type FieldValidationConfig = {
  [K in keyof ConfigData]?: {
    minLength?: number;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    items?: [string | number, string][];
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
  select: {
    items: [
      [1, "Option A"],
      [2, "Option B"],
    ],
  },
  combobox: {
    items: [
      ["key1", "Label 1"],
      ["key2", "Label 2"],
    ],
  },
};