/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { FeatureStrategySchema } from './featureStrategySchema';
import type { VariantSchema } from './variantSchema';

export interface ClientFeatureSchema {
    name: string;
    type?: string;
    description?: string | null;
    createdAt?: string | null;
    lastSeenAt?: string | null;
    enabled: boolean;
    stale?: boolean;
    impressionData?: boolean | null;
    project?: string;
    /** @deprecated */
    strategies?: FeatureStrategySchema[];
    /** @deprecated */
    variants?: VariantSchema[] | null;
}
