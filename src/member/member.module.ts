import { Module } from "@nestjs/common";
import { MemberController } from "./controllers/member.controller";
import { MemberService } from "./providers/member.service";

@Module({
  controllers: [MemberController],
  providers: [MemberService],
})

export class MemberModule {}