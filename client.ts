import { PrismaClient } from '@prisma/client';
//singleton
class PrismaClientSingleton {
  private static prisma: PrismaClient | null = null;

  static getPrismaClient() {
    if (this.prisma === null) {
      this.prisma = new PrismaClient();
    }
    return this.prisma;
  }
}

export default PrismaClientSingleton.getPrismaClient();