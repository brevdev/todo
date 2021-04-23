// 1️⃣: replace the below with your Brev API
export const BREV_URL = "https://hyfc3f7n.brev.dev/api/Todo"

/*
2️⃣
export interface TodoType {
    id: string;
    title: string;
    isComplete: boolean;
}
*/

/*
2️⃣
interface MultipleToDos {
    todos: TodoType[];
}
*/

/*
2️⃣
export const GetTodos = async () => {
    let response = await fetch(BREV_URL, {
        method: "GET"
    });
    return await response.json() as MultipleToDos;
}
*/

/* 1️⃣
export const CreateTodo = async (newTitle: string) => {
    let response = await fetch(BREV_URL, {
        method: "POST",
        body: JSON.stringify({
            title: newTitle,
            isComplete: false
        })
    });
    return await response.json();
}
*/

/*
3️⃣
export const ModifyTodo = async (id: string) => {
    let response = await fetch(BREV_URL+`?id=${id}`, {
        method: "PUT"
    })
    return await response.json();
}
*/