import type { ConfigData } from "../types/fields";

export function validateField<K extends keyof ConfigData>(
  key: K,
  value: ConfigData[K],
  config?: {
    minLength?: number;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    items?: [string | number, string][];
  }
): string | null {
  switch (key) {
    case "name": {
      if (typeof value !== "string") return "Ungültiger Typ";
      if (config?.minLength && value.trim().length < config.minLength)
        return `Mindestens ${config.minLength} Zeichen erforderlich`;
      if (config?.maxLength && value.trim().length > config.maxLength)
        return `Maximal ${config.maxLength} Zeichen erlaubt`;
      return null;
    }

    case "integer": {
      if (typeof value !== "number" || !Number.isInteger(value)) return "Ungültiger Integer-Wert";
      if (config?.minValue !== undefined && value < config.minValue)
        return `Muss mindestens ${config.minValue} sein`;
      if (config?.maxValue !== undefined && value > config.maxValue)
        return `Darf maximal ${config.maxValue} sein`;
      return null;
    }

    case "float": {
      if (typeof value !== "number" || !Number.isFinite(value))
        return "Ungültiger Float-Wert";
      if (config?.minValue !== undefined && value < config.minValue)
        return `Muss mindestens ${config.minValue} sein`;
      if (config?.maxValue !== undefined && value > config.maxValue)
        return `Darf maximal ${config.maxValue} sein`;
      return null;
    }

    case "date":
    case "datetime": {
      const date = new Date(value as string);
      if (isNaN(date.getTime())) return "Ungültiges Datum";
      if (config?.minValue !== undefined && date.getTime() < config.minValue)
        return `Datum muss nach dem ${new Date(config.minValue).toLocaleDateString()} liegen`;
      if (config?.maxValue !== undefined && date.getTime() > config.maxValue)
        return `Datum muss vor dem ${new Date(config.maxValue).toLocaleDateString()} liegen`;
      return null;
    }

    case "duration": {
      if (typeof value !== "number") return "Ungültige Dauer";
      if (config?.minValue !== undefined && value < config.minValue)
        return `Mindestens ${config.minValue} Sekunden erforderlich`;
      if (config?.maxValue !== undefined && value > config.maxValue)
        return `Maximal ${config.maxValue} Sekunden erlaubt`;
      return null;
    }

    case "point": {
      if (!Array.isArray(value) || 
          value.length !== 2 || 
          !value.every(v => typeof v === "number" && Number.isFinite(v))
        )
        return "Ungültiger Punkt";
      if (value[0] === 0 && value[1] === 0 ) return "Ungültiger Punkt";
      return null;
    }

    case "extent": {
      if (!Array.isArray(value) || 
      value.length !== 4 || 
      !value.every(v => typeof v === "number" && Number.isFinite(v))
    )
        return "Ungültiges Extent";
      return null;
    }

    default:
      return null;
  }
}