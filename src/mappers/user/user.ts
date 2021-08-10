import UserDto from "../../dto/auth/user"
import { User } from "../../models/user/user"

export const userMapper = (user: User): UserDto => {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
  }
}