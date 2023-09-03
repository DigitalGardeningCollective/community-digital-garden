import { Json } from "./generated";
import { ChangeDetails } from "./manual";

// General

export const isObject = (value: unknown): value is Record<string, unknown> => {
    return value !== null && typeof value === 'object';
};

// Type-specific

export const isChangeDetails = (data: unknown): data is ChangeDetails & Json => {
    if (isObject(data) && data.contributor) {
        return true;
    } else {
        return false
    }
}

