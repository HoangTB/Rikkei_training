import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberService {
  
  async getMember(): Promise<string> {
   return 'Hello World';  
  }
}