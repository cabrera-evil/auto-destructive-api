import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import * as path from 'path';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: process.env.EMAIL_HOST,
          port: parseInt(process.env.EMAIL_PORT),
          ignoreTLS: process.env.EMAIL_IGNORE_TLS === 'true',
          secure: process.env.EMAIL_SECURE === 'true',
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
        },
        defaults: {
          from: `No Reply <${process.env.EMAIL_DEFAULT_FROM}>`,
          replyTo: process.env.EMAIL_DEFAULT_REPLY_TO,
        },
        preview: process.env.NODE_ENV === 'development',
        template: {
          dir: path.resolve(__dirname, `../templates`),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
})
export class MailConfig {}
