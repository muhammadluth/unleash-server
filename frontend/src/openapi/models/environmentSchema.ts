/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * A definition of the project environment
 */
export interface EnvironmentSchema {
    /** The name of the environment */
    name: string;
    /** The [type of environment](https://docs.getunleash.io/reference/environments#environment-types). */
    type: string;
    /** `true` if the environment is enabled for the project, otherwise `false`. */
    enabled: boolean;
    /** `true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted. */
    protected: boolean;
    /** Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear. Needs to be an integer */
    sortOrder: number;
    /** The number of projects with this environment */
    projectCount?: number | null;
    /** The number of API tokens for the project environment */
    apiTokenCount?: number | null;
    /** The number of enabled toggles for the project environment */
    enabledToggleCount?: number | null;
}