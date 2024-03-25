/*
  template in JSX
  React Component
  jsx + data
*/ 

import { toElement } from "./../utils/toElements";

function todoItemTemplate ({todo, category, status, uid}) {
  const template = `<aside class="bg-white border-b gap-4">
  <nav>
      <div class="flex justify-end">
          <button id="edit" data-uid="${uid}">
              <svg 
                  class="w-5 h-6 stroke-current fill-gray-600 stroke-0 hover:fill-rose-500" 
                  viewBox="0 0 1024 1024"   
                  xmlns="http://www.w3.org/2000/svg"><path d="M761.1 288.3L687.8 215 325.1 577.6l-15.6 89 88.9-15.7z"></path><path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89z"></path></svg>
          </button>
          <button id="delete" data-uid="${uid}">
              <svg 
                  class="w-5 h-6 stroke-current fill-gray-600 stroke-0 hover:fill-rose-500" 
                  viewBox="0 0 1024 1024"   
                  xmlns="http://www.w3.org/2000/svg"><path d="M292.7 840h438.6l24.2-512h-487z"></path><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z"></path></svg>
          </button>
      </div>
  </nav>
  <div class="bg-white">
      <div class="mb-3">
          <label for="todo" class="text-[10px]">Todo</label>
          <input type="text"
                  id="todo"
                  class="w-full border-none text-sm px-0 focus:ring-0 focus-border-none"
                  maxlength="40"
                  value="${todo}"
                  placeholder="to do list item example"
                  readonly 
          />
      </div>
  </div>
      <div class="flex">
          <div>
              <label for="todo" class="text-[10px]">Category</label>
              <input type="text"
                          id="category"
                          class="w-full border-none text-sm px-0 focus:ring-0 focus-border-none"
                          maxlength="40"
                      value="${category}"
                      placeholder="to do list item example"
                      readonly 
                  />
          </div>
          <div>
              <label for="todo" class="text-[10px]">Status</label>
              <input type="text"
                  id="status"
                  class="w-full border-none text-sm px-0 focus:ring-0 focus-border-none"
                  maxlength="40"
                  value="${status}"
                  placeholder="to do list item example"
                  readonly 
              />
          </div>
      </div>
  </div>
</aside>  `;
  //convert template literal to element why? 
  //adding interactivity htmlish string
  const toDo =  toElement(template);
  
  //add the even listeners
 toDo.querySelector('#delete'),addEventListener('click', onDeteleToDo);
 toDo.querySelector('#edit'),addEventListener('click', onEditToDo);

  return toDo;
}

function onDeteleToDo (e) {
  console.log(e.currentTarget)
}

function onEditToDo (e) {
  console.log(e.currentTarget)
}


export { todoItemTemplate };