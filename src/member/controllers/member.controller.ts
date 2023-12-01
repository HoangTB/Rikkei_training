import { MemberService } from "../providers/member.service";
import {Controller, Get} from '@nestjs/common'

@Controller()
export class MemberController {
  constructor(private memberService: MemberService) { }
  
  @Get()
  async getMember(): Promise<string> {
    return await this.memberService.getMember();
  }
}