const usuarios = [];

function addUser(username, avatar) {
  usuarios.push({ username, avatar });
};

const userRepository = {
  addUser
};

export default userRepository;