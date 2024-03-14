let input = prompt('enter');
const todo = ['collect', 'clean'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**********');
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log('**********');
    } else if (input === 'new') {
        const newtodo = prompt("enter new todo:");
        todo.push(newtodo);
        console.log(`${newtodo} added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('enter the index u want to delete sir!'));
        if (!Number.isNaN(index) && index >= 0 && index < todo.length) {
            const deleted = todo.splice(index, 1);
            console.log(`deleted this ${deleted[0]}`);
        } else {
            console.log('Unknown Index');
        }
    }
    input = prompt("enter ur wish");
}
console.log("OK, U QUIT");