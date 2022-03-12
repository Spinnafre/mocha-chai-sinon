export class createUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    async execute(user) {
        const data = await this.userRepository.createUser(user)
        return data

    }
}