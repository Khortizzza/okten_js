// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(1, 'Ann', 'Levkovska', 'ann@gmail.com','+3805012312385'),
    new User(2, 'Olena', 'Popova', 'olena@gmail.com','+3805012312385'),
    new User(3, 'Mary', 'Nesterova', 'mary@gmail.com','+3805012842385'),
    new User(4, 'Nester', 'Babenko', 'nest@gmail.com','+3805078312385'),
    new User(5, 'Ostap', 'Bulah', 'osat@gmail.com','+3805012319515'),
    new User(6, 'John', 'Petrov', 'jo@gmail.com','+3806712312385'),
    new User(7, 'Maniy', 'Kovalsky', 'val@gmail.com','+3809912312385'),
    new User(8, 'Bary', 'Simons', 'fggs@gmail.com','+3809912457585'),
    new User(9, 'Paul', 'Kovaliov', 'hfgh@gmail.com','+3809916645685'),
    new User(10, 'Golda', 'Metz', 'df@gmail.com','+380991274385'),
]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersFilter = users.filter (value => value.id%2===0);
console.log(usersFilter)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSort = users.sort((a,b) => a.id-b.id);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
     constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(1, 'Ostap', 'Bulah', 'osat@gmail.com','+3805012319515', ['sweets, milk, cofee']),
    new Client(2, 'Olga', 'Kova', 'kov@gmail.com','+380501946515', ['meat, bread, cofee']),
    new Client(3, 'Hanna', 'Bova', 'dad@gmail.com','+3805012319515', ['tea, sausages, bread']),
    new Client(4, 'Petro', 'Hova', 'bcer@gmail.com','+380501156415', ['nuts, bear, potato']),
    new Client(5, 'Oliver', 'Zoc', 'sff@gmail.com','+38050123195478', ['rice, cofee']),
    new Client(6, 'Mike', 'Jey', 'sdgdh@gmail.com','+3805011032547', ['sweets, milk, tea']),
    new Client(7, 'Julia', 'Kods', 'aeaf@gmail.com','+3809312319515', ['sweets, tea, sausages,']),
    new Client(8, 'Ksu', 'Jod', 'hfty@gmail.com','+3804562319515', ['cetchup, sausages, cofee']),
    new Client(9, 'Tata', 'Bpof', 'wqef@gmail.com','+380501235715', ['sweets, milk, cofee']),
    new Client(10, 'Nestor', 'Shon', 'ndrts@gmail.com','+3809912319515', ['mushrooms, milk, mayones']),
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClients = clients.sort((a,b) => a.order.length - b.order.length);
console.log(sortClients)