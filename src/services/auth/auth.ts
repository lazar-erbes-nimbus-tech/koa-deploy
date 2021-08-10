import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

import UserDto from '../../dto/auth/user'
import { userMapper } from '../../mappers/user/user'
import { User } from '../../models/user/user'
import LoginResponse from '../../dto/response/auth'

export const register = async(name: string, email: string, password: string): Promise<UserDto> => {
  const salt = await bcrypt.genSalt(10)
  const encryptedPw = await bcrypt.hash(password, salt)
  
  return User.create({ name, email, password: encryptedPw })
    .then(userMapper)
}

export const login = async(email: string, password: string): Promise<LoginResponse> => {
  const user = await User.findOne({ email: email})
  if(!user) {
    throw new Error('There is no user with this email');
  }

  const comparedPw = await bcrypt.compare(password, user.password)

  if(!comparedPw) {
    throw new Error('Wrong password')
  }
  const jwtToken = jsonwebtoken.sign({ username: user.name}, 'secret_key')

  return {
    id: user._id,
    jwt: jwtToken,
    name: user.name,
    email: user.email,
  }
}