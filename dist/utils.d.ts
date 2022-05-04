import type { AcceptAddressFormat, AddressObject, Parsers, Validator } from './types/address-format';
export declare const allowedTokens: string[];
export declare const constructInitialObject: (presetState?: Partial<AddressObject> | undefined) => AddressObject;
export declare const parseStringToObject: (address: string, parser: Parsers) => AddressObject;
export declare const parseValidator: <K = string>(oldValue: K, newValue: K, validatorFn: Validator<K>) => K;
export declare const containsValidTokens: (format: AcceptAddressFormat, parser?: string) => boolean;
export declare const isValidFormat: (format: AcceptAddressFormat, parser?: string) => boolean;
