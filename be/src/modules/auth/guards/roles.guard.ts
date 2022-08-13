import { AccountType } from '../../../constants/account-types'
import { ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'
import { ROLES_KEY } from '../../../decorators/role.decorator'

@Injectable()
export class RolesGuard extends AuthGuard('jwt') {
	constructor(private reflector: Reflector) {
		super()
	}

	async canActivate(context: ExecutionContext) {
		const requiredRoles = this.reflector.getAllAndOverride<AccountType[]>(ROLES_KEY, [
			context.getHandler(),
			context.getClass(),
		])
		if (!requiredRoles) {
			return true
		}

		const request = context.switchToHttp().getRequest()

		if (!request.headers.authorization) {
			return false
		}
		await super.canActivate(context)
		const { user } = context.switchToHttp().getRequest()
		if (requiredRoles.length == 0) return true
		else return requiredRoles.some(role => user.role?.includes(role))
	}
}
