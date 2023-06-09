/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { NotificationsSchemaItemNotificationType } from './notificationsSchemaItemNotificationType';
import type { NotificationsSchemaItemCreatedBy } from './notificationsSchemaItemCreatedBy';

export type NotificationsSchemaItem = {
    /** The id of this notification */
    id: number;
    /** The actual notification message */
    message: string;
    /** The link to change request or feature toggle the notification refers to */
    link: string;
    /** The type of the notification used e.g. for the graphical hints */
    notificationType: NotificationsSchemaItemNotificationType;
    createdBy: NotificationsSchemaItemCreatedBy;
    /** The date and time when the notification was created */
    createdAt: string;
    /** The date and time when the notification was read or marked as read, otherwise `null` */
    readAt: string | null;
};
