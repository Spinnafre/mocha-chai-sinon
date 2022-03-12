export class showUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    async execute() {
        const data = await this.userRepository.getUsers()
        return data

    }
}