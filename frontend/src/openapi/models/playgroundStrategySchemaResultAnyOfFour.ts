/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { PlaygroundStrategySchemaResultAnyOfFourEvaluationStatus } from './playgroundStrategySchemaResultAnyOfFourEvaluationStatus';

export type PlaygroundStrategySchemaResultAnyOfFour = {
    /** Signals that this strategy was evaluated successfully. */
    evaluationStatus: PlaygroundStrategySchemaResultAnyOfFourEvaluationStatus;
    /** Whether this strategy evaluates to true or not. */
    enabled: boolean;
};