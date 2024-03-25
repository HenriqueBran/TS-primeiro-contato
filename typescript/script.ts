interface User {
    id: number;
    name: string;
}

async function fetchUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

function renderUsers(users: User[]): void {
    const userList = document.getElementById('user-list');
    if (userList) {
        userList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });
    }
}

async function init() {
    try {
        const users = await fetchUsers();
        renderUsers(users);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
    }
}

init();
