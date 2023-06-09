/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { FeatureSchema } from './featureSchema';
import type { FeatureStrategySchema } from './featureStrategySchema';
import type { FeatureEnvironmentSchema } from './featureEnvironmentSchema';
import type { ContextFieldSchema } from './contextFieldSchema';
import type { FeatureTagSchema } from './featureTagSchema';
import type { ExportResultSchemaSegmentsItem } from './exportResultSchemaSegmentsItem';
import type { TagTypeSchema } from './tagTypeSchema';

export interface ExportResultSchema {
    features: FeatureSchema[];
    featureStrategies: FeatureStrategySchema[];
    featureEnvironments?: FeatureEnvironmentSchema[];
    contextFields?: ContextFieldSchema[];
    featureTags?: FeatureTagSchema[];
    segments?: ExportResultSchemaSegmentsItem[];
    tagTypes: TagTypeSchema[];
}
