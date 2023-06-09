/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { CreateProjectSchemaMode } from './createProjectSchemaMode';

export interface CreateProjectSchema {
    id: string;
    name: string;
    description?: string;
    /** A mode of the project affecting what actions are possible in this project */
    mode?: CreateProjectSchemaMode;
    /** A default stickiness for the project affecting the default stickiness value for variants and Gradual Rollout strategy */
    defaultStickiness?: string;
}
