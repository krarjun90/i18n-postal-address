import type { PostalLabels } from 'node-postal';
import type { AddressParts, TransformFunction } from './types/address-format';
declare type LabelObject<T> = {
    attribute: T;
    transform: TransformFunction;
};
export declare type LabelConfig<T> = Partial<T> | LabelObject<T>;
export declare type ParserMap<T> = Record<AddressParts, LabelConfig<T>[]>;
/**
 * Mapping between the parsed labels and this library's internal representation.
 * @see {@link https://github.com/openvenues/libpostal#parser-labels|libpostal}
 */
declare const libpostalMap: ParserMap<PostalLabels>;
export default libpostalMap;
