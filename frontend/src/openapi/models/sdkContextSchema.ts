/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { SdkContextSchemaProperties } from './sdkContextSchemaProperties';

/**
 * The Unleash context as modeled in client SDKs
 */
export interface SdkContextSchema {
    appName: string;
    currentTime?: string;
    /** @deprecated */
    environment?: string;
    properties?: SdkContextSchemaProperties;
    remoteAddress?: string;
    sessionId?: string;
    userId?: string;
    [key: string]: any;
}