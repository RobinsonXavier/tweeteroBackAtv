import Usuario from "../classes/userClass.js";

const usuarios = [];

function addUser(username, avatar) {
  usuarios.push(new Usuario(username, avatar));
  console.log(usuarios);
};

function getAvatarByUser(username) {
  const { avatar } = usuarios.find(user => user.username === username);
  return avatar;
}

const userRepository = {
  addUser,
  getAvatarByUser
};

export default userRepository;