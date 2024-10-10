//               querySelector
//                       1.
input_task_1 = document.querySelector('#input-task-1')
button_task_1 = document.querySelector('#button-task-1')
//                       2.
image_task_2 = document.querySelector('#image-task-2')
//                       3.
a_task_3 = document.querySelector('#a-task-3')
image_task_3 = document.querySelector('#image-task-3')
//                       4.
list_task_4 = document.querySelector('#list-task-4')

//                      code
//                       1.
buttonClick = () => button_task_1.textContent = input_task_1.value
//                       2.
image_task_2.src = './img/another_image.png'
//                       3.
a_task_3.href = 'https://github.com/'
image_task_3.alt = 'Картинка 150х150'
//                       4.
list_task_4.firstElementChild.firstElementChild.textContent = 'New Text'
