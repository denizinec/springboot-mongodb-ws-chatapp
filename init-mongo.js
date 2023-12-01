db.createUser(
    {
        user: "deniz",
        pwd: "deniz",
        roles: [
            {
                role: "readWrite",
                db: "chat-app"
            }
        ]
    }
)