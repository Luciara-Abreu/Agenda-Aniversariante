import AppError from '@shared/errors/AppError'
import Adm from 'src/entities/AdmEntity'
import admRepository from 'src/repositories/AdmRepository'
import { compare } from 'bcryptjs'
import jwt, { sign } from 'jsonwebtoken'
import authConfig from '@config/auth'

interface IAuthType {
  email: string
  password: string
}

interface IResponse {
  adm: Adm
  token: string
}

class CreateSessionsService {
  public async execute({ email, password }: IAuthType): Promise<IResponse> {
    const adm = await admRepository.findByEmail(email)
    if (!adm) {
      throw new AppError('Incorrect email/password combination 🤪', 401)
    }
    const passwordConfirmed = await compare(password, adm.password)
    if (!passwordConfirmed) {
      throw new AppError('Incorrect email/password combination 🤪', 401)
    }
    console.log(password)
    const token = jwt.sign({ id: adm.id?.toString(), name: adm.name }, authConfig.jwt.secret, {
      expiresIn: authConfig.jwt.expiresIn,
    })

    return {
     adm,
      token,
    }
  }
}

export default CreateSessionsService
