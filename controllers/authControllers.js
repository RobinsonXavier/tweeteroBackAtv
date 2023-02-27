import userRepository from "../repositories/userRepository.js";

function postUser (req, res) {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    res.status(400).send('Todos os campos são obrigatórios!');
    return;
  }

  userRepository.addUser(username, avatar);
  
  res.status(200).send('OK deu tudo certo');
}

const authController = {
  postUser
};

export default authController;