export interface Ban {
  id: string;
  userId: string;
  adminId: string;
  reason: string;
  isActive: boolean;
  expiresAt: Date;
  createdAt: Date;
}
