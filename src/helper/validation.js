const isValidID = (req, res, next) => {
    const {id} = req.params;
    if ( isNaN(id)) throw new Error ("id не число"); 
    if (id< 0) throw new Error ("id отрицательный"); 
    next()
}

const isValidTaskBody = (req, res, next) => {
    const {task, user_id} = req.body;
   if(!task) throw new Error ("нет задачи");
   if (!isNaN(task)) throw new Error ("задача должны быть строкой");
   if(isNaN(user_id)) throw new Error ("user_id должен быть чилслом");
   if (user_id< 0) throw new Error ("user_id не може быть отрицательным");
  next()
}

const isValidUserBody = (req, res, next) => {
    const {name, surname, email, pwd} = req.body;
   if(!name) throw new Error ("не введено имя");
   if(!surname) throw new Error ("не введена фамилия");
   if(!email) throw new Error ("не введена почта");
   if(!pwd) throw new Error ("не введен пароль");
   if (!isNaN(name)) throw new Error ("имя должно быть строкой");
   if (!isNaN(surname)) throw new Error ("фамилия должна быть строкой");
   if (!isNaN(email)) throw new Error ("почта должна быть строкой");
   if (!isNaN(pwd)) throw new Error ("пароль должен быть строкой");
   if (pwd.length < 8) throw new Error ("длина пароля должна быть не менее 8 символов");
   if (!/^[a-z0-9\_\-\.]+@[a-z]+\.[a-z]+$/gm.test(pwd)) throw new Error ("Введите корректный пароль, который содеждит минимум 1 строчую букву,  1 заглавную, 1 цифру и 1 спец.символ") 
  next()
}
module.exports  = {isValidID, isValidTaskBody, isValidUserBody};