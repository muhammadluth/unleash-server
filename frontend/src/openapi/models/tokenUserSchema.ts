/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { RoleSchema } from './roleSchema';

export interface TokenUserSchema {
    id: number;
    name: string;
    email: string;
    token: string;
    createdBy: string | null;
    role: RoleSchema;
}
