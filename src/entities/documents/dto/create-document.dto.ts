import { IsString } from 'class-validator'

export class CreateDocumentDto {
    @IsString()
    number             String

    @IsString()
    date               DateTime

    
    time               DateTime
    nature_code        String
    nature_description String
    type               DocType
    situation          String
    createdAt          DateTime @default(now())
    updatedAt          DateTime @updatedAt
}
