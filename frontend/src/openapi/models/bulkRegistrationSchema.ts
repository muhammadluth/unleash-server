/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { BulkRegistrationSchemaConnectViaItem } from './bulkRegistrationSchemaConnectViaItem';
import type { DateSchema } from './dateSchema';

export interface BulkRegistrationSchema {
    connectVia?: BulkRegistrationSchemaConnectViaItem[];
    appName: string;
    environment?: string;
    instanceId: string;
    interval?: number;
    started?: DateSchema;
    strategies?: string[];
    sdkVersion?: string;
}
