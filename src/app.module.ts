import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentsModule } from './entities/documents/documents.module';

@Module({
  imports: [DocumentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
