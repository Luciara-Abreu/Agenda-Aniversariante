import EndpointListAllUser from '../../apiAxios/endPoints/userEndPoint/listAllUsersEndPoint'

const listAllUser = new EndpointListAllUser()

class ListAllUserService {
  public async execute() {
    const listUser = await listAllUser
    return listUser
  }
}

export default ListAllUserService