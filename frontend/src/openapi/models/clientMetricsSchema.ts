/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ClientMetricsSchemaBucket } from './clientMetricsSchemaBucket';

export interface ClientMetricsSchema {
    appName: string;
    instanceId?: string;
    environment?: string;
    bucket: ClientMetricsSchemaBucket;
}
