/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { RoleSchema } from './roleSchema';
import type { FeatureSchema } from './featureSchema';

export interface ProfileSchema {
    rootRole: RoleSchema;
    projects: string[];
    features: FeatureSchema[];
}