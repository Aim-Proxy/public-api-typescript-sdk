export interface CreateBanDto {
  userId: string;
  reason: string;
  expiresAt: Date;
}
