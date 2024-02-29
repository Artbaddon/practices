let list = { value: 1 };
list.prev = null;
list.next = { value: 2 };
list.next.prev = list;
list.next.next = { value: 3 };
list.next.next.prev = list.next;

list.next.next.next = { value: 4 };
console.log(list.next.prev);
