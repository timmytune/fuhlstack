// Original file: order.proto

export const Status = {
  Pending: 'Pending',
  Processing: 'Processing',
  Completed: 'Completed',
} as const;

export type Status =
  | 'Pending'
  | 0
  | 'Processing'
  | 1
  | 'Completed'
  | 2

export type Status__Output = typeof Status[keyof typeof Status]
