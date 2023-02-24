import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('profile')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
  // @Get()
  // autoPopulate() {
  //   return this.profileService.autoPopulateAccount();
  // }

  // @Get()
  // findAll() {
  //   return this.profileService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.profileService.findOne(+id);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
  //   return this.profileService.update(+id, updateProfileDto);
  // }
  //
  // @UseGuards(JwtAuthGuard)
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.profileService.remove(+id);
  // }
}
