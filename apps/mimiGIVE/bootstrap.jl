(pwd() != @__DIR__) && cd(@__DIR__) # allow starting app from bin/ dir

using MimiFUNDAPI
const UserApp = MimiFUNDAPI
MimiFUNDAPI.main()
